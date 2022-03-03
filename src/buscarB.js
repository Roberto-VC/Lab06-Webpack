
export const cambio = () => {
    var btn = document.getElementById("abrir");
    btn.addEventListener("click", function() {
        window.open("abierto.html", "_self");
    });
}