# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dois públicos com peso igual (confirmado pelo utilizador em 2026-08-24):

- **Decisor B2B** — responsável de hotel, aeroporto, centro comercial, clínica, retalho/supermercado, bar/casino, escritório ou organizador de eventos, a avaliar marketing olfativo para o seu espaço. Chega ao site para perceber se a INN AROMA é credível (clientes, certificações), o que oferece e como contactar. O passo seguinte é um pedido de contacto (formulário → `mailto:geral@innaroma.pt`, ou telefone).
- **Consumidor final** — pessoa a escolher difusor, aroma, vela, mikado ou spray para casa. O passo seguinte é a loja externa `https://innaroma.pt/store/`.

Língua do site e dos utilizadores: português de Portugal.

## Product Purpose

Site institucional da INN AROMA ("Aromas que marcam"), empresa portuguesa de marketing olfativo: difusores, fragrâncias exclusivas e neutralizadores para empresas, eventos e casa. O site existe para apresentar a oferta, provar credibilidade e converter em contacto (B2B) ou em visita à loja (B2C).

**Estado:** este site é uma **proposta/demonstração** ainda não aprovada pela INN AROMA. Foi construído a partir do conteúdo público de innaroma.pt e de materiais enviados pelo utilizador; substituiria o site institucional atual, mantendo a loja em innaroma.pt/store. Sucesso a curto prazo = a INN AROMA aprovar a proposta; sucesso do produto = mais pedidos de contacto qualificados e mais cliques para a loja.

## Positioning

Quatro alicerces confirmados como verdadeiros e defensáveis (não hierarquizados pelo utilizador):

1. **Aromas e máquinas certificados** — fragrâncias certificadas segundo normas europeias; equipamentos certificados (UL, RoHS, CE) com nebulização a frio, consumo eficiente e manutenção assegurada pela equipa INN AROMA. Cobre "do grande átrio à mais pequena divisão".
2. **Carteira de clientes** — Rolex, IKEA, Hilton, CTT, Cruz Vermelha Portuguesa, SL Benfica, Tivoli, InterContinental, Corinthia, Mercedes-Benz, entre ~56 logos (ver Evidence).
3. **Difusor próprio + iServices** — difusor inteligente Inn Aroma (controlo por app, cobertura até 30 m², montagem de parede, recarga incluída) que chega ao retalho pela parceria com a iServices ("powered by iServices"). A iServices é **parceiro**, nunca cliente.
4. **Assinatura olfativa à medida** — desenhar a assinatura certa para cada espaço/marca, não vender aromas de catálogo.

## Operating Context

- Setores servidos: hotelaria, aeroportos, centros comerciais, saúde & clínicas, retalho & supermercados, bares/discotecas/casinos, escritórios & serviços, eventos (casamentos, aniversários, feiras, congressos).
- Quatro contextos de uso: Corporativo, Serviços, Eventos, Casa.
- Contacto real: (+351) 214 240 129 · geral@innaroma.pt. Não existe morada no site atual.
- Canais externos que o site liga: `https://innaroma.pt/store/` (loja) e `https://innaroma.pt/produtos/` (catálogo).
- Site estático sem backend: o formulário de contactos abre `mailto:`; não há CRM, analytics nem envio de e-mail server-side.
- Publicação: GitHub `guiguildb0/inn-aroma` → Vercel, produção em https://inn-aroma.vercel.app (routing SPA por `window.location.pathname`, com `vercel.json` rewrites e `public/_redirects`).

## Capabilities and Constraints

- Stack existente: React 19 + Vite 7, `motion`, `three` / `@react-three/fiber` / `@react-three/drei` (cenas 3D no difusor e nos contactos). Fontes Google (Raleway, Biryani).
- Páginas: `/` (hero, empresa, onde atuamos, coleção, CTA), `/aromas/`, `/clientes/`, `/contactos/`.
- Dados canónicos em `src/data/produtos.js` (9 produtos + 4 contextos) e `src/data/aromas.js` (7 famílias: Herbais, Florais, Frutados, Vinhos, Amadeirados, Alta Perfumaria, Gourmet). innaroma.pt/aromas só publica estas 7 famílias — **não existem fragrâncias individuais publicadas**; não inventar nomes de fragrâncias.
- Produtos: Difusor Inn Aroma, Inn Aroma Mini, Otello, George, Pack Inn Aroma Mikado, Inn Aroma Vela, Inn Aroma Spray, Inn Aroma Spray 360º, Neutra Gel.
- Terminologia: "assinatura olfativa", "marketing olfativo", "nebulização a frio", "recarga", "difusor inteligente", "INN AROMA by AP" (assinatura do rodapé).
- **Por confirmar com a INN AROMA (dados provisórios, vindos do site atual):** preço 49,95 € do difusor; descrições de produto; lista/ordem de clientes; a validade de todo o copy institucional. Tratar como provisório até aprovação.
- Sem CMS: qualquer conteúdo novo é editado no código.

## Brand Commitments

- Nome: **INN AROMA** (maiúsculas na marca; "Inn Aroma" nos nomes de produto). Tagline: "Aromas que marcam".
- Logo oficial: `public/images/logo.png` (idêntico a `Logo/logo_innaroma_bk.png`), também usado como favicon.
- Selos de certificação oficiais: `public/images/cert-aromas.png`, `public/images/cert-maquinas.png` (alpha com fundo branco opaco).
- Produto físico de referência: difusor branco de cantos arredondados, bocal dourado no canto superior esquerdo, logótipo INN AROMA na frente — reproduzir fielmente, não estilizar.
- Voz confirmada pelo copy existente: pt-PT, segunda pessoa formal ("o seu espaço"), frases curtas, foco em memória/emoção ("um aroma certo transforma um espaço numa memória").
- O utilizador valoriza fidelidade visual ao produto e à marca reais e interações distintas (pediu contactos "diferentes e em 3D"). Registado como preferência, não como recipe visual.

## Evidence on Hand

- **Fotos reais de produto** (fonte innaroma.pt / materiais enviados): `reference/*.jpg` e, em `public/images/`: `difusor.jpg`, `difusor-iservices.jpg`, `mini.jpg`, `otello.jpg`, `george.jpg`, `mikado-pack.jpg`, `recarga-mikado.jpg`, `vela.jpg`, `spray.jpg`, `spray-360.jpg`, `neutra-gel.jpg`.
- **Imagens geradas por IA** (Gemini via `scripts/gen-images.mjs`, a partir da foto real do difusor): `produto-solo*.jpg`, `grupo*.jpg` e as 7 imagens de família (`herbais*.jpg`, `florais.jpg`, `frutados.jpg`, `vinhos.jpg`, `amadeirados.jpg`, `alta-perfumaria.jpg`, `gourmet.jpg`). Não são fotografia oficial; substituir se a INN AROMA fornecer material.
- **Parede de logos de clientes:** `public/images/clientes-logos.webp` (screenshot enviado pelo utilizador, ~56 marcas, fundo cinza-claro). O innaroma.pt/clientes atual está quase vazio — a lista vem deste screenshot, não do site.
- **Certificações:** copy em `src/pages/Clientes.jsx` (aromas: normas europeias; máquinas: UL, RoHS, CE).
- **Ausências que não se podem fabricar:** testemunhos, casos de estudo, números (m² aromatizados, anos de atividade, nº de clientes), morada, equipa, prémios, imprensa, preços além do difusor.

## Product Principles

1. **Credibilidade antes de sedução.** Clientes reais, certificações e produto real são o que convence o decisor B2B; nunca inventar prova.
2. **Dois destinos, sem hierarquia forçada.** Cada superfície tem de deixar claro o caminho para contacto (empresas) e o caminho para a loja (casa).
3. **O produto real é a referência.** O difusor e os produtos aparecem como são; imagens geradas servem de suporte até haver fotografia oficial.
4. **Conteúdo provisório é tratado como provisório.** Preços, descrições e lista de clientes vêm do site atual e aguardam aprovação — fácil de editar, nunca ampliado com afirmações novas.
5. **Um aroma é memória.** A promessa da marca é transformar espaço em memória; o site deve ser lembrado pelo mesmo motivo, sem trocar clareza por espetáculo.

## Accessibility & Inclusion

Sem requisito formal estabelecido. Preservar: `alt` descritivos nas imagens de produto e de clientes, `aria-label` no título do hero animado, e alternativas funcionais às cenas 3D/`whileInView` (conteúdo legível sem WebGL e sem animação).
