export const cambio = () => {
    var btn = document.getElementById("inicio");
    btn.addEventListener("click", function() {
        window.open("index.html", "_self");
    });
}