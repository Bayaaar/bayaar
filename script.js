"use strict";
/* ============================================================
   Уруулмэд — Хүүхдийн урлагийн дэлгүүр
   Ганц script.js — бүх хуудсанд ажиллана (index, products, cart)
   Сагс localStorage-д хадгалагдана. Бүх текст 100% монгол.
   ============================================================ */

var CATS = {
  biir: "Будгийн бийр",
  budag: "Будаг",
  harandaa: "Харандаа ба үзэг",
  heregsel: "Дагалдах хэрэгсэл"
};

var PRODUCTS = [
  { id: 1, name: "Будгийн бийрний иж бүрдэл — 12 ширхэг", cat: "biir", emoji: "🖌️", bg: "linear-gradient(135deg,#ffe3ee,#e3d9ff)", price: 24900, old: 32900, badge: "ХИТ", ageMin: 3, ageMax: 12, age: "3–12 нас", material: "Нейлон үс + модон иш", stock: 48, rating: 4.9, sold: 1320, desc: "Хавтгай, бөөрөнхий, нарийн үзүүртэй 12 төрлийн будгийн бийр. Усан будаг, гуашь, нийлэгт тохиромжтой. Багшийн зөвлөсөн анхны сет." },
  { id: 2, name: "Мэргэжлийн будгийн бийр — 24 ширхэг", cat: "biir", emoji: "🖌️", bg: "linear-gradient(135deg,#e0f2ff,#e9e4ff)", price: 45900, old: 55900, badge: "ШИНЭ", ageMin: 9, ageMax: 16, age: "9–16 нас", material: "Чанартай нийлэг үс + хус модон иш", stock: 26, rating: 5.0, sold: 410, desc: "Дугтуйтай, дугаартай 24 ширхэг мэргэжлийн будгийн бийр. Дүрслэх урлагийн дугуйлан, уралдаанд бэлтгэхэд тохиромжтой." },
  { id: 3, name: "Зузаан бариултай будгийн бийр — 6 ширхэг (бага нас)", cat: "biir", emoji: "🖌️", bg: "linear-gradient(135deg,#fff3d6,#ffe3ee)", price: 12900, old: null, badge: null, ageMin: 0, ageMax: 5, age: "0–5 нас", material: "Зөөлөн нийлэг үс + бүдүүн хуванцар иш", stock: 73, rating: 4.8, sold: 980, desc: "Бяцхан гарт атгахад хялбар бүдүүн бариултай будгийн бийр. Хурууны будагтай хамт хэрэглэхэд тохиромжтой." },
  { id: 4, name: "Усан будаг — 24 өнгө + бийр бэлэгтэй", cat: "budag", emoji: "🎨", bg: "linear-gradient(135deg,#d9f7ff,#ffe9f2)", price: 18900, old: 23900, badge: "ХЯМДРАЛ", ageMin: 3, ageMax: 12, age: "3–12 нас", material: "Хоргүй, угаахад хялбар пигмент", stock: 65, rating: 4.9, sold: 2100, desc: "Тод 24 өнгө, хурдан хатдаг, хувцсаас амархан арилдаг усан будаг. Нөөц будгийн бийр, холигч тавиур дагалдана." },
  { id: 5, name: "Гуашь будаг — 12 өнгө, 30мл", cat: "budag", emoji: "🧪", bg: "linear-gradient(135deg,#ffe9d2,#f3e4ff)", price: 22500, old: null, badge: null, ageMin: 6, ageMax: 14, age: "6–14 нас", material: "Өтгөн, хоргүй гуашь", stock: 41, rating: 4.7, sold: 760, desc: "Бүтээлч зураг, плакат, гар урлалд зориулсан өтгөн бүрхүүлтэй 12 өнгийн гуашь будаг." },
  { id: 6, name: "Нийлэг (акрил) будаг — 12 өнгө", cat: "budag", emoji: "🌈", bg: "linear-gradient(135deg,#e5ffe9,#e3f0ff)", price: 29900, old: 35900, badge: "ХИТ", ageMin: 6, ageMax: 16, age: "6–16 нас", material: "Усан суурьтай нийлэг", stock: 33, rating: 4.8, sold: 590, desc: "Даавуу, мод, чулуу, цаасан дээр будаж болдог тод нийлэг будаг. Хатсаны дараа усанд тэсвэртэй." },
  { id: 7, name: "Хурууны будаг — 6 өнгө (0–3 нас)", cat: "budag", emoji: "🖐️", bg: "linear-gradient(135deg,#fff0d6,#ffdfe8)", price: 16900, old: null, badge: "ШИНЭ", ageMin: 0, ageMax: 3, age: "0–3 нас", material: "Арьсанд аюулгүй, хоргүй", stock: 58, rating: 4.9, sold: 1450, desc: "Ам руугаа хийсэн ч аюулгүй найрлагатай хурууны будаг. Арьс, хувцаснаас усаар амархан арилна." },
  { id: 8, name: "Лав өнгийн харандаа — 24 өнгө", cat: "harandaa", emoji: "🖍️", bg: "linear-gradient(135deg,#ffefd6,#e6f7ff)", price: 12900, old: null, badge: null, ageMin: 3, ageMax: 9, age: "3–9 нас", material: "Хагардаггүй лав гол", stock: 88, rating: 4.8, sold: 1800, desc: "Хагардаггүй, гар бохирдуулахгүй 24 тод өнгө. Цэцэрлэгийн насныханд хамгийн тохиромжтой өнгийн харандаа." },
  { id: 9, name: "Эсгий үзэг — 18 өнгө, угаадаг", cat: "harandaa", emoji: "🖊️", bg: "linear-gradient(135deg,#e8e4ff,#d6f5ff)", price: 15900, old: 19900, badge: "ХЯМДРАЛ", ageMin: 3, ageMax: 10, age: "3–10 нас", material: "Угаадаг бэх, бүдүүн үзүүр", stock: 54, rating: 4.7, sold: 920, desc: "Хувцас, гараас угаахад арилдаг хоргүй бэхтэй эсгий үзэг. Тагийг удаан онгорхой орхисон ч хатдаггүй." },
  { id: 10, name: "Зургийн дэвтэр А3 — 20 хуудас, зузаан цаас", cat: "heregsel", emoji: "📓", bg: "linear-gradient(135deg,#f3e9ff,#fff3d6)", price: 9900, old: null, badge: null, ageMin: 3, ageMax: 16, age: "3–16 нас", material: "200г/м зузаан цаас", stock: 120, rating: 4.9, sold: 2600, desc: "Усан будаг, гуашьд урагдахгүй зузаан цаастай А3 дэвтэр. Будгийн бийрээр будахад нэвчдэггүй." },
  { id: 11, name: "Хүүхдийн модон мольберт (штатив)", cat: "heregsel", emoji: "🎨", bg: "linear-gradient(135deg,#ffe8d6,#e4ffe9)", price: 59900, old: 74900, badge: "ХИТ", ageMin: 6, ageMax: 14, age: "6–14 нас", material: "Нарсан мод, эвхэгддэг", stock: 14, rating: 4.9, sold: 320, desc: "Өндөр тохируулдаг, эвхэгддэг модон мольберт. Будгийн бийр, палитр тавих тавиуртай." },
  { id: 12, name: "Будгийн хормогч + ханцуйвч (хүүхдийн)", cat: "heregsel", emoji: "🦺", bg: "linear-gradient(135deg,#d6f0ff,#ffe6ef)", price: 13900, old: null, badge: null, ageMin: 0, ageMax: 9, age: "0–9 нас", material: "Усны хамгаалалттай даавуу", stock: 0, rating: 4.6, sold: 540, desc: "Ус, будаг нэвтэрдэггүй хормогч. Будгийн бийр угаах, будаг холих үед хувцсыг 100% хамгаална. Түр дууссан — захиалгаар авна." }
];

var CART_KEY = "uruulmed_cart";

var state = { cat: "all", age: "all", sort: "featured", query: "", stockOnly: false };
var cart = [];
var modalId = null;
var modalQty = 1;

/* ---------- Туслах ---------- */
function $(s) { return document.querySelector(s); }
function qs(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
function fmt(n) {
  var num = Number(n);
  if (isNaN(num)) num = 0;
  return num.toLocaleString("mn-MN") + " ₮";
}
function byId(id) {
  var nid = Number(id);
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === nid) return PRODUCTS[i];
  }
  return null;
}
function escapeHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ---------- Мэдэгдэл ---------- */
function toast(msg, type) {
  var w = $("#toastWrap");
  if (!w) return;
  var el = document.createElement("div");
  el.className = "toast " + (type === "err" ? "err" : "ok");
  el.textContent = msg;
  w.appendChild(el);
  setTimeout(function () {
    el.style.opacity = "0";
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 320);
  }, 2600);
}

/* ---------- Гүйлгээ түгжих ---------- */
function hasOpenOverlay() {
  var d = $("#cartDrawer"), p = $("#productModal"), o = $("#orderModal");
  var dOpen = !!(d && d.classList && d.classList.contains("open"));
  var pOpen = !!(p && !p.hidden);
  var oOpen = !!(o && !o.hidden);
  return dOpen || pOpen || oOpen;
}
function lockScroll() { if (document.body) document.body.style.overflow = "hidden"; }
function unlockScroll() { if (!hasOpenOverlay() && document.body) document.body.style.overflow = ""; }

/* ---------- Шүүлтүүр ---------- */
function ageMatch(p, f) {
  if (!p) return false;
  if (f === "all") return true;
  if (f === "0-3") return p.ageMin <= 3 && p.ageMax >= 0;
  if (f === "3-6") return p.ageMin <= 6 && p.ageMax >= 3;
  if (f === "6-9") return p.ageMin <= 9 && p.ageMax >= 6;
  if (f === "9+") return p.ageMax >= 9;
  return true;
}
function filtered() {
  var q = String(state.query == null ? "" : state.query).trim().toLowerCase();
  var list = PRODUCTS.filter(function (p) {
    if (state.cat !== "all" && p.cat !== state.cat) return false;
    if (!ageMatch(p, state.age)) return false;
    if (state.stockOnly && p.stock <= 0) return false;
    if (!q) return true;
    var hay = (p.name + " " + p.desc + " " + p.material + " " + (CATS[p.cat] || "")).toLowerCase();
    return hay.indexOf(q) !== -1;
  });
  if (state.sort === "price-asc") list = list.slice().sort(function (a, b) { return a.price - b.price; });
  else if (state.sort === "price-desc") list = list.slice().sort(function (a, b) { return b.price - a.price; });
  else if (state.sort === "name") list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name, "mn"); });
  else if (state.sort === "age") list = list.slice().sort(function (a, b) { return (a.ageMin - b.ageMin) || (a.ageMax - b.ageMax); });
  return list;
}

/* ---------- Бүтээгдэхүүн зурах ---------- */
function stockLabel(p) {
  if (p.stock <= 0) return '<span class="stock-dot out">Дууссан</span>';
  if (p.stock < 20) return '<span class="stock-dot low">Цөөн үлдлээ</span>';
  return '<span class="stock-dot">Нөөцтэй ✅</span>';
}
function badgeClass(b) {
  if (b === "ХИТ") return "hit";
  if (b === "ШИНЭ") return "new";
  return "sale";
}
function render() {
  var grid = $("#productGrid");
  var list = filtered();
  var stat = $("#statProducts");
  if (stat) stat.textContent = String(PRODUCTS.length);
  var ri = $("#resultInfo");
  if (ri) ri.textContent = list.length + " / " + PRODUCTS.length + " бүтээгдэхүүн";
  var empty = $("#emptyState");
  if (empty) empty.hidden = list.length > 0;
  if (!grid) return;
  if (!list.length) { grid.innerHTML = ""; return; }
  grid.innerHTML = list.map(function (p, i) {
    var delay = Math.min(i * 35, 350);
    var badge = p.badge ? '<span class="badge ' + badgeClass(p.badge) + '">' + escapeHtml(p.badge) + "</span>" : "";
    var old = p.old ? '<span class="old-price">' + fmt(p.old) + "</span>" : "";
    var btn = p.stock <= 0
      ? '<button class="add-btn" data-add="' + p.id + '" disabled>Дууссан</button>'
      : '<button class="add-btn" data-add="' + p.id + '" aria-label="Сагсанд нэмэх">Сагс 🛒</button>';
    return (
      '<article class="card" data-id="' + p.id + '" style="animation-delay:' + delay + 'ms" tabindex="0" role="button" aria-label="' + escapeHtml(p.name) + ' — дэлгэрэнгүй үзэх">' +
        '<div class="card-visual" style="background:' + p.bg + '">' +
          badge + stockLabel(p) +
          '<span class="zoom" aria-hidden="true">' + p.emoji + "</span>" +
          '<span class="card-hint">🔍 Томруулж үзэх</span>' +
        "</div>" +
        '<div class="card-body">' +
          '<p class="card-cat">' + escapeHtml(CATS[p.cat] || "") + "</p>" +
          "<h3>" + escapeHtml(p.name) + "</h3>" +
          '<p class="card-meta">🎯 ' + escapeHtml(p.age) + " • ⭐ " + p.rating + " (" + p.sold + "+ зарагдсан)</p>" +
          '<div class="card-foot"><div><span class="price">' + fmt(p.price) + "</span>" + old + "</div>" + btn + "</div>" +
        "</div>" +
      "</article>"
    );
  }).join("");
}

/* ---------- Сагс ---------- */
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* ignore */ }
}
function loadCart() {
  cart = [];
  try {
    var raw = localStorage.getItem(CART_KEY);
    if (!raw) return;
    var arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return;
    var clean = [];
    for (var i = 0; i < arr.length; i++) {
      var c = arr[i];
      if (!c || typeof c.qty !== "number" || c.qty <= 0) continue;
      var p = byId(c.id);
      if (!p) continue;
      var max = p.stock > 0 ? p.stock : 0;
      var q = Math.min(Math.floor(c.qty), max);
      if (q <= 0) continue;
      clean.push({ id: p.id, qty: q });
    }
    cart = clean;
  } catch (e) { cart = []; }
}
function cartCount() {
  var s = 0;
  for (var i = 0; i < cart.length; i++) s += cart[i].qty;
  return s;
}
function cartSubtotal() {
  var s = 0;
  for (var i = 0; i < cart.length; i++) {
    var p = byId(cart[i].id);
    if (p) s += p.price * cart[i].qty;
  }
  return s;
}
function deliveryFee() {
  var st = cartSubtotal();
  if (st === 0) return 0;
  return st >= 50000 ? 0 : 5000;
}
function findLine(id) {
  var nid = Number(id);
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === nid) return cart[i];
  }
  return null;
}
function renderCart() {
  var n = cartCount(), st = cartSubtotal(), fee = deliveryFee();
  var cnt = $("#cartCount");
  if (cnt) cnt.textContent = String(n);
  var head = $("#cartHeadCount");
  if (head) head.textContent = "(" + n + ")";
  var sub = $("#cartSubtotal");
  if (sub) sub.textContent = fmt(st);
  var del = $("#cartDelivery");
  if (del) del.textContent = st === 0 ? fmt(0) : (fee === 0 ? "Үнэгүй 🎉" : fmt(fee));
  var tot = $("#cartTotal");
  if (tot) tot.textContent = fmt(st + fee);
  var hint = $("#freeHint");
  if (hint) {
    if (st >= 50000) { hint.className = "free-hint"; hint.textContent = "🎉 Та үнэгүй хүргэлт авлаа!"; }
    else if (st > 0) { hint.className = "free-hint need"; hint.textContent = "💡 " + fmt(50000 - st) + " нэмж авбал хүргэлт үнэгүй болно."; }
    else { hint.className = "free-hint"; hint.textContent = ""; }
  }
  var box = $("#cartItems");
  if (!box) return;
  if (!cart.length) {
    box.innerHTML = '<div class="cart-empty"><div>🛒</div><h3>Сагс хоосон байна</h3><p>Дуртай будгийн бийр, будгаа сонгоорой!</p><p><a class="link-btn" href="products.html">Бүтээгдэхүүн үзэх ➜</a></p></div>';
    return;
  }
  box.innerHTML = cart.map(function (c) {
    var p = byId(c.id);
    if (!p) return "";
    return (
      '<div class="cart-item">' +
        '<span class="ci-emoji" style="background:' + p.bg + '">' + p.emoji + "</span>" +
        '<div class="ci-info"><strong>' + escapeHtml(p.name) + '</strong><span class="ci-price">' + fmt(p.price) + ' / ширхэг</span>' +
          '<div class="ci-qty"><button data-dec="' + p.id + '" aria-label="Хасах">−</button><strong>' + c.qty + '</strong><button data-inc="' + p.id + '" aria-label="Нэмэх">+</button></div>' +
        "</div>" +
        '<div><div style="font-weight:900">' + fmt(p.price * c.qty) + '</div><button class="ci-del" data-del="' + p.id + '" aria-label="Устгах">🗑️</button></div>' +
      "</div>"
    );
  }).join("");
}
/* Сагсны хуудас (cart.html) */
function renderCartPage() {
  var box = $("#cartPageItems");
  if (!box) return;
  var n = cartCount(), st = cartSubtotal(), fee = deliveryFee();
  var set = function (id, val) { var el = document.getElementById(id); if (el) el.textContent = val; };
  set("cartPageCount", String(n) + " бараа");
  set("cartPageSubtotal", fmt(st));
  set("cartPageDelivery", st === 0 ? fmt(0) : (fee === 0 ? "Үнэгүй 🎉" : fmt(fee)));
  set("cartPageTotal", fmt(st + fee));
  var hint = $("#cartPageHint");
  if (hint) {
    if (st >= 50000) { hint.className = "free-hint"; hint.textContent = "🎉 Та үнэгүй хүргэлт авлаа!"; }
    else if (st > 0) { hint.className = "free-hint need"; hint.textContent = "💡 " + fmt(50000 - st) + " нэмж авбал хүргэлт үнэгүй болно."; }
    else { hint.className = "free-hint"; hint.textContent = ""; }
  }
  if (!cart.length) {
    box.innerHTML = '<div class="cart-empty"><div>🛒</div><h3>Сагс хоосон байна</h3><p>Дуртай будгийн бийр, будгаа сонгоорой!</p><p><a class="btn btn-primary" href="products.html">Бүтээгдэхүүн үзэх 🛍️</a></p></div>';
    return;
  }
  box.innerHTML = cart.map(function (c) {
    var p = byId(c.id);
    if (!p) return "";
    return (
      '<div class="cart-page-item">' +
        '<span class="ci-emoji" style="background:' + p.bg + '">' + p.emoji + "</span>" +
        '<div class="ci-info"><strong>' + escapeHtml(p.name) + "</strong>" +
          '<span class="ci-price">' + escapeHtml(CATS[p.cat] || "") + " • 🎯 " + escapeHtml(p.age) + "</span><br>" +
          '<span class="ci-price">' + fmt(p.price) + ' / ширхэг</span>' +
          '<div class="ci-qty"><button data-dec="' + p.id + '" aria-label="Хасах">−</button><strong>' + c.qty + '</strong><button data-inc="' + p.id + '" aria-label="Нэмэх">+</button></div>' +
        "</div>" +
        '<div style="text-align:right"><div style="font-weight:900">' + fmt(p.price * c.qty) + '</div><button class="ci-del" data-del="' + p.id + '" aria-label="Устгах">🗑️ Устгах</button></div>' +
      "</div>"
    );
  }).join("");
}
function refreshCartViews() {
  renderCart();
  renderCartPage();
  render();
}
function addToCart(id, qty) {
  var p = byId(id);
  if (!p) return;
  if (p.stock <= 0) { toast("Уучлаарай, “" + p.name + "” түр дууссан байна.", "err"); return; }
  var want = Math.max(1, Math.floor(Number(qty) || 1));
  var line = findLine(p.id);
  var cur = line ? line.qty : 0;
  if (cur + want > p.stock) { toast("Нөөцөд " + p.stock + " ширхэг байна.", "err"); return; }
  if (line) line.qty += want;
  else cart.push({ id: p.id, qty: want });
  saveCart();
  refreshCartViews();
  popCartCount();
  toast("✅ “" + p.name + "” сагсанд нэмэгдлээ!");
}
function popCartCount() {
  var cc = $("#cartCount");
  if (!cc || !cc.classList) return;
  cc.classList.remove("pop");
  void cc.offsetWidth;
  cc.classList.add("pop");
}
function openCart() {
  var drawer = $("#cartDrawer"), ov = $("#cartOverlay");
  if (!drawer || !ov) {
    window.location.href = "cart.html";
    return;
  }
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  ov.hidden = false;
  lockScroll();
}
function closeCart() {
  var drawer = $("#cartDrawer"), ov = $("#cartOverlay");
  if (drawer) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }
  if (ov) ov.hidden = true;
  unlockScroll();
}

/* ---------- Бүтээгдэхүүний дэлгэрэнгүй (томруулалт) ---------- */
function setText(id, val) {
  var el = document.getElementById(id);
  if (el) el.textContent = val;
}
function openModal(id) {
  var p = byId(id);
  if (!p) return;
  var pm = $("#productModal"), mo = $("#modalOverlay");
  if (!pm || !mo) {
    window.location.href = "products.html?id=" + p.id;
    return;
  }
  modalId = p.id;
  modalQty = 1;
  setText("qtyVal", "1");
  var mv = $("#modalVisual");
  if (mv) {
    mv.style.background = p.bg;
    if (mv.classList) mv.classList.remove("zoomed");
  }
  setText("modalEmoji", p.emoji);
  var mb = $("#modalBadge");
  if (mb) {
    if (p.badge) { mb.hidden = false; mb.textContent = p.badge; }
    else mb.hidden = true;
  }
  setText("modalCat", CATS[p.cat] || "");
  setText("modalName", p.name);
  setText("modalRating", "⭐ " + p.rating + " • " + p.sold + "+ зарагдсан");
  setText("modalAge", p.age);
  setText("modalMaterial", p.material);
  setText("modalCatName", CATS[p.cat] || "");
  var stEl = $("#modalStock");
  if (stEl) {
    if (p.stock <= 0) { stEl.textContent = "Түр дууссан"; stEl.style.color = "var(--red)"; }
    else if (p.stock < 20) { stEl.textContent = "Цөөн үлдлээ (" + p.stock + " ш)"; stEl.style.color = "#b26a00"; }
    else { stEl.textContent = "Нөөцтэй (" + p.stock + " ш)"; stEl.style.color = "var(--green)"; }
  }
  setText("modalDesc", p.desc);
  setText("modalPrice", fmt(p.price));
  var old = $("#modalOld");
  if (old) {
    if (p.old) { old.hidden = false; old.textContent = fmt(p.old); }
    else old.hidden = true;
  }
  var add = $("#modalAdd");
  if (add) {
    add.disabled = p.stock <= 0;
    add.textContent = p.stock <= 0 ? "Түр дууссан" : "Сагсанд хийх 🛒";
  }
  pm.hidden = false;
  mo.hidden = false;
  lockScroll();
}
function closeModal() {
  var pm = $("#productModal"), mo = $("#modalOverlay");
  if (pm) pm.hidden = true;
  if (mo) mo.hidden = true;
  modalId = null;
  unlockScroll();
}

/* ---------- Захиалга ---------- */
function openOrder() {
  if (!cart.length) { toast("Сагс хоосон байна — эхлээд бараа нэмнэ үү.", "err"); return; }
  closeCart();
  var ot = $("#orderTotal");
  if (ot) ot.textContent = fmt(cartSubtotal() + deliveryFee());
  var om = $("#orderModal"), oo = $("#orderOverlay");
  if (!om || !oo) {
    window.location.href = "cart.html";
    return;
  }
  om.hidden = false;
  oo.hidden = false;
  lockScroll();
}
function closeOrder() {
  var om = $("#orderModal"), oo = $("#orderOverlay");
  if (om) om.hidden = true;
  if (oo) oo.hidden = true;
  unlockScroll();
}

/* ---------- URL шүүлтүүр сэргээх ---------- */
function restoreFromUrl() {
  try {
    var params = new URLSearchParams(window.location.search);
    var cat = params.get("cat");
    var age = params.get("age");
    var q = params.get("q");
    var id = params.get("id");
    if (cat && (cat === "all" || CATS[cat])) state.cat = cat;
    if (age && (age === "all" || age === "0-3" || age === "3-6" || age === "6-9" || age === "9+")) state.age = age;
    if (q) state.query = q;
    // UI идэвхжүүлэлт
    qs(".chip").forEach(function (c) { c.classList.toggle("active", c.dataset.cat === state.cat); });
    qs(".mini").forEach(function (x) { x.classList.toggle("active", x.dataset.age === state.age); });
    var si = $("#searchInput");
    if (si && state.query) si.value = state.query;
    var sb = $("#searchBar");
    if (sb && state.query) sb.classList.add("open");
    if (id) {
      setTimeout(function () { openModal(Number(id)); }, 350);
    }
  } catch (e) { /* ignore */ }
}
function markActiveNav() {
  var path = (window.location.pathname || "").toLowerCase();
  var links = qs(".nav-link");
  if (!links.length) return;
  var isProducts = path.indexOf("products") !== -1;
  var isCart = path.indexOf("cart") !== -1;
  if (isProducts || isCart) {
    links.forEach(function (l) {
      var href = (l.getAttribute("href") || "").toLowerCase();
      var active = (isProducts && href.indexOf("products") !== -1) || (isCart && href.indexOf("cart") !== -1);
      l.classList.toggle("active", active);
    });
    return;
  }
  // Нүүр хуудас — гүйлгэлтээр идэвхжүүлнэ
  var secs = ["nuur", "buteegdehuun", "nas", "davamag", "holboo"].map(function (id) { return document.getElementById(id); });
  var onScroll = function () {
    var cur = "nuur";
    secs.forEach(function (s) { if (s && window.scrollY >= s.offsetTop - 140) cur = s.id; });
    links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + cur || l.getAttribute("href") === "index.html#" + cur); });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Эвентүүд ---------- */
document.addEventListener("DOMContentLoaded", function () {
  loadCart();
  restoreFromUrl();
  render();
  renderCart();
  renderCartPage();
  markActiveNav();

  var stat = $("#statProducts");
  if (stat) stat.textContent = String(PRODUCTS.length);

  // Ангиллын шүүлтүүр
  qs(".chip").forEach(function (ch) {
    ch.addEventListener("click", function () {
      qs(".chip").forEach(function (c) { c.classList.remove("active"); });
      ch.classList.add("active");
      state.cat = ch.dataset.cat || "all";
      render();
    });
  });
  // Насны шүүлтүүр
  qs(".mini").forEach(function (m) {
    m.addEventListener("click", function () {
      qs(".mini").forEach(function (x) { x.classList.remove("active"); });
      m.classList.add("active");
      state.age = m.dataset.age || "all";
      render();
    });
  });
  // Насны картууд → бүтээгдэхүүн хуудас руу
  qs("[data-goto-age]").forEach(function (b) {
    b.addEventListener("click", function () {
      var age = b.dataset.gotoAge || "all";
      if ($("#productGrid")) {
        state.age = age;
        qs(".mini").forEach(function (x) { x.classList.toggle("active", x.dataset.age === state.age); });
        var sec = document.getElementById("buteegdehuun");
        if (sec) sec.scrollIntoView({ behavior: "smooth" });
        render();
        toast("🎯 " + String(age).replace("-", "–") + " насны шүүлтүүр идэвхжлээ");
      } else {
        window.location.href = "products.html?age=" + encodeURIComponent(age);
      }
    });
  });

  var sortSel = $("#sortSelect");
  if (sortSel) sortSel.addEventListener("change", function (e) { state.sort = e.target.value; render(); });
  var stockChk = $("#stockOnly");
  if (stockChk) stockChk.addEventListener("change", function (e) { state.stockOnly = !!e.target.checked; render(); });
  var resetBtn = $("#resetFilters");
  if (resetBtn) resetBtn.addEventListener("click", function () {
    state.cat = "all"; state.age = "all"; state.sort = "featured"; state.query = ""; state.stockOnly = false;
    var si = $("#searchInput");
    if (si) si.value = "";
    if (sortSel) sortSel.value = "featured";
    if (stockChk) stockChk.checked = false;
    qs(".chip").forEach(function (c, i) { c.classList.toggle("active", i === 0); });
    qs(".mini").forEach(function (c, i) { c.classList.toggle("active", i === 0); });
    render();
    toast("🔄 Шүүлтүүр цэвэрлэгдлээ");
  });

  // Хайлт
  var sBar = $("#searchBar");
  var searchToggle = $("#searchToggle");
  if (searchToggle && sBar) {
    searchToggle.addEventListener("click", function () {
      sBar.classList.toggle("open");
      if (sBar.classList.contains("open")) {
        var si = $("#searchInput");
        if (si) si.focus();
      }
    });
  }
  var searchInput = $("#searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      state.query = String(e.target.value == null ? "" : e.target.value).trim().toLowerCase();
      render();
    });
  }
  var searchClear = $("#searchClear");
  if (searchClear) {
    searchClear.addEventListener("click", function () {
      var si = $("#searchInput");
      if (si) si.value = "";
      state.query = "";
      render();
    });
  }

  // Бүтээгдэхүүний карт — төлөөлсөн эвент (давхар нэмэгдэхээс сэргийлнэ)
  var pg = $("#productGrid");
  if (pg) {
    pg.addEventListener("click", function (e) {
      var add = e.target.closest ? e.target.closest("[data-add]") : null;
      if (add) { e.stopPropagation(); addToCart(Number(add.dataset.add), 1); return; }
      var card = e.target.closest ? e.target.closest(".card") : null;
      if (card) openModal(Number(card.dataset.id));
    });
    pg.addEventListener("keydown", function (e) {
      if ((e.key === "Enter" || e.key === " ") && e.target && e.target.classList && e.target.classList.contains("card")) {
        e.preventDefault();
        openModal(Number(e.target.dataset.id));
      }
    });
  }

  // Сагс (шургуулга + хуудас — нэг төлөөлсөн зарчим)
  var cartBtn = $("#cartBtn");
  if (cartBtn) cartBtn.addEventListener("click", openCart);
  var cartClose = $("#cartClose");
  if (cartClose) cartClose.addEventListener("click", closeCart);
  var cartOverlay = $("#cartOverlay");
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);
  var continueBtn = $("#continueBtn");
  if (continueBtn) continueBtn.addEventListener("click", closeCart);
  var bindQty = function (root) {
    if (!root) return;
    root.addEventListener("click", function (e) {
      var t = e.target;
      if (!t.closest) return;
      var inc = t.closest("[data-inc]"), dec = t.closest("[data-dec]"), del = t.closest("[data-del]");
      if (inc) {
        var id = Number(inc.dataset.inc);
        var l = findLine(id);
        var p = byId(id);
        if (!p) return;
        if (l && l.qty < p.stock) { l.qty++; saveCart(); refreshCartViews(); }
        else toast("Нөөцөд " + p.stock + " ширхэг байна.", "err");
      } else if (dec) {
        var id2 = Number(dec.dataset.dec);
        var l2 = findLine(id2);
        if (l2) {
          l2.qty--;
          if (l2.qty <= 0) cart = cart.filter(function (c) { return c.id !== id2; });
          saveCart(); refreshCartViews();
        }
      } else if (del) {
        var id3 = Number(del.dataset.del);
        cart = cart.filter(function (c) { return c.id !== id3; });
        saveCart(); refreshCartViews();
        toast("🗑️ Бараа сагснаас хасагдлаа");
      }
    });
  };
  bindQty($("#cartItems"));
  bindQty($("#cartPageItems"));
  var clearBtn = $("#cartPageClear");
  if (clearBtn) clearBtn.addEventListener("click", function () {
    if (!cart.length) { toast("Сагс аль хэдийн хоосон байна.", "err"); return; }
    cart = [];
    saveCart(); refreshCartViews();
    toast("🗑️ Сагс хоосолгдлоо");
  });
  var checkoutBtn = $("#checkoutBtn");
  if (checkoutBtn) checkoutBtn.addEventListener("click", openOrder);
  var cartPageOrder = $("#cartPageOrder");
  if (cartPageOrder) cartPageOrder.addEventListener("click", openOrder);

  // Модал
  var modalClose = $("#modalClose");
  if (modalClose) modalClose.addEventListener("click", closeModal);
  var modalOverlay = $("#modalOverlay");
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
  var modalVisual = $("#modalVisual");
  if (modalVisual) modalVisual.addEventListener("click", function () { modalVisual.classList.toggle("zoomed"); });
  var qtyMinus = $("#qtyMinus");
  if (qtyMinus) qtyMinus.addEventListener("click", function () {
    if (modalQty > 1) { modalQty--; setText("qtyVal", String(modalQty)); }
  });
  var qtyPlus = $("#qtyPlus");
  if (qtyPlus) qtyPlus.addEventListener("click", function () {
    var p = byId(modalId);
    if (p && modalQty < p.stock) { modalQty++; setText("qtyVal", String(modalQty)); }
    else toast("Нөөцөд байгаа хэмжээнээс их сонгох боломжгүй.", "err");
  });
  var modalAdd = $("#modalAdd");
  if (modalAdd) modalAdd.addEventListener("click", function () {
    if (modalId == null) return;
    addToCart(modalId, modalQty);
    closeModal();
    var hasDrawer = !!$("#cartDrawer");
    if (hasDrawer) openCart();
    else window.location.href = "cart.html";
  });
  var modalBuy = $("#modalBuy");
  if (modalBuy) modalBuy.addEventListener("click", function () {
    if (modalId == null) return;
    var p = byId(modalId);
    if (!p) return;
    if (p.stock <= 0) { toast("Уучлаарай, бараа түр дууссан байна.", "err"); return; }
    addToCart(modalId, modalQty);
    closeModal();
    openOrder();
  });

  // Захиалга
  var orderClose = $("#orderClose");
  if (orderClose) orderClose.addEventListener("click", closeOrder);
  var orderOverlay = $("#orderOverlay");
  if (orderOverlay) orderOverlay.addEventListener("click", closeOrder);
  var orderForm = $("#orderForm");
  if (orderForm) orderForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    var name = String(fd.get("name") || "").trim();
    var phone = String(fd.get("phone") || "").trim();
    if (name.length < 2) { toast("Нэрээ бүтэн оруулна уу.", "err"); return; }
    if (!/^[0-9]{8}$/.test(phone)) { toast("Утасны дугаар 8 оронтой байх ёстой.", "err"); return; }
    var total = fmt(cartSubtotal() + deliveryFee());
    var count = cartCount();
    cart = [];
    saveCart(); refreshCartViews(); closeOrder();
    try { e.target.reset(); } catch (err) { /* ignore */ }
    toast("🎉 Баярлалаа, " + name + "! " + count + " бараа (" + total + ") захиалагдлаа. Бид залгана!");
  });

  // Тусламж холбоосууд
  qs("[data-info]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      toast("ℹ️ " + (a.dataset.info || ""));
    });
  });

  // Холбоо барих
  var contactForm = $("#contactForm");
  if (contactForm) contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    try { e.target.reset(); } catch (err) { /* ignore */ }
    toast("📨 Зурвас илгээгдлээ! Бид удахгүй холбогдоно.");
  });

  // Хөдөлгөөнт цэс (гамбургер)
  var burger = $("#burger"), nav = $("#nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (e.target.closest && (e.target.closest("#nav") || e.target.closest("#burger"))) return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  }

  // ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeModal(); closeOrder(); closeCart(); }
  });
});
