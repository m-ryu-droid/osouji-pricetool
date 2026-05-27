/**
 * =================================================================
 * ⚙️ データの編集・変更はここを書き換えてください（すべて税込価格）
 * =================================================================
 */
const menuData = [
    {
        id: "standard_wall",
        name: "【標準】壁掛け型エアコンクリーニング",
        type: "aircon",
        prices: { 1: 9900, 2: 16500, 3: 24750, 4: 0 },
        maxQty: 4,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 13200, 2: 19800, 3: 28050, 4: 0 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 15400, 2: 22000, 3: 5500, 4: 0 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 16225, 2: 22825, 3: 31075, 4: 0 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550 }
        ]
    },
    {
        id: "cleaning_function",
        name: "【壁掛型】お掃除機能付きエアコンクリーニング",
        type: "aircon",
        prices: { 1: 19800, 2: 36300, 3: 54450 },
        maxQty: 3,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 23100, 2: 41250, 3: 61050 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 25300, 2: 42900, 3: 63250 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 26125, 2: 44275, 3: 64625 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550 }
        ]
    },
    {
        id: "ceiling_1way",
        name: "【天井埋め込み型】1方向 エアコンクリーニング",
        type: "aircon",
        prices: { 1: 22000, 2: 40700, 3: 61050, 4: 81400, 5: 93500 },
        maxQty: 5,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 26400, 2: 46200, 3: 69300, 4: 92400, 5: 104500 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 29150, 2: 48950, 3: 72050, 4: 95150, 5: 107250 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 32450, 2: 52250, 3: 75350, 4: 98450, 5: 110550 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550 }
        ]
    },
    {
        id: "ceiling_2way",
        name: "【天井埋め込み型】2方向 エアコンクリーニング",
        type: "aircon",
        prices: { 1: 24200, 2: 45100, 3: 62700, 4: 83600, 5: 104500 },
        maxQty: 5,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 28600, 2: 50600, 3: 70950, 4: 94600, 5: 115500 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 31350, 2: 53350, 3: 73700, 4: 97350, 5: 118250 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 34650, 2: 56650, 3: 77000, 4: 100650, 5: 121550 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550 }
        ]
    },
    {
        id: "ceiling_4way",
        name: "【天井埋め込み型】4方向 エアコンクリーニング",
        type: "aircon",
        prices: { 1: 26400, 2: 49500 },
        maxQty: 2,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 30800, 2: 53900 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 33550, 2: 56650 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 37950, 2: 61050 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550 }
        ]
    },
    {
        id: "water_set",
        name: "【お得なセット！】キッチン×換気扇×お風呂（水回り）",
        type: "water",
        prices: { 1: 44000 },
        maxQty: 1,
        options: [
            { id: "apron", name: "エプロン内部高圧洗浄", type: "add", pricePerUnit: 5500 },
            { id: "uroko", name: "鏡のウロコ取り洗浄", type: "add", pricePerUnit: 3850 }
        ]
    },
    {
        id: "kitchen_single",
        name: "【シンクやコンロを綺麗に！】キッチンクリーニング 1箇所",
        type: "water",
        prices: { 1: 16500 },
        maxQty: 1,
        options: [
            { id: "shokusen", name: "食洗機の水垢が気になるかた", type: "add", pricePerUnit: 5500 },
            { id: "range", name: "レンジフード", type: "add", pricePerUnit: 11000 },
            { id: "bath", name: "風呂清掃", type: "add", pricePerUnit: 22000 }
        ]
    },
    {
        id: "water_5set",
        name: "【５点セット】お風呂×キッチン×レンジフード×トイレ×洗面",
        type: "water",
        prices: { 1: 55000 },
        maxQty: 1,
        options: []
    },
    {
        id: "water_3set",
        name: "【3点セット】お風呂×キッチン×レンジフード",
        type: "water",
        prices: { 1: 38500 },
        maxQty: 1,
        options: []
    },
    {
        id: "toilet",
        name: "トイレ",
        type: "water",
        prices: { 1: 4950 },
        maxQty: 1,
        options: []
    },
    {
        id: "washroom",
        name: "洗面所（排水溝なし）",
        type: "water",
        prices: { 1: 4400 },
        maxQty: 1,
        options: []
    }
];

// HTML構造の組み立て開始
const container = document.getElementById('menu-container');

menuData.forEach(menu => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card-${menu.id}`;

    const unitWord = menu.type === "aircon" ? "台" : "セット";

    let qtyOptions = '';
    for(let i = 1; i <= menu.maxQty; i++) {
        qtyOptions += `<option value="${i}">${i}${unitWord}</option>`;
    }

    let optionsHtml = '';
    if (menu.options && menu.options.length > 0) {
        optionsHtml = `<div class="options-area">`;
        menu.options.forEach(opt => {
            optionsHtml += `
                <div class="option-item">
                    <label class="option-label">
                        <input type="checkbox" class="custom-checkbox opt-checkbox" data-menu-id="${menu.id}" data-opt-id="${opt.id}" onchange="calculateTotal()">
                        <span>${opt.name}</span>
                    </label>
                    <span class="option-price" id="price-text-${menu.id}-${opt.id}"></span>
                </div>
            `;
        });
        optionsHtml += `</div>`;
    }

    card.innerHTML = `
        <div class="menu-header">
            <div class="menu-title-area">
                <input type="checkbox" class="custom-checkbox main-checkbox" id="check-${menu.id}" data-menu-id="${menu.id}" onchange="toggleMenu('${menu.id}')">
                <label for="check-${menu.id}" class="menu-label">${menu.name}</label>
            </div>
            <div class="controls-area">
                <select class="qty-select" id="qty-${menu.id}" data-menu-id="${menu.id}" onchange="updatePrices('${menu.id}')" disabled>
                    ${qtyOptions}
                </select>
                <span class="base-price" id="base-price-text-${menu.id}">¥0</span>
            </div>
        </div>
        ${optionsHtml}
    `;

    container.appendChild(card);
    updatePriceTexts(menu);
});

function toggleMenu(menuId) {
    const card = document.getElementById(`card-${menuId}`);
    const mainCheck = document.getElementById(`check-${menuId}`);
    const qtySelect = document.getElementById(`qty-${menuId}`);

    if (mainCheck.checked) {
        card.classList.add('active');
        qtySelect.disabled = false;
    } else {
        card.classList.remove('active');
        qtySelect.disabled = true;
        const optChecks = card.querySelectorAll('.opt-checkbox');
        optChecks.forEach(cb => cb.checked = false);
    }
    calculateTotal();
}

function updatePrices(menuId) {
    const menu = menuData.find(m => m.id === menuId);
    if(menu) {
        updatePriceTexts(menu);
    }
    calculateTotal();
}

function updatePriceTexts(menu) {
    const qty = parseInt(document.getElementById(`qty-${menu.id}`).value) || 1;
    
    const basePrice = menu.prices[qty];
    const baseTextElem = document.getElementById(`base-price-text-${menu.id}`);
    baseTextElem.textContent = basePrice === 0 ? "要見積" : `¥${basePrice.toLocaleString()}`;

    if (menu.options) {
        menu.options.forEach(opt => {
            const optPriceElem = document.getElementById('price-text-' + menu.id + '-' + opt.id);
            if (optPriceElem) {
                if (opt.type === "slide") {
                    const singleBasePrice = menu.prices[1];
                    const singleOptPrice = opt.prices[1];
                    
                    if (singleOptPrice === 0 || basePrice === 0) {
                        optPriceElem.textContent = "(要見積)";
                    } else {
                        const singleDiff = singleOptPrice - singleBasePrice;
                        const totalDiff = singleDiff * qty; // 選択された台数分を掛け算
                        
                        optPriceElem.textContent = totalDiff >= 0 
                            ? `(+¥${totalDiff.toLocaleString()})` 
                            : `(割引 ¥${Math.abs(totalDiff).toLocaleString()})`;
                    }
                } else if (opt.type === "add") {
                    const addPrice = opt.pricePerUnit * qty;
                    optPriceElem.textContent = `(+¥${addPrice.toLocaleString()})`;
                }
            }
        });
    }
}

function calculateTotal() {
    let total = 0;
    let hasEstimate = false;
    const summaryList = document.getElementById('summary-list');
    summaryList.innerHTML = '';

    let selectedItemsCount = 0;

    menuData.forEach(menu => {
        const mainCheck = document.getElementById(`check-${menu.id}`);
        if (mainCheck && mainCheck.checked) {
            selectedItemsCount++;
            const qty = parseInt(document.getElementById(`qty-${menu.id}`).value) || 1;
            
            let itemPrice = menu.prices[qty];
            let optPriceAddition = 0;
            let selectedOptNames = [];

            if (menu.options) {
                menu.options.forEach(opt => {
                    const optCheck = document.querySelector(`input[data-menu-id="${menu.id}"][data-opt-id="${opt.id}"]`);
                    if (optCheck && optCheck.checked) {
                        if (opt.type === "slide") {
                            // スライド式（基本オプション）も1台あたりの正確な差分ベースで台数分を加算
                            const singleBasePrice = menu.prices[1];
                            const singleOptPrice = opt.prices[1];
                            const singleDiff = singleOptPrice - singleBasePrice;
                            
                            // 基本セット料金に、台数分のオプション差額を加算
                            optPriceAddition += (singleDiff * qty);
                            selectedOptNames.push(opt.name);
                        } else if (opt.type === "add") {
                            optPriceAddition += (opt.pricePerUnit * qty);
                            selectedOptNames.push(opt.name);
                        }
                    }
                });
            }

            const qtyText = menu.type === "aircon" ? ` (${qty}台)` : ` (×${qty})`;
            
            let itemNameStr = `${menu.name}${qtyText}`;
            if (selectedOptNames.length > 0) {
                itemNameStr += ` ＋ ${selectedOptNames.join('＋')}`;
            }

            const li = document.createElement('li');
            li.className = 'summary-item';
            
            if (itemPrice === 0) {
                hasEstimate = true;
                li.innerHTML = `<span>${itemNameStr}</span><span style="color:#f39c12;">要見積</span>`;
            } else {
                const finalItemPrice = itemPrice + optPriceAddition;
                total += finalItemPrice;
                li.innerHTML = `<span>${itemNameStr}</span><span>¥${finalItemPrice.toLocaleString()}</span>`;
            }
            summaryList.appendChild(li);
        }
    });

    if (selectedItemsCount === 0) {
        summaryList.innerHTML = '<li class="summary-item">メニューが選択されていません</li>';
    }

    document.getElementById('total-price').textContent = `¥${total.toLocaleString()}`;
    document.getElementById('estimate-note').style.display = hasEstimate ? 'block' : 'none';
}
