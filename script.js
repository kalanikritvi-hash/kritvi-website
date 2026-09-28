const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const mainShot = document.querySelector('.browser.active img');
document.querySelectorAll('.thumb').forEach(btn => {
  btn.addEventListener('click', () => {
    if (mainShot) mainShot.src = btn.dataset.shot;
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');
const openLightbox = (src) => {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
};

document.querySelectorAll('.browser, .thumb').forEach(btn => {
  btn.addEventListener('dblclick', () => openLightbox(btn.dataset.shot || btn.querySelector('img').src));
});

document.querySelector('.browser')?.addEventListener('click', e => openLightbox(e.currentTarget.querySelector('img').src));

document.querySelector('.lightbox-close')?.addEventListener('click', () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
});
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
  }
});
