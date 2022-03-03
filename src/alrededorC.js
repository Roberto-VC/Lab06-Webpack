
export const ignorar = () => {
    var btn = document.getElementById("ignorar");
    btn.addEventListener("click", function() {
        window.open("ignorar.html", "_self");
    });
}