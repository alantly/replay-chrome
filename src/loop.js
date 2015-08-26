var video = $(".video-stream.html5-main-video");

function apply_loop_to_video(loop_status) {
  video.attr("loop",loop_status);
};

var video_menu = $(".ytp-menu#ytp-main-menu-id");
var loop_menu_item = $("<div id=\"ytp-menuitem-loop\" class=\"ytp-menuitem\" role=\"menuitemcheckbox\" tabindex=\"38\" aria-checked=\"false\"> \
                      <div class=\"ytp-menuitem-label\">Loop</div> \
                      <div class=\"ytp-menuitem-content\"> \
                        <div id=\"ytp-loop-checkbox\" class=\"ytp-menuitem-toggle-checkbox\"> \
                        </div> \
                      </div> \
                    </div>");

video_menu.append(loop_menu_item);
var loop_check_box = $("#ytp-loop-checkbox").get(0);
loop_check_box.onclick = function() {
  var checkbox_status_attr = "aria-checked";
  var new_attr = !(loop_menu_item.attr(checkbox_status_attr) === 'true');
  loop_menu_item.attr(checkbox_status_attr, new_attr);
  apply_loop_to_video(new_attr);
};
