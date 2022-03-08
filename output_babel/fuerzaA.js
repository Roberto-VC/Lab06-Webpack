"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cambio = void 0;

const cambio = () => {
  var btn = document.getElementById("buscar");
  btn.addEventListener("click", function () {
    window.open("buscar.html", "_self");
  });
};

exports.cambio = cambio;