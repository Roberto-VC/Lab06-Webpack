"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.norte = void 0;

const norte = () => {
  var btn = document.getElementById("norte");
  btn.addEventListener("click", function () {
    window.open("norte.html", "_self");
  });
};

exports.norte = norte;