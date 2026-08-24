---
name: INN AROMA
description: Perfumaria de papel — papel quente, tinta de sépia em caixa alta espaçada, e o aroma a entrar como névoa e como tinta de cada família.
colors:
  papel-quente: "#faf8f4"
  tinta-sepia: "#16150f"
  cinza-fumo: "#6f6c64"
  filete: "rgba(22, 21, 15, 0.14)"
  papel-tocado: "#f2efe8"
  branco-palco: "#ffffff"
  herbais-tinta: "#e7efe3"
  herbais-acento: "#3d5a40"
  florais-tinta: "#f6e8ec"
  florais-acento: "#96496a"
  frutados-tinta: "#fdeeda"
  frutados-acento: "#b35c15"
  vinhos-tinta: "#f1e3e7"
  vinhos-acento: "#5e1f33"
  amadeirados-tinta: "#f0e7db"
  amadeirados-acento: "#5f4326"
  alta-perfumaria-tinta: "#efeadf"
  alta-perfumaria-acento: "#8a6d1f"
  gourmet-tinta: "#efe4dc"
  gourmet-acento: "#6b4128"
  latao-difusor: "#c2a25e"
typography:
  display:
    fontFamily: "Raleway, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.6rem, 11vw, 9.5rem)"
    fontWeight: 100
    lineHeight: 1.04
    letterSpacing: "0.14em"
  headline:
    fontFamily: "Raleway, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.9rem, 4.6vw, 3.8rem)"
    fontWeight: 100
    lineHeight: 1.04
    letterSpacing: "0.14em"
  statement:
    fontFamily: "Raleway, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.6rem, 4vw, 3.2rem)"
    fontWeight: 200
    lineHeight: 1.35
    letterSpacing: "0.02em"
  title:
    fontFamily: "Raleway, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "0.3em"
  body:
    fontFamily: "Biryani, Georgia, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "normal"
  body-muted:
    fontFamily: "Biryani, Georgia, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 300
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Raleway, Helvetica Neue, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.42em"
  wordmark:
    fontFamily: "Raleway, Helvetica Neue, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 200
    lineHeight: 1
    letterSpacing: "0.32em"
rounded:
  none: "0"
  foto: "3px"
  palco: "4px"
  pilula: "999px"
  ponto: "50%"
spacing:
  xs: "0.5rem"
  sm: "1.1rem"
  md: "1.8rem"
  lg: "2.2rem"
  xl: "3rem"
  bloco: "clamp(4.5rem, 12vh, 8.5rem)"
  margem: "clamp(1.2rem, 5vw, 4.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.tinta-sepia}"
    textColor: "{colors.papel-quente}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1.25em 2.8em 1.05em"
  button-primary-hover:
    backgroundColor: "{colors.tinta-sepia}"
    textColor: "{colors.papel-quente}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-sepia}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7em 1.4em 0.55em"
  button-outline-hover:
    backgroundColor: "{colors.tinta-sepia}"
    textColor: "{colors.papel-quente}"
  link-underline:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-sepia}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 0.35em"
  chip-nota:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-sepia}"
    typography: "{typography.label}"
    rounded: "{rounded.pilula}"
    padding: "0.5em 1.1em 0.35em"
  chip-preco:
    backgroundColor: "{colors.papel-quente}"
    textColor: "{colors.tinta-sepia}"
    typography: "{typography.label}"
    rounded: "{rounded.pilula}"
    padding: "0.55em 1em 0.4em"
  card-filete:
    backgroundColor: "{colors.papel-quente}"
    textColor: "{colors.tinta-sepia}"
    rounded: "{rounded.none}"
    padding: "2.2rem 1.8rem 2rem"
  card-filete-hover:
    backgroundColor: "{colors.papel-tocado}"
    textColor: "{colors.tinta-sepia}"
  palco-produto:
    backgroundColor: "{colors.herbais-tinta}"
    textColor: "{colors.tinta-sepia}"
    rounded: "{rounded.palco}"
    padding: "11%"
  input-linha:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-sepia}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.45em 0 0.55em"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.tinta-sepia}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0 0.35em"
---

# Design System: INN AROMA

## Overview

**Creative North Star: "A Perfumaria de Papel"**

O site é uma perfumaria feita de papel: uma folha quente, contínua, onde a marca está escrita a tinta de sépia em caixa alta com espaçamento largo, como o rótulo de um frasco. Nada é colorido por defeito. A cor entra apenas quando um aroma entra — como névoa que atravessa o ecrã entre famílias, ou como uma tinta pálida que tinge o palco onde cada produto pousa. O difusor, branco com bocal de latão, é a única peça com volume real; tudo o resto é tipografia, filete e ar.

O tom confirmado é **luxuoso, sensorial e envolvente**, mas conseguido por subtração: fontes com pesos 100–300, vazios generosos (blocos de 4.5–8.5 rem de respiro), títulos gigantes que ocupam o ecrã inteiro e nomes-fantasma a 5–7 % de opacidade a atravessar as margens. A sensualidade vem da escala, da névoa e das tintas das famílias, nunca de saturação, ícones ou cartões. A anti-referência é o site corporativo B2B frio — azul, ícones de linha, blocos de três colunas com título e parágrafo iguais.

Os componentes são **refinados e contidos**: filetes de 1 px, caixa alta espaçada, hovers que mudam opacidade, tracking ou o tom do papel. Nada salta; tudo desliza com a mesma curva `cubic-bezier(0.22, 1, 0.36, 1)`.

**Key Characteristics:**
- Uma só folha de papel quente (#faf8f4) do topo ao rodapé; o rodapé inverte para tinta.
- Raleway em caixa alta, peso 100–500, tracking 0.14–0.5em, como rótulo de frasco.
- A cor pertence às sete famílias de aroma: tinta pálida no palco, acento escuro no detalhe.
- Névoa (bolhas `blur(46–58px)`) é o dispositivo de transição e a assinatura de movimento.
- Filetes de 1 px em vez de cartões; sombras longas apenas sob fotografia.
- O motivo dos três pontos do logótipo reaparece como rail, marcador e ornamento.

## Colors

Uma paleta quase monocromática — papel e tinta — que só ganha cor emprestada das famílias de aroma.

### Primary
- **Tinta de Sépia** (#16150f): a única cor de texto, de botão sólido e do fundo do rodapé. Um preto ligeiramente acastanhado que lê como tinta sobre papel, nunca como `#000`.
- **Papel Quente** (#faf8f4): o fundo de todas as páginas e o texto sobre o rodapé escuro. É o material do sistema, não um "background".

### Secondary — tintas das famílias de aroma
Cada família tem uma **tinta** (fundo pálido) e um **acento** (escuro, para detalhes). São usadas apenas no palco do produto, no fundo da página de contactos quando uma família é escolhida, na névoa de transição e em filetes/índices dentro dessa família.
- **Herbais** — tinta #e7efe3 · acento #3d5a40 (verde de eucalipto)
- **Florais** — tinta #f6e8ec · acento #96496a (rosa de peónia)
- **Frutados** — tinta #fdeeda · acento #b35c15 (laranja de manga)
- **Vinhos** — tinta #f1e3e7 · acento #5e1f33 (bordeaux)
- **Amadeirados** — tinta #f0e7db · acento #5f4326 (cedro)
- **Alta Perfumaria** — tinta #efeadf · acento #8a6d1f (ouro velho)
- **Gourmet** — tinta #efe4dc · acento #6b4128 (café)
- Cada família tem ainda uma variante `tintaForte` (≈ 6 % mais escura, ex. Herbais #d3e2cb) usada só no hover do palco.

### Tertiary
- **Latão do Difusor** (#c2a25e, realce #d8bc7c): o metal do bocal na cena 3D e a luz quente (#ffe9c9) que o ilumina. Não é usado em UI 2D; existe para que qualquer nova representação do produto respeite o mesmo latão.

### Neutral
- **Cinza Fumo** (#6f6c64): texto secundário, legendas, índices, rótulos de bloco e placeholders (a 55 % de opacidade).
- **Filete** (rgba(22, 21, 15, 0.14)): todas as linhas — grelhas, sublinhados em repouso, separadores, base dos campos.
- **Papel Tocado** (#f2efe8): o único estado de hover para superfícies (segmentos, setores, certificações).
- **Branco Palco** (#ffffff): a moldura das fotografias de família e o corpo do difusor 3D (#fdfcf9).
- No rodapé escuro: texto a `rgba(250,248,244,0.72)`, filete a `0.18`, rodapé-fim a `0.5`.

### Named Rules
**A Regra da Cor Emprestada.** A interface não tem cor própria. Qualquer cor além de papel, tinta e cinza tem de vir de uma família de aroma real (`src/data/aromas.js`) e só aparece onde essa família está presente.
**A Regra do Multiply.** Fotografias com fundo branco pousam no palco tingido com `mix-blend-mode: multiply`; no rodapé escuro, selos brancos usam `grayscale(1) invert(1)` + `mix-blend-mode: screen`. Nunca recortar imagens à mão para esconder um fundo.

## Typography

**Display Font:** Raleway (com Helvetica Neue, sans-serif) — pesos 100, 200, 300, 400, 500, 600
**Body Font:** Biryani (com Georgia, sans-serif) — pesos 200, 300, 400, 600, 700
**Label Font:** Raleway 500, caixa alta, tracking largo

**Character:** Raleway ultra-fina em caixa alta e espaçada é o rótulo do frasco — presença enorme, peso quase nenhum. Biryani a 300 é a nota de rodapé do perfumista: quente, arredondada, nunca compete.

### Hierarchy
- **Display / nome de página** (Raleway 100, `clamp(2.6rem, 11vw, 9.5rem)` no hero; `clamp(2.5rem, 7.2vw, 6.4rem)` nas famílias; linha 1.04; tracking 0.14em; caixa alta): o nome INN AROMA, o nome de cada família, o título de cada página. Animado letra a letra no hero.
- **Headline / título de secção** (Raleway 100, `clamp(1.9rem, 4.6vw, 3.8rem)`, mesma linha e tracking): CTAs ("O seu espaço tem memória."), parceria, contactos. Sempre com ponto final.
- **Statement / declaração** (Raleway 200, `clamp(1.6rem, 4vw, 3.2rem)`, linha 1.35, tracking 0.02em, caixa normal): frases institucionais longas; a ênfase é `<em>` sem itálico, com sublinhado de 1 px em tinta.
- **Title / título de item** (Raleway 300, 0.98–1.05rem, tracking 0.26–0.3em, caixa alta): nomes de segmentos, setores, certificações e produtos (produto: 1.05–1.35rem, tracking 0.16em).
- **Body** (Biryani 300, 0.98rem, linha 1.7): parágrafos principais, max-width 30–34rem. **Body muted** (0.86–0.92rem, Cinza Fumo): descrições em cartões e legendas.
- **Label / rótulo** (Raleway 500, 0.62–0.72rem, tracking 0.28–0.42em, caixa alta): rótulos de bloco (com filete a preencher a linha), navegação, botões, chips, preço, índices. O rótulo de bloco leva sempre Cinza Fumo.
- **Wordmark** (Raleway 200, 0.95rem, tracking 0.32em): a marca escrita, só junto ao logótipo; no rodapé sobe a `clamp(1.3rem, 3vw, 2rem)` a peso 100.
- **Fantasma** (Raleway 100, `clamp(6rem, 22vw, 20rem)`, tracking 0.05em, opacidade 0.05–0.07, `white-space: nowrap`): o nome da família/secção a sangrar pela margem direita. Escondido abaixo de 820px.

### Named Rules
**A Regra da Caixa Alta Espaçada.** Tudo o que é Raleway vai em caixa alta com tracking ≥ 0.14em; quanto mais pequeno o texto, mais largo o tracking (0.7rem → 0.42em). Um botão leva `text-indent` igual ao tracking para centrar oticamente.
**A Regra do Ponto Final.** Títulos de secção são frases e terminam com ponto: "Powered by iServices." "Fale connosco."
**A Regra do Peso Cem.** Títulos gigantes usam peso 100; nunca engrossar para ganhar presença — ganha-se com tamanho e tracking.

## Layout

Uma coluna central de **1280px** com margens fluidas `clamp(1.2rem, 5vw, 4.5rem)`; cada bloco respira `clamp(4.5rem, 12vh, 8.5rem)` em cima e em baixo. Secções de destaque (CTA, parceria, contactos, famílias) usam grelhas de duas colunas assimétricas — `2fr / 3fr`, `3fr / 2fr` ou `1.15fr / 1fr` — com a imagem de um lado e texto do outro, alternando o lado de banda para banda na página de aromas.

Listas (segmentos, setores) são **grelhas de filete**: `repeat(auto-fit, minmax(230–260px, 1fr))` com `border-top`/`border-left` no contentor e `border-right`/`border-bottom` em cada célula, sem gap — as linhas partilham-se. A coleção de produtos é `auto-fill, minmax(250px, 1fr)` com a peça em destaque a ocupar `span 2` em modo horizontal.

Dois palcos são **sticky de ecrã inteiro** (`100svh`): o hero (secção de 200vh cujo conteúdo desvanece para dar lugar ao fumo) e o showcase de famílias (uma família por viewport, trocadas pela névoa, com um rail de pontos à direita). A página de contactos é uma grelha `1.1fr / 1fr` de altura mínima `100svh` com o difusor 3D à direita.

Breakpoints observados: **900px** (contactos empilha, cena 3D primeiro a 34svh), **820px** (grelhas duas-colunas viram uma; imagem primeiro; fantasmas escondidos; família a 30svh), **640px** (header compacto, peça grande volta a vertical, parede de logos com deslize horizontal a 560px mínimo). Testar sempre a 1440, 2560×902 (ultrawide: títulos gigantes podem partir) e 390.

**A Regra do Rótulo com Filete.** Cada bloco abre com um rótulo em Cinza Fumo seguido de um filete que preenche a linha até à margem (`.bloco-rotulo::after`), com 3rem de margem abaixo. É o índice do catálogo; nunca abrir um bloco com um título grande sem esse rótulo.

## Elevation & Depth

**Plano por defeito; sombra só na fotografia.** Superfícies, cartões, botões e navegação são planos e separam-se por filetes de 1 px ou pela mudança de tom do papel (Papel Tocado no hover). As únicas sombras existem para pousar fotografia e o difusor sobre o papel — longas, difusas, com desvio vertical grande e tom de tinta, nunca cinza-neutro. A névoa (`filter: blur(46–58px)`, gradientes radiais de branco para transparente) é a outra profundidade do sistema: não é sombra, é ar.

### Shadow Vocabulary
- **Pouso de fotografia** (`box-shadow: 0 45px 90px -20px rgba(22, 21, 15, 0.28)`): imagens de família emolduradas a branco no showcase. Variante `-25px … 0.3` para imagens de CTA/parceria; `0 40px 80px -22px … 0.26` nas bandas de aromas.
- **Pílula de preço** (`box-shadow: 0 8px 24px rgba(22, 21, 15, 0.12)`): o único componente de UI com sombra — flutua sobre o palco tingido.

### Named Rules
**A Regra da Sombra Fotográfica.** Só uma imagem ou o produto podem projetar sombra. Um cartão, botão, campo ou menu com `box-shadow` está errado.
**A Regra da Névoa.** Transições entre estados de conteúdo (famílias, hero → secção, formulário a ganhar vida) passam por névoa, não por cortes, slides ou fades secos.

## Shapes

Formas de rótulo e de frasco: **retângulos de canto vivo** para tudo o que é tipográfico (botões, filetes, grelhas, campos, rodapé), **pílulas** (999px) para chips e preço, **círculos** para os pontos do logótipo (4–11px) e do rail (6px, ativo escala 1.7). Fotografia leva 3px de canto e moldura branca; palcos tingidos e banners levam 4px. Não há raio intermédio (8, 12, 16px) em lado nenhum. Fantasmas tipográficos sangram pela margem direita (`right: -2vw / -3vw`) e são sempre recortados por `overflow: hidden` no pai.

## Components

Refinados e contidos: filetes, caixa alta, hover por opacidade, tracking ou tom do papel. Todos os hovers usam 0.3–0.4s `ease`; movimentos de imagem e revelações usam 0.7–1.2s `cubic-bezier(0.22, 1, 0.36, 1)`.

### Buttons
- **Shape:** retângulo de canto vivo (0px).
- **Primary (`.botao`):** fundo Tinta de Sépia, texto Papel Quente, Raleway 500 0.72rem, tracking 0.42em com `text-indent` igual, padding `1.25em 2.8em 1.05em` (assimétrico: compensa a linha-base da Raleway). **Hover:** opacidade 0.85 e `translateY(-2px)`. **Disabled** (envio): opacidade 0.35, sem transform.
- **Outline (`.header-loja`):** filete 1px em tinta, padding `0.7em 1.4em 0.55em`; **hover** preenche a tinta e inverte o texto.
- **Link sublinhado (`.peca-ligacao`):** Raleway 500 0.66rem, tracking 0.34em, sublinhado 1px no acento da família (ou tinta fora de contexto de família); **hover** opacidade 0.65 e tracking abre para 0.42em.

### Chips
- **Nota de aroma (`.familia-notas li`, `.aroma-chip`):** pílula com filete 1px em `currentColor`, fundo transparente, Raleway 500 0.6–0.62rem, tracking 0.26–0.28em, padding `0.5em 1.1em 0.35em`. Na página de contactos são botões: **hover** `translateY(-2px)`; **selecionado** preenche com o acento da família e texto na tinta da família.
- **Preço (`.peca-preco`):** pílula em Papel Quente, tracking 0.18em, com a sombra de pílula; absoluta no canto superior direito do palco.

### Cards / Containers
- **Célula de filete (`.segmento`, `.setor`):** sem raio, sem sombra; bordas partilhadas via grelha de filete; padding `2.2rem 1.8rem 2rem`; altura mínima 14–15rem; índice (0.7rem, tracking 0.3em, Cinza Fumo) + título Raleway 300 caixa alta + descrição muted. **Hover:** fundo Papel Tocado em 0.4s.
- **Certificação (`.certificacao`):** filete 1px a toda a volta, 4px de raio, padding `clamp(2rem, 4vw, 3rem)`, selos a 64px com `multiply` alinhados ao fundo. Mesmo hover.
- **Palco de produto (`.peca-palco`):** fundo na tinta da família (`--palco`), 4px de raio, `aspect-ratio: 4/5`, padding 11 %, imagem em `multiply`. **Hover:** fundo passa a `tintaForte` e a imagem escala 1.07 com `translateY(-3px)`.
- **Moldura de fotografia (`.familia-figura img`):** fundo branco, padding `clamp(0.8rem, 1.6vw, 1.6rem)`, 3px de raio, sombra de pouso.

### Inputs / Fields
- **Style (`.campo`):** rótulo em Cinza Fumo (0.62rem) por cima; campo sem fundo, sem borda lateral, apenas `border-bottom` 1px em Filete; Biryani 300 1rem em tinta; placeholder Cinza Fumo a 55 %.
- **Focus:** `border-bottom-color` passa a Tinta de Sépia (0.3s). Sem outline, sem glow.
- **Feedback:** uma linha de dica em itálico Cinza Fumo (0.88rem, `min-height: 1.5em`) abaixo do formulário, que muda de texto com o progresso; o botão de envio só ativa quando nome, email válido e ≥10 caracteres existem.

### Navigation
- **Header:** fixo, `mix-blend-mode: darken`, `pointer-events: none` no contentor (só links clicáveis) para que o logo escureça sobre qualquer fundo claro. Logo a `clamp(2.4rem, 3.4vw, 3rem)` à esquerda; links Raleway 500 0.68rem tracking 0.4em à direita; a loja é o botão outline.
- **Estados:** sublinhado 1px transparente → tinta em hover e em `.ativa`. Abaixo de 640px: 0.58rem, tracking 0.2em, logo a 1.9rem.
- **Rail de famílias:** coluna de pontos 6px à direita do showcase, opacidade 0.22, ativo opacidade 1 e escala 1.7.
- **Índice da carta (`.carta-indice`):** linha de âncoras Raleway 400 0.78rem com número em Cinza Fumo; hover muda para o acento da família.
- **Rodapé:** fundo Tinta de Sépia, logo invertido, wordmark peso 100, colunas de links a 72 % de opacidade, selos em `invert + screen`, linha final a 50 %.

### Névoa (assinatura)
Bolhas circulares posicionadas de forma determinística (`(i * 137.5) % 100`), `filter: blur(46px)` (densas) ou `58px` (leves), com gradiente radial de branco 0.95–0.98 para transparente; deriva lenta 9–21s em `fumo-derivar`. No showcase, a névoa é tingida pela família que entra (`${cor}ee` → transparente, um terço das bolhas com `${acento}33`) e cai de `-58%` a `30%` em Y ligada ao scroll. Na cena 3D, sprites com a mesma textura radial saem do bocal de latão e reagem ao scroll (hero) ou ao preenchimento do formulário (contactos). Desligada em `prefers-reduced-motion`.

### Título letra a letra (assinatura)
O nome no hero entra letra a letra: cada `<span>` com `overflow: hidden` e a letra a subir de `y: 110%` a `0` em 0.9s com 0.045s de atraso por letra e a curva do sistema; os três pontos caem a seguir (0.18s entre si), depois tagline e texto. Blocos de conteúdo usam `Revelar` (`y: 42 → 0`, 0.85s, 0.08s por índice, `once: true`).

## Do's and Don'ts

### Do:
- **Do** manter uma única folha de Papel Quente (#faf8f4) e trocar para Tinta de Sépia só no rodapé.
- **Do** escrever tudo o que é Raleway em caixa alta com tracking ≥ 0.14em e peso 100–500; títulos gigantes a peso 100.
- **Do** abrir cada bloco com rótulo em Cinza Fumo + filete a preencher a linha.
- **Do** ir buscar cor a `src/data/aromas.js` (tinta/tintaForte/acento) sempre que uma família está presente; o resto fica monocromático.
- **Do** pousar fotografia com moldura branca, 3px de raio e a sombra longa `0 45px 90px -20px rgba(22,21,15,0.28)`.
- **Do** usar `mix-blend-mode: multiply` para fotos sobre palco e `invert + screen` para selos sobre o rodapé.
- **Do** transitar entre estados com névoa e a curva `cubic-bezier(0.22, 1, 0.36, 1)`; respeitar `prefers-reduced-motion`.
- **Do** testar a 1440, 2560×902 e 390 — os títulos com tracking largo partem primeiro em ultrawide.

### Don't:
- **Don't** usar azul, ícones de linha ou blocos de três colunas iguais — é a anti-referência corporativa confirmada.
- **Don't** dar sombra a cartões, botões, campos ou menus; só fotografia e a pílula de preço.
- **Don't** introduzir raios intermédios (8–16px); o sistema só tem 0, 3, 4 e 999px.
- **Don't** usar `#000` nem cinzas neutros frios; todas as linhas e sombras são Tinta de Sépia com alpha.
- **Don't** engrossar um título para lhe dar presença; aumentar o tamanho ou o tracking.
- **Don't** recortar fotografias à mão para esconder fundos brancos — o blend resolve.
- **Don't** inventar uma cor de destaque de marca; INN AROMA não tem cor, tem aromas.
