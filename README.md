## (Group 9) 寫歌小幫手
B05703100 資管四 郭仲嘉

## Demo 影片連結

https://youtu.be/qE7vtyHC7jI

## 服務內容

一款幫助寫歌的app

## Deployed 連結：

https://banded-earth-318118.de.r.appspot.com/

## 操作方式：

1. 輸入使用者名稱
2. 選擇想要的key
3. 選擇和弦
4. 播放！

## 使用框架/模組/原始碼/第三方套件

Frontend: React, Axios, Tonal.js, Howler.js
Backend: Express
Database: MongoDB

## Localhost安裝方式
1. Clone完專案後，在backend/.env.defaults填入MongoDB的URL並儲存檔案

```
MONGO_URL={MongoDB URL}
```

2. 分別到frontend和backend安裝node_modules (下面指令第三行是兩個點，不知為何顯示三個...)

```bash
cd frontend
yarn
cd ../backend
yarn
```

3. 執行後端

```bash
yarn server
```

4. 開另一個terminal，執行前端

```bash
yarn start
```

## 功能說明

1. 
    輸入使用者名稱並按下Send，若資料庫中沒有此使用者，會跳轉到設定key的頁面。若資料庫中已經有此使用者，則會載入該使用者事先儲存的譜面。

2. 
    在設定頁面中選擇key和octave，按下start後進入譜面，右上方會顯示使用者名稱、選擇的key和octave，並根據key顯示預設的譜面。
    
3. 在譜面頁中，可以直接點選key和octave的值修改。修改key時，譜面會自動轉成該調的和弦。

4. 點選各個和弦可以修改，選項只有設定key的順階和弦。

5. 按下Save會儲存目前的譜面。如果是新使用者，會在資料庫新增一筆新的資料，並alert "Data added!"；如果是舊有的使用者，會更新資料庫的資料，並alert "Data saved!"。

6. 按下Play後會將目前的譜面依序播放，不會播放空值。按下Play之後在音樂播完前無法再次按Play。

7. 按下Clear會清空目前的譜面。

8. 按下No Idea會把譜面改成卡農和弦。

9. 按下Change User會跳回輸入使用者的頁面。

## 每位組員之負責項目

郭仲嘉：全部


## 專題製作心得

這個app來自創作會遇到的困難與不便，希望能有一個工具來降低新手寫歌的門檻，這次專題讓我有機會實現這個構想。過程中我實作了架構與流程設計、UI設計、前後端溝通、資料庫溝通、服務部署等流程，也更瞭解了網頁排版、React邏輯、JS語法、Web的各種知識。相信這門課的結束是另一個開始，期待未來能使用更多技術、不同的平台，開發方便的網路服務。