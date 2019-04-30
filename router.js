const Router = require('koa-router')

const {listData,addData,deleteDataById,updateDataById} = require('./service');
const ReturnObj = require('./return-obj');
const {codeConfig} = require('./config');

const testRouter = new Router();

testRouter.get('/listData', async (ctx) => {
    const data = await listData();
    ctx.body = new ReturnObj(codeConfig.success,"查询成功",data);
})

testRouter.get('/addData', async (ctx) => {
    const request = ctx.request;
    const query = request.query;
    const data = await addData(query);
    ctx.body = data;
})

testRouter.get('/deleteDataById', async (ctx) => {
    const request = ctx.request;
    const query = request.query;
    const data = await deleteDataById(query);
    ctx.body = data;
})

testRouter.get('/updateDataById', async (ctx) => {
    const request = ctx.request;
    const query = request.query;
    const data = await updateDataById(query);
    ctx.body = data;
})

testRouter.get('/login', async (ctx) => {
    ctx.session.userName = 'zhangsan';
    ctx.body = {};
})

testRouter.get('/loginOut', async (ctx) => {
    console.log(ctx.session.userName)
    ctx.body = ctx.session.userName;
})


module.exports = testRouter;