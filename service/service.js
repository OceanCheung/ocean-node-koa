const {query,pool,transaction} = require('../async-db');
const {parseData} = require('../utils/utils');
const uuidv1 = require('uuid/v1');
const {_insertMyTable,_insertMyTest,_deleteDataById,_listData,_updateDataById} = require('../sql');

const listData = async () => {
    let dataList = await query(_listData());
    return parseData(dataList);
}

const addData = async params => {
    const uuid = uuidv1();
    const sqls = [_insertMyTable(params), _insertMyTest(params)];
    const data =  await transaction(sqls);
    return data;
}

const deleteDataById = async params => {
    let data = await transaction([_deleteDataById(params)]);
    return data;
}

const updateDataById = async params => {
    let data = await transaction([_updateDataById(params)]);
    return data;
}


module.exports = {
    listData,
    addData,
    deleteDataById,
    updateDataById
}
