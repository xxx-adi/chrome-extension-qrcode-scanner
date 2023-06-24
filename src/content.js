import QrScanner from 'qr-scanner';

chrome.runtime.onMessage.addListener(function (request) {
  const { action, payload } = request;
  console.log('content onMessage', request);
  if (action === 'captureVisibleTab' && payload) {
    const img = new Image();
    img.src = payload;
    QrScanner.scanImage(img, { returnDetailedScanResult: true })
      .then(result => console.log(result))
      .catch(error => console.log(error || 'No QR code found.'));
  }
});
