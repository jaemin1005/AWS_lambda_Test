import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';
import app from './app';

// AWS Lambda를 위한 서버리스 Express 서버 생성
const server = serverlessExpress({ app });

// Lambda 핸들러 함수
export const handler: Handler = (event, context, callback) => {
  return server(event, context, callback);
};