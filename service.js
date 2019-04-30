const {query} = require('./async-db');
const {parseData} = require('./utils');
const uuidv1 = require('uuid/v1');


async function listData() {
    let sql = 'SELECT * FROM my_table'
    let dataList = await query(sql);
    return parseData(dataList);
}

async function addData(params){
    const uuid = uuidv1();
    let sql = `INSERT INTO my_table(id,NAME) VALUES('${uuid}','${params.name}')`;
    let data = await query(sql);
    return data;
}

async function deleteDataById(params) {
    let sql = `DELETE FROM my_table WHERE id = '${params.id}'`;
    let data = await query(sql);
    return data;
}

async function updateDataById(params) {
    let sql = `UPDATE my_table set name = '${params.name}' WHERE id = '${params.id}'`;
    let data = await query(sql);
    return data;
}



module.exports = {
    listData,
    addData,
    deleteDataById,
    updateDataById
}
