// ============ DATA ============
const PRODUCTS = {
  White: {
    name: "Vima's White Choco Coffee",
    price: 1.4,
    desc: "White chocolate coffee memadukan kelembutan cokelat putih dengan aroma kopi yang lembut. Ringan, manis, dan cocok dinikmati hangat maupun dingin.",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80"
  },
  Milk: {
    name: "Vima's Choco Coffee",
    price: 1.2,
    desc: "Chocolate coffee, dikenal juga sebagai mocha, adalah minuman lezat yang menggabungkan rasa cokelat yang kaya dengan sensasi kopi yang menyegarkan. Perpaduan klasik ini bisa dinikmati panas atau dingin, dan dapat disesuaikan dengan selera Anda.",
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80"
  },
  Dark: {
    name: "Vima's Dark Choco Coffee",
    price: 1.5,
    desc: "Dark chocolate coffee hadir dengan rasa cokelat pekat dan pahit yang seimbang dengan kekuatan espresso. Pilihan tepat untuk pecinta rasa bold.",
    img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=500&q=80"
  }
};

const FLAVOURS = [
  { name:"Hand Roasted Hot Chocolate", price:"$1.2", img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80" },
  { name:"Iced Caramel Macchiato", price:"$1.5", img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" },
  { name:"Classic Cappuccino", price:"$1.1", img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" },
  { name:"Vanilla Cold Brew", price:"$1.3", img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" },
  { name:"Mocha Frappe", price:"$1.4", img:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80" },
  { name:"Espresso Tonic", price:"$1.0", img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" }
];

// ============ STATE ============
let qty = 2;
let cartCount = 0;
let currentMilk = "Milk";

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
const milkDots = document.querySelectorAll('.milk-dot');
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

// ============ QUANTITY CONTROL ============
function updateQty(delta){
  qty = Math.max(1, Math.min(20, qty + delta));
  qtyValue.textContent = qty;
}
qtyMinus.addEventListener('click', () => updateQty(-1));
qtyPlus.addEventListener('click', () => updateQty(1));

// ============ ADD TO CART ============
addToCartBtn.addEventListener('click', () => {
  cartCount += qty;
  cartCountEl.textContent = cartCount;
  addToCartBtn.textContent = "Added ✓";
  addToCartBtn.classList.add('bounce');
  setTimeout(() => {
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.classList.remove('bounce');
  }, 900);
});

// ============ MILK / VARIANT SWITCH ============
function setMilk(milk){
  currentMilk = milk;
  const product = PRODUCTS[milk];
  fpImage.style.opacity = 0;
  setTimeout(() => {
    fpName.textContent = product.name;
    fpPrice.textContent = `$${product.price.toFixed(2)}`;
    fpDesc.textContent = product.desc;
    fpImage.src = product.img;
    fpImage.alt = product.name;
    fpImage.style.opacity = 1;
  }, 150);
  milkDots.forEach(d => d.classList.toggle('active', d.dataset.milk === milk));
}
milkDots.forEach(dot => {
  dot.addEventListener('click', () => setMilk(dot.dataset.milk));
});
setMilk('Milk');

// ============ CATEGORY TABS ============
catTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    catTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // Untuk demo: setiap kategori menampilkan variasi rasa produk unggulan
    const cat = tab.dataset.cat;
    if (cat === 'coffee') setMilk('Milk');
    if (cat === 'icetea') setMilk('White');
    if (cat === 'beverage') setMilk('Dark');
    if (cat === 'juices') setMilk('Milk');
  });
});

// ============ MOBILE NAV ============
burgerBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    mainNav.classList.remove('open');
  });
});

// ============ POPULAR FLAVOUR CAROUSEL ============
function renderFlavours(){
  flavourTrack.innerHTML = FLAVOURS.map(f => `
    <div class="flavour-card">
      <span class="flavour-badge">Chocolate</span>
      <img src="${f.img}" alt="${f.name}">
      <h3>${f.name}</h3>
      <div class="flavour-foot">
        <span class="flavour-price">${f.price}</span>
        <button class="flavour-add" type="button">Add to Cart</button>
      </div>
    </div>
  `).join('');

  flavourTrack.querySelectorAll('.flavour-add').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount += 1;
      cartCountEl.textContent = cartCount;
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

// ============ SCROLL HINT: scroll to popular section ============
scrollHint.addEventListener('click', () => {
  document.getElementById('favourite').scrollIntoView({ behavior: 'smooth' });
});

// hide scroll hint once user has scrolled past hero
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