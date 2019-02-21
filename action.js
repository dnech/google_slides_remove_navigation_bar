alert('Google Slides: embed script to remove navigation bar');

setInterval(function() {
  var iframes = document.querySelectorAll('iframe.punch-present-iframe');
  if (iframes.length > 0) {
    var elements = iframes[0].contentDocument.querySelectorAll('div.punch-viewer-nav-v2');
    for (var i = 0; i < elements.length; i++) {
      console.log('Remove navigation bar');
      elements[i].remove();
    }
  }
}, 1000);
