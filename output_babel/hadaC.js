"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buscar = void 0;

const buscar = () => {
  var btn = document.getElementById("buscar");
  btn.addEventListener("click", function () {
    window.open("buscar.html", "_self");
  });
};

exports.buscar = buscar;