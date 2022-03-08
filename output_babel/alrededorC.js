"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignorar = void 0;

const ignorar = () => {
  var btn = document.getElementById("ignorar");
  btn.addEventListener("click", function () {
    window.open("ignorar.html", "_self");
  });
};

exports.ignorar = ignorar;