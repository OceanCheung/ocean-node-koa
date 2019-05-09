/**依赖包：npm install images */
const images = require('images');
const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');
const waterMask = () =>{
     const watermarkImg = images(fs.readFileSync(path.resolve(__dirname, '..') + '/assets/logo.png'));
     const sourceImg = images(fs.readFileSync(path.resolve(__dirname, '..') + '/assets/source.png'));
     // 比如放置在右下角，先获取原图的尺寸和水印图片尺寸
     const sWidth = sourceImg.width();
     const sHeight = sourceImg.height();
     const wmWidth = watermarkImg.width();
     const wmHeight = watermarkImg.height();
     const uuid = uuidv1();
     images(sourceImg)
         // 设置绘制的坐标位置，右下角距离 40px
         .draw(watermarkImg, sWidth - wmWidth - 10, sHeight - wmHeight - 5)
         // 保存格式会自动识别
         .save(path.resolve(__dirname, '..') + `/assets/${uuid}.png`);
}

module.exports = {
    waterMask
}
