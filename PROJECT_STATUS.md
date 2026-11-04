## Redesign NEO-MANGA (branch `feat/neo-manga-redesign`, 04/11/2026)

- Solicitação explícita de redesign completo recebida e implementada em PR de revisão.
- Home redesenhada preservando as oito áreas originais, fontes de dados acadêmicos/profissionais e links.
- Themes ACID POP, CYBER ARCADE, MONO ELECTRIC + claro/escuro, motion progressivo, cards, menu e novo catálogo.
- `npm run test:design`: checks estáticos locais disponíveis na branch; execução de build e QA visual em browser pendentes neste ambiente.
- `main` mantida intacta até validação do pull request.

---

# Status do Projeto — Portfólio Juan Silva Garcia

## Fase Atual: Fase 2 Concluída e Auditada Factualmente — Home do Portfólio (aguardando autorização para Fase 3)

### 1. Implementado e Consolidado na Fase 2
- **Rota Inicial Definitiva (`/`, `src/pages/index.astro`)**:
  - Substituição do redirecionamento temporário da Fase 1 pela Home completa em 8 seções editoriais sob o **Tema B — Violet Nature**, com todos os dados cruzados linha por linha com o Currículo Lattes (`http://lattes.cnpq.br/9434044887106048`), currículo profissional e publicação científica:
    1. **Hero Section (`#hero-heading`)**: posicionamento principal (`Juan Silva Garcia` / `GARCIA, J. S.`), badges de status, CTAs (`Explorar Projetos Selecionados`, `Trajetória & Experiência`, `Contato Direto →`) e 3 cards de credenciais verificadas.
    2. **00. Perfil Técnico & Abordagem de Engenharia (`#apresentacao`)**: Bacharelado em Ciência da Computação (2022–2026, em andamento) e Técnico em Informática (2019–2021 / Lattes 2019–2022) pelo IF Sudeste MG — Campus Rio Pomba, publicações no VII CoBICET (05/08/2026, Editora Even3, `ISSN 2764-0582`), XVIII EAMC (2026) e VII SIMEPE (2025).
    3. **01. Projetos Selecionados & Pesquisa Aplicada (`#projetos`)**:
       - `Lundgren Atelier` (`https://lundgren-atelier.com/` — Astro, Sanity.io, Tailwind CSS, Node.js, Cloudflare Pages — Em Produção).
       - `Detecção Acústica de Aves Ameaçadas Utilizando Aprendizado de Máquina` (coautoria com Maurício Archanjo Nunes Coelho; 136 espécies no Xeno-Canto; Espectrogramas Mel e MFCC; SVM/MVS, GMM-HMM/MOM e CNN/RNC; comparação entre **Cenário A (Controle)** e **Cenário B (Proposto)** com CNN `F1-weighted: 0,82` e acurácia de `~82%`).
       - `ShapeMeApp` (ciclo 2024–2026 — React Native, Expo SDK, Firebase Auth, Cloud Firestore, AsyncStorage — CIT, Monotonia e Strain — apresentado no VII SIMEPE 2025 em coautoria com Gustavo Vaz Teixeira, Sérgio Muinhos Barroso Lima e João Batista Ferreira Júnior).
       - `Núcleo Selvagem` (roguelite autoral de criaturas mutantes com expedições, evolução genética e Base Pessoal 2.0 em Roblox Studio, Luau e Blender).
    4. **02. Game Development Lab (`#game-lab`)**: seção dedicada exclusivamente ao projeto autoral `Núcleo Selvagem` (`SYS-01 // Expedições Roguelite`, `SYS-02 // Evolução Genética`, `SYS-03 // Base Pessoal 2.0` e CTA `Solicitar Demonstração Técnica →`).
    5. **03. Experiência Profissional, Pesquisa & Ensino (`#experiencia`)**:
       - Professor Tutor — CNA Digital (`04/2026 — Atual`, 15h/sem: lógica, Scratch, Construct, Blender/SculptGL, Unity, Roblox Studio, React, Python, Ciência de Dados e IA).
       - Professor Tutor — Kodland (`06/2025 — Atual`, 12h/sem: Scratch, Python com Flask/POO/bancos de dados e Roblox Studio/Lua, metodologia PBL, Scrum e Git/GitHub).
       - Pesquisador em Inteligência Artificial — IF Sudeste MG (`06/2025 — 06/2026`: 136 espécies de aves ameaçadas, RNC/CNN, MVS/SVM e MOM/HMM).
       - Desenvolvedor Java — IF Sudeste MG (`09/2025 — 01/2026`: UML, requisitos, POO em Java, JPA/PostgreSQL e BCrypt).
       - Desenvolvedor Mobile Júnior — IF Sudeste MG (`08/2024 — 01/2026`: extensão *Emagreça na Musculação* / ShapeMeApp, QA, usabilidade, React Native, Firebase, Jira e GitHub).
       - Membro de Projetos / Validação e Prototipação — EmComp (`06/2022 — 11/2025`: 100h certificadas, site da Labclin, prototipação UX/UI e eventos do Núcleo da Mata).
       - Atuações Acadêmicas Complementares: Monitor Voluntário de Linguagens Formais e Autômatos (`03/2025 — 08/2025`), Minicurso React com Firebase (`2025`), Instrutor de Desenvolvimento Mobile (`12/2023 — 08/2024`, 16 videoaulas) e Voluntário no curso *Python Básico pra Quem Tem Pressa* (`2020`).
    6. **04. Tech Journal — Cadernos de Engenharia & Pesquisa (`#journal`)**: prévia estruturada de 3 cadernos técnicos (`CADERNO-01`, `CADERNO-02`, `CADERNO-03`) represados para leitura completa na Fase 5.
    7. **05. Competências Técnicas & Ferramentas (`#competencias`)**: stack organizada em 4 domínios (`GRP-01` a `GRP-04`).
    8. **06. Canais Diretos de Contato (`#contato`)**: links oficiais verificados para `mailto:juansilvagarcia11037@gmail.com`, `https://github.com/Juanzit`, `https://www.linkedin.com/in/juan-garcia--/` e `http://lattes.cnpq.br/9434044887106048`.

### 2. Verificações Executadas de Fato na Fase 2 (2026-11-03)
- `npm run build` (`astro check && astro build`):
  - `astro check` (15 arquivos): **0 errors, 0 warnings, 0 hints**.
  - `astro build`: **2 páginas estáticas geradas** (`/index.html` e `/design-system/index.html`).
- `npm audit`: **0 vulnerabilidades**.
- **Testes e 8 Capturas Oficiais em Navegador Real (Chrome Headless via `puppeteer-core`)**:
  - Resoluções testadas: **1440 × 900**, **1280 × 720** e **390 × 844**.
  - 8 capturas oficiais geradas: `01-home-completa-1440x900.png` a `08-menu-mobile-aberto-390x844.png`.
  - Overflow horizontal: **nenhum** (`1440 <= 1440`, `1280 <= 1280`, `390 <= 390`).
  - Alvos de toque `< 44×44px`: **nenhum** (`smallTargets: []`).
  - Textos visíveis `< 13px`: **nenhum** (`smallFonts: []`).
  - Âncoras internas quebradas ou seções ausentes: **nenhuma** (`missingIds: []`, `brokenAnchors: []`).
  - Erros de console ou exceções de página: **nenhum** (`consoleErrors: []`, `pageErrors: []`).

### 3. Próximas Fases (Aguardando Autorização Explícita)
- **Fase 3**: Componentes, Cards e Interações / Sistema de Projetos.
- **Fase 4**: Estudos de caso individuais (`/projetos/[slug]/`) e simuladores client-side (`src/components/labs/`).
- **Fase 5**: Tech Journal (`/journal/` e `/journal/[slug]/`).
- **Fase 6**: Página `/sobre/` e consolidação final.
