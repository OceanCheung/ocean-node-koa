const Router = require('koa-router')
const {listData,addData,deleteDataById,updateDataById} = require('../service/service');
const ReturnObj = require('../model/return-obj');
const {codeConfig} = require('../config/config');

const testRouter = new Router();

testRouter.get('/listData', async (ctx) => {
    const data = await listData();
    ctx.body = new ReturnObj(codeConfig.success,"查询成功",data);
})

testRouter.get('/addData', async (ctx) => {
    const request = ctx.request;
    const query = request.query;
    const data = await addData(query);
    if(data){
        ctx.body = new ReturnObj(codeConfig.success, "新增成功");
    }else{
        ctx.body = new ReturnObj(codeConfig.success, "新增失败");
    }
});

testRouter.get('/deleteDataById', async (ctx) => {
    const request = ctx.request;
    const query = request.query;
    const data = await deleteDataById(query);
    ctx.body = data;
});

testRouter.get('/updateDataById', async (ctx) => {
    const request = ctx.request;
    const query = request.query;
    const data = await updateDataById(query);
    ctx.body = data;
});

testRouter.get('/login', async (ctx) => {
    ctx.session.userName = 'zhangsan';
    ctx.body = {};
});

testRouter.get('/loginOut', async (ctx) => {
    console.log(ctx.session.userName)
    ctx.body = ctx.session.userName;
});


/**水印照片 */
const {waterMask} = require('../util/water-mask');
testRouter.get('/image',async(ctx)=>{
       waterMask();
       ctx.body = {"code":1};
})

testRouter.get('/testError',async(ctx)=>{
   const obj = Object.assign({},{a:1,b:2},{c:3});
   const obj2 = {...{a:1,b:2},...{c:3}}
   console.log(obj);
   console.log(obj2);
})


module.exports = testRouter;