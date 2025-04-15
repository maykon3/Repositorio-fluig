    $("#cep").blur(function() {
        var cep = $(this).val().replace(/\D/g, '');
 
        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    $("#logradouro").val(dados.logradouro);
                    $("#bairro").val(dados.bairro);
                    $("#cidade").val(dados.localidade);
                    $("#estado").val(dados.uf);
            })
    });
