function sendMessageToTabs(tabs) {
  for (const tab of tabs) {
    browser.tabs.sendMessage(tab.id, { greeting: tab.id }).then((response) => {}).catch(onError);
  }
}


function onError(error) {
  console.error(`Error: ${error}`);
}


browser.tabs.onDetached.addListener((request, sender) => {
  console.log("onDetached: ", request, sender);
    if (sender.oldPosition === 0 && sender.oldWindowId === -1) {
        browser.tabs.query({url: "*://*.youtube.com/*"}).then(sendMessageToTabs, onError);
    }
})
