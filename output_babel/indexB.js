"not strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.com = void 0;

const com = () => {
  var btn = document.getElementById("comentario");
  btn.addEventListener("click", function () {
    window.open("comentario.html", "_self");
  });
};

exports.com = com;