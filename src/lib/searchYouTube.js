var searchYouTube = (options, callback) => {
  // TODO
// console.log("Options: ", options);
  var APIURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&q=${options.query}&maxResults=${options.max}`;

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: APIURL,
    type: 'GET',
    // data: null,
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    }
  });
};

window.searchYouTube = searchYouTube;
