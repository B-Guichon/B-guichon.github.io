$(document).ready(function () {
    $("#btnInstrumento").click(function () {
        $("#modalInstrumento").fadeIn();
    });

    $(".fa-x").click(function () {
        $("#modalInstrumento").fadeOut();
    });

    $(window).click(function (event) {
        if (event.target.id === "modalInstrumento") {
            $("#modalInstrumento").fadeOut();
        }
    });


    $("#btnEstudia").click(function () {
        $("#modalEstudia").fadeIn();
    });

    $(".fa-x").click(function () {
        $("#modalEstudia").fadeOut();
    }); 

    $(window).click(function (event) {
        if (event.target.id === "modalEstudia") {
            $("#modalEstudia").fadeOut();
        }
    });


    $("#btnEnseña").click(function () {
        $("#modalEnseña").fadeIn();
    });

    $(".fa-x").click(function () {
        $("#modalEnseña").fadeOut();
    }); 

    $(window).click(function (event) {
        if (event.target.id === "modalEnseña") {
            $("#modalEnseña").fadeOut();
        }
    });


    $("#btnAtencion").click(function () {
        $("#modalAtencion").fadeIn();
    });

    $(".fa-x").click(function () {
        $("#modalAtencion").fadeOut();
    }); 

    $(window).click(function (event) {
        if (event.target.id === "modalAtencion") {
            $("#modalAtencion").fadeOut();
        }
    });
});

