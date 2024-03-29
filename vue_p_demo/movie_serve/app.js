//引入第三方模块
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const session =require("express-session");
const movieRouter=require('./routers/movie.js');
const userRouter=require('./routers/user.js');
const orderRouter=require('./routers/order.js');
const productRouter=require('./routers/product.js');

// 构建服务器，指定端口号
var app=express();
app.listen(3000);
//指定静态资源目录

app.use(express.static('public'));
// 初始化body-parser模块
app.use(bodyParser.urlencoded({
  extended:false
}));
//配置跨域
app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));
//配置session
app.use(session({
  secret:"128位字符串",
  resave:true,
  saveUninitialized:true
}));

// 挂载路由
app.use('/movie',movieRouter);
app.use('/user',userRouter);
app.use('/order',orderRouter);
app.use('/product',productRouter);