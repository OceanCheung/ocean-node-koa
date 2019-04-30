/**过滤返回值 */
const parseData = (data) => {
    return JSON.parse(JSON.stringify(data));
}

module.exports = {parseData}