console.log("fuqlush")

var rights = document.querySelectorAll(".fa-angle-right");
var lefts = document.querySelectorAll(".fa-angle-left");
function rev(what, withWhat, elems) {
  [].forEach.call(elems, function(el) {
    el.className = el.className.replace(new RegExp(what,"i"), withWhat);
    console.log(el.className.replace(new RegExp(what,"i"), withWhat))
  });
}
rev("right", "left", rights);
rev("left", "right", lefts);

