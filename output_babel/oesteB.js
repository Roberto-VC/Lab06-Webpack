"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distraer = void 0;

const distraer = () => {
  var btn = document.getElementById("distraer");
  btn.addEventListener("click", function () {
    window.open("distraer.html", "_self");
  });
};

exports.distraer = distraer;