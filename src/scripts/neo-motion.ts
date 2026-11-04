/* NEO-MANGA motion: native scroll, transforms, observers; zero additional dependencies. */
const html = document.documentElement;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const revealNodes = [...document.querySelectorAll<HTMLElement>('.js-reveal')];
const hero = document.querySelector<HTMLElement>('.neo-hero');
const gameScene = document.querySelector<HTMLElement>('.neo-game__scene');
const gameChapters = [...document.querySelectorAll<HTMLElement>('.neo-game__chapter')];
const gameShape = document.querySelector<HTMLElement>('.neo-game__shape');
let frame = 0;
let observer: IntersectionObserver | undefined;
const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const motionEnabled = () => !reduced.matches;
const setStage = (index: number) => {
  gameChapters.forEach((chapter, chapterIndex) => { chapter.dataset.active = String(chapterIndex === index); });
  if (gameShape) gameShape.dataset.stage = String(index);
};
const setupReveals = () => {
  observer?.disconnect();
  revealNodes.forEach((node) => node.classList.remove('is-visible'));
  html.classList.toggle('has-motion', motionEnabled() && 'IntersectionObserver' in window);
  if (!html.classList.contains('has-motion')) return;
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer?.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -5% 0px', threshold: 0.04 });
  revealNodes.forEach((node) => observer?.observe(node));
};
const updateScroll = () => {
  frame = 0;
  const root = document.documentElement;
  const total = Math.max(1, root.scrollHeight - window.innerHeight);
  root.style.setProperty('--page-progress', String(clamp(window.scrollY / total)));
  if (!motionEnabled()) return;
  if (hero) {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const fraction = clamp(-rect.top / Math.max(1, rect.height));
      hero.style.setProperty('--art-offset', (fraction * -45).toFixed(1) + 'px');
      hero.style.setProperty('--float-a', (fraction * 18).toFixed(1) + 'px');
      hero.style.setProperty('--float-b', (fraction * -25).toFixed(1) + 'px');
    }
  }
  if (gameScene && gameShape && gameChapters.length && window.innerWidth > 900) {
    const bounds = gameScene.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
      const relative = clamp((window.innerHeight * 0.48 - bounds.top) / Math.max(1, bounds.height));
      setStage(Math.min(gameChapters.length - 1, Math.floor(relative * gameChapters.length)));
      gameShape.style.setProperty('--scene-spin', (-12 + relative * 48).toFixed(1) + 'deg');
      gameShape.style.setProperty('--scene-scale', String((1 + relative * .22).toFixed(2)));
      gameShape.style.setProperty('--scene-y', (relative * -25).toFixed(1) + 'px');
    }
  }
};
const queueScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateScroll); };
const initTilts = () => {
  if (!finePointer.matches || !motionEnabled()) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    const art = card.querySelector<HTMLElement>('.neo-project__glyph');
    if (!art) return;
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const maxTilt = parseFloat(getComputedStyle(html).getPropertyValue('--tilt-max')) || 8;
      const x = clamp((event.clientX - rect.left) / rect.width);
      const y = clamp((event.clientY - rect.top) / rect.height);
      art.style.setProperty('--tilt-x', ((x - .5) * 12).toFixed(1) + 'px');
      art.style.setProperty('--tilt-y', ((y - .5) * 12).toFixed(1) + 'px');
      art.style.setProperty('--tilt-rotate', ((x - .5) * maxTilt).toFixed(1) + 'deg');
    }, { passive: true });
    card.addEventListener('pointerleave', () => {
      art.style.removeProperty('--tilt-x');
      art.style.removeProperty('--tilt-y');
      art.style.removeProperty('--tilt-rotate');
    });
  });
};
setupReveals();
initTilts();
queueScroll();
window.addEventListener('scroll', queueScroll, { passive: true });
window.addEventListener('resize', queueScroll, { passive: true });
reduced.addEventListener('change', () => { setupReveals(); queueScroll(); });
document.addEventListener('visibilitychange', () => { if (!document.hidden) queueScroll(); });

/* Pause the marquee outside the viewport to avoid unnecessary animation work. */
const marquee = document.querySelector<HTMLElement>('.neo-marquee');
if (marquee && 'IntersectionObserver' in window) {
  const marqueeObserver = new IntersectionObserver(([entry]) => {
    marquee.classList.toggle('is-in-view', entry.isIntersecting);
  }, { rootMargin: '120px 0px' });
  marqueeObserver.observe(marquee);
}
/* Active section indication stays semantic and does not intercept native anchors. */
const sectionLinks = [...document.querySelectorAll<HTMLAnchorElement>('.neo-nav a')];
if (sectionLinks.length && location.pathname === '/' && 'IntersectionObserver' in window) {
  const observedSections = [...document.querySelectorAll<HTMLElement>('main > section[id]')];
  const navigationObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      sectionLinks.forEach((link) => {
        if (link.getAttribute('href') === '/#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-20% 0px -65% 0px' });
  observedSections.forEach((section) => navigationObserver.observe(section));
}
