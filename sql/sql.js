const _insertMyTable = (params)=>{
    return `INSERT INTO my_table(id,NAME) VALUES('${uuid}','${params.name}')`;
}
const _insertMyTest = (params) => {
   return `INSERT INTO my_test(id,NAME) VALUES('2','${params.name}')`;
}
const _deleteDataById = (params) => {
    return `DELETE FROM my_table WHERE id = '${params.id}'`;
}
const _listData = () =>{
    return `SELECT * FROM my_table`;
}
const _updateDataById = (params) =>{
    return `UPDATE my_table set name = '${params.name}' WHERE id = '${params.id}'`;
}


module.exports = {
    _insertMyTable, _insertMyTest, _deleteDataById, _listData, _updateDataById
}