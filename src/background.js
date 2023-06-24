// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' }, function (dataUrl) {
    console.log('background sendMessage', tab, dataUrl);
    chrome.tabs.sendMessage(tab.id, { action: 'captureVisibleTab', payload: dataUrl });
  });
});