// GrowNest - Reactive State & Cart Store

const GrowNestStore = (function () {
  const STORAGE_KEY_CART = 'grownest_cart_v1';
  const STORAGE_KEY_WISHLIST = 'grownest_wishlist_v1';

  // State
  let cart = [];
  let wishlist = [];
  let appliedCoupon = null;
  let customizerState = {
    color: 'obsidian',
    colorHex: '#140c24',
    finish: 'matte',
    accent: '#10b981'
  };

  // Load from LocalStorage
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY_CART);
    if (savedCart) cart = JSON.parse(savedCart);
    const savedWish = localStorage.getItem(STORAGE_KEY_WISHLIST);
    if (savedWish) wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.warn('Storage access warning:', e);
  }

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cart));
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: { cart } }));
  }

  function saveWishlist() {
    try {
      localStorage.setItem(STORAGE_KEY_WISHLIST, JSON.stringify(wishlist));
    } catch (e) {}
    window.dispatchEvent(new CustomEvent('wishlist:updated', { detail: { wishlist } }));
  }

  return {
    // Cart operations
    getCart: () => [...cart],

    getCartCount: () => cart.reduce((total, item) => total + item.quantity, 0),

    addItem: function (product, quantity = 1) {
      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          tagline: product.tagline || '',
          price: product.price,
          image: product.image,
          quantity: quantity
        });
      }
      saveCart();
      this.showToast({
        title: `${product.name} added to cart`,
        message: 'Quantity: ' + (existing ? existing.quantity : quantity),
        actionText: 'View Cart',
        actionHash: '#/cart'
      });
    },

    buyNow: function (product, quantity = 1) {
      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        existing.quantity = Math.max(existing.quantity, quantity);
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          tagline: product.tagline || '',
          price: product.price,
          image: product.image,
          quantity: quantity
        });
      }
      saveCart();
      window.location.hash = '#/checkout';
    },

    updateQuantity: function (id, delta) {
      const item = cart.find(i => i.id === id);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          this.removeItem(id);
          return;
        }
        saveCart();
      }
    },

    removeItem: function (id) {
      cart = cart.filter(i => i.id !== id);
      saveCart();
      this.showToast({
        title: 'Item removed',
        message: 'Cart updated successfully',
        actionText: null
      });
    },

    clearCart: function () {
      cart = [];
      saveCart();
    },

    applyCoupon: function (code) {
      if (!code) return { success: false, message: 'Please enter a coupon code' };
      const clean = code.trim().toUpperCase();
      if (clean === 'GROW10' || clean === 'SMARTGREEN') {
        appliedCoupon = { code: clean, discountPercent: 10 };
        saveCart();
        return { success: true, message: '10% discount applied!' };
      }
      return { success: false, message: 'Invalid coupon code. Try "GROW10"' };
    },

    getCoupon: () => appliedCoupon,

    getTotals: function () {
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const discount = appliedCoupon ? Math.round((subtotal * appliedCoupon.discountPercent) / 100) : 0;
      const discountedSubtotal = Math.max(0, subtotal - discount);
      const shipping = subtotal > 0 && subtotal >= 999 ? 0 : (subtotal > 0 ? 199 : 0);
      const taxes = Math.round(discountedSubtotal * 0.18); // 18% GST standard
      const total = discountedSubtotal + shipping + taxes;

      return {
        subtotal,
        discount,
        shipping,
        taxes,
        total,
        formattedSubtotal: '₹' + subtotal.toLocaleString('en-IN'),
        formattedDiscount: '-₹' + discount.toLocaleString('en-IN'),
        formattedShipping: shipping === 0 ? 'FREE' : '₹' + shipping.toLocaleString('en-IN'),
        formattedTaxes: '₹' + taxes.toLocaleString('en-IN'),
        formattedTotal: '₹' + total.toLocaleString('en-IN')
      };
    },

    // Wishlist operations
    toggleWishlist: function (productId) {
      const idx = wishlist.indexOf(productId);
      let added = false;
      if (idx > -1) {
        wishlist.splice(idx, 1);
      } else {
        wishlist.push(productId);
        added = true;
      }
      saveWishlist();
      this.showToast({
        title: added ? 'Added to Wishlist' : 'Removed from Wishlist',
        message: added ? 'Saved for future growing' : 'Item removed',
        actionText: null
      });
      return added;
    },

    isWishlisted: (id) => wishlist.includes(id),

    // Customizer
    getCustomizerState: () => ({ ...customizerState }),
    setCustomizerState: function (update) {
      customizerState = { ...customizerState, ...update };
      window.dispatchEvent(new CustomEvent('customizer:changed', { detail: customizerState }));
    },

    // Global Toast Helper
    showToast: function ({ title, message, actionText, actionHash }) {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `
        <div class="toast-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="toast-content">
          <div class="toast-title">${title}</div>
          <div class="text-muted" style="font-size:0.82rem;">${message || ''}</div>
          ${actionText && actionHash ? `
            <div class="toast-actions">
              <a href="${actionHash}" class="btn btn-sm btn-primary" style="padding:0.25rem 0.65rem; font-size:0.75rem;">${actionText}</a>
            </div>
          ` : ''}
        </div>
      `;

      container.appendChild(toast);
      requestAnimationFrame(() => {
        toast.classList.add('show');
      });

      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
      }, 4000);
    }
  };
})();
