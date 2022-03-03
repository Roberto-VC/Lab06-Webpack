

export const atacar = () => {
    var btn = document.getElementById("atacar");
    btn.addEventListener("click", function() {
        window.open("atacar.html", "_self");
    });
}