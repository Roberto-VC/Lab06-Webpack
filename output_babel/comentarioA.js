"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cambio = void 0;

const cambio = () => {
  var btn = document.getElementById("indice");
  btn.addEventListener("click", function () {
    window.open("./index.html", "_self");
  });
};

exports.cambio = cambio;