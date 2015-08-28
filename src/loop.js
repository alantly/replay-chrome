var video_id = ".video-stream.html5-main-video";
var loop_btn_id = "ytp-loop-checkbox";
var ytp_menu_popup_id = ".ytp-menu#ytp-main-menu-id";
var ytp_menu_btn_id = ".ytp-button.ytp-settings-button";

var video = $(video_id);
var video_obj = video[0];

function apply_loop_to_video(loop_status) {
  video.attr("loop",loop_status);
};

function add_loop_btn_to_menu() {
  var video_menu = $(ytp_menu_popup_id);
  video_menu.append(create_loop_btn(loop_btn_id));
};

function create_loop_btn(new_btn_id) {
  var loop_menu_item = $("<div id=\"ytp-menuitem-loop\" class=\"ytp-menuitem\" role=\"menuitemcheckbox\" tabindex=\"38\" aria-checked=\"false\"> \
                            <div class=\"ytp-menuitem-label\">Loop</div> \
                            <div class=\"ytp-menuitem-content\"> \
                              <div id=\"" + new_btn_id + "\" class=\"ytp-menuitem-toggle-checkbox\"> \
                              </div> \
                            </div> \
                          </div>");

  var loop_check_box = loop_menu_item.find(add_hash(new_btn_id)).get(0);

  loop_check_box.onclick = function() {
    var checkbox_status_attr = "aria-checked";
    var new_reversed_attr = !get_bool_attr(loop_menu_item, checkbox_status_attr);
    loop_menu_item.attr(checkbox_status_attr, new_reversed_attr);
    apply_loop_to_video(new_reversed_attr);
    video_obj.play();
  };

  return loop_menu_item;
};

video_obj.onloadstart = function() {
  video.removeAttr("loop");
};

var setting_btn = $(ytp_menu_btn_id).get(0);
setting_btn.onmouseenter = function() {
  if (!item_exists(loop_btn_id)) {
    add_loop_btn_to_menu();
  }
};

