// ======================================================================
// KATALOG PRODUK — setiap kategori (Coffee, Ice Tea, Beverage, Juices)
// punya 3 varian sendiri dengan nama, harga, deskripsi, gambar & warna beda
// ======================================================================
const CATALOG = {
  coffee: {
    default: 'Milk',
    variants: {
      White: {
        name: "Vima's Handcrafted White Coffee", price: 18.000,
        desc: "Racikan kopi putih pilihan yang disangrai sempurna untuk menghasilkan rasa yang lembut, nutty, dan rendah asam. Diproses secara khusus untuk memberikan cita rasa otentik yang halus di setiap tegukan.",
        img: "https://images.unsplash.com/photo-1727080409436-356bdc609899?w=500&q=80",
        color: "#f4ede2"
      },
      Milk: {
        name: "Vima's Glacier Latte", price: 20.000,
        desc: "Perpaduan harmonis antara espresso mantap dan susu segar yang dingin, disajikan dengan kesegaran maksimal layaknya sejuknya es glasial. Pilihan sempurna untuk menyegarkan harimu.",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80",
        color: "#c99a6b"
      },
      Dark: {
        name: "Vima's Heartbeat Espresso", price: 12.000,
        desc: "Ekstraksi espresso pekat dengan karakter rasa yang kuat, kaya, dan berani. Satu tembakan energi murni yang siap membangkitkan semangat dan memberi ritme pada harimu.",
        img: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=500&q=80",
        color: "#4a2c17"
      }
    }
  },
  icetea: {
    default: 'Lemon',
    variants: {
      Lemon: {
        name: "Vima's Sunburst Lemon Tea", price: 15.000,
        desc: "Kesegaran ekstrak lemon alami yang dipadukan dengan seduhan teh pilihan. Cita rasa asam-manis yang cerah dan seimbang, siap memberikan suntikan semangat di setiap tegukan.",
        img: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500&q=80",
        color: "#e8d24a"
      },
      Berry: {
        name: "Vima's Wildwood Berry Tea", price: 16.000,
        desc: "Perpaduan memikat antara seduhan teh berkualitas dan sensasi manis-asam alami dari buah beri liar. Menghasilkan aroma buah yang harum dan warna merah alami yang cantik.",
        img: "https://plus.unsplash.com/premium_photo-1664472688479-167c2b9ff0f7?q=80&w=500",
        color: "#e93333"
      },
      Original: {
        name: "Vima's Signature Origin Tea", price: 12.000,
        desc: "Seduhan daun teh murni kualitas terbaik dengan aroma yang otentik dan menenangkan. Pilihan klasik tanpa campuran untuk menikmati keaslian cita rasa teh sejati.",
        img: "https://images.unsplash.com/photo-1499961024600-ad094db305cc?q=80&w=500",
        color: "#8a5a2b"
      }
    }
  },
  beverage: {
    default: 'Berry',
    variants: {
      Berry: {
        name: "Vima's Wildberry Spark", price: 17.000,
        desc: "Perpaduan kesegaran soda dingin dengan rasa manis-asam buah beri pilihan yang meletup di lidah. Minuman berwarna cantik yang memberikan sensasi cerah dan penuh energi.",
        img: "https://images.unsplash.com/photo-1581927692308-be9e43b4d860?q=80&w=500",
        color: "#b23a5e"
      },
      Grape: {
        name: "Vima's Velvet Grape Fizz", price: 17.000,
        desc: "Eksplorasi rasa anggur yang manis, kaya, dan beraroma khas, dipadukan dengan gelembung soda yang halus. Kombinasi unik yang memberikan kesegaran elegan di setiap seruputan.",
        img: "https://images.unsplash.com/photo-1676566352352-40a5e9ae5e9b?q=80&w=500",
        color: "#6b3fa0"
      },
      Citrus: {
        name: "Vima's Citrus Surge", price: 17.000,
        desc: "Suntikan kesegaran instan dari racikan jeruk dan lemon pilihan yang dipadukan dengan soda dingin. Rasa asam-manis yang tajam dan dinginnya soda siap melepas dahaga seketika.",
        img: "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?q=80&w=500",
        color: "#e8902a"
      }
    }
  },
  juices: {
    default: 'Orange',
    variants: {
      Orange: {
        name: "Vima's Fresh Orange Juice", price: 15.000,
        desc: "Perasan jeruk segar murni kaya vitamin C yang menyegarkan. Menghadirkan keseimbangan rasa manis dan asam alami yang sempurna untuk membangkitkan energi harimu.",
        img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80",
        color: "#f2941f"
      },
      Apple: {
        name: "Vima's Fresh Apple Juice", price: 16.000,
        desc: "Ekstrak buah apel pilihan yang diolah lembut untuk menghasilkan sensasi manis yang renyah, wangi, dan menenangkan. Pilihan jus manis alami yang pas di setiap suasana.",
        img: "https://images.unsplash.com/photo-1727989815707-1b9e8f376775?w=500&q=80",
        color: "#8bbf3f"
      },
      Mango: {
        name: "Vima's Fresh Mango Juice", price: 16.000,
        desc: "Daging buah mangga matang pohon yang di-blend tebal dan creamy. Menawarkan cita rasa tropis yang manis, kaya, dan mengenyangkan di setiap tegukan.",
        img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&q=80",
        color: "#ffcc33"
      }
    }
  }
};

const FLAVOURS = [
  { name:"Hot Chocolate", price:18.000, badge:"Chocolate", img:"https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=400" },
  { name:"Iced Caramel Macchiato", price:23.000, badge:"Coffee", img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" },
  { name:"Classic Cappuccino", price:18.000, badge:"Coffee", img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" },
  { name:"Vanilla Cold Brew", price:20.000, badge:"Coffee", img:"https://plus.unsplash.com/premium_photo-1677607237294-b041e4b57391?q=80&w=500" },
  { name:"Mocha Frappe", price:22.000, badge:"Chocolate", img:"https://images.unsplash.com/photo-1718267050202-9b1b6bfb8545?w=400&q=80" },
  { name:"Ice Americano", price:15.000, badge:"Coffee", img:"https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=400&q=80" },
  { name:"Original Ice Tea", price:12.000, badge:"Tea", img:"https://images.unsplash.com/photo-1499961024600-ad094db305cc?q=80&w=400" },
  { name:"Hot Caramel Macchiato", price:21.000, badge:"Coffee", img:"https://images.unsplash.com/photo-1717356724880-7b1395faa71f?w=400&q=80" },
  { name:"Hazelnut Cappuccino", price:20.000, badge:"Coffee", img:"https://images.unsplash.com/photo-1642647390911-77934bc6bc33?w=400&q=80" },
  { name:"Lemon Tea", price:15.000, badge:"Tea", img:"https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=80" },
  { name:"Mango Juice", price:16.000, badge:"Juice", img:"https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80" },
  { name:"Orange Juice", price:15.000, badge:"Juice", img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80" },
  { name:"Berry Spark", price:17.000, badge:"Soda", img:"https://images.unsplash.com/photo-1581927692308-be9e43b4d860?q=80&w=400" }
];

// ============ STATE ============
let qty = 1;
let currentCategory = 'coffee';
let currentVariant = CATALOG.coffee.default;
let cart = []; // { id, name, price, qty, img }

// ============ ELEMENTS ============
const qtyValue = document.getElementById('qtyValue');
const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const addToCartBtn = document.getElementById('addToCartBtn');
const cartCountEl = document.getElementById('cartCount');
const fpName = document.getElementById('fpName');
const fpPrice = document.getElementById('fpPrice');
const fpDesc = document.getElementById('fpDesc');
const fpImage = document.getElementById('fpImage');
const variantScale = document.getElementById('variantScale');
const catTabs = document.querySelectorAll('.cat-tab');
const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');
const flavourTrack = document.getElementById('flavourTrack');
const flavourDots = document.getElementById('flavourDots');
const prevFlavour = document.getElementById('prevFlavour');
const nextFlavour = document.getElementById('nextFlavour');
const nlForm = document.getElementById('nlForm');
const nlEmail = document.getElementById('nlEmail');
const nlMsg = document.getElementById('nlMsg');
const scrollHint = document.getElementById('scrollHint');

const overlay = document.getElementById('overlay');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItemsEl = document.getElementById('cartItems');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const checkoutBtn = document.getElementById('checkoutBtn');

const checkoutModal = document.getElementById('checkoutModal');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
const checkoutItemsEl = document.getElementById('checkoutItems');
const checkoutTotalEl = document.getElementById('checkoutTotal');
const checkoutForm = document.getElementById('checkoutForm');
const successOrderId = document.getElementById('successOrderId');
const successTotal = document.getElementById('successTotal');
const successCloseBtn = document.getElementById('successCloseBtn');
const formView = document.querySelector('.checkout-form-view');
const successView = document.querySelector('.checkout-success-view');

// ============ QUANTITY CONTROL ============
function updateQty(delta){
  qty = Math.max(1, Math.min(20, qty + delta));
  qtyValue.textContent = qty;
}
qtyMinus.addEventListener('click', () => updateQty(-1));
qtyPlus.addEventListener('click', () => updateQty(1));

// ============ VARIANT SELECTOR (Coffee / Ice Tea / Beverage / Juices) ============
function renderVariantDots(){
  const variants = CATALOG[currentCategory].variants;
  variantScale.innerHTML = Object.keys(variants).map(key => `
    <button class="variant-dot ${key === currentVariant ? 'active' : ''}" data-variant="${key}" style="--dot:${variants[key].color}">
      <span>${key}</span>
    </button>
  `).join('');

  variantScale.querySelectorAll('.variant-dot').forEach(dot => {
    dot.addEventListener('click', () => selectVariant(dot.dataset.variant));
  });
}

function selectVariant(variantKey){
  currentVariant = variantKey;
  const product = CATALOG[currentCategory].variants[variantKey];
  fpImage.style.opacity = 0;
  setTimeout(() => {
    fpName.textContent = product.name;
    fpPrice.textContent = `Rp ${product.price.toFixed(3)}`;
    fpDesc.textContent = product.desc;
    fpImage.src = product.img;
    fpImage.alt = product.name;
    fpImage.style.opacity = 1;
  }, 150);
  variantScale.querySelectorAll('.variant-dot').forEach(d => {
    d.classList.toggle('active', d.dataset.variant === variantKey);
  });
}

function switchCategory(cat){
  currentCategory = cat;
  currentVariant = CATALOG[cat].default;
  renderVariantDots();
  selectVariant(currentVariant);
}

catTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    catTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    switchCategory(tab.dataset.cat);
  });
});

renderVariantDots();
selectVariant(currentVariant);

// ============ CART ============
function cartTotal(){
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}
function cartCountTotal(){
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function addToCart(item, addQty = 1){
  const existing = cart.find(c => c.name === item.name);
  if (existing){
    existing.qty += addQty;
  } else {
    cart.push({
      id: 'c' + Date.now() + Math.floor(Math.random() * 1000),
      name: item.name,
      price: item.price,
      img: item.img,
      qty: addQty
    });
  }
  renderCart();
}

function removeFromCart(id){
  cart = cart.filter(c => c.id !== id);
  renderCart();
}

function changeCartQty(id, delta){
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCart();
}

function renderCart(){
  cartCountEl.textContent = cartCountTotal();

  if (cart.length === 0){
    cartItemsEl.innerHTML = `<p class="cart-empty">Keranjang masih kosong. Yuk pilih menu favoritmu!</p>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price">Rp.${item.price.toFixed(3)}</span>
          <div class="cart-item-qty">
            <button class="cq-minus" aria-label="Kurangi jumlah">–</button>
            <span>${item.qty}</span>
            <button class="cq-plus" aria-label="Tambah jumlah">+</button>
          </div>
        </div>
        <button class="cart-item-remove" aria-label="Hapus item">✕</button>
      </div>
    `).join('');

    cartItemsEl.querySelectorAll('.cart-item').forEach(row => {
      const id = row.dataset.id;
      row.querySelector('.cq-minus').addEventListener('click', () => changeCartQty(id, -1));
      row.querySelector('.cq-plus').addEventListener('click', () => changeCartQty(id, 1));
      row.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(id));
    });
  }

  cartSubtotalEl.textContent = `Rp ${cartTotal().toFixed(3)}`;
  checkoutBtn.disabled = cart.length === 0;
}

function openCart(){
  cartDrawer.classList.add('open');
  overlay.classList.add('show');
}
function closeCart(){
  cartDrawer.classList.remove('open');
  if (!checkoutModal.classList.contains('open')) overlay.classList.remove('show');
}

cartBtn.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);

// ============ ADD TO CART (produk unggulan) ============
addToCartBtn.addEventListener('click', () => {
  const product = CATALOG[currentCategory].variants[currentVariant];
  addToCart({ name: product.name, price: product.price, img: product.img }, qty);
  addToCartBtn.textContent = "Added ✓";
  addToCartBtn.classList.add('bounce');
  setTimeout(() => {
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.classList.remove('bounce');
  }, 900);
  openCart();
});

// ============ MOBILE NAV + FIX SCROLL HOME ============
burgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    mainNav.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    mainNav.classList.remove('open');
    if (href === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// ============ POPULAR FLAVOUR CAROUSEL ============
function renderFlavours(){
  flavourTrack.innerHTML = FLAVOURS.map(f => `
    <div class="flavour-card">
      <span class="flavour-badge">${f.badge}</span>
      <img src="${f.img}" alt="${f.name}">
      <h3>${f.name}</h3>
      <div class="flavour-foot">
        <span class="flavour-price">Rp ${f.price.toFixed(3)}</span>
        <button class="flavour-add" type="button">Add to Cart</button>
      </div>
    </div>
  `).join('');

  flavourTrack.querySelectorAll('.flavour-card').forEach((card, i) => {
    card.querySelector('.flavour-add').addEventListener('click', () => {
      addToCart(FLAVOURS[i], 1);
      const btn = card.querySelector('.flavour-add');
      btn.textContent = "Added";
      setTimeout(() => (btn.textContent = "Add to Cart"), 800);
    });
  });

  const dotCount = Math.min(FLAVOURS.length, 5);
  flavourDots.innerHTML = Array.from({length: dotCount}, (_, i) =>
    `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
  ).join('');
}
renderFlavours();

function scrollFlavours(dir){
  const card = flavourTrack.querySelector('.flavour-card');
  const step = card ? card.offsetWidth + 20 : 260;
  flavourTrack.scrollBy({ left: dir * step, behavior: 'smooth' });
}
prevFlavour.addEventListener('click', () => scrollFlavours(-1));
nextFlavour.addEventListener('click', () => scrollFlavours(1));

flavourTrack.addEventListener('scroll', () => {
  const dots = flavourDots.querySelectorAll('.dot');
  const ratio = flavourTrack.scrollLeft / (flavourTrack.scrollWidth - flavourTrack.clientWidth || 1);
  const activeIndex = Math.round(ratio * (dots.length - 1));
  dots.forEach((d, i) => d.classList.toggle('active', i === activeIndex));
});

// ============ SCROLL HINT ============
scrollHint.addEventListener('click', () => {
  document.getElementById('favourite').scrollIntoView({ behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
  scrollHint.style.opacity = window.scrollY > 700 ? '0' : '1';
}, { passive: true });

// ============ NEWSLETTER FORM ============
nlForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = nlEmail.value.trim();
  if (!email) return;
  nlMsg.textContent = `Terima kasih! Penawaran akan dikirim ke ${email}.`;
  nlForm.reset();
});

// ============ CHECKOUT ============
function renderCheckoutSummary(){
  checkoutItemsEl.innerHTML = cart.map(item => `
    <div class="co-row"><span>${item.name} × ${item.qty}</span><span>Rp ${(item.price * item.qty).toFixed(3)}</span></div>
  `).join('');
  checkoutTotalEl.textContent = `Rp ${cartTotal().toFixed(3)}`;
}

function openCheckout(){
  if (cart.length === 0) return;
  renderCheckoutSummary();
  formView.style.display = 'block';
  successView.style.display = 'none';
  checkoutModal.classList.add('open');
  overlay.classList.add('show');
  cartDrawer.classList.remove('open');
}
function closeCheckout(){
  checkoutModal.classList.remove('open');
  if (!cartDrawer.classList.contains('open')) overlay.classList.remove('show');
}

checkoutBtn.addEventListener('click', openCheckout);
checkoutCloseBtn.addEventListener('click', closeCheckout);
overlay.addEventListener('click', () => { closeCart(); closeCheckout(); });

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const orderId = Math.floor(1 + Math.random() * 9999);
  successOrderId.textContent = `#${orderId}`;
  successTotal.textContent = `Rp ${cartTotal().toFixed(3)}`;
  formView.style.display = 'none';
  successView.style.display = 'block';
  cart = [];
  renderCart();
  checkoutForm.reset();
});

successCloseBtn.addEventListener('click', closeCheckout);

// ============ ACTIVE NAV ON SCROLL ============
const sections = ['top', 'menu', 'favourite', 'deals'].map(id => document.getElementById(id)).filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => observer.observe(sec));

// init cart UI
renderCart();
