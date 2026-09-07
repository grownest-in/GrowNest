// GrowNest - Modular UI Components & Renderers

const GrowNestComponents = (function () {
  const d = GROWNEST_DATA;
  const store = GrowNestStore;

  return {
    // 1. Hero Section
    renderHero: function () {
      return `
        <section class="section section-hero">
          <div class="container">
            <div class="hero-layout">
              <div class="hero-content">
                <div class="hero-badge">
                  <span class="dot"></span>
                  <span>AI-Powered Autonomous Indoor Agriculture</span>
                </div>
                <h1 class="hero-title">
                  Grow Fresh.<br />
                  <span class="text-gradient-emerald">Grow Smart.</span><br />
                  Grow Anywhere.
                </h1>
                <p class="hero-desc">
                  ${d.brand.taglineSubtitle}
                </p>
                <div class="hero-actions">
                  <a href="#/products" class="btn btn-primary btn-lg">
                    <span>Shop GrowNest</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a href="#/technology" class="btn btn-secondary btn-lg">
                    <span>Explore Technology</span>
                  </a>
                </div>
                <div class="hero-pills">
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--accent-emerald)"><polyline points="20 6 9 17 4 12"></polyline></svg> Smart</span>
                  <span>•</span>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--accent-emerald)"><polyline points="20 6 9 17 4 12"></polyline></svg> Sustainable</span>
                  <span>•</span>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--accent-emerald)"><polyline points="20 6 9 17 4 12"></polyline></svg> Automated</span>
                  <span>•</span>
                  <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--accent-purple-light)"><polyline points="20 6 9 17 4 12"></polyline></svg> AI-Powered</span>
                </div>
              </div>

              <div class="hero-media-wrap">
                <div class="hero-media">
                  <img src="assets/images/hero.jpg" alt="GrowNest Smart Indoor Farm in Luxury Modern Apartment" />
                </div>
                <div class="floating-stat-card">
                  <div class="floating-stat-icon">
                    🌱
                  </div>
                  <div>
                    <div style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em;">Live Harvest Cycle</div>
                    <div style="font-weight:700; color:#fff; font-size:1.1rem;">Day 18: Peak Vegetative Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // 2. Problem Section
    renderProblemSection: function () {
      return `
        <section class="section section-charcoal">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag purple">The Challenge</span>
              <h2>Why should the weather decide what you grow?</h2>
              <p class="text-lead text-muted" style="max-width:680px; margin:0 auto;">
                Traditional gardening leaves your fresh food vulnerable to outdoor unpredictability, hectic work schedules, and urban spatial limitations.
              </p>
            </div>

            <div class="problem-solution-grid">
              <div class="comparison-box problem-box">
                <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
                  <span style="font-size:1.6rem;">🌧️</span>
                  <h3 style="color:#ef4444;">Outdoor & Traditional Pitfalls</h3>
                </div>
                <ul class="point-list">
                  <li class="point-item">
                    <div class="point-icon">✕</div>
                    <div>
                      <strong>Unpredictable weather & heatwaves</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Sudden frost, monsoons, or extreme summer heat scorch delicate seedlings.</p>
                    </div>
                  </li>
                  <li class="point-item">
                    <div class="point-icon">✕</div>
                    <div>
                      <strong>Limited natural sunlight in modern apartments</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">North-facing windows and high-rise shadows starve plants of light energy.</p>
                    </div>
                  </li>
                  <li class="point-item">
                    <div class="point-icon">✕</div>
                    <div>
                      <strong>Forgetting to water or fatal overwatering</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Root rot and dehydration remain the #1 cause of indoor plant mortality.</p>
                    </div>
                  </li>
                  <li class="point-item">
                    <div class="point-icon">✕</div>
                    <div>
                      <strong>Lack of space & busy schedules</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">No backyard, dirty soil bags, and frequent travel make upkeep frustrating.</p>
                    </div>
                  </li>
                  <li class="point-item">
                    <div class="point-icon">✕</div>
                    <div>
                      <strong>Difficulty diagnosing plant diseases</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Yellowing leaves and pests leave growers guessing what nutrients are lacking.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="comparison-box solution-box">
                <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
                  <span style="font-size:1.6rem;">🌱</span>
                  <h3 class="text-gradient-emerald">The GrowNest Smart Solution</h3>
                </div>
                <ul class="point-list">
                  <li class="point-item">
                    <div class="point-icon">✓</div>
                    <div>
                      <strong>Climate-insulated indoor cultivation</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Perfect micro-climates unaffected by torrential rains, smog, or winter freezes.</p>
                    </div>
                  </li>
                  <li class="point-item">
                    <div class="point-icon">✓</div>
                    <div>
                      <strong>Precision photosynthetic PAR LED lighting</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Engineered light spectrums fuel vigorous photosynthesis in pitch-black rooms.</p>
                    </div>
                  </li>
                  <li class="point-item">
                    <div class="point-icon">✓</div>
                    <div>
                      <strong>Closed-loop autonomous irrigation</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Precision moisture probes release exact hydration only when roots demand it.</p>
                    </div>
                  </li>
                  <li class="point-item">
                    <div class="point-icon">✓</div>
                    <div>
                      <strong>Modular, soil-free clean footprint</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Fits effortlessly on countertops and vertical walls without mud, mess, or weeds.</p>
                    </div>
                  </li>
                  <li class="point-item">
                    <div class="point-icon">✓</div>
                    <div>
                      <strong>AI Plant Doctor diagnostics</strong>
                      <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Computer vision scans leaves and autocorrects nutrient levels in real time.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // 3. Solution Interactive Showcase
    renderSolutionShowcase: function () {
      return `
        <section class="section section-purple">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag green">Engineered Ecology</span>
              <h2>Meet your smart indoor farm.</h2>
              <p class="text-lead text-muted" style="max-width:720px; margin:0 auto;">
                A symphony of precision sensors, full spectrum lighting, ultrasonic misting, and intelligent controls working silently in your home.
              </p>
            </div>

            <div class="showcase-stage">
              <div class="showcase-model-tabs">
                <button class="showcase-model-tab" onclick="GrowNestComponents.switchShowcaseModel('basic', this)">GrowNest Basic</button>
                <button class="showcase-model-tab active" onclick="GrowNestComponents.switchShowcaseModel('plus', this)">GrowNest Plus</button>
                <button class="showcase-model-tab" onclick="GrowNestComponents.switchShowcaseModel('pro', this)">GrowNest Pro</button>
              </div>

              <div class="showcase-img-wrap">
                <img id="showcase-main-img" src="assets/images/product-plus.jpg" alt="GrowNest Plus Smart Farm Unit" class="showcase-center-img" />
              </div>

              <div id="showcase-model-caption" style="font-size:0.95rem; font-weight:600; color:var(--accent-sage); margin-top:1rem;">
                GrowNest Plus — 2-tier automated micro-farm with touchscreen and mist irrigation.
              </div>

              <div class="showcase-feature-pills">
                <div class="showcase-pill-card">
                  <span style="font-size:1.5rem;">💧</span>
                  <div>
                    <div style="font-weight:700; color:#fff; font-size:0.92rem;">Automatic Sprinklers</div>
                    <div class="text-muted" style="font-size:0.8rem;">Misting system keeps plants continuously hydrated without root rot.</div>
                  </div>
                </div>

                <div class="showcase-pill-card">
                  <span style="font-size:1.5rem;">☀️</span>
                  <div>
                    <div style="font-weight:700; color:#fff; font-size:0.92rem;">UV LED Panels</div>
                    <div class="text-muted" style="font-size:0.8rem;">Full spectrum UV & LED light optimized for vigorous photosynthesis.</div>
                  </div>
                </div>

                <div class="showcase-pill-card">
                  <span style="font-size:1.5rem;">💨</span>
                  <div>
                    <div style="font-weight:700; color:#fff; font-size:0.92rem;">Air Circulation Fan</div>
                    <div class="text-muted" style="font-size:0.8rem;">Ensures steady fresh air exchange and prevents stagnant moisture pockets.</div>
                  </div>
                </div>

                <div class="showcase-pill-card">
                  <span style="font-size:1.5rem;">🌡️</span>
                  <div>
                    <div style="font-weight:700; color:#fff; font-size:0.92rem;">Temp & Humidity Probes</div>
                    <div class="text-muted" style="font-size:0.8rem;">Monitors real-time microclimate so stomata transpire smoothly.</div>
                  </div>
                </div>

                <div class="showcase-pill-card">
                  <span style="font-size:1.5rem;">📊</span>
                  <div>
                    <div style="font-weight:700; color:#fff; font-size:0.92rem;">Smart Control Panel</div>
                    <div class="text-muted" style="font-size:0.8rem;">Touchscreen shows health stats, soil moisture %, and irrigation timers.</div>
                  </div>
                </div>

                <div class="showcase-pill-card">
                  <span style="font-size:1.5rem;">🌊</span>
                  <div>
                    <div style="font-weight:700; color:#fff; font-size:0.92rem;">Water Tank & Filter</div>
                    <div class="text-muted" style="font-size:0.8rem;">Built-in filtration keeps water safe and clean for multi-week growing cycles.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    switchShowcaseModel: function (modelId, btn) {
      document.querySelectorAll('.showcase-model-tab').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      const img = document.getElementById('showcase-main-img');
      const caption = document.getElementById('showcase-model-caption');
      const model = d.products.find(p => p.id === modelId) || d.products[1];
      if (img) {
        img.style.opacity = '0.3';
        setTimeout(() => {
          img.src = model.image;
          img.alt = model.name;
          img.style.opacity = '1';
        }, 150);
      }
      if (caption) {
        caption.textContent = `${model.name} — ${model.subtitle}`;
      }
    },

    // 4. Product Range 3-Card Lineup
    renderProductCards: function () {
      return `
        <section class="section" id="product-lineup">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag green">Curated Systems</span>
              <h2>Choose Your GrowNest System</h2>
              <p class="text-lead text-muted" style="max-width:620px; margin:0 auto;">
                Engineered for every living space — from urban kitchen countertops to vertical culinary sanctuaries.
              </p>
            </div>

            <div class="grid grid-3">
              ${d.products.map(p => `
                <div class="product-card ${p.isPopular ? 'featured' : ''}">
                  <div class="product-card-topbar">
                    <span class="badge ${p.badgeClass}">${p.badge}</span>
                    <span class="product-card-rating">★ ${p.rating} (${p.reviewsCount})</span>
                  </div>
                  <div class="product-card-img-wrap">
                    <img src="${p.image}" alt="${p.name}" class="product-card-img" />
                  </div>
                  <div class="product-card-body">
                    <h3 class="product-card-title">${p.name}</h3>
                    <div class="product-card-subtitle">${p.tagline}</div>
                    <div class="product-card-price">
                      <span>₹${p.price.toLocaleString('en-IN')}</span>
                      <span class="mrp">₹${p.mrp.toLocaleString('en-IN')}</span>
                    </div>
                    <ul class="product-feature-list">
                      ${p.features.map(f => `
                        <li class="product-feature-item">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>${f}</span>
                        </li>
                      `).join('')}
                    </ul>
                    <div style="display:flex; gap:0.75rem; margin-top:auto;">
                      <a href="#/products/${p.slug}" class="btn btn-secondary" style="flex:1;">
                        View ${p.name.replace('GrowNest ', '')}
                      </a>
                      <button onclick="GrowNestStore.addItem(GROWNEST_DATA.products.find(x => x.id === '${p.id}'), 1)" class="btn btn-primary" title="Add to Cart">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    },

    // 5. Product Detail Page
    renderProductDetailPage: function (slug) {
      const product = d.products.find(p => p.slug === slug) || d.products[1];
      const isWish = store.isWishlisted(product.id);

      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container">
            <div style="margin-bottom:1.5rem;">
              <a href="#/products" class="text-muted" style="display:inline-flex; align-items:center; gap:0.5rem; font-size:0.9rem;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                Back to All Systems
              </a>
            </div>

            <div class="pdp-layout">
              <!-- Left: Gallery -->
              <div class="gallery-container">
                <div class="gallery-main-wrap">
                  <img id="pdp-main-image" src="${product.gallery[0].url}" alt="${product.name}" class="gallery-main-img" />
                </div>
                <div class="gallery-thumbs">
                  ${product.gallery.map((g, idx) => `
                    <button class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="GrowNestComponents.switchPdpImage('${g.url}', this)">
                      <img src="${g.url}" alt="${g.title}" />
                      <span class="thumb-label">${g.title}</span>
                    </button>
                  `).join('')}
                </div>

                <!-- Customizer Widget preview on PDP -->
                <div class="customizer-box" style="margin-top:1.5rem;">
                  <h4 style="margin-bottom:0.4rem;">Chassis Shell Customizer</h4>
                  <p class="text-muted" style="font-size:0.85rem;">Select your architectural anodized finish:</p>
                  <div class="swatch-group">
                    <button class="swatch-btn active" style="background:#140c24;" title="Obsidian Midnight" onclick="GrowNestComponents.setShellColor('#140c24', this)"></button>
                    <button class="swatch-btn" style="background:#064e3b;" title="Forest Sage" onclick="GrowNestComponents.setShellColor('#064e3b', this)"></button>
                    <button class="swatch-btn" style="background:#334155;" title="Lunar Slate" onclick="GrowNestComponents.setShellColor('#334155', this)"></button>
                    <button class="swatch-btn" style="background:#f1f5f9;" title="Pure Ceramic" onclick="GrowNestComponents.setShellColor('#f1f5f9', this)"></button>
                  </div>
                  <div id="customizer-feedback" class="text-muted" style="font-size:0.8rem;">
                    Active finish: <strong>Obsidian Midnight (Matte Powder Coat)</strong>
                  </div>
                </div>
              </div>

              <!-- Right: Product Info -->
              <div class="pdp-info-col">
                <span class="badge ${product.badgeClass}" style="margin-bottom:0.75rem;">${product.badge}</span>
                <h1 class="pdp-title">${product.name}</h1>
                <div class="pdp-tagline">${product.tagline}</div>

                <div class="pdp-price-wrap">
                  <span class="pdp-price">₹${product.price.toLocaleString('en-IN')}</span>
                  <span class="mrp" style="font-size:1.2rem; color:var(--text-muted); text-decoration:line-through;">₹${product.mrp.toLocaleString('en-IN')}</span>
                  <span class="badge badge-eco" style="margin-left:auto;">Save ₹${(product.mrp - product.price).toLocaleString('en-IN')}</span>
                </div>

                <p class="text-secondary" style="font-size:1.05rem; line-height:1.7; margin-bottom:1.5rem;">
                  ${product.description}
                </p>

                <div style="margin-bottom:1.5rem;">
                  <div style="font-size:0.85rem; font-weight:600; color:var(--text-secondary); margin-bottom:0.6rem;">Key Capabilities:</div>
                  <ul class="product-feature-list" style="margin-bottom:0;">
                    ${product.features.map(f => `
                      <li class="product-feature-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>${f}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <!-- Quantity & Actions -->
                <div style="display:flex; align-items:center; gap:1rem; margin-top:2rem;">
                  <div class="quantity-stepper">
                    <button class="qty-btn" onclick="GrowNestComponents.adjustPdpQty(-1)">−</button>
                    <span id="pdp-qty-display" class="qty-val">1</span>
                    <button class="qty-btn" onclick="GrowNestComponents.adjustPdpQty(1)">+</button>
                  </div>
                  <button id="pdp-wishlist-btn" class="btn btn-secondary btn-icon" onclick="GrowNestComponents.togglePdpWishlist('${product.id}')" title="Wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWish ? '#ef4444' : 'none'}" stroke="${isWish ? '#ef4444' : 'currentColor'}" stroke-width="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>

                <div class="pdp-actions-row">
                  <button onclick="GrowNestComponents.addCurrentPdpToCart('${product.id}')" class="btn btn-secondary btn-lg btn-block">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span>Add to Cart</span>
                  </button>
                  <button onclick="GrowNestComponents.buyCurrentPdpNow('${product.id}')" class="btn btn-primary btn-lg btn-block">
                    <span>Buy Now</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>

                <div style="font-size:0.85rem; color:var(--accent-emerald-light); display:flex; align-items:center; gap:0.5rem; margin-top:0.75rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>In Stock • ${product.leadTime} • Free Express Shipping</span>
                </div>

                <!-- Hardware Specifications -->
                <div class="pdp-specs-grid">
                  ${Object.entries(product.specs).map(([k, v]) => `
                    <div class="pdp-spec-box">
                      <div class="pdp-spec-label">${k}</div>
                      <div class="pdp-spec-value">${v}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sticky Mobile Action Bar -->
        <div class="mobile-action-bar visible" id="mobile-pdp-bar">
          <div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${product.name}</div>
            <div style="font-weight:800; color:#ffffff; font-size:1.15rem;">₹${product.price.toLocaleString('en-IN')}</div>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button onclick="GrowNestComponents.addCurrentPdpToCart('${product.id}')" class="btn btn-sm btn-secondary">
              Add to Cart
            </button>
            <button onclick="GrowNestComponents.buyCurrentPdpNow('${product.id}')" class="btn btn-sm btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      `;
    },

    switchPdpImage: function (url, btn) {
      const mainImg = document.getElementById('pdp-main-image');
      if (mainImg) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = url;
          mainImg.style.opacity = '1';
        }, 150);
      }
      document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
    },

    setShellColor: function (hex, btn) {
      document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      const feedback = document.getElementById('customizer-feedback');
      const mainWrap = document.querySelector('.gallery-main-wrap');
      if (mainWrap) {
        mainWrap.style.boxShadow = `0 0 35px ${hex}88`;
      }
      if (feedback) {
        feedback.innerHTML = `Chassis finish updated to custom hue: <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:${hex}; vertical-align:middle;"></span>`;
      }
    },

    pdpQty: 1,
    adjustPdpQty: function (delta) {
      this.pdpQty = Math.max(1, this.pdpQty + delta);
      const disp = document.getElementById('pdp-qty-display');
      if (disp) disp.textContent = this.pdpQty;
    },

    addCurrentPdpToCart: function (productId) {
      const product = d.products.find(p => p.id === productId);
      if (product) {
        store.addItem(product, this.pdpQty);
      }
    },

    buyCurrentPdpNow: function (productId) {
      const product = d.products.find(p => p.id === productId);
      if (product) {
        store.buyNow(product, this.pdpQty);
      }
    },

    togglePdpWishlist: function (productId) {
      const isWish = store.toggleWishlist(productId);
      const btn = document.getElementById('pdp-wishlist-btn');
      if (btn) {
        btn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWish ? '#ef4444' : 'none'}" stroke="${isWish ? '#ef4444' : 'currentColor'}" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        `;
      }
    },

    // 6. Crops Section ("What Can You Grow?")
    renderCropsSection: function () {
      return `
        <section class="section section-green-tint" id="what-can-you-grow">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag green">From Seeds to Harvest</span>
              <h2>What can you grow in GrowNest?</h2>
              <p class="text-lead text-muted" style="max-width:680px; margin:0 auto;">
                Grow a vibrant variety of culinary crops indoors, tailored to your diet and your GrowNest setup.
              </p>
            </div>

            <div class="crop-filters">
              <button class="crop-filter-btn active" onclick="GrowNestComponents.filterCrops('all', this)">All Crops</button>
              <button class="crop-filter-btn" onclick="GrowNestComponents.filterCrops('herbs', this)">Herbs</button>
              <button class="crop-filter-btn" onclick="GrowNestComponents.filterCrops('vegetables', this)">Vegetables</button>
              <button class="crop-filter-btn" onclick="GrowNestComponents.filterCrops('fruits', this)">Small Fruits</button>
              <button class="crop-filter-btn" onclick="GrowNestComponents.filterCrops('greens', this)">Leafy Greens</button>
              <button class="crop-filter-btn" onclick="GrowNestComponents.filterCrops('microgreens', this)">Microgreens</button>
            </div>

            <div class="grid grid-4" id="crops-grid">
              ${d.crops.map(c => `
                <div class="crop-card" data-type="${c.type}">
                  <div class="crop-icon-banner">${c.icon}</div>
                  <h4 style="margin-bottom:0.25rem;">${c.name}</h4>
                  <p class="text-muted" style="font-size:0.85rem; margin-bottom:0.75rem;">${c.note}</p>
                  <div class="crop-meta-row">
                    <span>Harvest: <strong>${c.time}</strong></span>
                    <span>Light: <strong>${c.light}</strong></span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    },

    filterCrops: function (type, btn) {
      document.querySelectorAll('.crop-filter-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      const cards = document.querySelectorAll('.crop-card');
      cards.forEach(card => {
        if (type === 'all' || card.dataset.type === type) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    },

    // 7. Interactive Recommendation Quiz
    quizStep: 0,
    quizScores: { basic: 0, plus: 0, pro: 0 },
    renderQuizWizard: function () {
      return `
        <section class="section section-purple" id="recommendation-quiz">
          <div class="container container-narrow">
            <div class="section-header text-center">
              <span class="section-tag purple">Interactive Guide</span>
              <h2>Not sure which GrowNest is right for you?</h2>
              <p class="text-lead text-muted">
                Answer 4 quick lifestyle questions and our smart engine will match you with your ideal indoor farming model.
              </p>
            </div>

            <div class="quiz-card" id="quiz-container">
              <div class="quiz-progress">
                <div class="quiz-progress-fill" id="quiz-progress-bar" style="width: 25%;"></div>
              </div>
              <div id="quiz-step-content">
                ${this.renderQuizStep(0)}
              </div>
            </div>
          </div>
        </section>
      `;
    },

    renderQuizStep: function (stepIndex) {
      const q = d.quizQuestions[stepIndex];
      return `
        <div style="font-size:0.85rem; color:var(--accent-emerald-light); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.5rem;">
          Question ${stepIndex + 1} of ${d.quizQuestions.length}
        </div>
        <h3 style="margin-bottom:1.5rem;">${q.question}</h3>
        <div class="quiz-options-grid">
          ${q.options.map((opt, i) => `
            <button class="quiz-opt-btn" onclick="GrowNestComponents.handleQuizChoice('${opt.score}', ${stepIndex})">
              <span style="display:inline-flex; width:28px; height:28px; border-radius:50%; background:rgba(255,255,255,0.06); align-items:center; justify-content:center; font-size:0.85rem; font-weight:700;">${String.fromCharCode(65 + i)}</span>
              <span>${opt.label}</span>
            </button>
          `).join('')}
        </div>
      `;
    },

    handleQuizChoice: function (scoreTier, stepIndex) {
      this.quizScores[scoreTier] += 1;
      const nextStep = stepIndex + 1;
      const pBar = document.getElementById('quiz-progress-bar');
      const container = document.getElementById('quiz-step-content');

      if (nextStep < d.quizQuestions.length) {
        if (pBar) pBar.style.width = `${((nextStep + 1) / d.quizQuestions.length) * 100}%`;
        if (container) container.innerHTML = this.renderQuizStep(nextStep);
      } else {
        // Recommend
        if (pBar) pBar.style.width = '100%';
        let recommendedId = 'plus';
        if (this.quizScores.basic > this.quizScores.plus && this.quizScores.basic > this.quizScores.pro) {
          recommendedId = 'basic';
        } else if (this.quizScores.pro >= this.quizScores.plus && this.quizScores.pro >= this.quizScores.basic) {
          recommendedId = 'pro';
        }

        const match = d.products.find(p => p.id === recommendedId);
        if (container) {
          container.innerHTML = `
            <div style="text-align:center; padding:1rem 0;">
              <span class="badge badge-popular" style="margin-bottom:1rem;">Your AI Match Found</span>
              <h2 style="font-size:2.2rem; margin-bottom:0.5rem;">We recommend ${match.name}</h2>
              <p class="text-muted" style="max-width:540px; margin:0 auto 1.75rem;">
                Based on your crop preference, available space, and desire for automation, the <strong>${match.name}</strong> offers the ideal synergy for your home.
              </p>

              <div style="max-width:380px; margin:0 auto 2rem; background:rgba(0,0,0,0.4); border-radius:var(--radius-lg); overflow:hidden; border:1px solid var(--border-green);">
                <div style="width:100%; aspect-ratio:1/1; display:flex; align-items:center; justify-content:center; padding:0.75rem; background:radial-gradient(circle at 50% 50%, rgba(28, 17, 50, 0.7) 0%, rgba(10, 5, 20, 0.95) 100%);">
                  <img src="${match.image}" alt="${match.name}" style="width:100%; height:100%; object-fit:contain;" />
                </div>
                <div style="padding:1.25rem; text-align:left; border-top:1px solid rgba(255,255,255,0.06);">
                  <div style="font-weight:700; color:#fff; font-size:1.2rem;">${match.name}</div>
                  <div style="color:var(--accent-sage); font-size:0.88rem; margin-bottom:0.5rem;">${match.tagline}</div>
                  <div style="font-weight:800; font-size:1.4rem; color:#fff;">₹${match.price.toLocaleString('en-IN')}</div>
                </div>
              </div>

              <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
                <a href="#/products/${match.slug}" class="btn btn-secondary">Explore Details</a>
                <button onclick="GrowNestStore.addItem(GROWNEST_DATA.products.find(x => x.id === '${match.id}'), 1)" class="btn btn-primary">
                  Add to Cart
                </button>
                <button onclick="GrowNestComponents.resetQuiz()" class="btn btn-outline" style="padding:0.75rem 1rem;">
                  Retake Quiz
                </button>
              </div>
            </div>
          `;
        }
      }
    },

    resetQuiz: function () {
      this.quizScores = { basic: 0, plus: 0, pro: 0 };
      const pBar = document.getElementById('quiz-progress-bar');
      const container = document.getElementById('quiz-step-content');
      if (pBar) pBar.style.width = '25%';
      if (container) container.innerHTML = this.renderQuizStep(0);
    },

    // 8. Product Comparison Table (16 Features)
    renderComparisonTable: function () {
      return `
        <section class="section section-charcoal" id="product-comparison">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag green">Comprehensive Matrix</span>
              <h2>Detailed Product Comparison</h2>
              <p class="text-lead text-muted" style="max-width:680px; margin:0 auto;">
                Compare all engineering specifications across the Basic, Plus, and Pro systems.
              </p>
            </div>

            <div class="comparison-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th style="width: 34%;">Feature / Capability</th>
                    <th style="width: 22%;">
                      <div>GrowNest Basic</div>
                      <div style="font-size:0.85rem; font-weight:400; color:var(--text-muted);">₹3,499</div>
                    </th>
                    <th class="col-highlight" style="width: 24%;">
                      <div style="display:flex; align-items:center; gap:0.4rem;">
                        <span>GrowNest Plus</span>
                        <span class="badge badge-popular" style="font-size:0.65rem;">Recommended</span>
                      </div>
                      <div style="font-size:0.85rem; font-weight:400; color:var(--accent-sage);">₹6,999</div>
                    </th>
                    <th style="width: 20%;">
                      <div>GrowNest Pro</div>
                      <div style="font-size:0.85rem; font-weight:400; color:var(--text-muted);">₹11,999</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${d.comparisonMatrix.map(row => `
                    <tr>
                      <td><strong>${row.feature}</strong></td>
                      <td>${this.formatCell(row.basic)}</td>
                      <td class="col-highlight">${this.formatCell(row.plus)}</td>
                      <td>${this.formatCell(row.pro)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div style="text-align:center; margin-top:2rem;">
              <a href="#/products" class="btn btn-primary">
                Browse All Models
              </a>
            </div>
          </div>
        </section>
      `;
    },

    formatCell: function (val) {
      if (val === true) return '<span class="check-icon">✓ Included</span>';
      if (val === false) return '<span class="cross-icon">—</span>';
      return `<span style="font-weight:600; color:#fff;">${val}</span>`;
    },

    // 9. Mobile App Section
    renderAppMockupSection: function () {
      return `
        <section class="section section-purple">
          <div class="container">
            <div class="hero-layout" style="align-items:center;">
              <div>
                <span class="section-tag purple">Connected Agriculture</span>
                <h2>Your garden. In your pocket.</h2>
                <p class="text-lead text-muted" style="margin-bottom:1.75rem;">
                  The GrowNest companion app pairs seamlessly with your farm via BLE & Wi-Fi. Track soil moisture, water levels, light cycles, and receive AI health diagnostics wherever you are.
                </p>

                <div class="grid grid-2" style="gap:1rem; margin-bottom:2rem;">
                  <div class="card-glass" style="padding:1.25rem;">
                    <div style="font-size:1.4rem; margin-bottom:0.4rem;">📱</div>
                    <div style="font-weight:700; color:#fff; font-size:1.05rem;">Live Telemetry</div>
                    <p class="text-muted" style="font-size:0.85rem; margin-bottom:0;">Real-time PAR, temperature, and moisture curves.</p>
                  </div>
                  <div class="card-glass" style="padding:1.25rem;">
                    <div style="font-size:1.4rem; margin-bottom:0.4rem;">🔔</div>
                    <div style="font-weight:700; color:#fff; font-size:1.05rem;">Smart Reminders</div>
                    <p class="text-muted" style="font-size:0.85rem; margin-bottom:0;">Alerts you only when the water reservoir hits 15%.</p>
                  </div>
                  <div class="card-glass" style="padding:1.25rem;">
                    <div style="font-size:1.4rem; margin-bottom:0.4rem;">🤖</div>
                    <div style="font-weight:700; color:#fff; font-size:1.05rem;">AI Plant Doctor</div>
                    <p class="text-muted" style="font-size:0.85rem; margin-bottom:0;">Snapshot diagnostic scans right through your phone camera.</p>
                  </div>
                  <div class="card-glass" style="padding:1.25rem;">
                    <div style="font-size:1.4rem; margin-bottom:0.4rem;">📅</div>
                    <div style="font-weight:700; color:#fff; font-size:1.05rem;">Harvest Forecasting</div>
                    <p class="text-muted" style="font-size:0.85rem; margin-bottom:0;">Predicts exact peak flavor dates for culinary herbs.</p>
                  </div>
                </div>

                <div style="display:flex; gap:1rem;">
                  <span class="badge badge-eco">iOS & Android Compatible</span>
                  <span class="badge badge-pro">Zero Subscription Fees</span>
                </div>
              </div>

              <div style="text-align:center;">
                <img src="assets/images/app-mockup.jpg" alt="GrowNest Mobile App UI" style="max-width:440px; width:100%; border-radius:var(--radius-xl); box-shadow:0 25px 60px rgba(0,0,0,0.7), 0 0 35px rgba(139,92,246,0.25);" class="animate-float" />
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // 10. Why GrowNest? (Traditional Planter vs GrowNest)
    renderWhyGrowNest: function () {
      return `
        <section class="section section-green-tint">
          <div class="container container-narrow">
            <div class="section-header text-center">
              <span class="section-tag green">Comparative Advantage</span>
              <h2>More than a planter.</h2>
              <p class="text-lead text-muted">
                Why standard clay pots and manual gardening fail in modern living environments.
              </p>
            </div>

            <div class="problem-solution-grid">
              <div class="card-glass" style="border-color:rgba(255,255,255,0.08);">
                <h3 style="color:var(--text-muted); margin-bottom:1.25rem;">Traditional Pot</h3>
                <ul class="point-list">
                  <li class="point-item"><span style="color:#ef4444;">✕</span> <span>Manual erratic watering</span></li>
                  <li class="point-item"><span style="color:#ef4444;">✕</span> <span>Zero environmental monitoring</span></li>
                  <li class="point-item"><span style="color:#ef4444;">✕</span> <span>Weather and season dependent</span></li>
                  <li class="point-item"><span style="color:#ef4444;">✕</span> <span>No health guidance or feedback</span></li>
                  <li class="point-item"><span style="color:#ef4444;">✕</span> <span>Mud, dirty runoff, and pests</span></li>
                  <li class="point-item"><span style="color:#ef4444;">✕</span> <span>Fixed non-expandable size</span></li>
                </ul>
              </div>

              <div class="card-glass" style="border-color:var(--accent-emerald); background:rgba(16, 185, 129, 0.05); box-shadow:0 0 30px rgba(16,185,129,0.15);">
                <h3 class="text-gradient-emerald" style="margin-bottom:1.25rem;">GrowNest Smart Farm</h3>
                <ul class="point-list">
                  <li class="point-item"><span style="color:var(--accent-emerald);">✓</span> <span>Autonomous closed-loop hydration</span></li>
                  <li class="point-item"><span style="color:var(--accent-emerald);">✓</span> <span>Precision PAR, temp & humidity sensors</span></li>
                  <li class="point-item"><span style="color:var(--accent-emerald);">✓</span> <span>365-day climate-insulated growth</span></li>
                  <li class="point-item"><span style="color:var(--accent-emerald);">✓</span> <span>AI Plant Doctor diagnostic feedback</span></li>
                  <li class="point-item"><span style="color:var(--accent-emerald);">✓</span> <span>Ultra-clean hydroponic mess-free pods</span></li>
                  <li class="point-item"><span style="color:var(--accent-emerald);">✓</span> <span>Modular stackable vertical expansion</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    // 11. Technology Live Dashboard Page
    renderTechnologyPage: function () {
      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag green">Live Architecture</span>
              <h1>Technology that understands your garden.</h1>
              <p class="text-lead text-muted" style="max-width:720px; margin:0 auto;">
                Explore real-time data streaming from active GrowNest environmental sensors.
              </p>
              <div style="font-size:0.75rem; color:var(--text-dim); margin-top:0.5rem;">
                * Simulated live telemetry data demonstrated for prototype validation.
              </div>
            </div>

            <!-- Live Telemetry Stream Card -->
            <div class="card-glass" style="margin-bottom:3.5rem; border-color:var(--border-green);">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:1rem;">
                <div>
                  <h3 style="margin-bottom:0.2rem;">Live Environmental Telemetry</h3>
                  <span class="text-muted" style="font-size:0.85rem;">Device: GrowNest Plus #GN-77291 (Living Room Station)</span>
                </div>
                <div style="display:flex; align-items:center; gap:0.75rem;">
                  <span class="sensor-pulse-dot"></span>
                  <span style="font-size:0.85rem; color:var(--accent-emerald-light); font-weight:600;">Stream Active (2.4s interval)</span>
                </div>
              </div>

              <div class="telemetry-grid">
                <div class="sensor-card">
                  <div class="sensor-card-top">
                    <div class="sensor-card-icon">💧</div>
                    <span class="text-muted" style="font-size:0.75rem;">Root Probe</span>
                  </div>
                  <div class="sensor-value" id="telemetry-moisture">74%</div>
                  <div style="font-size:0.82rem; color:var(--text-muted);">Soil Moisture Index</div>
                  <div class="sensor-meter">
                    <div class="sensor-meter-bar" id="bar-moisture" style="width: 74%;"></div>
                  </div>
                </div>

                <div class="sensor-card">
                  <div class="sensor-card-top">
                    <div class="sensor-card-icon">🌡️</div>
                    <span class="text-muted" style="font-size:0.75rem;">Ambient Air</span>
                  </div>
                  <div class="sensor-value" id="telemetry-temp">23.4°C</div>
                  <div style="font-size:0.82rem; color:var(--text-muted);">Optimal: 21 - 25°C</div>
                  <div class="sensor-meter">
                    <div class="sensor-meter-bar" id="bar-temp" style="width: 65%;"></div>
                  </div>
                </div>

                <div class="sensor-card">
                  <div class="sensor-card-top">
                    <div class="sensor-card-icon">💨</div>
                    <span class="text-muted" style="font-size:0.75rem;">Vapor Pressure</span>
                  </div>
                  <div class="sensor-value" id="telemetry-humidity">64%</div>
                  <div style="font-size:0.82rem; color:var(--text-muted);">Relative Humidity</div>
                  <div class="sensor-meter">
                    <div class="sensor-meter-bar" id="bar-humidity" style="width: 64%;"></div>
                  </div>
                </div>

                <div class="sensor-card">
                  <div class="sensor-card-top">
                    <div class="sensor-card-icon">☀️</div>
                    <span class="text-muted" style="font-size:0.75rem;">PAR Spectrum</span>
                  </div>
                  <div class="sensor-value" id="telemetry-light">840</div>
                  <div style="font-size:0.82rem; color:var(--text-muted);">μmol / m² / s (PAR)</div>
                  <div class="sensor-meter">
                    <div class="sensor-meter-bar" id="bar-light" style="width: 84%;"></div>
                  </div>
                </div>

                <div class="sensor-card">
                  <div class="sensor-card-top">
                    <div class="sensor-card-icon">🌊</div>
                    <span class="text-muted" style="font-size:0.75rem;">Float Gauge</span>
                  </div>
                  <div class="sensor-value" id="telemetry-water">82%</div>
                  <div style="font-size:0.82rem; color:var(--text-muted);">Water Reservoir Level</div>
                  <div class="sensor-meter">
                    <div class="sensor-meter-bar" id="bar-water" style="width: 82%;"></div>
                  </div>
                </div>
              </div>

              <!-- Interactive Simulator Controls -->
              <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
                <div style="font-size:0.88rem; color:var(--text-muted);">
                  Test Simulated Microclimate Events:
                </div>
                <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
                  <button class="btn btn-sm btn-outline" onclick="GrowNestComponents.simulateCondition('dry')">Simulate Dry Spell</button>
                  <button class="btn btn-sm btn-outline" onclick="GrowNestComponents.simulateCondition('mist')">Trigger Ultrasonic Mist</button>
                  <button class="btn btn-sm btn-outline" onclick="GrowNestComponents.simulateCondition('night')">Toggle Night Cycle</button>
                  <button class="btn btn-sm btn-primary" onclick="GrowNestComponents.simulateCondition('optimal')">Reset to Optimal</button>
                </div>
              </div>
            </div>

            <!-- Deep Tech Pillars -->
            <div class="grid grid-3">
              <div class="card-glass">
                <div style="font-size:2rem; margin-bottom:0.75rem;">💧</div>
                <h3 style="margin-bottom:0.4rem;">Smart Watering</h3>
                <p class="text-muted" style="font-size:0.9rem;">
                  Capacitive moisture sensors measure dielectric permittivity in root pods. Ultrasonic piezoelectric nozzles mist root baskets with zero waste runoff.
                </p>
              </div>

              <div class="card-glass">
                <div style="font-size:2rem; margin-bottom:0.75rem;">🌱</div>
                <h3 style="margin-bottom:0.4rem;">Soil & Root Health</h3>
                <p class="text-muted" style="font-size:0.9rem;">
                  Digital EC (electrical conductivity) probes track dissolved solids and ionic availability, alerting you before nitrogen or phosphorus shortages slow vegetative growth.
                </p>
              </div>

              <div class="card-glass">
                <div style="font-size:2rem; margin-bottom:0.75rem;">☀️</div>
                <h3 style="margin-bottom:0.4rem;">Dynamic PAR Lighting</h3>
                <p class="text-muted" style="font-size:0.9rem;">
                  Custom 450nm deep blue and 660nm hyper red diodes match chlorophyll A & B absorption peaks, executing gentle sunrise/sunset fade cycles.
                </p>
              </div>

              <div class="card-glass">
                <div style="font-size:2rem; margin-bottom:0.75rem;">🌡️</div>
                <h3 style="margin-bottom:0.4rem;">Temperature & Humidity</h3>
                <p class="text-muted" style="font-size:0.9rem;">
                  Integrated Sensirion SHT40 sensors maintain the ideal Vapor Pressure Deficit (VPD) so stomata remain open and transpire smoothly.
                </p>
              </div>

              <div class="card-glass">
                <div style="font-size:2rem; margin-bottom:0.75rem;">💨</div>
                <h3 style="margin-bottom:0.4rem;">Air Circulation</h3>
                <p class="text-muted" style="font-size:0.9rem;">
                  Magnetic levitation brushless fans gently flutter leaves, strengthening stem cellulose and preventing humid boundary layer disease pockets.
                </p>
              </div>

              <div class="card-glass">
                <div style="font-size:2rem; margin-bottom:0.75rem;">🤖</div>
                <h3 style="margin-bottom:0.4rem;">AI Plant Doctor</h3>
                <p class="text-muted" style="font-size:0.9rem;">
                  Neural models trained on millions of crop imagery vectors classify leaf pathology and automatically command hardware countermeasures.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    simulateCondition: function (condition) {
      const mVal = document.getElementById('telemetry-moisture');
      const mBar = document.getElementById('bar-moisture');
      const tVal = document.getElementById('telemetry-temp');
      const hVal = document.getElementById('telemetry-humidity');
      const lVal = document.getElementById('telemetry-light');
      const lBar = document.getElementById('bar-light');

      if (condition === 'dry') {
        if (mVal) mVal.textContent = '38%';
        if (mBar) mBar.style.width = '38%';
        GrowNestStore.showToast({ title: 'Simulated Alert: Moisture Dropped to 38%', message: 'Sub-irrigation pump scheduled in 2 minutes', actionText: null });
      } else if (condition === 'mist') {
        if (mVal) mVal.textContent = '88%';
        if (mBar) mBar.style.width = '88%';
        if (hVal) hVal.textContent = '78%';
        GrowNestStore.showToast({ title: 'Ultrasonic Sprinklers Fired', message: 'Delivered 40ml atomized hydration to root tier', actionText: null });
      } else if (condition === 'night') {
        if (lVal) lVal.textContent = '0 (Dark)';
        if (lBar) lBar.style.width = '0%';
        if (tVal) tVal.textContent = '19.8°C';
        GrowNestStore.showToast({ title: 'Circadian Night Cycle Active', message: 'Rest period enabled. Resuming dawn PAR in 8 hrs', actionText: null });
      } else {
        if (mVal) mVal.textContent = '74%';
        if (mBar) mBar.style.width = '74%';
        if (tVal) tVal.textContent = '23.4°C';
        if (hVal) hVal.textContent = '64%';
        if (lVal) lVal.textContent = '840';
        if (lBar) lBar.style.width = '84%';
        GrowNestStore.showToast({ title: 'Reset to Optimal Preset', message: 'All parameters returned to equilibrium', actionText: null });
      }
    },

    // 12. AI Plant Doctor Page
    renderAIDoctorPage: function () {
      const currentCase = d.aiDoctorCases[0];
      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag purple">Neural Botany</span>
              <h1>Your plant has a problem. Let AI help.</h1>
              <p class="text-lead text-muted" style="max-width:680px; margin:0 auto;">
                Upload a photo or select an active crop sample. Our botanical vision model identifies early stress signals, provides root-cause diagnosis, and executes automated adjustments.
              </p>
              <div style="font-size:0.75rem; color:var(--text-dim); margin-top:0.4rem;">
                * AI diagnostic assistance provides recommendations and is illustrative for prototype demonstration.
              </div>
            </div>

            <div class="ai-scanner-panel">
              <!-- Sample Picker -->
              <div style="margin-bottom:1.25rem;">
                <div style="font-size:0.85rem; font-weight:600; color:var(--text-secondary); margin-bottom:0.5rem;">
                  Select Plant Leaf Sample for AI Scan:
                </div>
                <div class="ai-sample-picker">
                  ${d.aiDoctorCases.map((c, i) => `
                    <button class="sample-chip ${i === 0 ? 'active' : ''}" onclick="GrowNestComponents.loadAiCase('${c.id}', this)">
                      <span>${c.crop}: ${c.title}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Scanner Stage -->
              <div class="ai-scan-window" id="ai-scan-viewport">
                <img id="ai-scan-target-img" src="${currentCase.image}" alt="Plant Diagnostic Target" class="ai-scan-img" />
                <div class="ai-scan-laser scanning" id="ai-scan-laser"></div>
                <div class="ai-hud-box scanning" id="ai-hud-box" style="top:25%; left:25%;"></div>
              </div>

              <!-- Diagnostic Result Box -->
              <div id="ai-results-card" style="margin-top:2rem; background:rgba(0,0,0,0.4); border-radius:var(--radius-lg); border:1px solid var(--border-subtle); padding:1.75rem;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
                  <div>
                    <span class="badge" style="background:${currentCase.statusColor}; color:#fff; margin-bottom:0.4rem;">${currentCase.status}</span>
                    <h3 id="ai-res-title" style="margin-bottom:0.2rem;">${currentCase.title}</h3>
                    <div id="ai-res-crop" class="text-muted" style="font-size:0.88rem;">Crop Identified: <strong>${currentCase.crop}</strong></div>
                  </div>
                  <div style="text-align:right;">
                    <div style="font-size:0.8rem; color:var(--text-muted);">AI Confidence Score</div>
                    <div id="ai-res-confidence" style="font-size:1.8rem; font-weight:800; color:var(--accent-emerald-light);">${currentCase.confidence}</div>
                  </div>
                </div>

                <div class="grid grid-2" style="gap:1.5rem; margin-top:1.5rem;">
                  <div class="pdp-spec-box">
                    <div class="pdp-spec-label">Probable Root Cause</div>
                    <p id="ai-res-cause" style="font-size:0.92rem; color:var(--text-secondary); margin-top:0.4rem;">${currentCase.cause}</p>
                  </div>
                  <div class="pdp-spec-box" style="border-color:var(--border-green);">
                    <div class="pdp-spec-label" style="color:var(--accent-emerald-light);">Recommended Action Plan</div>
                    <p id="ai-res-remedy" style="font-size:0.92rem; color:var(--text-secondary); margin-top:0.4rem;">${currentCase.remedy}</p>
                  </div>
                </div>

                <div style="margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                  <div style="font-size:0.88rem; color:var(--text-muted); display:flex; align-items:center; gap:0.5rem;">
                    <span>🤖</span>
                    <span id="ai-res-action">Autonomous Setting: ${currentCase.hardwareAction}</span>
                  </div>
                  <button class="btn btn-primary btn-sm" onclick="GrowNestComponents.triggerAiHardwareFix()">
                    Apply Automated Fix to GrowNest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    loadAiCase: function (caseId, btn) {
      document.querySelectorAll('.sample-chip').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      const c = d.aiDoctorCases.find(x => x.id === caseId);
      if (!c) return;

      const laser = document.getElementById('ai-scan-laser');
      const hud = document.getElementById('ai-hud-box');
      const img = document.getElementById('ai-scan-target-img');

      if (img) img.src = c.image;
      if (laser) {
        laser.classList.remove('scanning');
        void laser.offsetWidth;
        laser.classList.add('scanning');
      }

      document.getElementById('ai-res-title').textContent = c.title;
      document.getElementById('ai-res-crop').innerHTML = `Crop Identified: <strong>${c.crop}</strong>`;
      document.getElementById('ai-res-confidence').textContent = c.confidence;
      document.getElementById('ai-res-cause').textContent = c.cause;
      document.getElementById('ai-res-remedy').textContent = c.remedy;
      document.getElementById('ai-res-action').textContent = `Autonomous Setting: ${c.hardwareAction}`;
    },

    triggerAiHardwareFix: function () {
      GrowNestStore.showToast({
        title: 'GrowNest Recipe Calibrated',
        message: 'Dispensers and ventilation updated according to AI Doctor analysis.',
        actionText: null
      });
    },

    // 13. Ecosystem Page
    renderEcosystemPage: function () {
      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag green">Modular Growth</span>
              <h1>Start small. Grow your ecosystem.</h1>
              <p class="text-lead text-muted" style="max-width:680px; margin:0 auto;">
                From a single tabletop herb planter to a towering self-sustaining vertical farm, GrowNest is built to expand with you.
              </p>
            </div>

            <!-- Progression Steps -->
            <div class="grid grid-4" style="margin-bottom:4rem;">
              <div class="card-glass text-center">
                <div style="font-size:2.5rem; margin-bottom:0.75rem;">🌱</div>
                <div class="badge badge-eco" style="margin-bottom:0.5rem;">Phase 01</div>
                <h4 style="margin-bottom:0.25rem;">One Plant</h4>
                <p class="text-muted" style="font-size:0.85rem;">Single smart pod on your desk or nightstand.</p>
              </div>

              <div class="card-glass text-center">
                <div style="font-size:2.5rem; margin-bottom:0.75rem;">🌿</div>
                <div class="badge badge-eco" style="margin-bottom:0.5rem;">Phase 02</div>
                <h4 style="margin-bottom:0.25rem;">Multiple Plants</h4>
                <p class="text-muted" style="font-size:0.85rem;">GrowNest Basic countertop culinary station.</p>
              </div>

              <div class="card-glass text-center">
                <div style="font-size:2.5rem; margin-bottom:0.75rem;">🪴</div>
                <div class="badge badge-popular" style="margin-bottom:0.5rem;">Phase 03</div>
                <h4 style="margin-bottom:0.25rem;">Smart Garden</h4>
                <p class="text-muted" style="font-size:0.85rem;">GrowNest Plus 2-tier ecosystem with misting.</p>
              </div>

              <div class="card-glass text-center">
                <div style="font-size:2.5rem; margin-bottom:0.75rem;">🌳</div>
                <div class="badge badge-pro" style="margin-bottom:0.5rem;">Phase 04</div>
                <h4 style="margin-bottom:0.25rem;">Indoor Ecosystem</h4>
                <p class="text-muted" style="font-size:0.85rem;">Full-height GrowNest Pro with multi-tier crops.</p>
              </div>
            </div>

            <!-- Ecosystem Modular Accessories -->
            <div class="section-header text-center">
              <h2>Ecosystem Modular Add-ons & Pods</h2>
              <p class="text-muted">Enhance your farm with certified organic seed pods, nutrient formulas, and hardware extensions.</p>
            </div>

            <div class="grid grid-3">
              ${d.ecosystemAccessories.map(acc => `
                <div class="card-glass" style="display:flex; flex-direction:column;">
                  <div style="width:100%; aspect-ratio:16/9; border-radius:var(--radius-md); overflow:hidden; margin-bottom:1rem;">
                    <img src="${acc.image}" alt="${acc.name}" style="width:100%; height:100%; object-fit:cover;" />
                  </div>
                  <div class="badge badge-eco" style="align-self:flex-start; margin-bottom:0.5rem;">${acc.category}</div>
                  <h4 style="margin-bottom:0.4rem;">${acc.name}</h4>
                  <p class="text-muted" style="font-size:0.88rem; flex-grow:1;">${acc.desc}</p>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.25rem; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.06);">
                    <span style="font-weight:800; font-size:1.25rem; color:#fff;">₹${acc.price.toLocaleString('en-IN')}</span>
                    <button onclick="GrowNestStore.addItem({id:'${acc.id}', name:'${acc.name}', price:${acc.price}, image:'${acc.image}'}, 1)" class="btn btn-sm btn-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    // 14. Sustainability Page
    renderSustainabilityPage: function () {
      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container">
            <div class="section-header text-center">
              <span class="section-tag green">Conscious Architecture</span>
              <h1>Smarter growing. Greener living.</h1>
              <p class="text-lead text-muted" style="max-width:720px; margin:0 auto;">
                By moving food production directly to the point of consumption, GrowNest eliminates packaging waste, cuts water consumption, and removes transport emissions.
              </p>
            </div>

            <div class="grid grid-3" style="margin-bottom:4rem;">
              <div class="card-glass text-center" style="border-color:var(--border-green);">
                <div style="font-size:3rem; font-weight:800; color:var(--accent-emerald-light); font-family:var(--font-heading); margin-bottom:0.5rem;">90%</div>
                <h4>Reduced Water Usage</h4>
                <p class="text-muted" style="font-size:0.9rem; margin-top:0.5rem;">
                  Closed-loop hydroponic and misting recirculation captures evaporated moisture, using up to 90% less water than traditional soil plots.
                </p>
              </div>

              <div class="card-glass text-center" style="border-color:var(--border-green);">
                <div style="font-size:3rem; font-weight:800; color:var(--accent-emerald-light); font-family:var(--font-heading); margin-bottom:0.5rem;">0 km</div>
                <h4>Zero Food Miles</h4>
                <p class="text-muted" style="font-size:0.9rem; margin-top:0.5rem;">
                  Harvest five seconds before cooking. No cross-country trucking, refrigeration logistics, or plastic grocery packaging.
                </p>
              </div>

              <div class="card-glass text-center" style="border-color:var(--border-green);">
                <div style="font-size:3rem; font-weight:800; color:var(--accent-emerald-light); font-family:var(--font-heading); margin-bottom:0.5rem;">100%</div>
                <h4>Pesticide & Herbicide Free</h4>
                <p class="text-muted" style="font-size:0.9rem; margin-top:0.5rem;">
                  Insulated indoor environments naturally deter outdoor pests without chemical sprays, runoff contamination, or synthetic washes.
                </p>
              </div>
            </div>

            <div class="card-glass" style="max-width:880px; margin:0 auto; padding:2.5rem;">
              <h3 style="margin-bottom:1rem;">Our Responsible Material Principles</h3>
              <ul class="point-list">
                <li class="point-item">
                  <span style="color:var(--accent-emerald);">✓</span>
                  <div>
                    <strong>Recycled & Bio-Compatible Chassis</strong>
                    <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Our chassis structures utilize high-durability recycled polymers with zero BPA or toxic leaching agents.</p>
                  </div>
                </li>
                <li class="point-item">
                  <span style="color:var(--accent-emerald);">✓</span>
                  <div>
                    <strong>Modular Longevity & Repairability</strong>
                    <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">All pumps, LED strips, and sensor modules are snap-replaceable so your GrowNest lasts for decades without obsolescence.</p>
                  </div>
                </li>
                <li class="point-item">
                  <span style="color:var(--accent-emerald);">✓</span>
                  <div>
                    <strong>High-Efficiency Photonic Lighting</strong>
                    <p class="text-muted" style="font-size:0.9rem; margin-top:0.2rem;">Operating at an industry-leading 2.8 μmol/J, GrowNest consumes less electricity monthly than a standard home Wi-Fi router.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },

    // 15. Cart Page
    renderCartPage: function () {
      const items = store.getCart();
      const totals = store.getTotals();

      if (items.length === 0) {
        return `
          <div class="section" style="padding-top: clamp(7rem, 12vw, 9rem);">
            <div class="container container-sm text-center">
              <div style="font-size:4rem; margin-bottom:1.5rem;">🌱</div>
              <h1 style="margin-bottom:0.75rem;">Your garden is waiting.</h1>
              <p class="text-lead text-muted" style="margin-bottom:2rem;">
                Your shopping cart is currently empty. Explore our smart indoor farming systems and start growing fresh greens at home today.
              </p>
              <a href="#/products" class="btn btn-primary btn-lg">
                Explore GrowNest Systems
              </a>
            </div>
          </div>
        `;
      }

      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container">
            <h1 style="margin-bottom:2rem;">Your GrowNest Cart</h1>

            <div class="checkout-layout">
              <!-- Left: Items Table -->
              <div class="cart-table-wrap">
                ${items.map(item => `
                  <div class="cart-item-row">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
                    <div>
                      <h4 style="margin-bottom:0.25rem;">${item.name}</h4>
                      <div class="text-muted" style="font-size:0.85rem;">${item.tagline || 'GrowNest System'}</div>
                      <div style="font-weight:700; color:#ffffff; margin-top:0.4rem;">₹${item.price.toLocaleString('en-IN')}</div>
                    </div>
                    <div class="quantity-stepper">
                      <button class="qty-btn" onclick="GrowNestStore.updateQuantity('${item.id}', -1)">−</button>
                      <span class="qty-val">${item.quantity}</span>
                      <button class="qty-btn" onclick="GrowNestStore.updateQuantity('${item.id}', 1)">+</button>
                    </div>
                    <div style="font-weight:800; color:#ffffff; font-size:1.1rem; text-align:right;">
                      ₹${(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                    <div>
                      <button onclick="GrowNestStore.removeItem('${item.id}')" style="background:transparent; border:none; color:var(--text-dim); cursor:pointer; font-size:1.25rem;" title="Remove Item">
                        ✕
                      </button>
                    </div>
                  </div>
                `).join('')}

                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2rem; flex-wrap:wrap; gap:1rem;">
                  <a href="#/products" class="btn btn-outline">
                    ← Continue Shopping
                  </a>
                  <button onclick="GrowNestStore.clearCart()" class="btn btn-secondary" style="font-size:0.85rem;">
                    Clear Cart
                  </button>
                </div>
              </div>

              <!-- Right: Summary -->
              <div class="order-summary-card">
                <h3 style="margin-bottom:1.5rem;">Order Summary</h3>
                <div class="summary-row">
                  <span>Subtotal</span>
                  <span>${totals.formattedSubtotal}</span>
                </div>
                ${totals.discount > 0 ? `
                  <div class="summary-row" style="color:var(--accent-emerald-light);">
                    <span>Promo Discount (GROW10)</span>
                    <span>${totals.formattedDiscount}</span>
                  </div>
                ` : ''}
                <div class="summary-row">
                  <span>Shipping</span>
                  <span style="color:var(--accent-emerald-light);">${totals.formattedShipping}</span>
                </div>
                <div class="summary-row">
                  <span>Estimated Taxes (18% GST)</span>
                  <span>${totals.formattedTaxes}</span>
                </div>
                <div class="summary-row total">
                  <span>Estimated Total</span>
                  <span>${totals.formattedTotal}</span>
                </div>

                <!-- Coupon Input -->
                <div style="margin: 1.5rem 0;">
                  <div style="display:flex; gap:0.5rem;">
                    <input id="cart-coupon-input" type="text" placeholder="Promo code (try GROW10)" class="form-input" style="text-transform:uppercase;" />
                    <button onclick="GrowNestComponents.applyCartCoupon()" class="btn btn-secondary">Apply</button>
                  </div>
                </div>

                <a href="#/checkout" class="btn btn-primary btn-block btn-lg" style="margin-top:1rem;">
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    applyCartCoupon: function () {
      const input = document.getElementById('cart-coupon-input');
      if (input) {
        const res = store.applyCoupon(input.value);
        store.showToast({
          title: res.success ? 'Coupon Applied' : 'Coupon Error',
          message: res.message,
          actionText: null
        });
        if (res.success) {
          window.location.reload();
        }
      }
    },

    // 16. Checkout Page (Two Column Desktop / Mobile Stack)
    renderCheckoutPage: function () {
      const items = store.getCart();
      const totals = store.getTotals();

      if (items.length === 0) {
        return this.renderCartPage();
      }

      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container">
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:2rem;">
              <span style="font-size:1.5rem;">🔒</span>
              <h1>Secure Checkout</h1>
            </div>

            <div class="checkout-layout">
              <!-- Left Column: Forms -->
              <form id="checkout-form" onsubmit="GrowNestComponents.processCheckout(event)">
                <!-- 1. Contact Information -->
                <div class="checkout-step-box">
                  <h3 style="margin-bottom:0.25rem;">1. Contact Information</h3>
                  <p class="text-muted" style="font-size:0.85rem;">Order tracking updates will be sent here.</p>
                  <div class="checkout-form-grid">
                    <div>
                      <label class="form-label">Email Address *</label>
                      <input type="email" required placeholder="name@example.com" class="form-input" id="co-email" value="alex.greenthumb@example.com" />
                    </div>
                    <div>
                      <label class="form-label">Phone Number *</label>
                      <input type="tel" required placeholder="+91 98765 43210" class="form-input" id="co-phone" value="+91 98200 12345" />
                    </div>
                  </div>
                </div>

                <!-- 2. Shipping Address -->
                <div class="checkout-step-box">
                  <h3 style="margin-bottom:0.25rem;">2. Shipping Information</h3>
                  <p class="text-muted" style="font-size:0.85rem;">Free insured delivery across India.</p>
                  <div class="checkout-form-grid">
                    <div class="form-group-full">
                      <label class="form-label">Full Name *</label>
                      <input type="text" required placeholder="Alex Mercer" class="form-input" id="co-name" value="Alex Mercer" />
                    </div>
                    <div class="form-group-full">
                      <label class="form-label">Address Line 1 *</label>
                      <input type="text" required placeholder="Flat 402, Highline Horizon Towers" class="form-input" id="co-addr1" value="Penthouse 14B, Sky Residency" />
                    </div>
                    <div>
                      <label class="form-label">City *</label>
                      <input type="text" required placeholder="Mumbai" class="form-input" id="co-city" value="Bengaluru" />
                    </div>
                    <div>
                      <label class="form-label">State *</label>
                      <input type="text" required placeholder="Karnataka" class="form-input" id="co-state" value="Karnataka" />
                    </div>
                    <div>
                      <label class="form-label">PIN Code *</label>
                      <input type="text" required placeholder="560001" class="form-input" id="co-pin" value="560038" />
                    </div>
                    <div>
                      <label class="form-label">Estimated Delivery</label>
                      <input type="text" disabled class="form-input" value="Express 3-4 Days (Free)" style="color:var(--accent-emerald-light);" />
                    </div>
                  </div>
                </div>

                <!-- 3. Payment Method -->
                <div class="checkout-step-box">
                  <h3 style="margin-bottom:0.25rem;">3. Payment Method</h3>
                  <p class="text-muted" style="font-size:0.85rem;">Select your preferred payment gateway simulator.</p>

                  <div class="payment-options-grid">
                    <button type="button" class="payment-opt-btn active" onclick="GrowNestComponents.selectPayment('upi', this)">
                      <div style="font-weight:700;">⚡ UPI / QR</div>
                      <div class="text-muted" style="font-size:0.8rem;">GPay, PhonePe, Paytm, BHIM</div>
                    </button>
                    <button type="button" class="payment-opt-btn" onclick="GrowNestComponents.selectPayment('card', this)">
                      <div style="font-weight:700;">💳 Credit / Debit Card</div>
                      <div class="text-muted" style="font-size:0.8rem;">Visa, Mastercard, RuPay, Amex</div>
                    </button>
                    <button type="button" class="payment-opt-btn" onclick="GrowNestComponents.selectPayment('netbanking', this)">
                      <div style="font-weight:700;">🏦 Net Banking</div>
                      <div class="text-muted" style="font-size:0.8rem;">All major Indian banks</div>
                    </button>
                    <button type="button" class="payment-opt-btn" onclick="GrowNestComponents.selectPayment('cod', this)">
                      <div style="font-weight:700;">💵 Cash on Delivery</div>
                      <div class="text-muted" style="font-size:0.8rem;">Pay upon verified arrival</div>
                    </button>
                  </div>

                  <div id="payment-details-view" style="margin-top:1.5rem; padding:1.25rem; background:rgba(0,0,0,0.3); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
                    <div style="font-size:0.88rem; color:var(--accent-emerald-light); font-weight:600;">⚡ Instant UPI Verification</div>
                    <p class="text-muted" style="font-size:0.82rem; margin-top:0.25rem;">Scan QR code or approve VPA collect request in your UPI application upon placing order.</p>
                  </div>

                  <button type="submit" class="btn btn-primary btn-lg btn-block" style="margin-top:2rem;">
                    <span>Complete Order & Pay ${totals.formattedTotal}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </form>

              <!-- Right Column: Order Summary & Trust -->
              <div>
                <div class="order-summary-card" style="margin-bottom:1.5rem;">
                  <h3 style="margin-bottom:1.25rem;">Items in Order (${store.getCartCount()})</h3>
                  <div style="display:flex; flex-direction:column; gap:0.9rem; margin-bottom:1.5rem; max-height:260px; overflow-y:auto;">
                    ${items.map(i => `
                      <div style="display:flex; align-items:center; gap:0.75rem;">
                        <img src="${i.image}" alt="${i.name}" style="width:52px; height:52px; border-radius:var(--radius-sm); object-fit:contain; background:rgba(18,10,31,0.85); border:1px solid var(--border-subtle); padding:2px; flex-shrink:0;" />
                        <div style="flex-grow:1;">
                          <div style="font-size:0.88rem; font-weight:600; color:#fff;">${i.name}</div>
                          <div class="text-muted" style="font-size:0.78rem;">Qty: ${i.quantity}</div>
                        </div>
                        <div style="font-weight:700; color:#fff; font-size:0.9rem;">₹${(i.price * i.quantity).toLocaleString('en-IN')}</div>
                      </div>
                    `).join('')}
                  </div>

                  <div class="summary-row">
                    <span>Subtotal</span>
                    <span>${totals.formattedSubtotal}</span>
                  </div>
                  <div class="summary-row">
                    <span>Shipping</span>
                    <span style="color:var(--accent-emerald-light);">${totals.formattedShipping}</span>
                  </div>
                  <div class="summary-row">
                    <span>GST (18%)</span>
                    <span>${totals.formattedTaxes}</span>
                  </div>
                  <div class="summary-row total">
                    <span>Grand Total</span>
                    <span>${totals.formattedTotal}</span>
                  </div>
                </div>

                <!-- Trust Badges -->
                <div class="card-glass" style="padding:1.5rem;">
                  <div style="display:flex; flex-direction:column; gap:1rem;">
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                      <span style="font-size:1.3rem;">🔒</span>
                      <div>
                        <div style="font-weight:600; color:#fff; font-size:0.9rem;">256-Bit Encrypted Checkout</div>
                        <div class="text-muted" style="font-size:0.8rem;">Bank-grade TLS transaction protocol</div>
                      </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                      <span style="font-size:1.3rem;">📦</span>
                      <div>
                        <div style="font-weight:600; color:#fff; font-size:0.9rem;">Insured Fragile Transport</div>
                        <div class="text-muted" style="font-size:0.8rem;">Full damage protection coverage</div>
                      </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:0.75rem;">
                      <span style="font-size:1.3rem;">🌱</span>
                      <div>
                        <div style="font-weight:600; color:#fff; font-size:0.9rem;">GrowNest Botanical Support</div>
                        <div class="text-muted" style="font-size:0.8rem;">Direct support for your first harvest</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    selectPayment: function (method, btn) {
      document.querySelectorAll('.payment-opt-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
      const details = document.getElementById('payment-details-view');
      if (details) {
        if (method === 'upi') {
          details.innerHTML = `
            <div style="font-size:0.88rem; color:var(--accent-emerald-light); font-weight:600;">⚡ Instant UPI Verification</div>
            <p class="text-muted" style="font-size:0.82rem; margin-top:0.25rem;">Enter UPI ID (e.g. user@okhdfcbank) or scan QR code on next screen.</p>
          `;
        } else if (method === 'card') {
          details.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
              <div style="grid-column:span 2;">
                <input type="text" placeholder="Card Number (4000 1234 5678 9010)" class="form-input" style="padding:0.6rem 0.9rem; font-size:0.85rem;" />
              </div>
              <input type="text" placeholder="MM / YY" class="form-input" style="padding:0.6rem 0.9rem; font-size:0.85rem;" />
              <input type="password" placeholder="CVV" maxlength="4" class="form-input" style="padding:0.6rem 0.9rem; font-size:0.85rem;" />
            </div>
          `;
        } else if (method === 'netbanking') {
          details.innerHTML = `
            <select class="form-input" style="padding:0.6rem 0.9rem; font-size:0.85rem;">
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>State Bank of India (SBI)</option>
              <option>Axis Bank</option>
              <option>Kotak Mahindra Bank</option>
            </select>
          `;
        } else {
          details.innerHTML = `
            <div style="font-size:0.88rem; color:var(--text-secondary);">💵 Pay with cash or UPI upon package arrival. Verified OTP authentication required at doorstep.</div>
          `;
        }
      }
    },

    processCheckout: function (e) {
      e.preventDefault();
      const name = document.getElementById('co-name')?.value || 'Valued Customer';
      const addr = document.getElementById('co-addr1')?.value || 'Sky Residency';
      const city = document.getElementById('co-city')?.value || 'Bengaluru';
      const items = store.getCart();
      const totals = store.getTotals();

      const orderData = {
        orderId: 'GN-' + Math.floor(10000 + Math.random() * 90000),
        name,
        address: `${addr}, ${city}`,
        items: [...items],
        total: totals.formattedTotal,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      };

      try {
        sessionStorage.setItem('grownest_last_order', JSON.stringify(orderData));
      } catch (err) {}

      store.clearCart();
      window.location.hash = '#/order-confirmation';
    },

    // 17. Order Confirmation Page
    renderOrderConfirmationPage: function () {
      let order = null;
      try {
        const saved = sessionStorage.getItem('grownest_last_order');
        if (saved) order = JSON.parse(saved);
      } catch (e) {}

      if (!order) {
        order = {
          orderId: 'GN-20481',
          name: 'Alex Mercer',
          address: 'Penthouse 14B, Sky Residency, Bengaluru',
          total: '₹6,999',
          items: [
            { name: 'GrowNest Plus', price: 6999, quantity: 1, image: 'assets/images/product-plus.jpg' }
          ],
          date: '7 Sep 2026'
        };
      }

      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container">
            <div class="confirmation-card">
              <div class="success-check-circle">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <span class="badge badge-popular" style="margin-bottom:0.75rem;">Payment Confirmed</span>
              <h1 style="margin-bottom:0.5rem;">Your GrowNest journey begins.</h1>
              <p class="text-muted" style="font-size:1.1rem; margin-bottom:1.5rem;">
                Order <strong>#${order.orderId}</strong> is verified and entering automated assembly.
              </p>

              <!-- Order Timeline -->
              <div class="order-timeline">
                <div class="timeline-step done">
                  <div class="timeline-dot">✓</div>
                  <div style="font-size:0.75rem; font-weight:600; color:#fff;">Order Placed</div>
                </div>
                <div class="timeline-step done">
                  <div class="timeline-dot">✓</div>
                  <div style="font-size:0.75rem; font-weight:600; color:#fff;">Assembly & QA</div>
                </div>
                <div class="timeline-step">
                  <div class="timeline-dot">🚚</div>
                  <div style="font-size:0.75rem; font-weight:600; color:var(--text-muted);">In Transit</div>
                </div>
                <div class="timeline-step">
                  <div class="timeline-dot">🌱</div>
                  <div style="font-size:0.75rem; font-weight:600; color:var(--text-muted);">Delivery</div>
                </div>
              </div>

              <!-- Details Box -->
              <div style="background:rgba(0,0,0,0.3); border-radius:var(--radius-lg); padding:1.5rem; text-align:left; margin-bottom:2rem; border:1px solid var(--border-subtle);">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; font-size:0.9rem;">
                  <span class="text-muted">Recipient:</span>
                  <span style="font-weight:600; color:#fff;">${order.name}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; font-size:0.9rem;">
                  <span class="text-muted">Destination:</span>
                  <span style="font-weight:600; color:#fff;">${order.address}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:0.75rem; font-size:0.9rem;">
                  <span class="text-muted">Estimated Delivery:</span>
                  <span style="font-weight:600; color:var(--accent-emerald-light);">3 to 5 Business Days</span>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.9rem; border-top:1px solid rgba(255,255,255,0.08); padding-top:0.75rem;">
                  <span class="text-muted">Total Paid:</span>
                  <span style="font-weight:800; color:#fff; font-size:1.15rem;">${order.total}</span>
                </div>
              </div>

              <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
                <button onclick="GrowNestComponents.showTrackingModal('${order.orderId}')" class="btn btn-primary">
                  Track Order
                </button>
                <a href="#/" class="btn btn-outline">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    },

    showTrackingModal: function (orderId) {
      GrowNestStore.showToast({
        title: `Tracking #${orderId}`,
        message: 'Current status: Inspected, packed in botanical climate-safe crate.',
        actionText: null
      });
    },

    // 18. FAQ Page
    renderFAQPage: function () {
      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container container-narrow">
            <div class="section-header text-center">
              <span class="section-tag green">Answers & Clarity</span>
              <h1>Frequently Asked Questions</h1>
              <p class="text-lead text-muted">
                Everything you need to know about setting up, caring for, and enjoying your GrowNest indoor farm.
              </p>
            </div>

            <div class="faq-list">
              ${d.faqs.map((f, idx) => `
                <div class="faq-item ${idx === 0 ? 'active' : ''}" onclick="GrowNestComponents.toggleFaq(this)">
                  <button class="faq-question">
                    <span>${f.q}</span>
                    <span class="faq-icon">+</span>
                  </button>
                  <div class="faq-answer">
                    <p>${f.a}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    toggleFaq: function (item) {
      item.classList.toggle('active');
    },

    // 19. Contact Page
    renderContactPage: function () {
      return `
        <div class="section" style="padding-top: clamp(6rem, 10vw, 8rem);">
          <div class="container container-narrow">
            <div class="section-header text-center">
              <span class="section-tag purple">Connect With Us</span>
              <h1>Need help choosing a GrowNest?</h1>
              <p class="text-lead text-muted">
                Tell us about your living space, sunlight conditions, and what crops you love to eat. Our urban agriculture team is here to assist.
              </p>
            </div>

            <div class="card-glass" style="padding: clamp(1.75rem, 4vw, 3rem);">
              <form onsubmit="GrowNestComponents.handleContactSubmit(event)">
                <div class="checkout-form-grid">
                  <div>
                    <label class="form-label">Your Name *</label>
                    <input type="text" required placeholder="Alex Mercer" class="form-input" />
                  </div>
                  <div>
                    <label class="form-label">Email Address *</label>
                    <input type="email" required placeholder="alex@example.com" class="form-input" />
                  </div>
                  <div>
                    <label class="form-label">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" class="form-input" />
                  </div>
                  <div>
                    <label class="form-label">Topic / Subject</label>
                    <select class="form-input">
                      <option>System Recommendation Consultation</option>
                      <option>Order & Shipping Inquiry</option>
                      <option>AI Plant Doctor Assistance</option>
                      <option>Corporate / Commercial Installation</option>
                    </select>
                  </div>
                  <div class="form-group-full">
                    <label class="form-label">Tell us about your space & crop ambitions</label>
                    <textarea rows="4" class="form-input" placeholder="e.g. I live in a 2BHK in Bangalore, have a small kitchen counter, and want to grow fresh Italian basil and cherry tomatoes..." style="resize:vertical;"></textarea>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" style="margin-top:1.5rem;">
                  <span>Send Consultation Request</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      `;
    },

    handleContactSubmit: function (e) {
      e.preventDefault();
      GrowNestStore.showToast({
        title: 'Message Received!',
        message: 'A GrowNest botanical specialist will reach out within 4 business hours.',
        actionText: null
      });
      e.target.reset();
    }
  };
})();
