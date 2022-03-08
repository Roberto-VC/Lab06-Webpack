"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.oeste = void 0;

const oeste = () => {
  var btn = document.getElementById("oeste");
  btn.addEventListener("click", function () {
    window.open("oeste.html", "_self");
  });
};

exports.oeste = oeste;