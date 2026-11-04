## 2026-11-04 — NEO-MANGA / FUTURE POP (PR em revisão)
- Reconstrução editorial de todas as seções da home e do catálogo de design.
- Sistema de 3 presets temáticos e modos claro/escuro via CSS custom properties.
- Motion progressivo (entrada, scroll, parallax, Game Lab sticky), responsividade e acessibilidade.
- Componentes Astro reutilizáveis, documentação e testes estáticos de integridade.
- Build e verificação em navegador ainda pendentes; não publicados na branch principal.

# Changelog

## 0.4.0 — Fase 2: Protótipo Visual da Home, Layout Compartilhado e Dados Comprovados
- **Home Completa (`src/pages/index.astro`)**: implementação das 8 seções da página inicial (`Hero`, `00. Perfil Técnico`, `01. Projetos Selecionados`, `02. Game Development Lab`, `03. Experiência Profissional`, `04. Tech Journal`, `05. Competências Técnicas`, `06. Contato Direto`) sob o **Tema B — Violet Nature**.
- **Layout Global (`src/components/layout/`)**: criação de `Header.astro`, `MobileMenu.astro` (com suporte a `aria-expanded`, `aria-controls` e fechamento por `Escape`) e `Footer.astro`.
- **Dados Comprovados**: inclusão dos dados reais verificados do Currículo Lattes (`http://lattes.cnpq.br/9434044887106048`), publicação científica nos Anais do VII CoBICET (`ISSN 2764-0582`, CNN `F1-weighted: 0,82`, padronização **Cenário A (Controle)** e **Cenário B (Proposto)**), Lundgren Atelier, ShapeMeApp (SIMEPE 2025), Núcleo Selvagem, Kodland, CNA Idiomas Digital e EmComp.
- **Acessibilidade (`src/styles/global.css`)**: regra `@media (prefers-reduced-motion: reduce)` expandida para suprimir animações e transições, mantendo tipografia mínima de `13px` e alvos de toque `>= 44×44px`.

## 0.3.0 — Fase 1 Estabilizada: Astro 7, Vite 8 e Oficialização do Tema B (Violet Nature)
- **Identidade Visual Oficial**: consolidação do **Tema B — Violet Nature** (`#0B0A10` / `#14121B` / `#7C3AED` / `#A78BFA` / `#B6D63A`) e remoção completa do Tema A (Cobalt Technical).
- **Migração de Stack**: atualização de `astro` para `^7.4.5` e `vite` para `8.3.5` (remoção do pin de Vite 7), zerando os 3 advisories do `npm audit`.
- **Unificação de Componentes**: `ThemeShowcase.astro` e `design-system.astro` refatorados para consumir `Button`, `Badge`, `Tabs`, `ControlField` e `LabContainer` sem duplicação de código ou scripts.
- **Content Layer API**: adição de `src/content.config.ts` (Zod 4) e diretórios estruturais `src/pages/projetos/`, `src/pages/journal/`, `src/content/projetos/` e `src/content/journal/`.
- **Acessibilidade e Formulários**: `outline-color` imediato em `:focus-visible`, `font-size: 16px` (`text-base`) em inputs/selects de `ControlField.astro` para evitar auto-zoom mobile e suporte às teclas `Home`/`End` em `Tabs.astro`.
- **Versionamento**: inicialização do repositório Git local com commit de referência da Fase 1.

## 0.2.0 — Fase 1 (iteração): Tema B — Violet Nature e comparativo
- Comparativo cromático entre Tema A e Tema B em `/design-system`, container de 1120px, metadados em 13px e alvos de toque >= 44px.

## 0.1.0 — Fase 1: Identidade Visual e Design System
- Estrutura inicial Astro + Tailwind CSS v4 e primeiros componentes de UI.
