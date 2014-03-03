function onRequest(request, sender, sendResponse) {
  chrome.pageAction.show(sender.tab.id);    
  console.log(request.author.uri);
    
  // Return nothing to let the connection be cleaned up.
  sendResponse({});
};

chrome.extension.onRequest.addListener(onRequest);
