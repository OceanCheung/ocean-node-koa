const mysql = require('promise-mysql');
const Promise = require("bluebird");
const {databaseConfig} = require('./config');
const ReturnObj = require('./return-obj');
const {codeConfig} = require('./config');

/**线程池 */
const pool = mysql.createPool({
    host: databaseConfig.host,
    user: databaseConfig.user,
    password: databaseConfig.password,
    database: databaseConfig.database
});

/**获取连接并自动释放 */
const getSqlConnection = () => {
    return pool.getConnection().disposer(function (connection) {
        pool.releaseConnection(connection);
    });
}

/**查询 */
const query = async (sql) => {
    return new Promise((resolve, reject) => {
        Promise.using(getSqlConnection(), function (connection) {
            connection.query(sql).then(function (rows) {
                resolve(rows);
            }).catch(function (error) {
                reject(new ReturnObj(codeConfig.fail, '查询失败'));
            });
        })
    });
}

/**事务（新增/更新/删除） */
const transaction = async (sqls) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        for (let i = 0, len = sqls.length; i < len; i++) {
            await conn.query(sqls[i]);
        }
        await conn.commit();
        return true;
    } catch (err) {
        await conn.rollback();
        return false;
    } finally {
        conn.release();
    }
}

/**导出查询和事务 */
module.exports = {
    query,
    pool,
    transaction
}