import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send("/ 테스트 입니다");
})

app.get("/hello", (req, res) => {
  res.send("/hello 테스트 입니다");
})

// 앱 모듈을 외부로 내보내기
export default app;