"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derecha = void 0;

const derecha = () => {
  var btn = document.getElementById("right");
  btn.addEventListener("click", function () {
    window.open("derecha.html", "_self");
  });
};

exports.derecha = derecha;