const {query,pool,transaction} = require('../config/async-db');
const {parseData} = require('../util/utils');
const uuidv1 = require('uuid/v1');
const {_insertMyTable,_insertMyTest,_deleteDataById,_listData,_updateDataById} = require('../sql/sql');

const listData = async () => {
    let dataList = await query(_listData());
    return parseData(dataList);
}

const addData = async params => {
    const uuid = uuidv1();
    const sqls = [_insertMyTable(params,uuid), _insertMyTest(params,uuid)];
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
    updateDataById,
}
