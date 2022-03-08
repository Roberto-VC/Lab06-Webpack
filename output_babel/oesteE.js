"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.atacar = void 0;

const atacar = () => {
  var btn = document.getElementById("atacar");
  btn.addEventListener("click", function () {
    window.open("atacar.html", "_self");
  });
};

exports.atacar = atacar;