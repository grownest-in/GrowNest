// GrowNest - Master Application Bootstrapper & Interactions

document.addEventListener('DOMContentLoaded', function () {
  // 1. Initialize Ambient Particle Canvas
  initAmbientCanvas();

  // 2. Navigation Scroll Listener
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // 3. Mobile Hamburger Menu
  const hamburger = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');

  function toggleDrawer() {
    const isOpen = drawer?.classList.toggle('open');
    backdrop?.classList.toggle('active', isOpen);
    hamburger?.classList.toggle('open', isOpen);
  }

  hamburger?.addEventListener('click', toggleDrawer);
  backdrop?.addEventListener('click', toggleDrawer);

  // 4. Cart Count Synchronizer
  function updateNavCartCount() {
    const count = GrowNestStore.getCartCount();
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
      b.classList.add('bump');
      setTimeout(() => b.classList.remove('bump'), 300);
    });
  }

  window.addEventListener('cart:updated', updateNavCartCount);
  updateNavCartCount();

  // 5. Global Search Modal
  const searchBackdrop = document.getElementById('search-modal-backdrop');
  const searchInput = document.getElementById('search-modal-input');
  const searchResults = document.getElementById('search-results-list');
  const searchOpenBtns = document.querySelectorAll('[data-open-search]');
  const searchCloseBtn = document.getElementById('search-close-btn');

  function openSearch() {
    searchBackdrop?.classList.add('open');
    searchInput?.focus();
  }

  function closeSearch() {
    searchBackdrop?.classList.remove('open');
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '';
  }

  searchOpenBtns.forEach(btn => btn.addEventListener('click', openSearch));
  searchCloseBtn?.addEventListener('click', closeSearch);
  searchBackdrop?.addEventListener('click', (e) => {
    if (e.target === searchBackdrop) closeSearch();
  });

  // Keyboard shortcut Ctrl/Cmd + K
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
    }
  });

  // Search input filter
  searchInput?.addEventListener('input', function (e) {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      if (searchResults) searchResults.innerHTML = '';
      return;
    }

    const matches = [];

    // Search products
    GROWNEST_DATA.products.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.features.some(f => f.toLowerCase().includes(q))) {
        matches.push({
          title: p.name,
          subtitle: `Product • ₹${p.price.toLocaleString('en-IN')}`,
          hash: `#/products/${p.slug}`,
          img: p.image
        });
      }
    });

    // Search crops
    GROWNEST_DATA.crops.forEach(c => {
      if (c.name.toLowerCase().includes(q) || c.type.toLowerCase().includes(q)) {
        matches.push({
          title: `${c.icon} ${c.name}`,
          subtitle: `Crop Guide • Harvest in ${c.time}`,
          hash: `#/what-can-you-grow`,
          img: 'assets/images/product-basic.jpg'
        });
      }
    });

    // Search tech features
    if ('sensor telemetry water lighting ai plant doctor'.includes(q)) {
      matches.push({
        title: 'Live Environmental Technology',
        subtitle: 'Telemetry • Soil, PAR, Temp & Humidity',
        hash: `#/technology`,
        img: 'assets/images/hero.jpg'
      });
      matches.push({
        title: 'AI Plant Doctor Diagnostics',
        subtitle: 'Computer Vision • Neural Botany',
        hash: `#/ai-plant-doctor`,
        img: 'assets/images/app-mockup.jpg'
      });
    }

    if (searchResults) {
      if (matches.length === 0) {
        searchResults.innerHTML = `<div style="padding:1.5rem; text-align:center; color:var(--text-muted);">No matching systems or crops found for "${q}".</div>`;
      } else {
        searchResults.innerHTML = matches.map(m => `
          <div class="search-item" onclick="window.location.hash='${m.hash}'; document.getElementById('search-modal-backdrop').classList.remove('open');">
            <img src="${m.img}" alt="${m.title}" class="search-item-img" />
            <div>
              <div style="font-weight:600; color:#fff;">${m.title}</div>
              <div style="font-size:0.8rem; color:var(--accent-sage);">${m.subtitle}</div>
            </div>
          </div>
        `).join('');
      }
    }
  });

  // 6. Global Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    GrowNestStore.showToast({
      title: 'Subscribed to GrowNest Gazette',
      message: 'Welcome to the future of indoor living. 10% code sent to your inbox.',
      actionText: null
    });
    newsletterForm.reset();
  });

  // 7. Initialize Router
  GrowNestRouter.init();
});

// Ambient Floating Bio-Mote Particles
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(35, Math.floor(width / 35));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4 - 0.15, // slight upward float like oxygen/pollen
      color: Math.random() > 0.45 ? 'rgba(16, 185, 129,' : 'rgba(167, 139, 250,',
      alpha: Math.random() * 0.35 + 0.1
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color} ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}
