// Gera as imagens da landing page com o Nano Banana (Gemini image API).
// Uso: node scripts/gen-images.mjs [nome-do-job ...]  (sem args = todos os que faltam)
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const KEY = readFileSync(join(root, '.gemini_key'), 'utf8').trim()
const MODEL = process.env.NB_MODEL || 'gemini-3.1-flash-image'
const OUT = join(root, 'public/images')
mkdirSync(OUT, { recursive: true })

const ref = (name) => ({
  inlineData: {
    mimeType: 'image/jpeg',
    data: readFileSync(join(root, 'reference', name)).toString('base64'),
  },
})

const DIFUSOR = 'difusor-inn-aroma-iservices.jpg'
const BASE =
  'Reference photo: the INN AROMA diffuser — a white rounded-square wall device with a small brass/gold nozzle on its top-left and a subtle "INN AROMA" logo on the front. Reproduce this exact device faithfully (shape, color, nozzle, logo). Photorealistic professional product photography, high-end commercial quality, sharp focus on the device, no added text or watermarks. '

const jobs = [
  {
    name: 'produto-solo',
    aspect: '4:5',
    refs: [DIFUSOR],
    prompt:
      BASE +
      'Minimal studio scene: the diffuser standing on a matte light-grey surface against a soft off-white seamless background, gentle directional daylight from the left, soft shadow, a very fine delicate mist plume rising from the gold nozzle. Premium, calm, minimal aesthetic.',
  },
  {
    name: 'grupo',
    aspect: '16:9',
    refs: [DIFUSOR, 'hydro-e-diffuser.jpg', 'spray.jpg'],
    prompt:
      BASE +
      'Wide banner composition: the white diffuser in the center surrounded by several amber-glass aroma refill bottles with minimal white labels (like the reference refill photos), arranged elegantly on a light stone table with soft botanical shadows on a warm neutral wall behind. Editorial product photography for a fragrance brand.',
  },
  {
    name: 'herbais',
    aspect: '3:4',
    refs: [DIFUSOR],
    prompt:
      BASE +
      'The diffuser on a light stone shelf surrounded by fresh green herbs — eucalyptus branches, rosemary and mint leaves — with morning daylight, dew, airy fresh atmosphere, soft green color palette, fine mist from the nozzle.',
  },
  {
    name: 'florais',
    aspect: '3:4',
    refs: [DIFUSOR],
    prompt:
      BASE +
      'The diffuser on a white marble surface among delicate flowers — white peonies, jasmine and soft pink petals — romantic diffused light, airy pastel palette of blush pink and cream, fine mist from the nozzle.',
  },
  {
    name: 'frutados',
    aspect: '3:4',
    refs: [DIFUSOR],
    prompt:
      BASE +
      'The diffuser on a bright surface with vibrant exotic fruits — sliced oranges, mango, passion fruit and berries — energetic warm sunlight, juicy saturated orange and yellow palette, fine mist from the nozzle.',
  },
  {
    name: 'vinhos',
    aspect: '3:4',
    refs: [DIFUSOR],
    prompt:
      BASE +
      'The diffuser on a dark oak wine-cellar table beside a glass of red wine and dark grapes, moody low-key lighting, deep burgundy and charcoal palette, elegant and exclusive atmosphere, fine mist from the nozzle.',
  },
  {
    name: 'amadeirados',
    aspect: '3:4',
    refs: [DIFUSOR],
    prompt:
      BASE +
      'The diffuser on rich dark wood among sandalwood sticks, cedar shavings and dry botanicals, warm amber side-light, seductive cozy palette of caramel and deep brown, fine mist from the nozzle.',
  },
  {
    name: 'alta-perfumaria',
    aspect: '3:4',
    refs: [DIFUSOR],
    prompt:
      BASE +
      'The diffuser on an elegant vanity of black marble with gold accents, beside chic unlabeled perfume bottles, sophisticated fashion-editorial lighting, luxurious black and gold palette, fine mist from the nozzle.',
  },
  {
    name: 'gourmet',
    aspect: '3:4',
    refs: [DIFUSOR],
    prompt:
      BASE +
      'The diffuser on a warm café counter with roasted coffee beans, vanilla pods and dark chocolate pieces, cozy warm tungsten light, indulgent palette of espresso brown and cream, fine mist from the nozzle.',
  },
]

const wanted = process.argv.slice(2)
const queue = jobs.filter(
  (j) => (wanted.length ? wanted.includes(j.name) : !existsSync(join(OUT, j.name + '.png'))),
)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function generate(job) {
  const body = {
    contents: [{ parts: [...job.refs.map(ref), { text: job.prompt }] }],
    generationConfig: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio: job.aspect },
    },
  }
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: 'POST',
      headers: { 'x-goog-api-key': KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  )
  const json = await res.json()
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(json.error || json).slice(0, 300)}`)
  const part = json.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)
  if (!part) throw new Error('sem imagem na resposta: ' + JSON.stringify(json).slice(0, 300))
  writeFileSync(join(OUT, job.name + '.png'), Buffer.from(part.inlineData.data, 'base64'))
  return true
}

for (const job of queue) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await generate(job)
      console.log('OK  ' + job.name)
      break
    } catch (e) {
      console.log(`ERR ${job.name} (tentativa ${attempt}): ${e.message}`)
      if (attempt < 3) await sleep(15000 * attempt)
    }
  }
  await sleep(4000)
}
