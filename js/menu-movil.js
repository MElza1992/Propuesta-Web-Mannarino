$('#abrir-menu').on('click', function () {

    $("#peque").css("height", "120px");
    $("#peque").css("width", "100%");
    $("#abrir-menu").css("display", "none");
    $("#cerrar-menu").css("display", "block");

});

$('#cerrar-menu').on('click', function () {

    $("#peque").css("height", "6px");
    $("#peque").css("width", "27%");
    $("#abrir-menu").css("display", "block");
    $("#cerrar-menu").css("display", "none");
    
});
