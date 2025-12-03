const categories = [
    { id: 'acessorios_veiculos', name: 'Acessórios Veículos', icon: '🔧' },
    { id: 'agro', name: 'Agro', icon: '🚜' },
    { id: 'alimentos', name: 'Alimentos e Bebidas', icon: '🥦' },
    { id: 'animais', name: 'Animais', icon: '🐾' },
    { id: 'antiguidades', name: 'Antiguidades', icon: '🏺' },
    { id: 'arte', name: 'Arte e Papelaria', icon: '🎨' },
    { id: 'bebes', name: 'Bebês', icon: '👶' },
    { id: 'beleza', name: 'Beleza', icon: '💄' },
    { id: 'brinquedos', name: 'Brinquedos', icon: '🧸' },
    { id: 'moda', name: 'Moda', icon: '👕' },
    { id: 'cameras', name: 'Câmeras', icon: '📷' },
    { id: 'veiculos', name: 'Veículos', icon: '🚗' },
    { id: 'casa', name: 'Casa e Decoração', icon: '🏡' },
    { id: 'celulares', name: 'Celulares', icon: '📱' },
    { id: 'construcao', name: 'Construção', icon: '🏗️' },
    { id: 'eletrodomesticos', name: 'Eletrodomésticos', icon: '🧊' },
    { id: 'eletronicos', name: 'Eletrônicos', icon: '📺' },
    { id: 'esportes', name: 'Esportes', icon: '⚽' },
    { id: 'ferramentas', name: 'Ferramentas', icon: '🔨' },
    { id: 'festas', name: 'Festas', icon: '🎉' },
    { id: 'games', name: 'Games', icon: '🎮' },
    { id: 'imoveis', name: 'Imóveis', icon: '🏠' },
    { id: 'industria', name: 'Indústria', icon: '🏭' },
    { id: 'informatica', name: 'Informática', icon: '💻' },
    { id: 'ingressos', name: 'Ingressos', icon: '🎟️' },
    { id: 'instrumentos', name: 'Instrumentos', icon: '🎸' },
    { id: 'joias', name: 'Joias e Relógios', icon: '💍' },
    { id: 'livros', name: 'Livros', icon: '📚' },
    { id: 'musica', name: 'Música e Filmes', icon: '🎬' },
    { id: 'saude', name: 'Saúde', icon: '🩺' },
    { id: 'servicos', name: 'Serviços', icon: '🛠️' },
    { id: 'outros', name: 'Outros', icon: '➕' }
];

// Helper para coordenadas aleatórias em SJBV
const SJBV_LAT = -21.9708;
const SJBV_LNG = -46.7977;
function randCoord(base) { return base + (Math.random() - 0.5) * 0.04; }

// Banco de dados expandido (160 produtos, 5 por categoria)
let productsDB = [
    { name: "Pneu Aro 14", price: 350.00, cat: "acessorios_veiculos", img: "🍩", store: "Auto Center SJ", images: ["🍩", "https://placehold.co/600x400?text=Pneu+1", "https://placehold.co/600x400?text=Pneu+2"], stock: 12, reviews: [{ name: 'João', rating: 5, text: 'Ótimo produto, durou muito.' }], interestFreeUntil: 6, interestPercent: 2 },
    { name: "Som Automotivo Bluetooth", price: 180.00, cat: "acessorios_veiculos", img: "🔊", store: "Som & Cia", images: ['🔊', 'https://placehold.co/600x400?text=Som+1'], stock: 5, reviews: [{ name: 'Mariana', rating: 4, text: 'Bom custo-benefício.' }], interestFreeUntil: 3, interestPercent: 3 },
    { name: "Bateria de Carro 60Ah", price: 450.00, cat: "acessorios_veiculos", img: "🔋", store: "Baterias Express", images: ['🔋', 'https://placehold.co/600x400?text=Bateria+1'], stock: 3, reviews: [{ name: 'Carlos', rating: 5, text: 'Instalação fácil e muito potente.' }], interestFreeUntil: 6, interestPercent: 1.5 },
    { name: "Tratorito Motocultivador", price: 2500.00, cat: "agro", img: "🚜", store: "AgroPeças", images: ['🚜', 'https://placehold.co/600x400?text=Tratorito+1'], stock: 2, reviews: [{ name: 'Zé', rating: 5, text: 'Excelente para pequenas propriedades.' }], interestFreeUntil: 3, interestPercent: 2.5 },
    { name: "Saco de Adubo NPK 50kg", price: 150.00, cat: "agro", img: "🌾", store: "Casa do Agricultor" },
    { name: "Sementes de Milho Híbrido", price: 80.00, cat: "agro", img: "🌽", store: "Sementes Top" },
    { name: "Arroz Tipo 1 5kg", price: 25.90, cat: "alimentos", img: "🍚", store: "Big Bom", images: ['🍚'], stock: 20, reviews: [{ name: 'Ana', rating: 4, text: 'Bom preço e qualidade.' }], interestFreeUntil: 12, interestPercent: 0 },
    { name: "Vinho Tinto Chileno", price: 49.90, cat: "alimentos", img: "🍷", store: "Adega Central" },
    { name: "Chocolate Barra 1kg", price: 35.00, cat: "alimentos", img: "🍫", store: "Doceria" },
    { name: "Azeite Extra Virgem", price: 28.00, cat: "alimentos", img: "🫒", store: "Empório" },
    { name: "Cerveja Artesanal IPA", price: 12.00, cat: "alimentos", img: "🍺", store: "Cervejaria Local" },
    { name: "Ração Premium Cães 15kg", price: 180.00, cat: "animais", img: "🐕", store: "Pet Shop AuAu", images: ['🐕', 'https://placehold.co/600x400?text=Racao+1'], stock: 8, reviews: [{ name: 'Maria', rating: 5, text: 'Meus cães adoraram.' }], interestFreeUntil: 6, interestPercent: 0 },
    { name: "Arranhador para Gatos", price: 120.00, cat: "animais", img: "🐈", store: "Mundo Pet" },
    { name: "Aquário 20 Litros", price: 90.00, cat: "animais", img: "🐠", store: "Aquarismo" },
    { name: "Moeda Império 1889", price: 200.00, cat: "antiguidades", img: "🪙", store: "Antiquário" },
    { name: "Máquina Escrever Olivetti", price: 350.00, cat: "antiguidades", img: "⌨️", store: "Relíquias" },
    { name: "Kit Tinta Óleo 12 Cores", price: 85.00, cat: "arte", img: "🎨", store: "Papelaria Arte" },
    { name: "Caderno Sketchbook A4", price: 35.00, cat: "arte", img: "📒", store: "Papelaria Criativa" },
    { name: "Carrinho de Bebê Passeio", price: 600.00, cat: "bebes", img: "🛒", store: "Baby Store" },
    { name: "Pacote Fraldas G (60un)", price: 59.90, cat: "bebes", img: "👶", store: "Fraldário" },
    { name: "Perfume Importado 100ml", price: 299.00, cat: "beleza", img: "💐", store: "Perfumaria Chic" },
    { name: "Batom Matte Vermelho", price: 25.00, cat: "beleza", img: "💄", store: "Cosméticos" },
    { name: "Blocos de Montar (1000 pçs)", price: 120.00, cat: "brinquedos", img: "🧱", store: "Loja Brincar" },
    { name: "Boneca Articulada", price: 80.00, cat: "brinquedos", img: "🎎", store: "Toy Store" },
    { name: "Tênis Esportivo Corrida", price: 199.90, cat: "moda", img: "👟", store: "Sport Center" },
    { name: "Camiseta Básica Algodão", price: 29.90, cat: "moda", img: "👕", store: "Hering" },
    { name: "Câmera Canon T7", price: 2800.00, cat: "cameras", img: "📸", store: "Foto & Video" },
    { name: "GoPro Hero Black", price: 1500.00, cat: "cameras", img: "📹", store: "Action Cam" },
    { name: "Fiat Uno Mille 2010", price: 18000.00, cat: "veiculos", img: "🚗", store: "Garagem Veículos" },
    { name: "Honda CG 160 Titan", price: 15000.00, cat: "veiculos", img: "🏍️", store: "Moto Shop" },
    { name: "Sofá Retrátil 3 Lugares", price: 1200.00, cat: "casa", img: "🛋️", store: "Móveis Conforto" },
    { name: "Jogo de Lençol Casal", price: 89.90, cat: "casa", img: "🛏️", store: "Cama & Banho" },
    { name: "iPhone 13 128GB", price: 3800.00, cat: "celulares", img: "📱", store: "iPlace" },
    { name: "Samsung Galaxy S23", price: 3500.00, cat: "celulares", img: "📱", store: "Samsung Store" },
    { name: "Saco Cimento 50kg", price: 32.00, cat: "construcao", img: "🧱", store: "Depósito de Construção" },
    { name: "Milheiro de Tijolo", price: 800.00, cat: "construcao", img: "🧱", store: "Olaria" },
    { name: "Geladeira Frost Free", price: 2800.00, cat: "eletrodomesticos", img: "❄️", store: "EletroZema" },
    { name: "Fogão 4 Bocas", price: 800.00, cat: "eletrodomesticos", img: "🍳", store: "Magalu" },
    { name: "Smart TV 50 Polegadas", price: 2200.00, cat: "eletronicos", img: "📺", store: "Fast Shop" },
    { name: "Soundbar Bluetooth", price: 450.00, cat: "eletronicos", img: "🔊", store: "Áudio Pro" },
    { name: "Bicicleta Mountain Bike", price: 1200.00, cat: "esportes", img: "🚲", store: "Bike Shop" },
    { name: "Halteres 5kg (Par)", price: 80.00, cat: "esportes", img: "🏋️", store: "Fitness Store" },
    { name: "Furadeira de Impacto", price: 180.00, cat: "ferramentas", img: "🔫", store: "Casa das Ferramentas" },
    { name: "Kit Chaves de Fenda", price: 45.00, cat: "ferramentas", img: "🔧", store: "Ferramentas Pro" },
    { name: "Kit Balões Coloridos", price: 15.00, cat: "festas", img: "🎈", store: "Festa & Alegria" },
    { name: "Velas de Aniversário", price: 8.00, cat: "festas", img: "🕯️", store: "Doceria" },
    { name: "PlayStation 5", price: 3800.00, cat: "games", img: "🎮", store: "Game Zone" },
    { name: "Xbox Series S", price: 2200.00, cat: "games", img: "❎", store: "Microsoft Store" },
    { name: "Casa 3 Quartos Centro", price: 450000.00, cat: "imoveis", img: "🏠", store: "Imobiliária Central" },
    { name: "Apartamento 2 Quartos", price: 280000.00, cat: "imoveis", img: "🏢", store: "Construtora" },
    { name: "Impressora Fiscal Térmica", price: 500.00, cat: "industria", img: "🖨️", store: "Automação" },
    { name: "Embalagens Plásticas (100un)", price: 45.00, cat: "industria", img: "📦", store: "Embalagens SJ" },
    { name: "Notebook Dell i5", price: 3200.00, cat: "informatica", img: "💻", store: "Tech World" },
    { name: "Mouse Sem Fio Logitech", price: 60.00, cat: "informatica", img: "🖱️", store: "Periféricos" },
    { name: "Show Sertanejo VIP", price: 120.00, cat: "ingressos", img: "🎫", store: "Bilheteria Digital" },
    { name: "Teatro Municipal - Peça", price: 40.00, cat: "ingressos", img: "🎭", store: "Cultura SJBV" },
    { name: "Violão Acústico", price: 350.00, cat: "instrumentos", img: "🎸", store: "Casa da Música" },
    { name: "Teclado Musical Iniciante", price: 600.00, cat: "instrumentos", img: "🎹", store: "Teclados & Pianos" },
    { name: "Anel de Ouro 18k", price: 800.00, cat: "joias", img: "💍", store: "Joalheria Ouro" },
    { name: "Colar de Prata 925", price: 120.00, cat: "joias", img: "⛓️", store: "Prata Fina" },
    { name: "Box Harry Potter", price: 180.00, cat: "livros", img: "⚡", store: "Livraria Leitura" },
    { name: "Bíblia de Estudo", price: 90.00, cat: "livros", img: "📖", store: "Livraria Gospel" },
    { name: "DVD Show ao Vivo", price: 25.00, cat: "musica", img: "💿", store: "Music Store" },
    { name: "BluRay Vingadores", price: 40.00, cat: "musica", img: "🦸", store: "Video Locadora" },
    { name: "Medidor de Pressão Digital", price: 120.00, cat: "saude", img: "🩺", store: "Cirúrgica" },
    { name: "Cadeira de Rodas", price: 600.00, cat: "saude", img: "🦽", store: "Ortopedia" },
    { name: "Visita Eletricista", price: 100.00, cat: "servicos", img: "⚡", store: "João Eletrica" },
    { name: "Serviço Encanador (Hora)", price: 80.00, cat: "servicos", img: "🔧", store: "SOS Encanador" },
    { name: "Caixa Incenso", price: 10.00, cat: "outros", img: "🕉️", store: "Esotérica" },
    { name: "Baralho Tarot", price: 45.00, cat: "outros", img: "🃏", store: "Místico" }
];

let feiraProducts = [
    { name: "Alface Americana", price: 3.50, img: "🥬", store: "Horta do Zé" },
    { name: "Tomate Orgânico (Kg)", price: 8.90, img: "🍅", store: "Sítio Verde" },
    { name: "Ovos Caipira (Dúzia)", price: 12.00, img: "🥚", store: "Granja Sol" },
    { name: "Doce de Leite", price: 22.00, img: "🍯", store: "Doces da Vovó" },
    { name: "Pão Caseiro", price: 15.00, img: "🍞", store: "Padaria Artesanal" },
    { name: "Cachaça Artesanal", price: 35.00, img: "🥃", store: "Alambique SJ" },
    { name: "Licor de Jabuticaba", price: 28.00, img: "🍷", store: "Licores da Serra" },
    { name: "Pão de Queijo (Pct)", price: 18.00, img: "🧀", store: "Mineirinho" },
    { name: "Geleia de Morango", price: 20.00, img: "🍓", store: "Delícias do Campo" },
    { name: "Mel Silvestre", price: 25.00, img: "🐝", store: "Apiário Real" }
];

// Adiciona coordenadas
productsDB = productsDB.map((p, i) => ({ id: 'p' + i, ...p, lat: randCoord(SJBV_LAT), lng: randCoord(SJBV_LNG) }));
feiraProducts = feiraProducts.map((p, i) => ({ id: 'f' + i, ...p, lat: randCoord(SJBV_LAT), lng: randCoord(SJBV_LNG) }));

let cart = [];
let user = null;
let pendingCheckout = false; // when true, after login/register we should continue finishing the order
let _pendingPrefillEmail = null;
let userLat = null, userLng = null;
let currentPaymentMethod = 'pix'; // 'pix', 'new-card', 'saved-card'

// --- INICIALIZAÇÃO ---
function init() {
    loadUser();
    loadProducts();
    loadCart();
    renderHome('all');
    renderCategories();
    renderFeira();
    populateDropdowns();
    requestLocation();
    // Attach registration masks/validators
    attachRegistrationMasks();

    // Exibe tela de boas-vindas apenas para novos visitantes
    if (!localStorage.getItem('hasVisited')) {
        openWelcomeScreen();
        localStorage.setItem('hasVisited', 'true');
    }
}

// --- NAVEGAÇÃO ---
function navigateTo(screenId) {
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.nav-tab[data-target="${screenId}"]`);
    if (tab) tab.classList.add('active');
    window.scrollTo(0, 0);
    // When opening the cart, ensure it's rendered/updated
    if (screenId === 'cart') {
        renderCart();
    }
}

// --- CARRINHO ---
function addToCart(a, b, c) {
    // supports addToCart(name, price) or addToCart(id, name, price)
    let id = null, name = null, price = null;
    if (c === undefined) { name = a; price = b; }
    else { id = a; name = b; price = c; }

    // check stock if id provided
    if (id) {
        const prod = productsDB.find(p => p.id === id) || feiraProducts.find(p => p.id === id);
        if (prod && prod.stock !== undefined) {
            // count how many items with this id are already in cart
            const existing = cart.filter(it => it.id === id).length;
            if (existing + 1 > prod.stock) {
                showToast('Não há estoque suficiente para adicionar mais unidades deste produto');
                return;
            }
        }
    }

    const item = { id, name, price };
    cart.push(item);
    updateCartCount();
    showToast(`${name} adicionado ao carrinho!`);
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    el.innerText = cart.length;
    if (cart.length > 0) el.classList.add('visible'); else el.classList.remove('visible');
    el.classList.add('bump');
    setTimeout(() => el.classList.remove('bump'), 200);
    if (document.getElementById('cart').classList.contains('active')) renderCart();
    // persist cart state
    saveCart();
}

function saveCart() {
    try {
        localStorage.setItem('ecommerceCart', JSON.stringify(cart));
    } catch (err) {
        console.warn('Falha ao salvar carrinho', err);
    }
}

function loadCart() {
    try {
        const s = localStorage.getItem('ecommerceCart');
        if (s) {
            const parsed = JSON.parse(s);
            if (Array.isArray(parsed)) cart = parsed;
        }
    } catch (err) {
        console.warn('Erro ao ler carrinho salvo', err);
        cart = [];
    }
    // update UI with loaded cart
    updateCartCount();
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}

function renderCart() {
    const list = document.getElementById('cart-list');
    const checkoutArea = document.getElementById('cart-checkout-area');

    if (cart.length === 0) {
        list.innerHTML = `
                    <div style="text-align: center; padding: 60px 20px; color: #999;">
                        <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                        <h3 style="margin-bottom: 10px;">Seu carrinho está vazio</h3>
                        <p>Adicione produtos para vê-los aqui</p>
                    </div>`;
        checkoutArea.style.display = 'none';
        return;
    }

    list.innerHTML = "";
    let sub = 0;
    cart.forEach((item, i) => {
        sub += item.price;
        list.innerHTML += `
                    <div class="cart-item">
                        <div style="flex: 1;">
                            <b>${item.name}</b><br>
                            <small style="color: #666;">R$ ${item.price.toFixed(2)}</small>
                        </div>
                        <button style="color: #dc3545; background: none; border: none; font-size: 1.2rem; padding: 5px 10px; border-radius: 5px; transition: all 0.2s;" 
                                onmouseover="this.style.background='#f8d7da'" 
                                onmouseout="this.style.background='transparent'"
                                onclick="cart.splice(${i},1); updateCartCount()">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>`;
    });

    // Renderiza área de checkout integrada
    checkoutArea.style.display = 'block';

    // Atualiza totais
    updateTotals();

    // Renderiza opções de pagamento
    renderPaymentOptions();
    selectPayment(currentPaymentMethod);
}

// --- CHECKOUT INTEGRADO ---
let shippingCost = 15.00;
let totalOrder = 0;

function updateTotals() {
    const sub = cart.reduce((a, b) => a + b.price, 0);
    totalOrder = sub + shippingCost;
    document.getElementById('cart-subtotal').innerText = `R$ ${sub.toFixed(2)}`;
    document.getElementById('cart-shipping').innerText = shippingCost === 0 ? 'GRÁTIS' : `R$ ${shippingCost.toFixed(2)}`;
    document.getElementById('cart-total').innerText = `R$ ${totalOrder.toFixed(2)}`;

    // Opções de parcela
    const sel = document.getElementById('installments');
    sel.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
        let val = totalOrder / i;
        sel.innerHTML += `<option value="${i}">${i}x de R$ ${val.toFixed(2)} sem juros</option>`;
    }
}

// Save / load products to persist reviews/stock changes
function saveProducts() {
    try { localStorage.setItem('productsDB', JSON.stringify(productsDB)); } catch (e) { console.warn('saveProducts err', e); }
    try { localStorage.setItem('feiraProducts', JSON.stringify(feiraProducts)); } catch (e) { }
}

function loadProducts() {
    try {
        const s = localStorage.getItem('productsDB');
        if (s) productsDB = JSON.parse(s);
    } catch (e) { console.warn('loadProducts products', e); }
    try {
        const f = localStorage.getItem('feiraProducts');
        if (f) feiraProducts = JSON.parse(f);
    } catch (e) { console.warn('loadProducts feira', e); }
}

function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value.toUpperCase();
    if (couponCode === 'FRETEGRATIS') {
        shippingCost = 0;
        document.getElementById('cart-coupon-row').style.display = 'flex';
        updateTotals();
        showToast("Cupom FRETEGRATIS aplicado com sucesso!");
    } else if (couponCode === 'PRIMEIRACOMPRA') {
        const discount = totalOrder * 0.1; // 10% de desconto
        totalOrder -= discount;
        document.getElementById('cart-coupon-row').style.display = 'flex';
        document.getElementById('cart-coupon-row').innerHTML = `<span>Cupom PRIMEIRACOMPRA</span><span>-R$ ${discount.toFixed(2)}</span>`;
        updateTotals();
        showToast("Cupom PRIMEIRACOMPRA aplicado com sucesso!");
    } else {
        showToast("Cupom inválido ou expirado");
    }
}

function renderPaymentOptions() {
    const container = document.getElementById('payment-options-container');
    let html = `
                <div class="pay-opt selected" id="opt-pix" onclick="selectPayment('pix')">
                    <i class="fas fa-qrcode" style="font-size: 1.8rem; color: #00a650;"></i>
                    <span>PIX (À vista)</span>
                </div>`;

    // Se usuário tem cartão salvo (token) — exibimos somente último 4
    if (user && user.creditCard && user.creditCard.token) {
        const last4 = user.creditCard.last4 || '----';
        html += `
                <div class="pay-opt" id="opt-saved-card" onclick="selectPayment('saved-card')">
                    <i class="fas fa-credit-card" style="font-size: 1.8rem; color: #3483fa;"></i>
                    <span>Cartão Final ${last4}</span>
                </div>`;
    }

    html += `
                <div class="pay-opt" id="opt-new-card" onclick="selectPayment('new-card')">
                    <i class="fas fa-plus-circle" style="font-size: 1.8rem; color: #666;"></i>
                    <span>Novo Cartão</span>
                </div>`;

    container.innerHTML = html;
}

function selectPayment(type) {
    currentPaymentMethod = type;
    document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
    const selectedOpt = document.getElementById('opt-' + type);
    if (selectedOpt) selectedOpt.classList.add('selected');

    const pixArea = document.getElementById('area-pix');
    const cardArea = document.getElementById('area-card');
    const savedInfo = document.getElementById('saved-card-info');
    const newCardForm = document.getElementById('new-card-form');

    pixArea.style.display = 'none';
    cardArea.style.display = 'none';
    savedInfo.style.display = 'none';
    newCardForm.style.display = 'none';

    if (type === 'pix') {
        pixArea.style.display = 'block';
    } else if (type === 'saved-card') {
        cardArea.style.display = 'block';
        savedInfo.style.display = 'block';
        savedInfo.innerText = `Usando cartão final ${user.creditCard.last4}`;
    } else if (type === 'new-card') {
        cardArea.style.display = 'block';
        newCardForm.style.display = 'block';
    }
}

// --- CHECKOUT GATEKEEPER & FINISH ---
function handleCheckoutAttempt() {
    if (!user) {
        // mark that user attempted to finish checkout so after login/registration we can proceed
        pendingCheckout = true;
        openModal('modal-login');
    } else {
        if (isProfileComplete(user)) {
            finishOrder();
        } else {
            showToast("Por favor, complete seus dados de entrega.");
            openClientRegister('complete');
        }
    }
}

function isProfileComplete(u) {
    return u.address && u.address.street && u.address.number && u.phone;
}

async function finishOrder() {
    showToast("Processando seu pagamento...");

    // ensure stock availability before charging
    const check = canFulfillCart();
    if (!check.ok) {
        showToast(check.msg || 'Estoque insuficiente para alguns itens do seu pedido.');
        return;
    }

    try {
        if (currentPaymentMethod === 'pix') {
            // Simulate pix success
            await new Promise(r => setTimeout(r, 700));
            alert(`✅ Pedido realizado com sucesso!\n\nPagamento via PIX.\n\nObrigado pela compra, ${user ? user.name : 'cliente'}!`);
            // decrement stock for products in the cart
            try { decrementStockForCart(); } catch (e) { console.warn('decrement stock err', e); }
            cart = [];
            updateCartCount();
            navigateTo('home');
            return;
        }

        // Card flows (saved-card or new-card)
        if (currentPaymentMethod === 'saved-card') {
            if (!user || !user.creditCard || !user.creditCard.token) {
                showToast('Nenhum cartão salvo disponível. Use um novo cartão.');
                return;
            }

            const token = user.creditCard.token;
            const chargeResp = await fetch('http://localhost:3000/charge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, amount: totalOrder, description: `Compra - ${cart.length} itens` })
            }).then(r => r.json());

            if (chargeResp && chargeResp.success) {
                alert(`✅ Pedido realizado com sucesso!\n\nPagamento processado.\n\nObrigado pela compra, ${user.name}!`);
                try { decrementStockForCart(); } catch (e) { console.warn('decrement stock err', e); }
                cart = [];
                updateCartCount();
                navigateTo('home');
                return;
            } else {
                showToast('Não foi possível processar o pagamento com o cartão salvo.');
                return;
            }
        }

        if (currentPaymentMethod === 'new-card') {
            // Collect transient card data from inputs
            const number = (document.getElementById('new-card-num').value || '').replace(/\s+/g, '');
            const expiry = document.getElementById('new-card-exp').value || '';
            const cvv = document.getElementById('new-card-cvv').value || '';

            if (!number || !expiry || !cvv) { showToast('Preencha todos os dados do cartão.'); return; }

            // Tokenize via backend
            const tokResp = await fetch('http://localhost:3000/tokenize', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ number, expiry, cvv })
            }).then(r => r.json());

            if (!tokResp || !tokResp.success) {
                showToast('Falha ao tokenizar o cartão. Tente novamente.');
                return;
            }

            const token = tokResp.token;
            const last4 = tokResp.last4;

            // Optionally persist token (safe) if user asked to save card
            const wantSave = document.getElementById('save-new-card') && document.getElementById('save-new-card').checked;
            if (wantSave && user) {
                user.creditCard = { last4, expiry, token };
                // Save sanitized copy
                saveUser(user);
            }

            // Proceed to charge
            const chargeResp = await fetch('http://localhost:3000/charge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, amount: totalOrder, description: `Compra - ${cart.length} itens` })
            }).then(r => r.json());

            // Clear sensitive fields immediately
            document.getElementById('new-card-num').value = '';
            document.getElementById('new-card-exp').value = '';
            document.getElementById('new-card-cvv').value = '';
            if (document.getElementById('save-new-card')) document.getElementById('save-new-card').checked = false;

            if (chargeResp && chargeResp.success) {
                alert(`✅ Pedido realizado com sucesso!\n\nPagamento processado.\n\nObrigado pela compra, ${user ? user.name : 'cliente'}!`);
                try { decrementStockForCart(); } catch (e) { console.warn('decrement stock err', e); }
                cart = [];
                updateCartCount();
                navigateTo('home');
                return;
            } else {
                showToast('Falha no processamento do pagamento.');
                return;
            }
        }

    } catch (err) {
        console.error(err);
        showToast('Erro inesperado ao processar pagamento.');
    }
}

// check whether cart items are available in stock
function canFulfillCart() {
    const needed = {};
    for (const it of cart) {
        if (!it.id) continue; // skip items without id
        needed[it.id] = (needed[it.id] || 0) + 1;
    }
    for (const id in needed) {
        const prod = productsDB.find(p => p.id === id) || feiraProducts.find(p => p.id === id);
        if (prod && typeof prod.stock !== 'undefined') {
            if (prod.stock < needed[id]) {
                return { ok: false, msg: `Sem estoque suficiente para ${prod.name}. Disponível: ${prod.stock}, solicitado: ${needed[id]}` };
            }
        }
    }
    return { ok: true };
}

// decrement stock counts for items in cart and persist
function decrementStockForCart() {
    const needed = {};
    for (const it of cart) {
        if (!it.id) continue;
        needed[it.id] = (needed[it.id] || 0) + 1;
    }
    for (const id in needed) {
        const idx = productsDB.findIndex(p => p.id === id);
        if (idx >= 0) {
            const p = productsDB[idx];
            if (typeof p.stock !== 'undefined') {
                p.stock = Math.max(0, (p.stock || 0) - needed[id]);
                productsDB[idx] = p;
            }
        } else {
            const fidx = feiraProducts.findIndex(p => p.id === id);
            if (fidx >= 0) {
                const p = feiraProducts[fidx];
                if (typeof p.stock !== 'undefined') {
                    p.stock = Math.max(0, (p.stock || 0) - needed[id]);
                    feiraProducts[fidx] = p;
                }
            }
        }
    }
    // persist changes and re-render catalog
    saveProducts();
    try { renderHome('all'); renderFeira(); } catch (e) { }
}

// --- LOGIN SOCIAL SIMULADO & CADASTRO ---
function socialLogin(provider) {
    closeModal('modal-login');
    const inputEmail = prompt(`Login com ${provider}\n\nDigite seu e-mail:`);
    if (inputEmail && inputEmail.includes('@')) {
        _pendingPrefillEmail = inputEmail.trim();
        setTimeout(() => {
            showToast(`Ótimo — continuando com ${_pendingPrefillEmail}`);
            openClientRegister('social_complete', _pendingPrefillEmail);
        }, 300);
    }
}

async function signInWithEmail() {
    const input = document.getElementById('login-email-input');
    if (!input) return;
    const email = (input.value || '').trim();
    if (!email || !isValidEmail(email)) { showToast('Digite um e-mail válido'); return; }

    const passInput = document.getElementById('login-pass-input');
    const password = passInput ? (passInput.value || '').trim() : '';

    // Try to load user from localStorage
    const s = localStorage.getItem('ecommerceUser');
    if (s) {
        try {
            const parsed = JSON.parse(s);
            if (parsed.email && parsed.email.toLowerCase() === email.toLowerCase()) {
                // if parsed has passwordHash, require password
                if (parsed.passwordHash) {
                    if (!password) { showToast('Digite sua senha'); return; }
                    const hashed = await hashPassword(password);
                    if (hashed === parsed.passwordHash) {
                        user = parsed; updateProfileUI(); closeModal('modal-login'); showToast(`Bem-vindo de volta, ${user.name || user.email}`);
                        if (pendingCheckout) { pendingCheckout = false; if (isProfileComplete(user)) finishOrder(); else openClientRegister('social_complete', user.email); }
                        return;
                    } else {
                        showToast('Senha incorreta'); return;
                    }
                } else {
                    // account exists but has no password — ask to complete registration
                    showToast('Conta encontrada; finalize cadastro e defina uma senha');
                    openClientRegister('social_complete', parsed.email);
                    return;
                }
            }
        } catch (err) {
            console.warn('erro ao parsear usuario local', err);
        }
    }

    // Not found — open create account prefilled with email
    showToast('Nenhuma conta encontrada — crie um cadastro.');
    openClientRegister('social_complete', email);
}

function openClientRegister(mode, prefillEmail) {
    closeModal('modal-login');
    // Reset form and errors
    document.getElementById('form-client').reset();
    hideAllFieldErrors();

    if (mode === 'social_complete' && prefillEmail) {
        // Only prefill email; other fields must be filled by the user.
        document.getElementById('c-email').value = prefillEmail;
        document.getElementById('c-email').readOnly = true;
        document.getElementById('c-name').value = '';
    } else {
        document.getElementById('c-email').readOnly = false;
    }

    openModal('modal-client-reg');
}

function openSellerRegister() {
    closeModal('modal-login');
    closeWelcomeScreen();
    openModal('modal-seller-reg');
}

// Card fields removed from registration for security (tokenization happens at checkout)

// --- client registration helpers: validation & masks ---
function showFieldError(fieldId, msg) {
    const el = document.getElementById(fieldId);
    const err = document.getElementById('err-' + fieldId);
    if (el) el.classList.add('invalid');
    if (err) { err.innerText = msg; err.style.display = 'block'; }
}

function hideFieldError(fieldId) {
    const el = document.getElementById(fieldId);
    const err = document.getElementById('err-' + fieldId);
    if (el) el.classList.remove('invalid');
    if (err) { err.innerText = ''; err.style.display = 'none'; }
}

function hideAllFieldErrors() {
    ['c-name', 'c-email', 'c-cpf', 'c-street', 'c-number', 'c-zip'].forEach(id => hideFieldError(id));
}

function isValidName(v) {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/.test(v);
}

function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isDigits(v) { return /^\d+$/.test(v); }

function isValidCEP(v) { return /^\d{5}-\d{3}$/.test(v); }

// CPF validation with checksum (accepts formatted string '000.000.000-00')
function isValidCPF(v) {
    if (!v) return false;
    const s = v.replace(/\D/g, '');
    if (s.length !== 11) return false;
    // Reject CPFs with all identical digits
    if (/^(\d)\1{10}$/.test(s)) return false;

    const calcCheck = (arr, factor) => {
        let total = 0;
        for (let i = 0; i < arr.length; i++) total += parseInt(arr[i], 10) * (factor - i);
        const mod = total % 11;
        return mod < 2 ? 0 : 11 - mod;
    };

    const digits = s.split('');
    const d1 = calcCheck(digits.slice(0, 9), 10);
    const d2 = calcCheck(digits.slice(0, 9).concat([d1]), 11);
    return d1 === parseInt(digits[9], 10) && d2 === parseInt(digits[10], 10);
}

function isValidStreet(v) { return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(v); }

function maskCEP(el) {
    let v = (el.value || '').replace(/\D/g, '').slice(0, 8);
    if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5);
    el.value = v;
}

function maskCPF(el) {
    let v = (el.value || '').replace(/\D/g, '').slice(0, 11);
    if (v.length > 9) v = v.slice(0, 3) + '.' + v.slice(3, 6) + '.' + v.slice(6, 9) + '-' + v.slice(9);
    else if (v.length > 6) v = v.slice(0, 3) + '.' + v.slice(3, 6) + '.' + v.slice(6);
    else if (v.length > 3) v = v.slice(0, 3) + '.' + v.slice(3);
    el.value = v;
}

function attachRegistrationMasks() {
    const cep = document.getElementById('c-zip');
    const cpf = document.getElementById('c-cpf');
    const nameEl = document.getElementById('c-name');
    const street = document.getElementById('c-street');
    const num = document.getElementById('c-number');

    if (cep) {
        cep.addEventListener('input', e => { maskCEP(cep); hideFieldError('c-zip'); });
        cep.addEventListener('blur', e => { if (isValidCEP(cep.value)) fetchAddressByCEP(cep.value); });
    }
    if (cpf) cpf.addEventListener('input', e => { maskCPF(cpf); hideFieldError('c-cpf'); });
    const emailEl = document.getElementById('c-email');
    if (emailEl) emailEl.addEventListener('input', e => { hideFieldError('c-email'); });
    const phoneEl = document.getElementById('c-phone');
    if (phoneEl) phoneEl.addEventListener('input', e => { hideFieldError('c-phone'); });
    if (nameEl) nameEl.addEventListener('input', e => { if (!isValidName(nameEl.value)) nameEl.classList.add('invalid'); else nameEl.classList.remove('invalid'); hideFieldError('c-name'); });
    if (street) street.addEventListener('input', e => { hideFieldError('c-street'); });
    if (num) num.addEventListener('input', e => { num.value = num.value.replace(/\D/g, ''); hideFieldError('c-number'); });
}

// Password helpers (Web Crypto SHA-256)
async function hashPassword(password) {
    if (!password) return null;
    const enc = new TextEncoder();
    const data = enc.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Fetch address info from ViaCEP and populate street/district when possible
async function fetchAddressByCEP(cepStr) {
    const raw = (cepStr || '').replace(/\D/g, '');
    if (raw.length !== 8) return;
    const zipField = document.getElementById('c-zip');
    const errField = document.getElementById('err-c-zip');
    try {
        errField.style.display = 'none';
        showToast('Buscando endereço por CEP...');
        const resp = await fetch(`https://viacep.com.br/ws/${raw}/json/`);
        const data = await resp.json();
        if (!data || data.erro) {
            showFieldError('c-zip', 'CEP não encontrado');
            return;
        }
        // Populate and validate
        if (data.logradouro) document.getElementById('c-street').value = data.logradouro;
        if (data.bairro) document.getElementById('c-district').value = data.bairro;
        hideFieldError('c-street');
        hideFieldError('c-zip');
        showToast('Endereço preenchido pelo CEP — confirme os dados.');
    } catch (err) {
        console.error(err);
        showFieldError('c-zip', 'Erro ao consultar CEP');
    }
}

async function registerClient(e) {
    e.preventDefault();
    // Validate fields before creating user
    hideAllFieldErrors();
    const name = document.getElementById('c-name').value.trim();
    const email = document.getElementById('c-email').value.trim();
    const phone = document.getElementById('c-phone').value.trim();
    const cpf = document.getElementById('c-cpf').value.trim();
    const street = document.getElementById('c-street').value.trim();
    const number = document.getElementById('c-number').value.trim();
    const district = document.getElementById('c-district').value.trim();
    const zip = document.getElementById('c-zip').value.trim();

    let hasError = false;
    if (!isValidName(name)) { showFieldError('c-name', 'Nome inválido — use apenas letras e espaços'); hasError = true; }
    if (!isValidEmail(email)) { showFieldError('c-email', 'E-mail inválido'); hasError = true; }
    if (!cpf || !isValidCPF(cpf)) { showFieldError('c-cpf', 'CPF inválido — formato: 000.000.000-00'); hasError = true; }
    if (!street || !isValidStreet(street)) { showFieldError('c-street', 'Nome da rua inválido — use apenas letras e espaços'); hasError = true; }
    if (!number || !isDigits(number)) { showFieldError('c-number', 'Número inválido — apenas dígitos'); hasError = true; }
    if (!zip || !isValidCEP(zip)) { showFieldError('c-zip', 'CEP inválido — use 00000-000'); hasError = true; }

    // password validation (optional for social flows but required if filled)
    const pass = document.getElementById('c-password') ? document.getElementById('c-password').value.trim() : '';
    const pass2 = document.getElementById('c-password2') ? document.getElementById('c-password2').value.trim() : '';

    if (pass || pass2) {
        if (pass.length < 6) { showFieldError('c-password', 'Senha deve ter pelo menos 6 caracteres'); hasError = true; }
        if (pass !== pass2) { showFieldError('c-password2', 'As senhas não coincidem'); hasError = true; }
    }

    if (hasError) {
        showToast('Por favor corrija os erros no formulário antes de continuar.');
        return;
    }

    const newUser = {
        type: 'client',
        name,
        email,
        phone,
        cpf,
        address: {
            street: document.getElementById('c-street').value,
            number: document.getElementById('c-number').value,
            district: document.getElementById('c-district').value,
            zip
        },
        // Payment card storage is not captured at registration. Tokens are created at checkout only.
    };
    // If password provided, hash and attach
    if (pass) {
        try {
            newUser.passwordHash = await hashPassword(pass);
        } catch (err) { console.warn('erro ao hashear senha', err); }
    }
    saveUser(newUser);
    closeModal('modal-client-reg');
    showToast(`Cadastro realizado com sucesso, ${newUser.name}!`);

    // If this registration was triggered from an attempted checkout, continue the checkout flow
    if (pendingCheckout) {
        pendingCheckout = false;
        // ensure profile is complete, then continue
        if (isProfileComplete(user)) {
            finishOrder();
            return;
        }
    }

    // Otherwise behave as normal
    if (document.getElementById('cart').classList.contains('active')) {
        renderCart();
    } else if (cart.length > 0) {
        navigateTo('cart');
    } else {
        navigateTo('home');
    }
}

function registerSeller(e) {
    e.preventDefault();
    const newUser = {
        type: 'seller',
        storeName: document.getElementById('s-name').value,
        email: document.getElementById('s-email').value,
        cnpj: document.getElementById('s-cnpj').value,
        category: document.getElementById('s-category').value,
        address: document.getElementById('s-address').value
    };
    saveUser(newUser);
    closeModal('modal-seller-reg');
    showToast(`Loja ${newUser.storeName} cadastrada com sucesso!`);
    navigateTo('profile');
}

function saveUser(u) {
    // Store only a safe subset of user info to localStorage. Never persist full PAN or CVV.
    // Keep 'user' in memory as the same object but make sure it does not contain sensitive card details.
    if (u && u.creditCard && u.creditCard.num) {
        // If the object contains a full 'num' (old/legacy), replace it with safe summary
        u.creditCard = { last4: u.creditCard.num.slice(-4), expiry: u.creditCard.expiry };
    }
    // Ensure we don't persist CVV anywhere
    if (u && u.creditCard && u.creditCard.cvv) delete u.creditCard.cvv;

    user = u;

    // Build a safe copy for persistent storage
    const safeUser = { ...user };
    if (safeUser.creditCard) {
        // Persist only safe card summary and token (if available). Never persist PAN or CVV.
        safeUser.creditCard = { last4: safeUser.creditCard.last4, expiry: safeUser.creditCard.expiry };
        if (user.creditCard && user.creditCard.token) safeUser.creditCard.token = user.creditCard.token;
    }
    // Persist password hash if present (never store plain text password)
    if (user && user.passwordHash) safeUser.passwordHash = user.passwordHash;

    localStorage.setItem('ecommerceUser', JSON.stringify(safeUser));
    updateProfileUI();
}

function loadUser() {
    const s = localStorage.getItem('ecommerceUser');
    if (s) {
        const parsed = JSON.parse(s);
        // Sanitize any legacy/full-card info if present and overwrite localStorage with a safe copy
        if (parsed.creditCard && parsed.creditCard.num) {
            parsed.creditCard = { last4: parsed.creditCard.num.slice(-4), expiry: parsed.creditCard.expiry };
            // persist sanitized version immediately
            localStorage.setItem('ecommerceUser', JSON.stringify(parsed));
        }
        if (parsed.creditCard && parsed.creditCard.cvv) {
            delete parsed.creditCard.cvv;
            localStorage.setItem('ecommerceUser', JSON.stringify(parsed));
        }
        user = parsed;
        updateProfileUI();
    }
}

function logout() {
    localStorage.removeItem('ecommerceUser');
    user = null;
    cart = [];
    updateCartCount();
    updateProfileUI();
    navigateTo('home');
    showToast("Você saiu da sua conta");
}

function updateProfileUI() {
    const nameEl = document.getElementById('profile-name');
    const typeEl = document.getElementById('profile-type');
    const loginBtns = document.getElementById('login-btns');
    const logoutBtn = document.getElementById('logout-btn');
    const sellerDash = document.getElementById('seller-dashboard');

    if (user) {
        nameEl.innerText = user.type === 'seller' ? user.storeName : user.name;
        typeEl.innerText = user.type === 'seller' ? 'Lojista' : 'Cliente';
        loginBtns.style.display = 'none';
        logoutBtn.style.display = 'block';
        sellerDash.style.display = user.type === 'seller' ? 'block' : 'none';
    } else {
        nameEl.innerText = 'Visitante';
        typeEl.innerText = 'Faça login para acessar recursos exclusivos';
        loginBtns.style.display = 'block';
        logoutBtn.style.display = 'none';
        sellerDash.style.display = 'none';
    }
}

// --- MODAIS UI ---
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }
function openLoginModal() { closeWelcomeScreen(); openModal('modal-login'); }
function openWelcomeScreen() { document.getElementById('welcome-screen').classList.add('active'); }
function closeWelcomeScreen() { document.getElementById('welcome-screen').classList.remove('active'); }

// Lightbox helpers
function openLightbox(it) {
    if (!it) return;
    const display = document.getElementById('lightbox-display');
    if (!display) return;
    if (typeof it === 'string' && (it.startsWith('http') || it.startsWith('/') || it.startsWith('data:'))) {
        display.innerHTML = `<img id="lightbox-img" src="${it}" loading="lazy" alt="${escapeHtml(currentProduct ? currentProduct.name : '')}">`;
    } else {
        display.innerHTML = `<div style="font-size:8rem; display:flex; align-items:center; justify-content:center;">${escapeHtml(it)}</div>`;
    }
    openModal('lightbox');
}

function closeLightbox() { const display = document.getElementById('lightbox-display'); if (display) display.innerHTML = ''; closeModal('lightbox'); }

// --- GEOLOCALIZAÇÃO ---
function requestLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            userLat = pos.coords.latitude;
            userLng = pos.coords.longitude;
            renderHome('all');
            renderFeira();
        }, () => {
            userLat = SJBV_LAT;
            userLng = SJBV_LNG;
        });
    }
}

function calcDist(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
}

// --- RENDERIZAÇÃO ---
function filterHome(filter, el) {
    if (el) {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        el.classList.add('active');
    }
    renderHome(filter);
}

function renderHome(filter) {
    const grid = document.getElementById('home-grid');
    grid.innerHTML = "";
    let list = filter === 'all' ? productsDB : productsDB.filter(p => p.cat === filter);
    if (filter === 'all') list = list.sort(() => 0.5 - Math.random()).slice(0, 12);

    list.forEach(p => {
        const parc = (p.price / 12).toFixed(2);
        let distTxt = "Calculando...", mapLink = "#";
        if (userLat && p.lat) {
            const km = calcDist(userLat, userLng, p.lat, p.lng);
            distTxt = `${km} km`;
            mapLink = `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;
        }
        grid.innerHTML += `
                <div class="product-card" onclick="openProduct('${p.id}')">
                    <div class="p-image">${(typeof p.img === 'string' && (p.img.startsWith('http') || p.img.startsWith('/') || p.img.startsWith('data:'))) ? ('<img src="' + p.img + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" alt="' + p.name + '">') : p.img}</div>
                    <div class="p-body">
                                <div class="p-name">${p.name}</div>
                                <div class="p-store"><i class="fas fa-store"></i> ${p.store}</div>
                                <div style="display:flex; align-items:center; gap:10px; margin-top:6px;">
                                    <div class="p-price">R$ ${p.price.toFixed(2)}</div>
                                    <div class="p-rating" style="font-size:0.85rem; color:#f4c150;">${renderStars(p.reviews)}</div>
                                    <div style="margin-left:auto; font-size:0.8rem; color:${p.stock > 0 ? '#00a650' : '#dc3545'}; font-weight:700;">${p.stock > 0 ? 'Em estoque: ' + p.stock : 'Esgotado'}</div>
                                </div>
                                <div class="p-installments">12x R$ ${parc}</div>
                        <button class="btn-add" onclick="event.stopPropagation(); addToCart('${p.id}', '${p.name}', ${p.price})">
                            <i class="fas fa-cart-plus"></i> Adicionar
                        </button>
                    </div>
                    <div class="location-bar" onclick="event.stopPropagation(); window.open('${mapLink}', '_blank')">
                        <span style="font-size:0.75rem; color:#666;">📍 Localização</span>
                        <span class="loc-dist">${distTxt}</span>
                    </div>
                </div>`;
    });
}

// utility for showing stars from reviews array
function renderStars(reviews) {
    if (!reviews || !reviews.length) return '—';
    const avg = Math.round(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length);
    let out = '';
    for (let i = 0; i < 5; i++) out += i < avg ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    return out + ` <span style="color:#666; font-weight:600; font-size:0.8rem; margin-left:6px;">(${reviews.length})</span>`;
}

function renderFeira() {
    const grid = document.getElementById('feira-grid');
    grid.innerHTML = "";
    feiraProducts.forEach(p => {
        const parc = (p.price / 12).toFixed(2);
        let distTxt = "Calculando...", mapLink = "#";
        if (userLat && p.lat) {
            const km = calcDist(userLat, userLng, p.lat, p.lng);
            distTxt = `${km} km`;
            mapLink = `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;
        }
        grid.innerHTML += `
                <div class="product-card" onclick="openProduct('${p.id}')">
                    <div class="p-image">${(typeof p.img === 'string' && (p.img.startsWith('http') || p.img.startsWith('/') || p.img.startsWith('data:'))) ? ('<img src="' + p.img + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" alt="' + p.name + '">') : p.img}</div>
                    <div class="p-body">
                        <div class="p-name">${p.name}</div>
                        <div class="p-store"><i class="fas fa-store"></i> ${p.store}</div>
                        <div style="display:flex; align-items:center; gap:10px; margin-top:6px;">
                            <div class="p-price">R$ ${p.price.toFixed(2)}</div>
                            <div class="p-rating" style="font-size:0.85rem; color:#f4c150;">${renderStars(p.reviews)}</div>
                            <div style="margin-left:auto; font-size:0.8rem; color:${p.stock > 0 ? '#00a650' : '#dc3545'}; font-weight:700;">${p.stock > 0 ? 'Em estoque: ' + p.stock : 'Esgotado'}</div>
                        </div>
                        <div class="p-installments">12x R$ ${parc}</div>
                        <button class="btn-add" onclick="event.stopPropagation(); addToCart('${p.id}', '${p.name}', ${p.price})">
                            <i class="fas fa-cart-plus"></i> Adicionar
                        </button>
                    </div>
                    <div class="location-bar" onclick="event.stopPropagation(); window.open('${mapLink}', '_blank')">
                        <span style="font-size:0.75rem; color:#666;">📍 Localização</span>
                        <span class="loc-dist">${distTxt}</span>
                    </div>
                </div>`;
    });
}

// --- PRODUCT DETAIL ---
let currentProduct = null;

function openProduct(productId) {
    // search in productsDB and feiraProducts
    currentProduct = (productsDB.find(p => p.id === productId) || feiraProducts.find(p => p.id === productId));
    if (!currentProduct) {
        showToast('Produto não encontrado');
        return;
    }
    // populate UI
    // build carousel area
    const images = currentProduct.images && currentProduct.images.length ? currentProduct.images : [currentProduct.img || '📦'];
    currentProduct._carouselIndex = 0;
    const mainImg = images[0];
    // render main and thumb as <img> when looks like a url, otherwise render raw content (emoji)
    function renderImg(it, cls) {
        if (typeof it === 'string' && (it.startsWith('http') || it.startsWith('/') || it.startsWith('data:'))) {
            return `<img src="${it}" class="${cls || ''}" loading="lazy" alt="${escapeHtml(currentProduct.name)}">`;
        }
        return `<div class="emoji">${escapeHtml(it)}</div>`;
    }
    let thumbsHtml = images.map((it, idx) => `<div class="thumb" data-idx="${idx}">${renderImg(it, 'thumb-img')}</div>`).join('');
    document.getElementById('product-image').innerHTML = `
                <div class="carousel">
                    <button class="carousel-nav prev" aria-label="Anterior">‹</button>
                    <div class="carousel-main">${renderImg(mainImg, 'carousel-img')}</div>
                    <button class="carousel-nav next" aria-label="Próxima">›</button>
                </div>
                <div class="carousel-thumbs">${thumbsHtml}</div>`;
    // wire up nav/thumbnails
    const carouselEl = document.getElementById('product-image');
    const mainEl = carouselEl.querySelector('.carousel-main');
    const thumbs = Array.from(carouselEl.querySelectorAll('.thumb'));
    function showIndex(i) { currentProduct._carouselIndex = i; mainEl.innerHTML = renderImg(images[i], 'carousel-img'); thumbs.forEach(t => t.classList.toggle('active', parseInt(t.dataset.idx) == i)); }
    carouselEl.querySelector('.prev').onclick = (e) => { e.stopPropagation(); const i = (currentProduct._carouselIndex - 1 + images.length) % images.length; showIndex(i); };
    carouselEl.querySelector('.next').onclick = (e) => { e.stopPropagation(); const i = (currentProduct._carouselIndex + 1) % images.length; showIndex(i); };
    thumbs.forEach(t => t.onclick = (ev) => { ev.stopPropagation(); showIndex(parseInt(t.dataset.idx)); });
    // clicking on main image opens a lightbox for urls
    mainEl.onclick = (ev) => { ev.stopPropagation(); const it = images[currentProduct._carouselIndex]; openLightbox(it); };
    document.getElementById('product-name').innerText = currentProduct.name;
    document.getElementById('product-store').innerText = currentProduct.store || 'Loja local';
    document.getElementById('product-desc').innerText = currentProduct.desc || (currentProduct.name + ' — descrição do produto.');
    document.getElementById('product-price').innerText = `R$ ${currentProduct.price.toFixed(2)}`;

    // show stock and rating
    const ratingEl = document.getElementById('product-installments-small');
    const avg = (currentProduct.reviews && currentProduct.reviews.length) ? Math.round(currentProduct.reviews.reduce((s, r) => s + r.rating, 0) / currentProduct.reviews.length) : 0;
    const ratingHtml = avg ? '<span style="color:#f4c150; font-weight:700;">' + '&#9733;'.repeat(avg) + '</span>' : '<span style="color:#999">Sem avaliações</span>';
    // place rating into small area later
    const meta = document.getElementById('product-meta');
    if (meta) meta.innerHTML = `<div style="display:flex; gap:12px; align-items:center;"><div style="font-weight:600;color:#333;">${ratingHtml}</div><div style="color:${currentProduct.stock > 0 ? '#00a650' : '#dc3545'}; font-weight:700; margin-left:auto;">${currentProduct.stock > 0 ? 'Em estoque: ' + currentProduct.stock : 'Esgotado'}</div></div>`;

    // build parcels select
    const sel = document.getElementById('product-parcels');
    sel.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        // installments logic: free until interestFreeUntil; otherwise apply interestPercent
        let price = currentProduct.price;
        const freeUntil = currentProduct.interestFreeUntil || 12;
        const interest = currentProduct.interestPercent || 0;
        let total = price;
        if (i > freeUntil) total = price * (1 + (interest / 100));
        const val = (total / i).toFixed(2);
        const suffix = i > freeUntil && interest > 0 ? ` (total R$ ${total.toFixed(2)})` : '';
        sel.innerHTML += `<option value="${i}">${i}x de R$ ${val}${suffix}</option>`;
    }
    // update small text
    document.getElementById('product-installments-small').innerText = `12x R$ ${(currentProduct.price / 12).toFixed(2)}`;

    // attach listener for select to show computed value
    sel.onchange = () => {
        const q = parseInt(sel.value, 10) || 1;
        // recompute with the same rule
        const freeUntil = currentProduct.interestFreeUntil || 12;
        const interest = currentProduct.interestPercent || 0;
        let total = currentProduct.price;
        if (q > freeUntil) total = currentProduct.price * (1 + interest / 100);
        document.getElementById('product-installments-small').innerText = `${q}x de R$ ${(total / q).toFixed(2)}${q > freeUntil && interest > 0 ? ` • total R$ ${total.toFixed(2)}` : ''}`;
    };

    // render reviews
    const reviewsContainer = document.getElementById('product-reviews');
    reviewsContainer.innerHTML = '';
    if (currentProduct.reviews && currentProduct.reviews.length) {
        currentProduct.reviews.forEach(r => {
            const node = document.createElement('div'); node.className = 'rev';
            node.innerHTML = `<div class="who">${r.name} · <span style=\"color:#f4c150;\">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span></div><div class=\"txt\">${r.text}</div>`;
            reviewsContainer.appendChild(node);
        });
    } else {
        reviewsContainer.innerHTML = '<div style="color:#666;">Seja o primeiro a avaliar este produto.</div>';
    }

    // set default installment display
    const q0 = parseInt(sel.value, 10) || 1;
    sel.onchange();

    navigateTo('product');
}

function addCurrentProductToCart() {
    if (!currentProduct) return;
    addToCart(currentProduct.id, currentProduct.name, currentProduct.price);
    showToast('Produto adicionado ao carrinho');
}

// submit a review for the currently viewed product
function submitProductReview() {
    if (!currentProduct) return;
    const rating = parseInt(document.getElementById('review-rating').value, 10) || 5;
    const text = document.getElementById('review-text').value.trim();
    let name = document.getElementById('review-name').value.trim();
    if (!text) {
        document.getElementById('review-feedback').innerText = 'Por favor, escreva um comentário antes de enviar.';
        return;
    }
    if (!name && typeof user !== 'undefined' && user && user.name) name = user.name;
    if (!name) name = 'Anônimo';

    const newReview = { name, rating, text, date: (new Date()).toISOString() };
    if (!currentProduct.reviews) currentProduct.reviews = [];
    currentProduct.reviews.unshift(newReview);
    // persist
    // ensure we find the product in productsDB or feiraProducts and update that one
    const idx = productsDB.findIndex(p => p.id === currentProduct.id);
    if (idx >= 0) { productsDB[idx] = currentProduct; }
    else {
        const fidx = feiraProducts.findIndex(p => p.id === currentProduct.id);
        if (fidx >= 0) feiraProducts[fidx] = currentProduct;
    }
    saveProducts();

    // render review immediately at top
    const reviewsContainer = document.getElementById('product-reviews');
    const node = document.createElement('div'); node.className = 'rev';
    node.innerHTML = `<div class="who">${newReview.name} · <span style=\"color:#f4c150;\">${'★'.repeat(newReview.rating)}${'☆'.repeat(5 - newReview.rating)}</span></div><div class=\"txt\">${escapeHtml(newReview.text)}</div>`;
    reviewsContainer.insertBefore(node, reviewsContainer.firstChild);

    // clear form
    document.getElementById('review-text').value = '';
    if (!user || !user.name) document.getElementById('review-name').value = '';
    document.getElementById('review-feedback').innerText = 'Avaliação enviada — obrigado!';

    // refresh related visual indicators
    // update meta rating and any product cards shown in lists
    try { renderHome('all'); renderFeira(); } catch (e) { }
}

// helper to make comment text safe
function escapeHtml(s) {
    return String(s).replace(/[&<>\"']/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]; });
}

function buyCurrentProduct() {
    if (!currentProduct) return;
    // add and attempt checkout
    addToCart(currentProduct.id, currentProduct.name, currentProduct.price);
    // start checkout flow
    navigateTo('cart');
    handleCheckoutAttempt();
}

function renderCategories() {
    const grid = document.getElementById('cat-grid');
    grid.innerHTML = "";
    categories.forEach(c => {
        grid.innerHTML += `
                    <div class="cat-card" onclick="navigateTo('home'); filterHome('${c.id}');">
                        <div class="cat-icon">${c.icon}</div>
                        <div class="cat-name">${c.name}</div>
                    </div>`;
    });
}

function populateDropdowns() {
    const sel = document.getElementById('s-category');
    const pSel = document.getElementById('prod-cat');
    categories.forEach(c => {
        if (sel) sel.innerHTML += `<option value="${c.id}">${c.name}</option>`;
        if (pSel) pSel.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
}

// LOJISTA
function openProductModal() {
    openModal('product-modal');
    switchProdTab('manual');
}

function switchProdTab(mode) {
    document.querySelectorAll('.m-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-manual').style.display = mode === 'manual' ? 'block' : 'none';
    document.getElementById('tab-barcode').style.display = mode === 'barcode' ? 'block' : 'none';
    if (mode === 'barcode') {
        document.querySelectorAll('.m-tab')[1].classList.add('active');
    } else {
        document.querySelectorAll('.m-tab')[0].classList.add('active');
    }
}

function simulateScan() {
    document.getElementById('prod-name').value = "Produto Exemplo EAN";
    document.getElementById('prod-price').value = "99.90";
    showToast("Produto escaneado com sucesso!");
}

function saveProduct() {
    const name = document.getElementById('prod-name').value;
    const price = parseFloat(document.getElementById('prod-price').value);
    const cat = document.getElementById('prod-cat').value;
    const img = document.getElementById('prod-img').value;
    if (name && price) {
        const stock = parseInt(document.getElementById('prod-stock').value || '0', 10);
        productsDB.unshift({
            id: 'p' + Math.random().toString(36).slice(2, 9),
            name,
            price,
            cat,
            img,
            store: user.storeName,
            lat: randCoord(SJBV_LAT),
            lng: randCoord(SJBV_LNG),
            stock: isNaN(stock) ? 0 : stock,
            reviews: []
        });
        saveProducts();
        renderHome('all');
        closeModal('product-modal');
        showToast("Produto cadastrado com sucesso!");
        navigateTo('home');
    } else {
        showToast("Preencha todos os campos obrigatórios");
    }
}

function handleSearch(e) {
    if (e.key === 'Enter' || e === undefined) {
        const term = document.querySelector('.search-input').value;
        if (term.trim() !== '') {
            showToast(`Buscando por: "${term}"`);
            // Simulação de busca - em uma aplicação real, isso faria uma busca no backend
            const results = productsDB.filter(p =>
                p.name.toLowerCase().includes(term.toLowerCase()) ||
                p.store.toLowerCase().includes(term.toLowerCase())
            ).slice(0, 8);

            if (results.length > 0) {
                const grid = document.getElementById('home-grid');
                grid.innerHTML = "";
                results.forEach(p => {
                    const parc = (p.price / 12).toFixed(2);
                    grid.innerHTML += `
                            <div class="product-card">
                                <div class="p-image">${p.img}</div>
                                <div class="p-body">
                                    <div class="p-name">${p.name}</div>
                                    <div class="p-store"><i class="fas fa-store"></i> ${p.store}</div>
                                    <div class="p-price">R$ ${p.price.toFixed(2)}</div>
                                    <div class="p-installments">12x R$ ${parc}</div>
                                    <button class="btn-add" onclick="addToCart('${p.id}', '${p.name}', ${p.price})">
                                        <i class="fas fa-cart-plus"></i> Adicionar
                                    </button>
                                </div>
                            </div>`;
                });
                navigateTo('home');
            } else {
                showToast("Nenhum produto encontrado");
            }
        }
    }
}

// Inicialização da aplicação
init();