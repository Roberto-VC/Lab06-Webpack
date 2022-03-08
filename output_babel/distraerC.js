"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.izquierda = void 0;

const izquierda = () => {
  var btn = document.getElementById("left");
  btn.addEventListener("click", function () {
    window.open("izquierda.html", "_self");
  });
};

exports.izquierda = izquierda;