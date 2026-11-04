import { readFileSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const home = read('src/pages/index.astro');
const global = read('src/styles/global.css');
const visual = read('src/styles/neo.css');
const motion = read('src/scripts/neo-motion.ts');
const header = read('src/components/layout/Header.astro');
const layout = read('src/layouts/BaseLayout.astro');
const idMatches = [...home.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const ids = new Set(idMatches);
assert.equal(ids.size, idMatches.length, 'IDs duplicados na home');
const expected = ['main-content', 'apresentacao', 'projetos', 'game-lab', 'experiencia', 'journal', 'competencias', 'contato'];
expected.forEach((id) => assert(ids.has(id), 'Seção ausente: ' + id));
for (const match of home.matchAll(/\bhref="#([^"]+)"/g)) {
  assert(ids.has(match[1]), 'Âncora interna inválida: ' + match[1]);
}
for (const match of header.matchAll(/\bhref="\/#([^"]+)"/g)) {
  assert(ids.has(match[1]), 'Navegação aponta para ID ausente: ' + match[1]);
}
for (const theme of ['acid-pop', 'cyber-arcade', 'mono-electric']) {
  assert(global.includes('data-theme="' + theme + '"'), 'Preset ausente: ' + theme);
}
assert(global.includes('--color-electric'), 'Cor elétrica customizável ausente');
assert(global.includes('data-mode="dark"'), 'Modo escuro ausente');
assert(visual.includes('prefers-reduced-motion'), 'Redução de movimento sem fallback');
assert(motion.includes('requestAnimationFrame'), 'Scroll não utiliza RAF');
assert(motion.includes('IntersectionObserver'), 'Reveals sem observer');
assert(!motion.includes('preventDefault('), 'Motion não deve capturar scroll');
assert(layout.includes('Pular para o conteúdo'), 'Skip link ausente');
assert(home.includes('Cenário A (Controle)') && home.includes('Cenário B (Proposto)'), 'Termos de pesquisa alterados');
assert(home.includes('juansilvagarcia11037@gmail.com'), 'Contato factual removido');
console.log('NEO-MANGA: checks estáticos de integridade passaram.');
