"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nadar = void 0;

const nadar = () => {
  var btn = document.getElementById("nadar");
  btn.addEventListener("click", function () {
    window.open("nadar.html", "_self");
  });
};

exports.nadar = nadar;