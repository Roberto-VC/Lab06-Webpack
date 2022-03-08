"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alrededor = void 0;

const alrededor = () => {
  var btn = document.getElementById("alrededor");
  btn.addEventListener("click", function () {
    window.open("alrededor.html", "_self");
  });
};

exports.alrededor = alrededor;