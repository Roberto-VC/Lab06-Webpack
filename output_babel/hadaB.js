"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fuerza = void 0;

const fuerza = () => {
  var btn = document.getElementById("fuerza");
  btn.addEventListener("click", function () {
    window.open("fuerza.html", "_self");
  });
};

exports.fuerza = fuerza;