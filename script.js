/**
 * =================================================================
 * ⚙️ データの編集・変更はここを書き換えてください
 * =================================================================
 */
const menuData = [
    {
        id: "standard_wall",
        name: "【標準】壁掛け型エアコンクリーニング",
        type: "aircon",
        prices: { 1: 9900, 2: 16500, 3: 24750, 4: 0 },
        times: { 1: 60, 2: 100, 3: 150, 4: 0 },
        maxQty: 4,
        options: [
            { id: "coat", name: "防カビ抗菌コート", type: "slide", prices: { 1: 13200, 2: 19800, 3: 28050, 4: 0 }, times: { 1: 70, 2: 110, 3: 180, 4: 0 } },
            { id: "outdoor", name: "室外機分解クリーニング", type: "slide", prices: { 1: 15400, 2: 22000, 3: 5500, 4: 0 }, times: { 1: 90, 2: 140, 3: 180, 4: 0 } },
            { id: "both", name: "防カビ＋室外機", type: "slide", prices: { 1: 16225, 2: 22825, 3: 31075, 4: 0 }, times: { 1: 100, 2: 180, 3: 190, 4: 0 } },
            { id: "drain", name: "ドレンパン清掃", type: "add", pricePerUnit: 550, timePerUnit: 10 }
        ]
    },
    {
        id: "cleaning_function",
        name: "【壁掛型】お掃除機能付きエアコンクリーニング",
        type: "aircon",
        prices: { 1: 19800, 2: 36300, 3: 54450 },
        times: { 1: 120, 2: 210, 3: 300 },
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
        times: { 1: 240 },
        maxQty: 1,
        options: [
            { id: "apron", name: "エプロン内部高圧洗浄", type: "add", pricePerUnit: 5500, timePerUnit: 40 },
            { id: "uroko", name: "鏡のウロコ取り洗浄", type: "add", pricePerUnit: 3850, timePerUnit: 30 }
        ]
    },
    {
        id: "kitchen_single",
        name: "【シンクやコンロを綺麗に！】キッチンクリーニング 1箇所",
        type: "water",
        prices: { 1: 16500 },
        times: { 1: 100 },
        maxQty: 1,
        options: [
            { id: "shokusen", name: "食洗機の水垢が気になるかた", type: "add", pricePerUnit: 5500, timePerUnit: 30 },
            { id: "range", name: "レンジフード", type: "add", pricePerUnit: 11000, timePerUnit: 50 },
            { id: "bath", name: "風呂清掃", type: "add", pricePerUnit: 22000, timePerUnit: 120 }
        ]
    },
    {
        id: "water_5set",
        name: "【５点セット】お風呂×キッチン×レンジフード×トイレ×洗面",
        type: "water",
        prices: { 1: 55000 },
        times: { 1: 300 },
        maxQty: 1,
        options: []
    },
    {
        id: "water_3set",
        name: "【3点セット】お風呂×キッチン×レンジフード",
        type: "water",
        prices: { 1: 38500 },
        times: { 1: 300 },
        maxQty: 1,
        options: []
    },
    {
        id: "toilet",
        name: "トイレ",
        type: "water",
        prices: { 1: 4950 },
        times: { 1: 40 },
        maxQty: 1,
        options: []
    },
    {
        id: "washroom",
        name: "洗面所（排水溝なし）",
        type: "water",
        prices: { 1: 4400 },
        times: { 1: 30 },
        maxQty: 1,
        options: []
    }
];

// コピー用のテキストデータを一時保管するグローバル変数
let copyTextCache = "";

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
    let subtotal = 0; // 割引前の小計
    let totalMinutes = 0;
    let hasEstimate = false;
    const summaryList = document.getElementById('summary-list');
    summaryList.innerHTML = '';

    let selectedItemsCount = 0;
    
    // コピーテキスト生成用
    let copyDetailsText = "";

    menuData.forEach(menu => {
        const mainCheck = document.getElementById(`check-${menu.id}`);
        if (mainCheck && mainCheck.checked) {
            selectedItemsCount++;
            const qty = parseInt(document.getElementById(`qty-${menu.id}`).value) || 1;
            
            let itemPrice = menu.prices[qty];
            let itemMinutes = menu.times[qty];
            
            let optPriceAddition = 0;
            let optTimeAddition = 0;
            let selectedOptNames = [];

            if (menu.options) {
                menu.options.forEach(opt => {
                    const optCheck = document.querySelector(`input[data-menu-id="${menu.id}"][data-opt-id="${opt.id}"]`);
                    if (optCheck && optCheck.checked) {
                        if (opt.type === "slide") {
                            const singleBasePrice = menu.prices[1];
                            const singleOptPrice = opt.prices[1];
                            const singleDiff = singleOptPrice - singleBasePrice;
                            optPriceAddition += (singleDiff * qty);

                            const singleBaseTime = menu.times[1];
                            const singleOptTime = opt.times[1];
                            const singleTimeDiff = singleOptTime - singleBaseTime;
                            optTimeAddition += (singleTimeDiff * qty);

                            selectedOptNames.push(opt.name);
                        } else if (opt.type === "add") {
                            optPriceAddition += (opt.pricePerUnit * qty);
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
                copyDetailsText += `${itemNameStr}\n要見積\n`;
            } else {
                const finalItemPrice = itemPrice + optPriceAddition;
                subtotal += finalItemPrice;
                totalMinutes += (itemMinutes + optTimeAddition);
                
                li.innerHTML = `<span>${itemNameStr}</span><span>¥${finalItemPrice.toLocaleString()}</span>`;
                copyDetailsText += `${itemNameStr}\n¥${finalItemPrice.toLocaleString()}\n`;
            }
            summaryList.appendChild(li);
        }
    });

    if (selectedItemsCount === 0) {
        summaryList.innerHTML = '<li class="summary-item">メニューが選択されていません</li>';
    }

    // ✨ 割引の計算処理
    const discountType = document.getElementById('discount-type').value;
    const discountValue = Math.max(0, parseFloat(document.getElementById('discount-value').value) || 0);
    let discountAmount = 0;

    if (discountType === "yen") {
        discountAmount = discountValue;
    } else if (discountType === "percent") {
        discountAmount = Math.round(subtotal * (discountValue / 100));
    }

    // 最終合計金額 (マイナスにならないよう制御)
    const finalTotal = Math.max(0, subtotal - discountAmount);

    // 画面に反映
    document.getElementById('total-time').textContent = `${totalMinutes}分`;
    document.getElementById('total-price').textContent = `¥${finalTotal.toLocaleString()}`;
    document.getElementById('estimate-note').style.display = hasEstimate ? 'block' : 'none';

    // ✨ 送信用テキストの組み立て（グローバルキャッシュに保存）
    if (selectedItemsCount > 0) {
        let textResult = "【ご依頼内容】\n" + copyDetailsText + "\n";
        
        // 割引があった場合は明細に追記
        if (discountAmount > 0) {
            textResult += `割引\n-¥${discountAmount.toLocaleString()}\n\n`;
        }
        
        textResult += `合計金額 (税込)\n¥${finalTotal.toLocaleString()}\n\n`;
        textResult += "※所要時間はあくまでも目安です。当日の汚れの範囲や度合いによってはお時間が前後いたします。";
        copyTextCache = textResult;
    } else {
        copyTextCache = "";
    }
}

// ✨ クリップボードへのコピー機能
function copyToClipboard() {
    if (!copyTextCache) {
        alert("メニューが選択されていないため、コピーできません。");
        return;
    }

    navigator.clipboard.writeText(copyTextCache).then(() => {
        const alertText = document.getElementById('copy-alert');
        alertText.style.display = "inline";
        setTimeout(() => {
            alertText.style.display = "none";
        }, 2000);
    }).catch(err => {
        alert("コピーに失敗しました。お使いのブラウザの設定をご確認ください。");
    });
}
