function item_exists(item_tag) {
  return $(add_hash(item_tag)).length > 0;
};

function add_hash(tag) {
  return "#"+tag;
};

function get_bool_attr(object,attr_name) {
  return object.attr(attr_name) === "true"
}