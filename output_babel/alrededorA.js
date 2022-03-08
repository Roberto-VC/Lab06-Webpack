"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ahogar = void 0;

const ahogar = () => {
  var btn = document.getElementById("agua");
  btn.addEventListener("click", function () {
    window.open("ahogar.html", "_self");
  });
};

exports.ahogar = ahogar;