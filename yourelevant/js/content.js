/*

On the youtube page:
    Get <link rel="canonical"> value. This is the youtube link of the current video
    Send this link to Youtube's api to get uploader info

*/

var getVideoXml = function(data){
    var xmlData = data;
    console.log(xmlData);
    
    //xmlData = (new XMLSerializer()).serializeToString(xmlData);
    
    youtubeJson = $.xml2json(xmlData);
    
    chrome.extension.sendRequest(youtubeJson, function(response) {});
};

var videoId = $("meta[itemprop|='videoId']")[0].content;
var youtubeApiURL = 'https://gdata.youtube.com/feeds/api/videos/videoid?v=2';
videoRequestURL = youtubeApiURL.replace('videoid', videoId);

console.log(videoRequestURL);

$.ajax({ 
   type: "GET",
   dataType: "xml",
   url: videoRequestURL,
   success: function(data){
       getVideoXml(data);
   }
});
