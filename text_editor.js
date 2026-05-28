/**
 * =================================================================
 * ⚙️ 抽出したい項目の設定（後から自由に変更・増減できます）
 * =================================================================
 * name: 画面やコピー時に表示したい項目名
 * key:  貼り付けられた文章から探すキーワード
 */
const targetKeywords = [
    { name: "お名前", key: "お名前" },
    { name: "電話番号", key: "電話" },
    { name: "メールアドレス", key: "メールアドレス" },
    { name: "郵便番号", key: "郵便番号" },
    { name: "ご住所（都道府県）", key: "ご住所（都道府県）" },
    { name: "ご住所（市区町村）", key: "ご住所（市区町村）" },
    { name: "ご住所（番地）", key: "ご住所（番地）" },
    { name: "番地以降（建物名など）", key: "番地以降（建物名など）" },
    { name: "訪問第１希望日", key: "訪問第１希望日" },
    { name: "第１希望時間帯", key: "希望時間帯" }, // 最初に見つかった「希望時間帯」がここに入ります
    { name: "訪問第２希望日", key: "訪問第２希望日" },
    { name: "第２希望時間帯", key: "希望時間帯" }, // 2番目に見つかった「希望時間帯」がここに入ります
    { name: "依頼内容", key: "依頼内容" },
    { name: "合計台数", key: "合計台数" },
    { name: "オプション", key: "オプション" },
    { name: "お支払い方法", key: "お支払い方法" },
    { name: "クーポンコード", key: "クーポンコード" },
    { name: "駐車場スペースの有無", key: "駐車場スペースの有無" },
    { name: "メルマガ同意", key: "メルマガ同意" }
];

// コピー用テキストの一時保管変数
let parsedCopyTextCache = "";

/**
 * 貼り付けられた文章から項目を自動判別して整理するメイン関数
 */
function parseText() {
    const inputText = document.getElementById("raw-text-input").value;
    const resultContainer = document.getElementById("parsed-result-list");
    resultContainer.innerHTML = ""; // 初期化

    if (!inputText.trim()) {
        resultContainer.innerHTML = '<div style="color: #7f8c8d; padding: 10px;">文章を貼り付けて「解析する」ボタンを押してください。</div>';
        parsedCopyTextCache = "";
        return;
    }

    let copyLines = [];
    
    // 検索を正確に行うため、キーワードの出現位置を記録する配列
    let matchedPositions = [];

    // 1. まず各キーワードが文章のどこにあるか（インデックス）をすべて探す
    targetKeywords.forEach((item, index) => {
        let pos = -1;
        // 同じキーワード（例：「希望時間帯」）が複数ある場合を考慮してループ
        while ((pos = inputText.indexOf(item.key, pos + 1)) !== -1) {
            // すでに登録済みの位置でなければ記録
            if (!matchedPositions.some(p => p.index === pos)) {
                matchedPositions.push({
                    itemIndex: index,
                    name: item.name,
                    key: item.key,
                    index: pos
                });
            }
        }
    });

    // 2. 文章の登場順（インデックス順）に並び替える
    matchedPositions.sort((a, b) => a.index - b.index);

    // 3. 次のキーワードの手前までを「その項目の値」として切り出す
    let parsedResults = [];
    for (let i = 0; i < matchedPositions.length; i++) {
        const current = matchedPositions[i];
        const startPos = current.index + current.key.length; // キーワード自体の後ろから抽出開始
        
        let endPos = inputText.length;
        if (i + 1 < matchedPositions.length) {
            endPos = matchedPositions[i + 1].index; // 次のキーワードの開始位置まで
        }

        let value = inputText.substring(startPos, endPos).trim();
        
        // コロン「:」や「：」が先頭に残っていたらきれいに削除
        if (value.startsWith(":") || value.startsWith("：")) {
            value = value.substring(1).trim();
        }

        parsedResults.push({
            name: current.name,
            value: value || "（空欄）"
        });
    }

    // 4. 定義した「targetKeywords」の順番に並び替えて画面に表示・コピー用テキスト作成
    targetKeywords.forEach(definedItem => {
        // 解析結果から該当する項目を探す（複数ある場合は見つかった順に消費）
        const matchIndex = parsedResults.findIndex(r => r.name === definedItem.name);
        
        if (matchIndex !== -1) {
            const match = parsedResults.splice(matchIndex, 1)[0];
            
            // 画面表示用のHTML生成
            const itemDiv = document.createElement("div");
            itemDiv.className = "parsed-item";
            itemDiv.innerHTML = `<span class="parsed-label">${match.name}</span><span class="parsed-value">${match.value}</span>`;
            resultContainer.appendChild(itemDiv);

            // コピー用テキストの蓄積
            copyLines.push(`【${match.name}】\n${match.value}`);
        } else {
            // 文章中にキーワードが見つからなかった場合
            const itemDiv = document.createElement("div");
            itemDiv.className = "parsed-item missing";
            itemDiv.innerHTML = `<span class="parsed-label">${definedItem.name}</span><span class="parsed-value" style="color: #c0392b;">❌ 未検出</span>`;
            resultContainer.appendChild(itemDiv);
            
            copyLines.push(`【${definedItem.name}】\n（データなし）`);
        }
    });

    // クリップボード用テキストを確定
    parsedCopyTextCache = "■顧客情報・ご依頼内容の整理\n\n" + copyLines.join("\n\n");
}

/**
 * 整理されたテキストをクリップボードにコピーする関数
 */
function copyParsedText() {
    if (!parsedCopyTextCache) {
        alert("解析されたデータがありません。");
        return;
    }

    navigator.clipboard.writeText(parsedCopyTextCache).then(() => {
        const alertText = document.getElementById("editor-copy-alert");
        alertText.style.display = "inline";
        setTimeout(() => alertText.style.display = "none", 2000);
    }).catch(() => {
        alert("コピーに失敗しました。");
    });
}
