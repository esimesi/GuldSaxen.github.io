(() => {
  const siteHeader = document.getElementById('siteHeader');
  const menuButton = document.querySelector('.menu-toggle');
  const siteNavigation = document.getElementById('siteNav');
  const pageContent = document.querySelector('main');
  const siteFooter = document.querySelector('.site-footer');
  const mobileActions = document.querySelector('.mobile-actions');

  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Stäng meny' : 'Öppna meny');
    siteNavigation.classList.toggle('open', open);
    siteHeader.classList.toggle('menu-active', open);
    document.body.classList.toggle('menu-open', open);
    pageContent.inert = open;
    siteFooter.inert = open;
    mobileActions.inert = open;
  }

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  siteNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  window.matchMedia('(min-width: 800px)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });

  let scrollTicking = false;
  function updateHeader() {
    siteHeader.classList.toggle('scrolled', window.scrollY > 24);
    scrollTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateHeader);
      scrollTicking = true;
    }
  }, { passive: true });
  updateHeader();

  const styleCarousel = document.querySelector('.style-carousel');
  const stylePrevious = document.querySelector('.inspiration-prev');
  const styleNext = document.querySelector('.inspiration-next');

  function scrollStyles(direction) {
    const card = styleCarousel.querySelector('.style-card');
    const gap = parseFloat(getComputedStyle(styleCarousel).gap);
    styleCarousel.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  }

  function updateStyleControls() {
    const lastPosition = styleCarousel.scrollWidth - styleCarousel.clientWidth;
    stylePrevious.disabled = styleCarousel.scrollLeft <= 1;
    styleNext.disabled = styleCarousel.scrollLeft >= lastPosition - 1;
  }

  stylePrevious.addEventListener('click', () => scrollStyles(-1));
  styleNext.addEventListener('click', () => scrollStyles(1));
  styleCarousel.addEventListener('scroll', updateStyleControls, { passive: true });
  window.addEventListener('resize', updateStyleControls);
  updateStyleControls();

  const galleryButtons = [...document.querySelectorAll('[data-gallery-index]')];
  const galleryImages = galleryButtons.map((button) => {
    const image = button.querySelector('img');
    return { source: image.src, alt: image.alt };
  });
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  let activeImage = 0;
  let lastGalleryTrigger = null;
  let touchStartX = 0;

  function showImage(index) {
    activeImage = (index + galleryImages.length) % galleryImages.length;
    const image = galleryImages[activeImage];
    lightboxImage.src = image.source;
    lightboxImage.alt = image.alt;
  }

  function openGallery(index, trigger) {
    lastGalleryTrigger = trigger;
    showImage(index);
    lightbox.showModal();
    document.body.classList.add('menu-open');
  }

  function closeGallery() {
    lightbox.close();
  }

  galleryButtons.forEach((button, index) => {
    button.addEventListener('click', () => openGallery(index, button));
  });

  document.querySelector('.lightbox-close').addEventListener('click', closeGallery);
  document.querySelector('.lightbox-prev').addEventListener('click', () => showImage(activeImage - 1));
  document.querySelector('.lightbox-next').addEventListener('click', () => showImage(activeImage + 1));

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeGallery();
  });

  lightbox.addEventListener('close', () => {
    document.body.classList.remove('menu-open');
    if (lastGalleryTrigger) lastGalleryTrigger.focus();
  });

  lightbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showImage(activeImage - 1);
    if (event.key === 'ArrowRight') showImage(activeImage + 1);
  });

  lightbox.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 50) showImage(activeImage + (distance < 0 ? 1 : -1));
  }, { passive: true });

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('video').forEach((video) => video.pause());
  }
})();
