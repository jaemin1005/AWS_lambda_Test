import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send("/ 테스트 입니다");
})

