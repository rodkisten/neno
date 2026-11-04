# Arquitetura — NENO / NEO-MANGA

## Stack

Astro 7, Vite, Tailwind CSS v4 e TypeScript estrito. `output: 'static'`: HTML pré-renderizado e JS de interação mínimo; nenhum framework client-side é necessário.

## Rotas e dados

- `src/pages/index.astro`: oito seções (hero, perfil, projetos, Game Lab, trajetória, Journal, competências, contato).
- `src/pages/design-system.astro`: catálogo vivo de tokens e demonstrações dos componentes.
- `src/content.config.ts`: coleções tipadas de projetos e Journal (futuras rotas dedicadas).
- Os arrays originais `projects`, `experiences`, `complementaryActivities`, `journalPreviews` e `skillGroups` foram preservados na home. Não foram geradas credenciais novas.

## Sistema visual

- `src/styles/global.css`: cores de paleta, semânticas, legado Tailwind, geometria e movimento. Variáveis são a API pública de customização.
- `src/styles/neo.css`: layout, pseudo-3D, HUD, componentes editoriais, seções e breakpoints.
- `src/styles/catalog.css`: UI reutilizável do design system, estados dos botões, badges e formulários.
- `src/components/ui/ThemeSwitcher.astro`: troca temas e modo claro/escuro, persistindo `neno.theme` e `neno.mode`.
- `src/components/ui/ArcadeButton.astro`, `SectionIndex.astro` e os componentes anteriores de abas, formulários, badges e laboratório.
- `src/components/layout/`: navegação principal, menu mobile com teclado/Escape, rodapé.

## Paletas

`data-theme="acid-pop"` (padrão), `data-theme="cyber-arcade"`, `data-theme="mono-electric"`; `data-mode="light" | "dark"`. O modo monocromático pode ser alterado pela variável `--color-electric`. Variáveis semânticas incluem `--color-background`, `--color-surface`, `--color-foreground`, `--color-primary`, `--color-secondary`, `--color-accent` e `--color-border`.

## Movimento e acessibilidade

`src/scripts/neo-motion.ts` configura reveals apenas com JS e `IntersectionObserver`, atualiza barra de progresso e camadas do hero via `requestAnimationFrame` e varia a forma gráfica no Game Lab. A cena usa CSS `position: sticky`, sem capturar wheel/touch, e deixa de fixar em viewports menores que 900px. Em `prefers-reduced-motion`, as timelines e reveals são desabilitados. O conteúdo é visível sem JS; botões e links seguem HTML semântico, com alvos de toque e estados de foco.

## Geometria original

O pôster do hero é uma composição de formas CSS (sem mídias externas). As cartas de projeto utilizam tipografia e grafismos programáticos, sem atribuir imagens fictícias aos projetos.

## Build / QA

`npm run build` é o comando oficial de verificação. O redesign criado nesta branch deve passar por build e testes de navegador antes de merge/publicação. Não há alegação de validação de browser sem execução real.
