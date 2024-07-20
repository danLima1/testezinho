$(document).ready(function() {
    let mostrarOnlines = function() {
        fetch('https://superbots.com.br/online').then(response => response.json()).then(function(data) {
            $("#onlines").text(data.count);
        });
    };
    setInterval(mostrarOnlines, 50000);
    mostrarOnlines();
    $(".barspinner").hide();
});
