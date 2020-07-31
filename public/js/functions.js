$(function () {

    // JQuery Mask

    $("#dtNascimento").mask('00/00/0000');
    $("#rg").mask('00.000.000-0');
    $("#cpf").mask('000.000.000-00', { reverse: true });
    $("#cep").mask('00000-000');
    $("#telefone").mask('(00) 0000-0000')
    $("#celular").mask('(00) 0000-0000');


    /* Window Resizer */

    $(window).resize(function () {
        location.reload();
    });

});