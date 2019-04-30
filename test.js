const Router = require('koa-router')

const {
    selectAllData, addData, deleteById, updateById
} = require('./service');

let test = new Router();

test.get('/listData',async(ctx)=>{
    const data = await selectAllData();
    console.log(data);
    ctx.body = data;
})

test.get('/addData',async(ctx)=>{
    const request = ctx.request;
    const query = request.query;
    const data = await addData(query);
    ctx.body = data;
})

test.get('/deleteDataById',async(ctx)=>{
    const request = ctx.request;
    const query = request.query;
    const data = await deleteById(query);
    ctx.body = data;
})

test.get('/updateDataById', async (ctx) => {
    const request = ctx.request;
    const query = request.query;
    const data = await updateById(query);
    ctx.body = data;
})


module.exports = test;