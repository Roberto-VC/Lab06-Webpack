"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.este = void 0;

const este = () => {
  var btn = document.getElementById("este");
  btn.addEventListener("click", function () {
    window.open("este.html", "_self");
  });
};

exports.este = este;