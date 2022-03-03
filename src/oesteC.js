

export const hablar = () => {
    var btn = document.getElementById("hablar");
    btn.addEventListener("click", function() {
        window.open("hablar.html", "_self");
    });
}