# Custom New Tab

[ **中文繁體** / English ]

一款自定義的瀏覽器新分頁，基於純 HTML、CSS 與 JavaScript 打造

## 如何使用與套用

首先，下載程式原始碼，直接按下 `Code/Download Zip` 並解壓縮即可

接著確定電腦中有 Python 3 環境，執行 `server.py`，此舉會在本機( `localhost` )的 `8000` 端口執行，啟動伺服器後在瀏覽器輸入 [http://127.0.0.1:8000](http://127.0.0.1:8000) 即可。

接著開啟瀏覽器設定面板(此處使用Chrome 新版 UI示範)，定位到 `起始畫面` ，確定瀏覽器目前只開啟想要作為新分頁的頁面(包括本機頁面)後點選 `使用目前的頁面` 即可。

![image](https://github.com/510208/custom-new-tab/assets/107909497/df3e221e-af97-4bf8-8fdb-6e33f54dfd31)

記得將啟動伺服器的步驟添加到開機自啟動，方法如下：

### 開機自啟動

Windows+R 可啟動執行交談窗，在內部輸入 `shell:startup` 即可開啟自啟動列表：

![image](https://github.com/510208/custom-new-tab/assets/107909497/74a8d0eb-c168-406f-b194-6169fccc9203)

對 Python 檔案建立捷徑並拖入此資料夾即可。

## 設定 OpenWeatherMap API

使用常用的程式編輯器(或記事本)開啟 `script.js` 開頭如下：

```javascript
// 設定常數
const owmAPIKey = "000000000000000000000"

// 顯示當前時間至網頁上.clock函式，使jQuery的ready函式在網頁載入完成後執行
{/* <div class="clock">
<div class="time" id="time">

//...
```

將 `000000000000000000000` 改成自己的 API 即可。如有需要請重啟伺服器
 
A Custom Browser New Tab Used JS, CSS and HTML
