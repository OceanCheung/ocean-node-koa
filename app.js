const Koa = require('koa');
const session = require('koa-session');
const Router = require('koa-router');
const onerror = require('koa-onerror');

const {sessionConfig,baseConfig} = require('./config/config');

const app = new Koa();

//使用session
app.keys = ['secret'];
app.use(session(sessionConfig, app));

const testRouter = require('./router/router');

// 装载所有子路由
const router = new Router()
router.use('/test', testRouter.routes(), testRouter.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());


app.listen(baseConfig.port, () => {
    console.log('服务器启动成功');
});

//全局捕捉异常
onerror(app);
