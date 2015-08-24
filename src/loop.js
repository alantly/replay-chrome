var video = $(".video-stream.html5-main-video").get(0);

video.onloadeddata = function() {
  debugger;
  var src = this.src
  var pattern = /youtube/
  if (pattern.test(src)) {
    video.loop = true;
  }
}