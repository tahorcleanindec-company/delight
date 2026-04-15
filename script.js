
const menuCategories = [
  {
    id: "yogurt", 
    name: "Yogurt Griego", 
    emoji: "\u{1F963}",  
    description: "Nuestro yogurt griego natural con tus toppings favoritos",
    items: [
      
      { 
        id: "delight-fantasia", 
        name: "Delight Fantasia", 
        description: "Yogurt griego con banano, fresas, chispas de chocolate, cereal crocante y jalea a tu eleccion", 
        price: 2.00, 
        image: "delightfantasia.jpg",
        isBuilder: true,
        selectionGroups: [
          { name: "Yogurt", options: ["Yogurt griego natural", "Yogurt griego vainilla", "Kefir"], maxSelect: 1, required: true },
          { name: "Jalea", options: ["Maracuya", "Fresa", "Kiwi", "Durazno", "Mora", "Machat", "Manjar", "Cafe", "Chocolate", "Pina"], maxSelect: 1, required: true }
        ],
        extras: [
          { name: "Jalea extra", price: 0.25 },
          { name: "Fruta extra", price: 0.25 },
          { name: "Topping extra", price: 0.25 }
        ]
      },
      
      
      { 
        id: "parfait-griego", 
        name: "Parfait de Yogurt Griego", 
        description: "Yogurt griego 0% grasa con frutos rojos, miel y granola. 145 calorias, 12g proteina", 
        price: 2.50, 
        image: "parfaitdeyogurtgriego.jpg"
      },
      
      
      { 
        id: "arma-tu-delight", 
        name: "Arma tu DeLight", 
        description: "Crea tu propio yogurt personalizado. Endulzado naturalmente con estevia y miel, sin azucar refinada", 
        price: 2.25, 
        image: "armatudelight.jpg",
        isBuilder: true,
        selectionGroups: [
          { name: "Yogurt", options: ["Yogurt griego natural", "Yogurt griego vainilla", "Kefir"], maxSelect: 1, required: true },
          { name: "Jalea", options: ["Maracuya", "Fresa", "Kiwi", "Durazno", "Mora", "Machat", "Manjar", "Cafe", "Chocolate", "Pina"], maxSelect: 1, required: true },
          { name: "Frutas", options: ["Fresa", "Mango", "Pina", "Kiwi", "Banano", "Manzana", "Guanabana"], maxSelect: 2, required: true },
          { name: "Crujiente", options: ["Granola", "Mix de semillas"], maxSelect: 1, required: true },
          { name: "Toque final", options: ["Miel", "Coco rallado", "Chia"], maxSelect: 1, required: true }
        ],
        extras: [
          { name: "Fruta extra", price: 0.25 },
          { name: "Jalea extra", price: 0.25 },
          { name: "Crujiente extra", price: 0.25 },
          { name: "Topping extra", price: 0.25 }
        ]
      },

      { 
        id: "fresa-oreo", 
        name: "Fresa y Oreo", 
        description: "Yogurt griego con galletas de Oreo, fresas frescas y jalea de chocolate", 
        price: 1.90, 
        image: "fresayoreo.jpg"  
      },
      
      
      { 
        id: "yogurt-acai", 
        name: "Yogurt de Acai", 
        description: "Yogurt con acai, fresa, banano, arandanos y granola", 
        price: 2.99, 
        image: "yogurtdeacai.jpg"  
      },
      
     
      { 
        id: "choco-banana", 
        name: "Choco Banana", 
        description: "Yogurt griego con jalea de chocolate, rodajas de banano y semillas de chia", 
        price: 1.80, 
        image: "chocobanana.jpg"  
      },
      
  
      { 
        id: "mani-choco-crocante", 
        name: "Mani Choco Crocante", 
        description: "Yogurt griego con jalea de higo, mani cubierto de chocolate y cereal de chocolate", 
        price: 1.90, 
        image: "manichococrocante.jpg"  
      },
      
     
      { 
        id: "delight-energy", 
        name: "Delight Energy", 
        description: "Yogurt griego con mix de semillas, miel y frutos del bosque", 
        price: 2.99, 
        image: "delightenergy.png"
      },
      
     
      { 
        id: "delight-tropical", 
        name: "Delight Tropical", 
        description: "Yogurt griego con fresas, pina, granola crocante y jalea de mora", 
        price: 2.25, 
        image: "delighttropical.png"
      },
      
      
      { 
        id: "delight-premium", 
        name: "Delight Premium", 
        description: "Yogurt griego con kiwi, mango, coco rayado y jalea de maracuya", 
        price: 2.50, 
        image: "delightpremiun.png"
      },
    ]
  },
  {
    id: "desayunos", 
    name: "Desayunos DeLight", 
    emoji: "\u{1F373}",  
    description: "Desayunos saludables para empezar el dia con energia",
    items: [
      { 
        id: "omelette-cremoso", 
        name: "Omelette Cremoso", 
        description: "Huevos con tomatillos, espinaca y pan o chifle. Agrega una taza de cafe por $2.25", 
        price: 1.50, 
        image: "omelette.jpg"  
      },
    ]
  },
  {
    id: "tostadas", 
    name: "Tostadas DeLight", 
    emoji: "\u{1F35E}",  
    description: "Pan integral con ingredientes frescos y saludables",
    items: [
      { 
        id: "tostada-proteica", 
        name: "Tostada Proteica DeLight", 
        description: "Pan integral al horno con crema ligera de Skyr islandes, coronado con frutas y un toque de miel", 
        price: 2.00, 
        image: "tostadaproteica.jpg"
      },
      { 
        id: "tostada-pomodoro", 
        name: "Tostada Pomodoro DeLight", 
        description: "Pan integral con Skyr, tomates cherry al pomodoro, albahaca fresca y balsamico", 
        price: 2.00,
        image: "tostadapomodoro.jpg", 
      },
    ]
  },
  {
    id: "wraps", 
    name: "Wraps DeLight", 
    emoji: "\u{1F32F}",  
    description: "Wraps frescos y proteicos",
    items: [
      { 
        id: "wrap-delight", 
        name: "Wrap Proteico DeLight", 
        description: "Pollo grillado con lechugas, pepino, tomate cherry y cebolla morada encurtida. Servido con dip de Skyr al limon y eneldo", 
        price: 2.50,
        image: "wraps.png", 
      },
    ]
  },
  {
    id: "wraps", 
    name: "Wraps DeLight", 
    emoji: "\u{1F32F}",  
    description: "",
    items: [
      { 
        id: "wrap-delight", 
        name: "Wrap de panceta DeLight", 
        description: "", 
        price: 2.99,
        image: "wrap panceta.jpeg", 
      },
    ]
  },
  {
    id: "ensaladas", 
    name: "Ensaladas DeLight", 
    emoji: "\u{1F957}",  
    description: "Ensaladas frescas y llenas de sabor",
    items: [
      { 
        id: "ensalada-proteica", 
        name: "Ensalada Proteica DeLight", 
        description: "Pollo a la plancha sobre mix de lechugas, tomate cherry, pepino y zanahoria rallada. Con dip de Skyr al limon y hierbas frescas", 
        price: 3.00, 
        image: "ensalada.jpg", 
      },
    ]
  },
  {
    id: "combos", 
    name: "Combos DeLight", 
    emoji: "\u{1F389}",  
    description: "Las mejores combinaciones a un precio especial",
    items: [
      { id: "combo-energia-fit", name: "Combo Energia Fit", description: "Delight Energy + Wrap Proteico DeLight", price: 4.99 },
      { id: "combo-tropical-fresh", name: "Combo Tropical Fresh", description: "Delight Tropical + Tostada Proteica DeLight", price: 3.99 },
      { id: "combo-mediterraneo", name: "Combo Mediterraneo", description: "Delight Premium + Ensalada Proteica DeLight", price: 4.50 },
      { id: "combo-kids-happy", name: "Combo Kids Happy Pack", description: "Delight Fantasia + Mini Tostada Pomodoro", price: 2.99 },
      
      { 
        id: "super-combo", 
        name: "Super Combo Imperdible", 
        description: "Una tostada con queso holandes y jamon + un vaso de yogur natural", 
        price: 1.50, 
        image: "" 
      },
    ]
  },
  {
    id: "bebidas", 
    name: "Bebidas DeLight", 
    emoji: "\u{1F964}",  
    description: "Refrescantes y naturales",
    items: [
      
      

      { id: "limonada-tropical", 
        name: "Limonada Tropical", 
        description: "Mango + Pina", 
        price: 1.50,
        image: "tropical.png",
      },

      { id: "limonada-frutos-rojos", 
        name: "Limonada de Frutos Rojos", 
        description: "Limonada natural con frutos rojos", 
        price: 1.50,
        image: "frutorojos.png",
        },

      { id: "maracuya-hierbabuena", 
        name: "Maracuya & Hierbabuena", 
        description: "Refrescante mezcla de maracuya con hierbabuena", 
        price: 1.50,
        image: "maracuya.png",
        },

      { id: "te-verde-menta", 
        name: "Te Verde Menta & Limon", 
        description: "Te verde con menta fresca y limon", 
        price: 1.50,
        image: "teverde.png",
        },
      { id: "te-hibisco",
        name: "Te de Hibisco Frio",
        description: "Te de hibisco frio y refrescante",
        price: 1.50,
        image: "carga.jpg",
        },
      { id: "smoothie-verde",
        name: "Smoothie Verde Vital", 
        description: "Espinaca + manzana + pepino", 
        price: 1.75,
        image: "carga.jpg", 
        },
      { id: "smoothie-cacao", 
        name: "Smoothie Cacao & Banana",
        description: "Smoothie de cacao con banana", 
        price: 2.50,
        image: "carga.jpg",
        },
      
      { id: "Café", 
        name: "Café Mocha Helado", 
        description: "Cafe, Jalea chocolate, hielo, Leche", 
        price: 1.99,
        image: "cafemocha.png",  
      },
    ]
  }
];



const specialtiesData = [
 
  { 
    title: "Delight Energy", 
    description: "Yogurt griego con mix de semillas, miel y frutos del bosque", 
    price: "$2.99", 
    image: "delightenergy.png", 
  },
  
 
  { 
    title: "Delight Tropical", 
    description: "Yogurt griego con fresas, pina, granola crocante y jalea de mora", 
    price: "$2.25", 
    image: "delighttropical.png",  },
  
 
  { 
    title: "Delight Premium", 
    description: "Yogurt griego con kiwi, mango, coco rayado y jalea de maracuya", 
    price: "$2.50", 
    image: "delightpremiun.png",  },
  
  
  { 
    title: "Delight Fantasia", 
    description: "Yogurt griego con banano, fresas, chispas de chocolate, cereal crocante y jalea", 
    price: "$2.00", 
    image: "delightfantasia.jpg" 
  },
];




const WHATSAPP_NUMBER = "+593958703353"; 

const DELIVERY_FEE = 0.25;  


let cartItems = [];
let activeFilter = "all";
let deliveryType = "pickup";
let customerName = "";
let pickupTime = "";
let address = "";
let notes = "";


window.addEventListener("scroll", function() {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) { 
    nav.classList.add("scrolled"); 
  } else { 
    nav.classList.remove("scrolled"); 
  }
});

let mobileMenuOpen = false;

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  document.getElementById("mobileMenu").classList.toggle("open", mobileMenuOpen);
  document.getElementById("menuIcon").classList.toggle("hidden", mobileMenuOpen);
  document.getElementById("closeIcon").classList.toggle("hidden", !mobileMenuOpen);
}

function closeMobileMenu() {
  mobileMenuOpen = false;
  document.getElementById("mobileMenu").classList.remove("open");
  document.getElementById("menuIcon").classList.remove("hidden");
  document.getElementById("closeIcon").classList.add("hidden");
}




window.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    ["heroLogo","heroSubtitle","heroTitle","heroTagline","heroDivider","heroDesc","heroButtons","heroScroll"].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.classList.add("loaded");
    });
  }, 100);

  renderFilters();
  renderMenu();
  renderSpecialties();
  setupIntersectionObservers();
});




function setupIntersectionObservers() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll("[data-animate]").forEach(function(el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(2rem)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
  });
}




function renderFilters() {
  const container = document.getElementById("categoryFilters");
  let html = '<button class="filter-btn active" onclick="setFilter(\'all\')">Todos</button>';
  menuCategories.forEach(function(cat) {
    html += '<button class="filter-btn" onclick="setFilter(\'' + cat.id + '\')">' + cat.name.replace(" DeLight", "") + '</button>';
  });
  container.innerHTML = html;
}

function setFilter(filterId) {
  activeFilter = filterId;
  document.querySelectorAll(".filter-btn").forEach(function(btn) {
    btn.classList.remove("active");
    if ((filterId === "all" && btn.textContent === "Todos") ||
        btn.textContent === menuCategories.find(function(c) { return c.id === filterId; })?.name.replace(" DeLight", "")) {
      btn.classList.add("active");
    }
  });
  renderMenu();
}



function renderMenu() {
  const container = document.getElementById("menuContainer");
  const cats = activeFilter === "all" ? menuCategories : menuCategories.filter(function(c) { return c.id === activeFilter; });
  let html = "";

  cats.forEach(function(cat) {
    html += '<div class="category-block">';
    html += '<div class="category-header"><span class="emoji">' + cat.emoji + '</span><div><h3 class="font-serif">' + cat.name + '</h3><p>' + cat.description + '</p></div></div>';
    html += '<div class="menu-grid">';

    cat.items.forEach(function(item, idx) {
      html += '<div class="menu-card" style="animation-delay:' + (idx * 100) + 'ms">';

      if (item.image) {
        html += '<div class="menu-card-img"><img src="' + item.image + '" alt="' + item.name + '" /><div class="overlay"></div><span class="price-badge">$' + item.price.toFixed(2) + '</span></div>';
      }

      html += '<div class="menu-card-body">';
      html += '<div class="menu-card-top"><h3>' + item.name + '</h3>';
      
      if (!item.image) {
        html += '<span class="inline-price">$' + item.price.toFixed(2) + '</span>';
      }
      html += '</div>';
      html += '<p>' + item.description + '</p>';

      if (item.isBuilder && item.selectionGroups) {
        html += '<div class="builder-panel" id="builder-' + item.id + '">';
        item.selectionGroups.forEach(function(group) {
          html += '<div class="builder-group">';
          html += '<p class="label-text">' + group.name + ' (elige ' + group.maxSelect + ')</p>';
          html += '<div class="builder-options">';
          group.options.forEach(function(opt) {
            html += '<button class="builder-btn" data-item="' + item.id + '" data-group="' + group.name + '" data-option="' + opt + '" data-max="' + group.maxSelect + '" onclick="toggleBuilderOption(this)">' + opt + '</button>';
          });
          html += '</div></div>';
        });
        if (item.extras && item.extras.length > 0) {
          html += '<div class="builder-group extras-group">';
          html += '<p class="label-text extras-label">Extras (opcional)</p>';
          html += '<div class="builder-options">';
          item.extras.forEach(function(ext) {
            html += '<button class="builder-btn extra-btn" data-item="' + item.id + '" data-extra="' + ext.name + '" data-price="' + ext.price + '" onclick="toggleExtra(this)">' + ext.name + ' +$' + ext.price.toFixed(2) + '</button>';
          });
          html += '</div></div>';
        }
        html += '<div class="builder-total"><span>Total:</span><span id="builderTotal-' + item.id + '">$' + item.price.toFixed(2) + '</span></div>';
        html += '</div>';
      }
      else if (item.customizable && item.toppings) {
        html += '<div class="toppings-panel" id="toppings-' + item.id + '">';
        html += '<p class="label-text">Selecciona toppings</p>';
        html += '<div class="toppings-list">';
        item.toppings.forEach(function(t) {
          html += '<button class="topping-btn" data-item="' + item.id + '" data-topping="' + t + '" onclick="toggleTopping(this)">' + t + '</button>';
        });
        html += '</div></div>';
      }

      const btnLabel = item.isBuilder ? "Armar" : (item.customizable ? "Personalizar" : "Agregar");
      html += '<button class="add-btn" id="addBtn-' + item.id + '" onclick="handleAddClick(\'' + item.id + '\', ' + item.customizable + ', ' + item.isBuilder + ')">';
      html += '<svg style="width:1rem;height:1rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>';
      html += '<span id="addLabel-' + item.id + '">' + btnLabel + '</span></button>';

      html += '</div></div>';
    });

    html += '</div></div>';
  });

  container.innerHTML = html;
}



function toggleTopping(btn) {
  btn.classList.toggle("selected");
}

function getSelectedToppings(itemId) {
  const toppings = [];
  document.querySelectorAll('[data-item="' + itemId + '"].topping-btn.selected').forEach(function(btn) {
    toppings.push(btn.dataset.topping);
  });
  return toppings;
}

function toggleBuilderOption(btn) {
  const itemId = btn.dataset.item;
  const group = btn.dataset.group;
  const maxSelect = parseInt(btn.dataset.max);

  const groupBtns = document.querySelectorAll('[data-item="' + itemId + '"][data-group="' + group + '"]');
  const selectedInGroup = [];
  groupBtns.forEach(function(b) { if (b.classList.contains("selected")) selectedInGroup.push(b); });

  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");
  } else {
    if (selectedInGroup.length >= maxSelect) {
      selectedInGroup[0].classList.remove("selected");
    }
    btn.classList.add("selected");
  }
  updateBuilderTotal(itemId);
}

function toggleExtra(btn) {
  btn.classList.toggle("selected");
  updateBuilderTotal(btn.dataset.item);
}

function updateBuilderTotal(itemId) {
  let item = null;
  menuCategories.forEach(function(cat) {
    cat.items.forEach(function(i) { if (i.id === itemId) item = i; });
  });
  if (!item) return;

  let total = item.price;
  document.querySelectorAll('[data-item="' + itemId + '"].extra-btn.selected').forEach(function(btn) {
    total += parseFloat(btn.dataset.price);
  });

  const totalEl = document.getElementById("builderTotal-" + itemId);
  const label = document.getElementById("addLabel-" + itemId);
  if (totalEl) totalEl.textContent = "$" + total.toFixed(2);
  if (label && document.getElementById("builder-" + itemId)?.classList.contains("open")) {
    label.textContent = "Agregar $" + total.toFixed(2);
  }
}

function getBuilderSelections(itemId) {
  const selections = {};
  document.querySelectorAll('[data-item="' + itemId + '"].builder-btn.selected:not(.extra-btn)').forEach(function(btn) {
    const group = btn.dataset.group;
    if (!selections[group]) selections[group] = [];
    selections[group].push(btn.dataset.option);
  });
  return selections;
}

function getSelectedExtras(itemId) {
  const extras = [];
  document.querySelectorAll('[data-item="' + itemId + '"].extra-btn.selected').forEach(function(btn) {
    extras.push({ name: btn.dataset.extra, price: parseFloat(btn.dataset.price) });
  });
  return extras;
}

function handleAddClick(itemId, customizable, isBuilder) {
  const panel = document.getElementById("toppings-" + itemId);
  const builderPanel = document.getElementById("builder-" + itemId);
  const label = document.getElementById("addLabel-" + itemId);

  if (isBuilder && builderPanel) {
    if (!builderPanel.classList.contains("open")) {
      builderPanel.classList.add("open");
      updateBuilderTotal(itemId);
      return;
    }

    let item = null;
    menuCategories.forEach(function(cat) {
      cat.items.forEach(function(i) { if (i.id === itemId) item = i; });
    });
    if (!item) return;

    const selections = getBuilderSelections(itemId);
    const allValid = item.selectionGroups.every(function(group) {
      return !group.required || (selections[group.name] && selections[group.name].length > 0);
    });

    if (!allValid) {
      alert("Por favor completa todas las selecciones requeridas");
      return;
    }

    const extras = getSelectedExtras(itemId);
    const extrasCost = extras.reduce(function(sum, e) { return sum + e.price; }, 0);
    addToCartBuilder(item, selections, extras.map(function(e) { return e.name; }), extrasCost);

    builderPanel.classList.remove("open");
    builderPanel.querySelectorAll(".builder-btn").forEach(function(b) { b.classList.remove("selected"); });
    label.textContent = "Armar";
    updateBuilderTotal(itemId);
    return;
  }

  if (customizable && panel && !panel.classList.contains("open")) {
    panel.classList.add("open");
    label.textContent = "Agregar";
    return;
  }

  let item = null;
  menuCategories.forEach(function(cat) {
    cat.items.forEach(function(i) { if (i.id === itemId) item = i; });
  });

  if (!item) return;

  const toppings = customizable ? getSelectedToppings(itemId) : [];
  addToCart(item, toppings.length > 0 ? toppings : null);

  if (panel) {
    panel.classList.remove("open");
    panel.querySelectorAll(".topping-btn").forEach(function(b) { b.classList.remove("selected"); });
    label.textContent = "Personalizar";
  }
}



function addToCart(item, toppings) {
  const cartId = toppings ? item.id + "-" + toppings.sort().join("-") : item.id;
  const existing = cartItems.find(function(ci) { return ci.id === cartId; });

  if (existing) {
    existing.quantity++;
  } else {
    cartItems.push({ 
      id: cartId, 
      name: item.name, 
      price: item.price, 
      quantity: 1, 
      toppings: toppings, 
      selections: null, 
      extras: null, 
      extrasCost: 0 
    });
  }

  updateBadges();
  renderCart();
  showToast(item.name + " agregado al pedido");
}

function addToCartBuilder(item, selections, extras, extrasCost) {
  let cartId = item.id + "-" + Object.values(selections).flat().sort().join("-");
  if (extras.length > 0) cartId += "-" + extras.sort().join("-");

  const existing = cartItems.find(function(ci) { return ci.id === cartId; });

  if (existing) {
    existing.quantity++;
  } else {
    cartItems.push({ 
      id: cartId, 
      name: item.name, 
      price: item.price, 
      quantity: 1, 
      toppings: null, 
      selections: selections, 
      extras: extras, 
      extrasCost: extrasCost 
    });
  }

  updateBadges();
  renderCart();
  showToast(item.name + " agregado al pedido");
}

function updateQuantity(id, delta) {
  const item = cartItems.find(function(ci) { return ci.id === id; });
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(function(ci) { return ci.id !== id; });
  }
  updateBadges();
  renderCart();
}

function removeItem(id) {
  cartItems = cartItems.filter(function(ci) { return ci.id !== id; });
  updateBadges();
  renderCart();
}

function clearCart() {
  cartItems = [];
  updateBadges();
  renderCart();
}

function getTotalItems() {
  return cartItems.reduce(function(s, i) { return s + i.quantity; }, 0);
}

function getSubtotal() {
  return cartItems.reduce(function(s, i) { return s + (i.price + (i.extrasCost || 0)) * i.quantity; }, 0);
}

function getTotal() {
  var sub = getSubtotal();

  if (deliveryType === "delivery") {
    var totalItems = getTotalItems(); // cantidad total de productos
    return sub + (DELIVERY_FEE * totalItems);
  }

  return sub;
}


function updateBadges() {
  const count = getTotalItems();
  ["desktopBadge", "mobileBadge"].forEach(function(id) {
    const el = document.getElementById(id);
    el.textContent = count;
    el.classList.toggle("hidden", count === 0);
  });
  const cb = document.getElementById("cartCountBadge");
  cb.textContent = count + " items";
  cb.classList.toggle("hidden", count === 0);
}




function renderCart() {
  const content = document.getElementById("cartContent");
  const footer = document.getElementById("cartFooter");

  if (cartItems.length === 0) {
    footer.classList.add("hidden");
    content.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon"><svg style="width:2.5rem;height:2.5rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg></div><p>Tu carrito esta vacio</p><p>Explora nuestro menu y agrega tus platos favoritos</p></div>';
    return;
  }

  footer.classList.remove("hidden");

  var sub = getSubtotal();
  var tot = getTotal();
  var totalHtml = '<div class="cart-subtotal"><span>Subtotal</span><span>$' + sub.toFixed(2) + '</span></div>';
  if (deliveryType === "delivery") {
  var deliveryCost = DELIVERY_FEE * getTotalItems();

  totalHtml += '<div class="cart-delivery-fee"><span>Envio a domicilio</span><span class="fee">+$' + deliveryCost.toFixed(2) + '</span></div>';
}

  totalHtml += '<div class="cart-total-row"><span>Total</span><span class="total-amount">$' + tot.toFixed(2) + '</span></div>';
  document.getElementById("cartTotalSection").innerHTML = totalHtml;

  let html = '<div class="cart-items"><div class="cart-items-list">';

  cartItems.forEach(function(item) {
    html += '<div class="cart-item">';
    html += '<div class="cart-item-top"><h4>' + item.name + '</h4>';
    html += '<button class="cart-item-remove" onclick="removeItem(\'' + item.id.replace(/'/g, "\\'") + '\')" aria-label="Eliminar"><svg style="width:0.875rem;height:0.875rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg></button></div>';

    if (item.toppings && item.toppings.length > 0) {
      html += '<p class="cart-item-toppings">+ ' + item.toppings.join(", ") + '</p>';
    }

    if (item.selections) {
      html += '<div class="cart-item-selections">';
      Object.keys(item.selections).forEach(function(group) {
        html += '<p>' + group + ': ' + item.selections[group].join(", ") + '</p>';
      });
      html += '</div>';
    }

    if (item.extras && item.extras.length > 0) {
      html += '<p class="cart-item-extras">Extras: ' + item.extras.join(", ") + '</p>';
    }

    html += '<div class="cart-item-bottom">';
    html += '<div class="qty-control">';
    html += '<button class="qty-btn" onclick="updateQuantity(\'' + item.id.replace(/'/g, "\\'") + '\', -1)" aria-label="Disminuir"><svg style="width:0.75rem;height:0.75rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14"/></svg></button>';
    html += '<span class="qty-value">' + item.quantity + '</span>';
    html += '<button class="qty-btn" onclick="updateQuantity(\'' + item.id.replace(/'/g, "\\'") + '\', 1)" aria-label="Aumentar"><svg style="width:0.75rem;height:0.75rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></button>';
    html += '</div>';
    var itemTotal = (item.price + (item.extrasCost || 0)) * item.quantity;
    html += '<span class="cart-item-price">$' + itemTotal.toFixed(2) + '</span>';
    html += '</div></div>';
  });

  html += '</div>';
  html += '<button class="clear-cart-btn" onclick="clearCart()">Vaciar carrito</button>';

  html += '<div class="form-group"><label class="form-label">Tipo de entrega</label>';
  html += '<div class="delivery-grid">';
  html += '<button class="delivery-btn ' + (deliveryType === "pickup" ? "active" : "") + '" onclick="setDelivery(\'pickup\')">';
  html += '<svg style="width:1rem;height:1rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg> Retiro</button>';
  html += '<button class="delivery-btn ' + (deliveryType === "delivery" ? "active" : "") + '" onclick="setDelivery(\'delivery\')">';
  html += '<svg style="width:1rem;height:1rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> Domicilio (+$0.25)</button>';
  html += '</div></div>';

  html += '<div class="form-group"><label class="form-label" for="customerName">Tu nombre</label>';
  html += '<input class="form-input" id="customerName" type="text" placeholder="Nombre completo" value="' + escapeHtml(customerName) + '" oninput="onNameChange(this.value)" /></div>';

  if (deliveryType === "pickup") {
    html += '<div class="form-group"><label class="form-label form-label-flex" for="pickupTimeInput"><svg style="width:0.75rem;height:0.75rem;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Hora de retiro</label>';
    html += '<input class="form-input" id="pickupTimeInput" type="time" value="' + pickupTime + '" oninput="pickupTime=this.value" /></div>';
  } else {
    html += '<div class="form-group"><label class="form-label" for="addressInput">Direccion de entrega</label>';
    html += '<textarea class="form-textarea" id="addressInput" placeholder="Calle, numero, referencia..." rows="2" oninput="address=this.value">' + escapeHtml(address) + '</textarea></div>';
  }

  html += '<div class="form-group"><label class="form-label" for="notesInput">Notas adicionales</label>';
  html += '<textarea class="form-textarea" id="notesInput" placeholder="Alergias, preferencias especiales..." rows="2" oninput="notes=this.value">' + escapeHtml(notes) + '</textarea></div>';

  html += '</div>';
  content.innerHTML = html;

  updateWhatsAppBtn();
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function onNameChange(val) {
  customerName = val;
  updateWhatsAppBtn();
}

function updateWhatsAppBtn() {
  const btn = document.getElementById("whatsappBtn");
  const hint = document.getElementById("whatsappHint");
  if (customerName.trim()) {
    btn.disabled = false;
    hint.classList.add("hidden");
  } else {
    btn.disabled = true;
    hint.classList.remove("hidden");
  }
}

function setDelivery(type) {
  deliveryType = type;
  renderCart();
}



function sendToWhatsApp() {
  if (cartItems.length === 0) return;
  
  let msg = "*Nuevo Pedido DeLight*\n\n";
  msg += "*Cliente:* " + (customerName || "No especificado") + "\n";
  msg += "*Tipo:* " + (deliveryType === "pickup" ? "Retiro en local" : "Envio a domicilio") + "\n";
  
  if (deliveryType === "pickup" && pickupTime) {
    msg += "*Hora de retiro:* " + pickupTime + "\n";
  }
  if (deliveryType === "delivery" && address) {
    msg += "*Direccion:* " + address + "\n";
  }
  
  msg += "\n*--- Detalle del pedido ---*\n\n";
  
  cartItems.forEach(function(item) {
    var itemTotal = (item.price + (item.extrasCost || 0)) * item.quantity;
    msg += item.quantity + "x " + item.name + " - $" + itemTotal.toFixed(2) + "\n";
    
    if (item.toppings && item.toppings.length > 0) {
      msg += "   Toppings: " + item.toppings.join(", ") + "\n";
    }
    if (item.selections) {
      Object.keys(item.selections).forEach(function(group) {
        msg += "   " + group + ": " + item.selections[group].join(", ") + "\n";
      });
    }
    if (item.extras && item.extras.length > 0) {
      msg += "   Extras: " + item.extras.join(", ") + "\n";
    }
  });
  
  msg += "\n*Subtotal: $" + getSubtotal().toFixed(2) + "*\n";
  var deliveryCost = DELIVERY_FEE * getTotalItems();
msg += "*Envio a domicilio: +$" + deliveryCost.toFixed(2) + "*\n";

  msg += "*TOTAL: $" + getTotal().toFixed(2) + "*\n";
  
  if (notes) {
    msg += "\n*Notas:* " + notes;
  }
  
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg), "_blank");
}



function openCart() {
  document.getElementById("cartOverlay").classList.add("open");
  document.getElementById("cartPanel").classList.add("open");
  renderCart();
}

function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.getElementById("cartPanel").classList.remove("open");
}



function showToast(message) {
  const toast = document.getElementById("toast");
  document.getElementById("toastMessage").textContent = message;
  toast.classList.add("visible");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(function() {
    toast.classList.remove("visible");
  }, 2500);
}




function renderSpecialties() {
  const grid = document.getElementById("specialtiesGrid");
  let html = "";
  
  specialtiesData.forEach(function(item, idx) {
    html += '<div class="specialty-card" style="opacity:0;transform:translateY(3rem);transition:all 0.7s ease ' + (idx * 200) + 'ms;">';
    html += '<div class="specialty-card-img"><img src="' + item.image + '" alt="' + item.title + '" /><div class="overlay"></div><span class="sp-price">' + item.price + '</span></div>';
    html += '<div class="specialty-card-body"><h3 class="font-serif">' + item.title + '</h3><p>' + item.description + '</p></div>';
    html += '</div>';
  });
  
  grid.innerHTML = html;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  grid.querySelectorAll(".specialty-card").forEach(function(card) {
    observer.observe(card);
  });
}
