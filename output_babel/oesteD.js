"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.celda = void 0;

const celda = () => {
  var btn = document.getElementById("volver");
  btn.addEventListener("click", function () {
    window.open("celda.html", "_self");
  });
};

exports.celda = celda;