# shopping-list-app

간단한 쇼핑 리스트 웹 앱 (HTML/CSS/JS)

## 소개

브라우저의 `localStorage`를 이용해 쇼핑 아이템을 저장하는 정적 웹 앱입니다. 별도의 백엔드나 빌드 과정 없이 `index.html`을 열기만 하면 바로 사용할 수 있습니다.

## 주요 기능

- 아이템 추가: 입력창에 이름을 입력하고 "추가" 버튼(또는 Enter)으로 목록에 추가
- 아이템 완료 표시: 체크박스를 눌러 구매 완료 항목에 취소선 표시
- 아이템 삭제: "삭제" 버튼으로 목록에서 항목 제거
- 데이터 저장: 추가/체크/삭제한 목록은 `localStorage`에 저장되어 새로고침해도 유지됨

## 파일 구성

- `index.html` — 앱의 마크업 구조
- `style.css` — 레이아웃 및 스타일
- `script.js` — 아이템 추가/토글/삭제 로직과 `localStorage` 연동

## 실행 방법

저장소를 클론한 뒤 `index.html` 파일을 브라우저로 열면 바로 실행됩니다.

```bash
git clone https://github.com/jklee7457-coder/shopping-list-app.git
cd shopping-list-app
```

이후 `index.html`을 더블클릭하거나 브라우저로 드래그하여 엽니다.
