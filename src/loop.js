var video = $(".html5-main-video").get(0);

video.onloadstart = function() {
  var src = this.src
  var pattern = /youtube/
  if (pattern.test(src)) {
    video.loop = true;
  }
}