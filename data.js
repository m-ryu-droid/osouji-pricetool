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
