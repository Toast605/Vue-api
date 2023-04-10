const config = require('./config')[process.env.NODE_ENV]; 
const express = require('express');
const http = require('http');

const app = express();
const port = config.PORT;

// cors 추가
const cors = require('cors');
//옵션 설정
let corsOptions = {
	origin: '*', // 출처 허용 옵션
	credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};
app.use(cors(corsOptions));

// 이부분 주석 또는 지움
//const router = express.Router();
//router.get('/',(req,res)=>{
//    res.json({
//        status : 200,
//        data: 'success',
//    })
//})
//app.use('/api',router);

//주석처리 또는 삭제
//const todoRouter = require('./api/todo')
//app.use('/api',todoRouter);

//autoRouter
const autoRoute = require('./autoRoute');
autoRoute('/api',app);

const webServer = http.createServer(app);
webServer.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
