/* ============================================================
   La Table des 2 Chefs — Scripts principaux
   ============================================================ */

/* ── Mise à jour de l'année dans le footer ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Navigation sticky : ajout de la classe "scrolled" ── */
const header = document.querySelector('.site-header');
function updateNavState() {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNavState, { passive: true });
updateNavState();

/* ── Menu burger mobile ── */
const burger    = document.querySelector('.burger');
const navLinks  = document.querySelector('.nav-links');

function toggleMenu(open) {
  const isOpen = open ?? !navLinks.classList.contains('open');
  burger.classList.toggle('open', isOpen);
  navLinks.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

burger.addEventListener('click', () => toggleMenu());

/* Fermer le menu au clic sur un lien */
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

/* Fermer le menu si on redimensionne au-dessus du breakpoint */
window.addEventListener('resize', () => {
  if (window.innerWidth > 640) toggleMenu(false);
});

/* ── Animations au scroll (Intersection Observer) ── */
const revealElements = document.querySelectorAll('.reveal, .fade-in');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));

/* ── Onglets du menu ── */
const menuTabs   = document.querySelectorAll('.menu-tab');
const menuPanels = document.querySelectorAll('.menu-panel');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('aria-controls');

    menuTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    menuPanels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const panel = document.getElementById(target);
    if (panel) {
      panel.classList.add('active');

      /* Re-déclencher les animations pour les nouveaux éléments visibles */
      panel.querySelectorAll('.reveal').forEach(el => {
        if (!el.classList.contains('visible')) {
          setTimeout(() => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.92) {
              el.classList.add('visible');
            }
          }, 50);
        }
      });
    }
  });
});

/* ── Lien actif dans la nav au scroll ── */
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link:not(.nav-cta)');

function highlightNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', highlightNav, { passive: true });
