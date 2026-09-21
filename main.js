function startEagler() {
    var canvas = document.getElementById("gameCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    EaglercraftXOpts = {
        "assetsURI": "assets/",
        "serverAddress": "wss://SteelBros.gaming.repl.co", // CHANGE THIS
        "locale": "en_US"
    };

    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    EaglercraftX(canvas, EaglercraftXOpts);
}
