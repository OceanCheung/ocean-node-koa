/**基础配置 */
const baseConfig = {
    port:3000
}

/**数据库配置 */
const databaseConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'my_database'
}

/**session配置 */
const sessionConfig = {
    key: 'koa:sess', // cookie key (默认koa：sess)
    maxAge: 86400000, // cookie的过期时间,毫秒，默认为1天
    overwrite: true, // 是否覆盖    (默认default true)
    httpOnly: false, // cookie是否只有服务器端可以访问,默认为true
    signed: true, // 签名默认true
    rolling: false, // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false, // (boolean) 会话即将到期时,续订会话
};

/**code配置 */
const codeConfig = {
    success:1,
    fail:0
}


module.exports = {
    baseConfig,
    databaseConfig,
    sessionConfig,
    codeConfig
};
