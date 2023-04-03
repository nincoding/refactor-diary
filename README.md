# refactor-diary

## 설치한 명령어

```js
// create-react-app으로 프로젝트 생성
npx create-react-app diary

// 스타일드 컴포넌트 설치하기
npm i styled-components

// 기본 css의 스타일링을 리셋시켜주는 라이브러리
npm i styled-reset

// 2023년 3월 9일 기준으로 React-Router 공식 홈페이지의 UI가 변경
// 아래 명령어로 react-router 라이브러리 설치함
npm i react-router-dom@6

// 리덕스 설치
//npm i redux
//npm i react-redux
```

### 프로젝트 진행순서

1. 글로벌 스타일 추가

- 구글폰트 추가 (GlobalStyle 스타일 컴포넌트)

```html
<link
  href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&family=Yeon+Sung&display=swap"
  rel="stylesheet"
/>
```

2. contexts 추가

- DiaryStateContext, DiaryDispatchContext 각각 state와 dispatch를 관리할 컨텍스트 생성
- value에 각각 data와 on함수 전달

3. 상태관리 함수 추가

- actions.js, reducer.js 생성
- 리덕스 대신 React Context API와 useReducer 훅을 활용할 수 있습니다.
  (이 방법은 Redux보다 더 가볍고 간단한 구현이 가능)

4. firebase 배포

배포 URL : https://nincoding-react-solo-project.web.app/
