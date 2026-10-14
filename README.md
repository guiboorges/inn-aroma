# INN AROMA — website proposal (concept)

[![CI](https://img.shields.io/github/actions/workflow/status/guiboorges/inn-aroma/ci.yml?label=CI&color=B7410E&logo=githubactions&labelColor=2B1A12&logoColor=white)](https://github.com/guiboorges/inn-aroma/actions/workflows/ci.yml) [![Live demo](https://img.shields.io/badge/Live%20demo-inn--aroma.vercel.app-FF7722?logo=vercel&labelColor=2B1A12&logoColor=white)](https://inn-aroma.vercel.app) [![Release](https://img.shields.io/github/v/release/guiboorges/inn-aroma?label=Release&color=FF7722&logo=github&labelColor=2B1A12&logoColor=white)](https://github.com/guiboorges/inn-aroma/releases/latest) [![License](https://img.shields.io/github/license/guiboorges/inn-aroma?label=License&color=B7410E&logo=opensourceinitiative&labelColor=2B1A12&logoColor=white)](LICENSE)

> **⚠️ Unofficial proposal.** This site is a redesign concept I created on my own initiative for INN AROMA, a Portuguese scent-marketing company. **It is not the official website** ([innaroma.pt](https://innaroma.pt)) and **it was not commissioned or approved by the company**. The brand, products and client logos belong to their respective owners and appear here solely to demonstrate the proposal.

**[▶ See the live proposal](https://inn-aroma.vercel.app)**

The site's content is in European Portuguese, since it was designed for a Portuguese company.

![Home page: the 3D diffuser releasing mist](docs/screenshots/home.png)

## The idea

A fragrance brand sells something you can't see. The challenge was to make people **feel** the product through a screen: the diffuser appears in 3D, the mist rises slowly and the page breathes calmly, like a scented room.

The proposal was designed for two audiences at once:

- **Businesses** (hotels, airports, retail, clinics, events) looking for credibility and a quick way to get in touch.
- **Consumers** who want to choose a diffuser or a home fragrance and head to the shop.

## Highlights

- **3D diffuser** built with three.js, with animated mist particles in the hero.
- **A contact page that reacts:** the diffuser sits "at rest" and wakes up as the visitor types their message.
- **Seven scent families** (herbal, floral, fruity, wine, woody, fine fragrance, gourmet), each with its own colour.
- **AI-generated lifestyle product images** (Gemini), created from prompts written for each setting (`scripts/gen-images.mjs`).
- **Performance:** WebP images, three.js loaded separately (code-splitting) and an optimised hero.
- **Mobile:** hamburger menu and a header that gains a background on scroll.

![Contact page: the diffuser wakes up with every word typed](docs/screenshots/contactos.png)

## Stack

React 19 · Vite · three.js · React Three Fiber + Drei · Motion · deployed on Vercel.

Positioning, audiences and the visual system are documented in [`PRODUCT.md`](PRODUCT.md) and [`DESIGN.md`](DESIGN.md) (internal docs, written in Portuguese).

## Running locally

```bash
npm install
npm run dev
```

## License

The code is released under the [MIT](LICENSE) licence © 2026 Guilherme Borges.

The INN AROMA name, logo, product photos and other brand assets belong to their respective owner and are **not** covered by this licence. This is an unofficial concept with no affiliation with the brand.
