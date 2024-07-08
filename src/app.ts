import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send("/ 테스트 입니다");
})

app.get("/hello", (req, res) => {
  res.send("/hello 테스트 입니다");
})

// 로컬 개발 환경에서 서버 실행
// if (process.env.NODE_ENV !== 'lambda') {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }

// 앱 모듈을 외부로 내보내기
export default app;