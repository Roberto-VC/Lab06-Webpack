"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hablar = void 0;

const hablar = () => {
  var btn = document.getElementById("hablar");
  btn.addEventListener("click", function () {
    window.open("hablar.html", "_self");
  });
};

exports.hablar = hablar;