// import { BrowserQRCodeReader } from '@zxing/browser';

console.log('content.js')
chrome.runtime.onMessage.addListener(function (request) {
  const { action, payload } = request;
  console.log('content onMessage', request);
  if (action === 'captureVisibleTab' && payload) {
    var link = document.createElement('a');
    console.log(payload);
    link.href = payload;
    link.download = 'screenshot.png';
    // link.click();

    // const codeReader = new BrowserQRCodeReader()
    // console.log('ZXing code reader initialized')

    // codeReader.decodeFromImage(payload).then((result) => {
    //   console.log(result)
    // }).catch((err) => {
    //   console.error(err)
    // })

    // // 传递图像数据进行二维码解析
    // ZXing.decode(dataUrl)
    //   .then(function (result) {
    //     // 解析结果
    //     console.log('二维码内容:', result.text);
    //   })
    //   .catch(function (error) {
    //     // 解析失败
    //     console.error('解析二维码失败:', error);
    //   });

    // // 获取图像中的二维码位置和边界框信息
    // ZXing.scan(dataUrl)
    //   .then(function (result) {
    //     // 二维码在图像上的位置和边界框
    //     console.log('二维码位置:', result.location);
    //     console.log('二维码边界框:', result.boundingBox);
    //   })
    //   .catch(function (error) {
    //     // 扫描失败
    //     console.error('扫描二维码失败:', error);
    //   });
  }
});
