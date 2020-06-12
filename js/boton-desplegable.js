$('#abrir-noticias').on('click', function () {
    
    $("#oculto-noticias").css("height", "auto");
    $("#abrir-noticias").css("display", "none");
    $("#cerrar-noticias").css("display", "block");
    
  });
$('#cerrar-noticias').on('click', function () {
    
    $("#oculto-noticias").css("height", "0px");
    $("#oculto-noticias").css("overflow", "hidden");
    $("#abrir-noticias").css("display", "block");
    $("#cerrar-noticias").css("display", "none");
    
});


$('#abrir-conciertos').on('click', function () {
    
    $("#oculto-conciertos").css("height", "auto");
    $("#abrir-conciertos").css("display", "none");
    $("#cerrar-conciertos").css("display", "block");
    
  });
$('#cerrar-conciertos').on('click', function () {
    
    $("#oculto-conciertos").css("height", "0px");
    $("#oculto-conciertos").css("overflow", "hidden");
    $("#abrir-conciertos").css("display", "block");
    $("#cerrar-conciertos").css("display", "none");
    
});


$('#abrir-discos').on('click', function () {
    
    $("#oculto-discos").css("height", "auto");
    $("#abrir-discos").css("display", "none");
    $("#cerrar-discos").css("display", "block");
    
  });
$('#cerrar-discos').on('click', function () {
    
    $("#oculto-discos").css("height", "0px");
    $("#oculto-discos").css("overflow", "hidden");
    $("#abrir-discos").css("display", "block");
    $("#cerrar-discos").css("display", "none");
    
});


$('#abrir-galeria').on('click', function () {
    
    $(".oculto-galeria").removeClass("oculto-galeria").addClass("oculto-galeria-fake");
    $(".hibrido").removeClass("quitar");
    $("#abrir-galeria").css("display", "none");
    $("#cerrar-galeria").css("display", "block");
    
  });
$('#cerrar-galeria').on('click', function () {
    
    $(".oculto-galeria-fake").removeClass("oculto-galeria-fake").addClass("oculto-galeria");
    $(".hibrido").addClass("quitar");
    $("#abrir-galeria").css("display", "block");
    $("#cerrar-galeria").css("display", "none");
    
});