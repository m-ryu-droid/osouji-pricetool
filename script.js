/**
 * =================================================================
 * ⚙️ データの編集・変更はここを書き換えてください
 * =================================================================
 * prices: 金額（税込）
 * times: 各台数ごとの施工時間（分）※CSVの「施工時間（m）」データを反映
 */
const menuData = [
    {
        id: "standard_wall",
        name: "【標準】壁掛け型エアコンクリーニング",
        type: "aircon",
        prices: { 1: 9900, 2: 16500, 3: 24750, 4: 0 },
        times: { 1: 60, 2: 100, 3: 150, 4: 0 }, // ✨ 時間を追加
        maxQty: 4,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 13200, 2: 19800, 3: 28050, 4: 0 }, times: { 1: 70, 2: 110, 3: 180, 4: 0 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 15400, 2: 22000, 3: 5500, 4: 0 }, times: { 1: 90, 2: 140, 3: 180, 4: 0 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 16225, 2: 22825, 3: 31075, 4: 0 }, times: { 1: 100, 2: 180, 3: 190, 4: 0 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550, timePerUnit: 10 } // ドレンパン清掃はCSVより1台あたり10分
        ]
    },
    {
        id: "cleaning_function",
        name: "【壁掛型】お掃除機能付きエアコンクリーニング",
        type: "aircon",
        prices: { 1: 19800, 2: 36300, 3: 54450 },
        times: { 1: 120, 2: 210, 3: 300 }, // 推定・CSVベースの時間
        maxQty: 3,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 23100, 2: 41250, 3: 61050 }, times: { 1: 130, 2: 220, 3: 310 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 25300, 2: 42900, 3: 63250 }, times: { 1: 150, 2: 250, 3: 340 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 26125, 2: 44275, 3: 64625 }, times: { 1: 160, 2: 290, 3: 350 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550, timePerUnit: 10 }
        ]
    },
    {
        id: "ceiling_1way",
        name: "【天井埋め込み型】1方向 エアコンクリーニング",
        type: "aircon",
        prices: { 1: 22000, 2: 40700, 3: 61050, 4: 81400, 5: 93500 },
        times: { 1: 90, 2: 150, 3: 210, 4: 270, 5: 330 },
        maxQty: 5,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 26400, 2: 46200, 3: 69300, 4: 92400, 5: 104500 }, times: { 1: 100, 2: 160, 3: 220, 4: 280, 5: 340 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 29150, 2: 48950, 3: 72050, 4: 95150, 5: 107250 }, times: { 1: 120, 2: 190, 3: 250, 4: 310, 5: 370 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 32450, 2: 52250, 3: 75350, 4: 98450, 5: 110550 }, times: { 1: 130, 2: 200, 3: 260, 4: 320, 5: 380 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550, timePerUnit: 10 }
        ]
    },
    {
        id: "ceiling_2way",
        name: "【天井埋め込み型】2方向 エアコンクリーニング",
        type: "aircon",
        prices: { 1: 24200, 2: 45100, 3: 62700, 4: 83600, 5: 104500 },
        times: { 1: 120, 2: 210, 3: 270, 4: 360, 5: 420 },
        maxQty: 5,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 28600, 2: 50600, 3: 70950, 4: 94600, 5: 115500 }, times: { 1: 130, 2: 220, 3: 280, 4: 370, 5: 430 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 31350, 2: 53350, 3: 73700, 4: 97350, 5: 118250 }, times: { 1: 150, 2: 250, 3: 310, 4: 400, 5: 460 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 34650, 2: 56650, 3: 77000, 4: 100650, 5: 121550 }, times: { 1: 160, 2: 260, 3: 320, 4: 410, 5: 470 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550, timePerUnit: 10 }
        ]
    },
    {
        id: "ceiling_4way",
        name: "【天井埋め込み型】4方向 エアコンクリーニング",
        type: "aircon",
        prices: { 1: 26400, 2: 49500 },
        times: { 1: 150, 2: 240 },
        maxQty: 2,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 30800, 2: 53900 }, times: { 1: 160, 2: 250 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 33550, 2: 56650 }, times: { 1: 180, 2: 280 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 37950, 2: 61050 }, times: { 1: 190, 2: 290 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550, timePerUnit: 10 }
        ]
    },
    {
        id: "water_set",
        name: "【お得なセット！】キッチン×換気扇×お風呂（水回り）",
        type: "water",
        prices: { 1: 44000 },
        times: { 1: 240 }, // CSVの240分
        maxQty: 1,
        options: [
            { id: "apron", name: "エプロン内部高圧洗浄", type: "add", pricePerUnit: 5500, timePerUnit: 40 }, // CSV差分より+40分
            { id: "uroko", name: "鏡のウロコ取り洗浄", type: "add", pricePerUnit: 3850, timePerUnit: 30 }   // CSV差分より+30分
        ]
    },
    {
        id: "kitchen_single",
        name: "【シンクやコンロを綺麗に！】キッチンクリーニング 1箇所",
        type: "water",
        prices: { 1: 16500 },
        times: { 1: 100 }, // CSVの100分
        maxQty: 1,
        options: [
            { id: "shokusen", name: "食洗機の水垢が気になるかた", type: "add", pricePerUnit: 5500, timePerUnit: 30 }, // +30分
            { id: "range", name: "レンジフード", type: "add", pricePerUnit: 11000, timePerUnit: 50 },                 // +50分
            { id: "bath", name: "風呂清掃", type: "add", pricePerUnit: 22000, timePerUnit: 120 }                       // +120分
        ]
    },
    {
        id: "water_5set",
        name: "【５点セット】お風呂×キッチン×レンジフード×トイレ×洗面",
        type: "water",
        prices: { 1: 55000 },
        times: { 1: 300 }, // CSVの300分
        maxQty: 1,
        options: []
    },
    {
        id: "water_3set",
        name: "【3点セット】お風呂×キッチン×レンジフード",
        type: "water",
        prices: { 1: 38500 },
        times: { 1: 300 }, // CSVの300分
        maxQty: 1,
        options: []
    },
    {
        id: "toilet",
        name: "トイレ",
        type: "water",
        prices: { 1: 4950 },
        times: { 1: 40 }, // CSVの40分
        maxQty: 1,
        options: []
    },
    {
        id: "washroom",
        name: "洗面所（排水溝なし）",
        type: "water",
        prices: { 1: 4400 },
        times: { 1: 30 }, // CSVの30分
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
                        const totalDiff = singleDiff * qty;
                        
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
    let totalMinutes = 0; // ✨ 追加：合計所要時間のカウンター
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
            let itemMinutes = menu.times[qty]; // メインメニューのベース時間
            
            let optPriceAddition = 0;
            let optTimeAddition = 0; // オプションによる時間の追加分
            let selectedOptNames = [];

            if (menu.options) {
                menu.options.forEach(opt => {
                    const optCheck = document.querySelector(`input[data-menu-id="${menu.id}"][data-opt-id="${opt.id}"]`);
                    if (optCheck && optCheck.checked) {
                        if (opt.type === "slide") {
                            // 金額の加算
                            const singleBasePrice = menu.prices[1];
                            const singleOptPrice = opt.prices[1];
                            const singleDiff = singleOptPrice - singleBasePrice;
                            optPriceAddition += (singleDiff * qty);

                            // ✨ 時間の計算：スライド式（防カビ等）もベース時間との差分を台数分掛け算
                            const singleBaseTime = menu.times[1];
                            const singleOptTime = opt.times[1];
                            const singleTimeDiff = singleOptTime - singleBaseTime;
                            optTimeAddition += (singleTimeDiff * qty);

                            selectedOptNames.push(opt.name);
                        } else if (opt.type === "add") {
                            // 金額の加算
                            optPriceAddition += (opt.pricePerUnit * qty);
                            
                            // ✨ 時間の加算（ドレンパン清掃や水回りオプションなど）
                            optTimeAddition += (opt.timePerUnit * qty);
                            
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
                
                // ✨ 各メニューの合計時間を集計
                totalMinutes += (itemMinutes + optTimeAddition);
                
                li.innerHTML = `<span>${itemNameStr}</span><span>¥${finalItemPrice.toLocaleString()}</span>`;
            }
            summaryList.appendChild(li);
        }
    });

    if (selectedItemsCount === 0) {
        summaryList.innerHTML = '<li class="summary-item">メニューが選択されていません</li>';
    }

    // ✨ 画面への反映
    document.getElementById('total-time').textContent = `${totalMinutes}分`;
    document.getElementById('total-price').textContent = `¥${total.toLocaleString()}`;
    document.getElementById('estimate-note').style.display = hasEstimate ? 'block' : 'none';
}
