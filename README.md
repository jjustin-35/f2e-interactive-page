## 作品說明
The F2E 第4屆活動網站設計，以黃、黑色為整體主題色，呈現出星光的設計風格；在互動式方面，則大量使用隨頁面滑動呈現動畫(如：滑動網站，介紹區塊自左側滑入等)，呈現更多互動性。
本專案參考 F2E 原本活動網站的區塊設計，將網站區分為八個區塊，每個區塊皆有不同的介紹，並伴隨著不同的互動式動畫。

## 系統說明
本專案使用 Create-React-App 的 cli 建構，可使用```npm install```，```npm start```運行本專案。

Node.js 版本為 v16.14.0。

## 資料夾說明
- public: 放置靜態資料。
- src: 放置 jsx 檔案。
    - components: 放置區塊元件。
    - layout: 放置 navbar 等重複使用之模板。
    - page: 放置首頁。
    - provider: 放置管理資料、傳遞給下層元件的 provider 。
    - style: 放置 SCSS 檔案。

## 使用技術
- React.js
- gsap
- SCSS
- Bootstrap 5
- React Bootstrap