// コピー用のテキストデータを一時保管するグローバル変数
let copyTextCache = "";
// ✨ 追加：現在選択されている文章のタイプ（初期値はline）
let currentTextType = "line"; 

// HTML構造の自動組み立て
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

function formatMinutes(totalMinutes) {
    if (totalMinutes === 0) return "0分";
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    
    if (hours > 0) {
        return mins > 0 ? `${hours}時間${mins}分` : `${hours}時間`;
    } else {
        return `${mins}分`;
    }
}

function calculateTotal() {
    let subtotal = 0; 
    let totalMinutes = 0;
    let hasEstimate = false;
    const summaryList = document.getElementById('summary-list');
    summaryList.innerHTML = '';

    let selectedItemsCount = 0;
    let copyDetailsText = "";

    menuData.forEach(menu => {
        const mainCheck = document.getElementById('check-' + menu.id);
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

    const discountType = document.getElementById('discount-type').value;
    const discountValue = Math.max(0, parseFloat(document.getElementById('discount-value').value) || 0);
    let discountAmount = 0;

    if (discountType === "yen") {
        discountAmount = discountValue;
    } else if (discountType === "percent") {
        discountAmount = Math.round(subtotal * (discountValue / 100));
    }

    const finalTotal = Math.max(0, subtotal - discountAmount);
    const formattedTimeString = formatMinutes(totalMinutes);
    
    document.getElementById('total-time').textContent = formattedTimeString;
    document.getElementById('total-price').textContent = `¥${finalTotal.toLocaleString()}`;
    document.getElementById('estimate-note').style.display = hasEstimate ? 'block' : 'none';

    // ✨ 送信用テキストの組み立て（選択されているタブに応じて文章を自動判別）
    if (selectedItemsCount > 0) {
        let textResult = "";

        if (currentTextType === "line") {
            // 💬 LINE用のテンプレート
            textResult += "【ご依頼内容】\n" + copyDetailsText + "\n";
            if (discountAmount > 0) textResult += `割引\n-¥${discountAmount.toLocaleString()}\n\n`;
            textResult += `目安所要時間\n${formattedTimeString}\n\n`;
            textResult += `合計金額 (税込)\n¥${finalTotal.toLocaleString()}\n\n`;
            textResult += "※所要時間はあくまでも目安です。当日の汚れの範囲や度合いによってはお時間が前後いたします。";

        } else if (currentTextType === "email") {
            // ✉️ メール用のテンプレート（丁寧な挨拶などを入れる想定の枠組み）
            textResult += "アスクマイスターでございます。\nお見積もり金額が確定いたしましたのでご案内いたします。\n\n";
            textResult += "----------------------------------------\n";
            textResult += "■御見積明細\n" + copyDetailsText;
            if (discountAmount > 0) textResult += `割引: -¥${discountAmount.toLocaleString()}\n`;
            textResult += "----------------------------------------\n";
            textResult += `■目安所要時間: ${formattedTimeString}\n`;
            textResult += `■御請求金額 (税込): ¥${finalTotal.toLocaleString()}\n\n`;
            textResult += "※当日の汚れの状況等により、作業時間は多少前後する場合がございます。\n";
            textResult += "ご確認のほど、よろしくお願い申し上げます。";

        } else if (currentTextType === "memo") {
            // 📝 社内メモ用のテンプレート（金額と時間だけをシンプルに記録する用）
            textResult += `【社内記録用メモ】\n`;
            textResult += `選択メニュー:\n${copyDetailsText}`;
            if (discountAmount > 0) textResult += `（内、割引適用: ¥${discountAmount.toLocaleString()}）\n`;
            textResult += `総作業時間ベース: ${totalMinutes}分 (${formattedTimeString})\n`;
            textResult += `確定売上 (税込): ¥${finalTotal.toLocaleString()}`;
        }

        copyTextCache = textResult;
    } else {
        copyTextCache = "";
    }
}

function copyToClipboard() {
    if (!copyTextCache) {
        alert("メニューが選択されていないため、コピーできません。");
        return;
    }
    navigator.clipboard.writeText(copyTextCache).then(() => {
        const alertText = document.getElementById('copy-alert');
        alertText.style.display = "inline";
        setTimeout(() => alertText.style.display = "none", 2000);
    }).catch(() => {
        alert("コピーに失敗しました。");
    });
}

function changeLayout(targetLayout) {
    const body = document.body;
    const btnBottom = document.getElementById('btn-layout-bottom');
    const btnRight = document.getElementById('btn-layout-right');

    if (targetLayout === 'bottom') {
        body.classList.remove('layout-right');
        body.classList.add('layout-bottom');
        btnBottom.classList.add('active');
        btnRight.classList.remove('active');
    } else if (targetLayout === 'right') {
        body.classList.remove('layout-bottom');
        body.classList.add('layout-right');
        btnRight.classList.add('active');
        btnBottom.classList.remove('active');
    }
}

// ✨ 追加：選択されたタブを切り替えて文章を再計算する関数
function changeTextType(type) {
    currentTextType = type;
    
    // 全タブのactiveクラスを一旦消す
    document.getElementById('tab-line').classList.remove('active');
    document.getElementById('tab-email').classList.remove('active');
    document.getElementById('tab-memo').classList.remove('active');
    
    // クリックされたタブにactiveクラスを付与
    document.getElementById(`tab-${type}`).classList.add('active');
    
    // 文章を再生成
    calculateTotal();
}


// ✨ 追加：最上部タブで「見積計算」と「文章整理」の表示ツール自体を切り替える関数
function switchMainTool(toolType) {
    const body = document.body;
    const tabCalc = document.getElementById("main-tab-calc");
    const tabEditor = document.getElementById("main-tab-editor");

    if (toolType === "calc") {
        body.classList.remove("view-editor");
        body.classList.add("view-calc");
        tabCalc.classList.add("active");
        tabEditor.classList.remove("active");
        calculateTotal(); // 金額を再計算してバーを表示
    } else if (toolType === "editor") {
        body.classList.remove("view-calc");
        body.classList.add("view-editor");
        tabEditor.classList.add("active");
        tabCalc.classList.remove("active");
    }
}
