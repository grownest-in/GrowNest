// GrowNest - Client-Side Hash Router

const GrowNestRouter = (function () {
  const c = GrowNestComponents;

  const routes = {
    '': renderHome,
    '/': renderHome,
    '/products': renderProductsPage,
    '/products/basic': () => c.renderProductDetailPage('basic'),
    '/products/plus': () => c.renderProductDetailPage('plus'),
    '/products/pro': () => c.renderProductDetailPage('pro'),
    '/technology': () => c.renderTechnologyPage(),
    '/ai-plant-doctor': () => c.renderAIDoctorPage(),
    '/ecosystem': () => c.renderEcosystemPage(),
    '/sustainability': () => c.renderSustainabilityPage(),
    '/cart': () => c.renderCartPage(),
    '/checkout': () => c.renderCheckoutPage(),
    '/order-confirmation': () => c.renderOrderConfirmationPage(),
    '/faq': () => c.renderFAQPage(),
    '/contact': () => c.renderContactPage()
  };

  function renderHome() {
    return `
      ${c.renderHero()}
      ${c.renderProblemSection()}
      ${c.renderSolutionShowcase()}
      ${c.renderProductCards()}
      ${c.renderCropsSection()}
      ${c.renderQuizWizard()}
      ${c.renderComparisonTable()}
      ${c.renderAppMockupSection()}
      ${c.renderWhyGrowNest()}
      <!-- Final Brand Statement & Closing CTA -->
      <section class="section section-purple text-center" style="border-bottom:none;">
        <div class="container container-narrow">
          <span class="section-tag green">A New Paradigm</span>
          <h2 style="font-size:clamp(2.2rem, 4vw, 3.2rem); margin-bottom:1rem;">
            "Your garden doesn't need a backyard."
          </h2>
          <p class="text-lead text-muted" style="max-width:580px; margin:0 auto 2.5rem;">
            Join thousands of urban homes cultivating crisp, nutrient-dense herbs, vegetables, and greens 365 days a year.
          </p>
          <a href="#/products" class="btn btn-primary btn-lg">
            <span>Start Growing Smarter</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </section>
    `;
  }

  function renderProductsPage() {
    return `
      <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tag green">Complete Catalog</span>
            <h1>The GrowNest Collection</h1>
            <p class="text-lead text-muted" style="max-width:640px; margin:0 auto;">
              Explore our autonomous indoor micro-farms and modular accessories.
            </p>
          </div>
          ${c.renderProductCards()}
          ${c.renderComparisonTable()}
        </div>
      </div>
    `;
  }

  function updateActiveNav(hash) {
    const clean = hash.replace('#', '') || '/';
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '') || '';
      if (href === clean || (clean.startsWith(href) && href !== '/' && href !== '')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile drawer if open
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const hamburger = document.getElementById('hamburger-btn');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    if (hamburger) hamburger.classList.remove('open');

    // Sticky mobile bottom bar only on PDP
    const mobBar = document.getElementById('mobile-pdp-bar');
    if (mobBar) {
      if (clean.startsWith('/products/') && clean !== '/products') {
        mobBar.classList.add('visible');
      } else {
        mobBar.classList.remove('visible');
      }
    }
  }

  function updatePageTitle(hash) {
    const titles = {
      '': 'GrowNest — Your Smart Indoor Farm',
      '/': 'GrowNest — Your Smart Indoor Farm',
      '/products': 'GrowNest — Smart Indoor Farm Systems',
      '/products/basic': 'GrowNest Basic — Tabletop Smart Planter',
      '/products/plus': 'GrowNest Plus — 2-Tier Automated Micro-Farm',
      '/products/pro': 'GrowNest Pro — Elite Vertical Farm',
      '/technology': 'GrowNest — Live Environmental Technology',
      '/ai-plant-doctor': 'GrowNest — AI Plant Doctor Diagnostics',
      '/ecosystem': 'GrowNest — Modular Growing Ecosystem',
      '/sustainability': 'GrowNest — Conscious Sustainable Agriculture',
      '/cart': 'Your Shopping Cart — GrowNest',
      '/checkout': 'Secure Checkout — GrowNest',
      '/order-confirmation': 'Order Confirmed — GrowNest',
      '/faq': 'GrowNest FAQ — Answers & Guides',
      '/contact': 'Contact GrowNest — Botanical Consultation'
    };
    const key = hash.replace('#', '') || '/';
    document.title = titles[key] || 'GrowNest — Smart Indoor Farming';
  }

  function handleRoute() {
    const rawHash = window.location.hash || '#/';
    const cleanHash = rawHash.replace('#', '');
    const appRoot = document.getElementById('app-root');

    const renderFunc = routes[cleanHash] || renderHome;

    if (appRoot) {
      appRoot.innerHTML = renderFunc();
      window.scrollTo({ top: 0, behavior: 'instant' });
      updateActiveNav(rawHash);
      updatePageTitle(rawHash);
    }
  }

  return {
    init: function () {
      window.addEventListener('hashchange', handleRoute);
      handleRoute();
    }
  };
})();
