const properties = [
  {id:'glasshouse', name:'The Glasshouse', location:'Hampstead, London', region:'london', price:'£2,450,000', type:'Contemporary residence', beds:4, baths:3, area:'2,280 sq ft', feature:'A private garden room wrapped in glass.', image:'https://images.unsplash.com/photo-1758448756207-54505680d130?auto=format&fit=crop&w=1200&q=86', gallery:['https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1758448755969-8791367cf5c5?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=1000&q=84'], description:'A quietly expressive family home where generous glazing, tactile materials, and a planted rear garden create an easy relationship between inside and out.'},
  {id:'willowmere', name:'Willowmere House', location:'The Cotswolds, England', region:'country', price:'£1,850,000', type:'Country house', beds:5, baths:4, area:'3,940 sq ft', feature:'Period stone, oak beams, and open meadow views.', image:'https://images.unsplash.com/photo-1760627593124-f61ca7c9e85e?auto=format&fit=crop&w=1200&q=86', gallery:['https://images.unsplash.com/photo-1767050387941-b97f0d5a3232?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1565086703285-2ee5623008f8?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1760596778350-296ffeec127d?auto=format&fit=crop&w=1000&q=84'], description:'A restorative country house with original character, layered garden rooms, and the kind of light that changes the mood of every room.'},
  {id:'linden', name:'The Linden Residence', location:'Kensington, London', region:'london', price:'£3,200,000', type:'Townhouse', beds:4, baths:3, area:'2,740 sq ft', feature:'A sunken courtyard behind a considered facade.', image:'https://images.pexels.com/photos/18729283/pexels-photo-18729283.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85', gallery:['https://images.unsplash.com/photo-1748679979588-dfd926667927?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1785535573671-507b061d2fa8?auto=format&fit=crop&w=1000&q=84'], description:'A refined west London townhouse balancing period proportions with a sequence of crisp, contemporary interventions.'},
  {id:'serena', name:'Casa Serena', location:'Mallorca, Spain', region:'europe', price:'€2,750,000', type:'Modernist villa', beds:4, baths:4, area:'3,180 sq ft', feature:'Limestone terraces, sea air, and a long afternoon light.', image:'https://images.unsplash.com/photo-1741850419928-aa65b3d5e3a6?auto=format&fit=crop&w=1400&q=86', gallery:['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1746549843996-5153a7a27953?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=84'], description:'A sunlit retreat of limestone, shadow, and water, designed around long lunches, quiet mornings, and the western horizon.'},
  {id:'alder', name:'Alder House', location:'The Chilterns, England', region:'country', price:'£2,150,000', type:'Contemporary country house', beds:4, baths:3, area:'3,120 sq ft', feature:'Cedar, glass, and a garden that runs into the wood.', image:'https://images.unsplash.com/photo-1758239652052-a49b3ed9d7ce?auto=format&fit=crop&w=1200&q=86', gallery:['https://images.unsplash.com/photo-1775241186452-c3d99b09f223?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1766245456897-5c86726d084d?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1612366753600-df819204bc65?auto=format&fit=crop&w=1000&q=84'], description:'A calm, low-slung house set among mature oaks, where warm timber and full-height glass keep the woodland close all year round.'},
  {id:'lumen', name:'Villa Lumen', location:'Puglia, Italy', region:'europe', price:'€2,950,000', type:'Masseria villa', beds:5, baths:4, area:'3,860 sq ft', feature:'A freeform pool, a shaded pergola, and long Mediterranean evenings.', image:'https://images.unsplash.com/photo-1757439401991-2c6c3df38349?auto=format&fit=crop&w=1400&q=86', gallery:['https://images.unsplash.com/photo-1776763018972-588e27bf6511?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1759264244726-adde4e4318fc?auto=format&fit=crop&w=1000&q=84','https://images.unsplash.com/photo-1757264119066-2f627c6a6f03?auto=format&fit=crop&w=1000&q=84'], description:'A whitewashed masseria reimagined for modern living, arranged around water, shade, and the slow gold of the evening.'}
];

const articles = [
  {id:'architecture', category:'Perspective', date:'06.02.24', title:'The quiet beauty of considered architecture', excerpt:'Why proportion, material, and the space between rooms matter more than spectacle.', image:'https://images.unsplash.com/photo-1462565946545-09e3fd33f393?auto=format&fit=crop&w=1000&q=84', body:'The most memorable homes rarely announce themselves. They reveal their character slowly: in the way light travels across a wall, the pause before a staircase, or the honest texture of a material chosen to age well. Considered architecture is not about restraint for its own sake. It is about making space for the life that will happen there.'},
  {id:'country', category:'Living well', date:'18.01.24', title:'A guide to finding a country home', excerpt:'The practical and emotional questions worth asking before you leave the city.', image:'https://images.unsplash.com/photo-1670620800615-4225fe6ecb75?auto=format&fit=crop&w=1000&q=84', body:'A country home should feel like more than a weekend escape. Start with the rhythm of the place: the nearest village, the morning light, the roads you will actually use. Then look closely at the house itself — its orientation, its materials, and the kind of attention it will ask of you.'},
  {id:'light', category:'Material culture', date:'04.12.23', title:'Natural light, honest materials, timeless spaces', excerpt:'A visual vocabulary for homes that grow more beautiful with time.', image:'https://images.unsplash.com/photo-1565343587336-384c490d0b81?auto=format&fit=crop&w=1000&q=84', body:'Timeless interiors are not neutral by default. They are specific, tactile, and alive to change. Warm timber, stone with a visible grain, linen that softens with use, and light that has somewhere to land — these are the quiet ingredients of a home with staying power.'}
];

document.documentElement.classList.replace('no-js', 'js');

const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Smooth scrolling — Lenis, the same engine the Aurelia House build uses, with
   an expo easing curve. Native scrolling stays the fallback when the library is
   unavailable or the visitor prefers reduced motion. */
let lenis = null;
if (typeof Lenis === 'function' && !prefersReducedMotion()) {
  lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, touchMultiplier: 1.5 });
  const lenisRaf = time => { lenis.raf(time); requestAnimationFrame(lenisRaf); };
  requestAnimationFrame(lenisRaf);
}
function smoothScrollTo(target, offset = 0) {
  if (lenis) { lenis.scrollTo(target, { offset, duration: 1.2 }); return; }
  if (typeof target === 'number') window.scrollTo({ top: target, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  else target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
}
let lastFocusedElement = null;
const dialogTimers = new WeakMap();

function renderProperties(filter='all') {
  const grid = $('[data-property-grid]');
  if (!grid) return;
  const visible = filter === 'all' ? properties : properties.filter(property => property.region === filter);
  grid.innerHTML = visible.map((property, index) => `
    <article class="property-card" style="animation-delay:${index * 80}ms">
      <button class="property-photo" type="button" data-property-id="${property.id}" aria-label="View details for ${property.name}">
        <img src="${property.image}" alt="${property.name}, ${property.location}" loading="lazy">
        <span class="property-tag">${property.type}</span><span class="property-arrow">↗</span>
      </button>
      <div class="property-info"><div><h3>${property.name}</h3><div class="property-location">${property.location}</div></div><div class="property-price">${property.price}</div><div class="property-specs"><span>${property.beds} bedrooms</span><span>${property.baths} baths</span><span>${property.area}</span></div></div>
    </article>`).join('');
  const count = $('[data-result-count]');
  if (count) count.textContent = `${String(visible.length).padStart(2,'0')} ${visible.length === 1 ? 'residence' : 'residences'}`;
  $$('[data-property-id]').forEach(button => button.addEventListener('click', () => openProperty(button.dataset.propertyId)));
  collectParallaxItems();
}

function renderArticles() {
  const grid = $('[data-journal-grid]');
  if (!grid) return;
  grid.innerHTML = articles.map((article, index) => `
    <button class="journal-card reveal ${index ? 'reveal-delay' : ''}" type="button" data-article-id="${article.id}">
      <span class="journal-image"><img src="${article.image}" alt="${article.title}" loading="lazy"></span>
      <span class="journal-meta"><span>${article.category}</span><span>${article.date}</span></span>
      <h3>${article.title}</h3><p>${article.excerpt}</p>
    </button>`).join('');
  $$('[data-article-id]').forEach(button => button.addEventListener('click', () => openArticle(button.dataset.articleId)));
}

function clearDialogTimer(dialog) {
  const timer = dialog && dialogTimers.get(dialog);
  if (timer) window.clearTimeout(timer);
  if (dialog) dialogTimers.delete(dialog);
}

function clearDialogState(dialog) {
  clearDialogTimer(dialog);
  if (dialog) {
    dialog.classList.remove('is-open');
    dialog.removeAttribute('data-closing');
  }
  document.documentElement.classList.remove('dialog-open');
  document.body.classList.remove('dialog-open');
  if (lenis) lenis.start();
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
  lastFocusedElement = null;
}

/* Closes with the CSS transition; Escape (cancel), backdrop clicks, and the
   close button all route through here so focus restoration still runs. */
function closeDialog(dialog) {
  if (!dialog || !dialog.open || dialog.getAttribute('data-closing') === 'true') return;
  if (prefersReducedMotion()) {
    dialog.close();
    clearDialogState(dialog);
    return;
  }
  dialog.setAttribute('data-closing', 'true');
  dialog.classList.remove('is-open');
  clearDialogTimer(dialog);
  dialogTimers.set(dialog, window.setTimeout(() => {
    dialogTimers.delete(dialog);
    dialog.removeAttribute('data-closing');
    if (dialog.open) dialog.close();
  }, 320));
}

function openProperty(id) {
  const property = properties.find(item => item.id === id);
  const dialog = $('[data-property-dialog]');
  const content = $('[data-dialog-content]');
  if (!property || !dialog || !content || dialog.open) return;
  lastFocusedElement = document.activeElement;
  content.innerHTML = `<div class="dialog-hero"><img src="${property.image}" alt="${property.name}, ${property.location}"><div class="dialog-copy"><p class="eyebrow"><span class="eyebrow-line"></span> Selected residence</p><h2 id="dialog-title">${property.name}</h2><div class="property-location">${property.location}</div><div class="dialog-price">${property.price}</div><p>${property.description}</p><div class="dialog-specs"><span>${property.beds} beds</span><span>${property.baths} baths</span><span>${property.area}</span></div><p><strong>Signature detail:</strong> ${property.feature}</p><a class="button button-dark" href="#consultation" data-close-dialog>Arrange a private viewing <span>↗</span></a></div></div><div class="dialog-gallery">${property.gallery.map((image, i) => `<img src="${image}" alt="${property.name} detail ${i + 1}" loading="lazy">`).join('')}</div>`;
  clearDialogTimer(dialog);
  dialog.removeAttribute('data-closing');
  dialog.classList.remove('is-open');
  dialog.showModal();
  if (lenis) lenis.stop();
  document.documentElement.classList.add('dialog-open');
  document.body.classList.add('dialog-open');
  dialogTimers.set(dialog, window.setTimeout(() => {
    if (dialog.open && dialog.getAttribute('data-closing') !== 'true') {
      dialog.classList.add('is-open');
      $('.dialog-close', dialog)?.focus();
    }
  }, 20));
  $$('[data-close-dialog]', dialog).forEach(link => link.addEventListener('click', () => closeDialog(dialog), {once:true}));
}

function openArticle(id) {
  const article = articles.find(item => item.id === id);
  const dialog = $('[data-article-dialog]');
  const content = $('[data-article-content]');
  if (!article || !dialog || !content || dialog.open) return;
  lastFocusedElement = document.activeElement;
  content.innerHTML = `<img class="article-cover" src="${article.image}" alt="${article.title}"><p class="eyebrow"><span class="eyebrow-line"></span> ${article.category} · ${article.date}</p><h2 id="article-title">${article.title}</h2><p>${article.body}</p><p>${article.excerpt} This fictional editorial is part of the MONARCH &amp; CO. portfolio concept.</p>`;
  clearDialogTimer(dialog);
  dialog.removeAttribute('data-closing');
  dialog.classList.remove('is-open');
  dialog.showModal();
  if (lenis) lenis.stop();
  document.documentElement.classList.add('dialog-open');
  document.body.classList.add('dialog-open');
  dialogTimers.set(dialog, window.setTimeout(() => {
    if (dialog.open && dialog.getAttribute('data-closing') !== 'true') {
      dialog.classList.add('is-open');
      $('.dialog-close', dialog)?.focus();
    }
  }, 20));
}

function setupSignatureShowcase() {
  $('[data-signature-property]')?.addEventListener('click', event => openProperty(event.currentTarget.dataset.signatureProperty));
}

function setupFilters() {
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    $$('[data-filter]').forEach(item => item.classList.toggle('is-active', item === button));
    renderProperties(button.dataset.filter);
  }));
  $$('[data-location]').forEach(link => link.addEventListener('click', () => {
    const target = $(`[data-filter="${link.dataset.location}"]`);
    if (target) target.click();
  }));
  $('[data-show-all]')?.addEventListener('click', event => { event.preventDefault(); $('[data-filter="all"]')?.click(); });
}

function setupMenu() {
  const toggle = $('.menu-toggle');
  const menu = $('.mobile-menu');
  const header = $('[data-header]');
  const announcement = $('.announcement');
  if (!toggle || !menu || !header) return;

  const syncMenuPosition = () => {
    const headerBottom = Math.max(0, header.getBoundingClientRect().bottom);
    menu.style.setProperty('--mobile-menu-top', `${Math.round(headerBottom)}px`);
  };
  const close = () => { toggle.classList.remove('is-open'); menu.classList.remove('is-open'); menu.setAttribute('aria-hidden','true'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open menu'); document.body.classList.remove('is-menu-open'); if (lenis) lenis.start(); };
  const open = () => { syncMenuPosition(); toggle.classList.add('is-open'); menu.classList.add('is-open'); menu.setAttribute('aria-hidden','false'); toggle.setAttribute('aria-expanded','true'); toggle.setAttribute('aria-label','Close menu'); document.body.classList.add('is-menu-open'); if (lenis) lenis.stop(); requestAnimationFrame(() => { if (menu.classList.contains('is-open')) $('nav a', menu)?.focus(); }); };

  toggle.addEventListener('click', () => menu.classList.contains('is-open') ? close() : open());
  $$('a', menu).forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('is-open')) close(); });
  window.addEventListener('scroll', syncMenuPosition, {passive:true});
  window.addEventListener('resize', () => { syncMenuPosition(); if (window.innerWidth > 950) close(); });
  if ('ResizeObserver' in window) { const observer = new ResizeObserver(syncMenuPosition); observer.observe(header); if (announcement) observer.observe(announcement); }
  syncMenuPosition();
}

/* Intro curtain — panels part on a fixed timeline while the staged hero
   entrance plays behind them. The skip button collapses the whole sequence. */
function setupIntro() {
  const intro = $('#intro');
  if (!intro) return;
  if (prefersReducedMotion()) {
    intro.remove();
    document.body.classList.add('is-ready');
    return;
  }
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    intro.style.display = 'none';
    document.body.classList.add('is-ready');
  };
  window.setTimeout(finish, 3050);
  $('.intro-skip')?.addEventListener('click', () => {
    document.body.classList.add('is-intro-skipped');
    window.setTimeout(finish, 260);
  });
}

/* Scroll scenes — one rAF pass per scroll frame drives the header state, the
   pinned hero, the scrubbed signature curtain, and image parallax. Transform
   values travel through CSS custom properties so hover scales compose on top. */
let parallaxItems = [];
function collectParallaxItems() {
  parallaxItems = [
    ...$$('.journal-image img').map(el => ({ el, range: 14 })),
    ...$$('.location-card img').map(el => ({ el, range: 18 })),
    ...$$('.property-photo img').map(el => ({ el, range: 12 })),
    ...$$('.signature-media img').map(el => ({ el, range: 10 }))
  ];
}

function setupScrollScenes() {
  const header = $('[data-header]');
  const heroPin = $('.hero-pin');
  const hero = $('.hero');
  const heroWrap = $('.hero-image-wrap');
  const heroShade = $('.hero-image-shade');
  const heroCopy = $('.hero-copy');
  const heroCard = $('.hero-location-card');
  const heroVertical = $('.hero-vertical');
  const signature = $('.signature-showcase');
  const sigMedia = $('.signature-media');
  const sigImg = sigMedia ? $('img', sigMedia) : null;
  const sigStamp = $('.signature-stamp');
  const statementImages = $$('.parallax-image').filter(image => !image.classList.contains('hero-image'));
  const pinQuery = window.matchMedia('(min-width: 951px)');
  let ticking = false;
  let idleTimer = null;

  const markScrolling = () => {
    document.documentElement.classList.add('is-scrolling');
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(() => document.documentElement.classList.remove('is-scrolling'), 140);
  };

  const applyHero = (p, pinned) => {
    if (heroWrap) heroWrap.style.transform = `scale(${(1 + p * (pinned ? 0.18 : 0.12)).toFixed(4)})`;
    if (heroShade) heroShade.style.background = `linear-gradient(180deg,rgba(18,34,28,${(0.06 + p * 0.2).toFixed(3)}),rgba(18,34,28,${(0.23 + p * 0.45).toFixed(3)}))`;
    if (heroCopy) {
      heroCopy.style.transform = `translateY(${(-p * (pinned ? 55 : 70)).toFixed(1)}%)`;
      heroCopy.style.opacity = Math.max(0, 1 - p * 1.15).toFixed(3);
    }
    if (heroCard) heroCard.style.opacity = Math.max(0, 1 - p * 2).toFixed(3);
    if (heroVertical) heroVertical.style.opacity = Math.max(0, 0.7 - p * 1.4).toFixed(3);
  };

  const update = () => {
    const vh = window.innerHeight;
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
    if (!prefersReducedMotion()) {
      if (hero && heroPin && pinQuery.matches) {
        const span = Math.max(1, heroPin.offsetHeight - hero.offsetHeight);
        const p = Math.max(0, Math.min(1, -heroPin.getBoundingClientRect().top / span));
        applyHero(p, true);
      } else if (hero) {
        const rect = hero.getBoundingClientRect();
        const span = Math.max(1, rect.height - vh * 0.25);
        const p = Math.max(0, Math.min(1, -rect.top / span));
        applyHero(p, false);
      }
      if (signature && sigMedia) {
        const top = signature.getBoundingClientRect().top;
        const p = Math.max(0, Math.min(1, (vh * 0.72 - top) / (vh * 0.64)));
        const inset = (46 * (1 - p)).toFixed(2);
        sigMedia.style.clipPath = `inset(0 ${inset}% 0 ${inset}%)`;
        if (sigImg) sigImg.style.setProperty('--ps', (1.18 - p * 0.12).toFixed(3));
        if (sigStamp) sigStamp.style.opacity = Math.min(1, p * 1.6).toFixed(3);
      }
      parallaxItems.forEach(item => {
        const rect = item.el.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > vh + 80) return;
        const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
        item.el.style.setProperty('--py', `${(Math.max(-1, Math.min(1, progress)) * item.range).toFixed(1)}px`);
      });
      statementImages.forEach(image => {
        const rect = image.parentElement.getBoundingClientRect();
        const progress = (vh / 2 - (rect.top + rect.height / 2)) / Math.max(vh, 1);
        image.style.transform = `scale(1.07) translateY(${Math.max(-18, Math.min(18, progress * 18))}px)`;
      });
    }
    ticking = false;
  };

  const onScroll = () => {
    markScrolling();
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update);
  collectParallaxItems();
  update();
}

/* In-page navigation runs through Lenis so every jump shares the same easing
   and clears the sticky header. */
function setupAnchors() {
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    if (!link) return;
    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;
    const target = hash === '#top' ? null : document.querySelector(hash);
    if (hash !== '#top' && !target) return;
    event.preventDefault();
    const header = $('[data-header]');
    const offset = header ? -(Math.round(header.getBoundingClientRect().height) + 14) : 0;
    smoothScrollTo(hash === '#top' ? 0 : target, offset);
  });
}

function setupReveal() {
  const items = $$('.reveal, .reveal-mask, .reveal-stagger');
  if (!items.length) return;
  const activate = item => item.classList.add('is-visible');
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    items.forEach(activate);
    return;
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      activate(entry.target);
      observer.unobserve(entry.target);
    }
  }), {threshold:.01, rootMargin:'0px 0px -20px'});
  items.forEach(item => observer.observe(item));
  const activateVisible = () => {
    items.forEach(item => {
      if (item.classList.contains('is-visible')) return;
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 24) activate(item);
    });
    if (items.every(item => item.classList.contains('is-visible'))) window.removeEventListener('scroll', activateVisible);
  };
  activateVisible();
  window.addEventListener('scroll', activateVisible, {passive:true});
}

function setupMagnetic() {
  if (!window.matchMedia('(pointer:fine) and (hover:hover)').matches || prefersReducedMotion()) return;
  $$('.magnetic').forEach(button => {
    button.addEventListener('pointermove', event => { const rect = button.getBoundingClientRect(); const dx = (event.clientX - rect.left - rect.width/2) * .08; const dy = (event.clientY - rect.top - rect.height/2) * .16; button.style.transform = `translate(${dx}px,${dy}px)`; });
    button.addEventListener('pointerleave', () => { button.style.transform = ''; });
  });
}

function setupForm() {
  const form = $('#inquiry-form'); const status = $('.form-status');
  if (!form || !status) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.checkValidity()) { status.textContent = 'Please complete the required fields above.'; status.style.color = '#a35e52'; form.reportValidity(); return; }
    status.style.color = 'var(--forest)'; status.textContent = 'Thank you — your portfolio enquiry has been noted locally. Nothing was sent to a real agency.'; form.reset();
  });
}

function setupDialogs() {
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(dialog); });
    $('.dialog-close', dialog)?.addEventListener('click', () => closeDialog(dialog));
    dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(dialog); });
    dialog.addEventListener('close', () => clearDialogState(dialog));
  });
}

function init() {
  renderProperties(); renderArticles(); setupSignatureShowcase(); setupFilters(); setupMenu(); setupIntro(); setupAnchors(); setupScrollScenes(); setupReveal(); setupMagnetic(); setupForm(); setupDialogs();
  $$('[data-year]').forEach(item => item.textContent = new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', init);
