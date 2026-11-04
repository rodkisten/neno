# Juan Silva Garcia / NEO-MANGA

Portfólio estático de Juan Silva Garcia, construído com Astro 7, Tailwind CSS v4 e TypeScript.

## Direção visual

**NEO-MANGA / FUTURE POP**: composição editorial assimétrica, tipografia de pôster, painéis gráficos, interfaces de jogo e motion cinematográfico progressivo. Sem personagens de franquias, mídias fictícias ou dados profissionais inventados.

## Design system

- Três presets: **ACID POP**, **CYBER ARCADE**, **MONO ELECTRIC**.
- Claro/escuro controlados via `data-mode` no documento.
- Cor customizável `--color-electric` para o preset monocromático.
- Paleta, aliases semânticos e tokens de motion em `src/styles/global.css`.
- Layout e grafismos em `src/styles/neo.css`; primitives e catálogo em `src/styles/catalog.css`.
- Controls do cabeçalho persistem preferências em `localStorage`.
- Componentes `ArcadeButton`, `ThemeSwitcher` e `SectionIndex`.
- Motion em `src/scripts/neo-motion.ts`, usando `IntersectionObserver` e `requestAnimationFrame`, sem interferir no scroll nativo.
- O Game Lab possui painel sticky em desktop e fluxo normal em telas menores.

## Rotas

- `/`: home completa, oito áreas com conteúdo original.
- `/design-system/`: catálogo visual e demonstrações interativas.

## Desenvolvimento

```bash
npm ci
npm run dev
npm run build
```

`npm run build` executa `astro check && astro build`, com arquivos estáticos em `dist/`.

## Compromissos

Os conteúdos profissionais e acadêmicos preservam as informações originais. Consulte `AGENTS.md` para as regras de veracidade e `ARCHITECTURE.md` para arquitetura, acessibilidade e tokens. O redesign não inclui novos serviços pagos.
