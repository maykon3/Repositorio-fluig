function displayFields(form,customHTML){
    function displayFields(form, customHTML) {
        try {
            // Verifica se é um registro existente (visualização) ou novo (preenchimento)
            var modoVisualizacao = form.getFormMode() == 'VIEW';
           
            if (modoVisualizacao) {
                var usuario = getValue("WKUser");
                var nome = form.getValue("nome") || "";
                var email = form.getValue("email") || "";
                var perfil = form.getValue("perfil") || "";
                var linkedin = form.getValue("linkedin") || "";
                var telefone = form.getValue("telefone") || "Não informado";
     
                var interacao =
                    '<div class="panel panel-success">' +
                    '  <div class="panel-heading">' +
                    '    <h3 class="panel-title">Candidato: ' + nome + '</h3>' +
                    '  </div>' +
                    '  <div class="panel-body">' +
                    '    <p><strong>Perfil:</strong> ' + perfil + '</p>' +
                    '    <p><strong>LinkedIn:</strong> ' + linkedin + '</p>' +
                    '    <p><strong>Email:</strong> ' + email + '</p>' +
                    '    <p><strong>Telefone:</strong> ' + telefone + '</p>' +
                    '  </div>' +
                    '</div>';
     
                customHTML.append('<script>' +
                    '$(document).ready(function() {' +
                    '   $("#mensagemInteracao").html(\'' + interacao.replace(/'/g, "\\'") + '\');' +
                    '   $("#formPrincipal").hide();' +
                    '   $("#mensagemInteracao").show();' +
                    '});</script>');
            } else {
                // Modo de edição/criação - mostra o formulário
                customHTML.append('<script>' +
                    '$(document).ready(function() {' +
                    '   $("#formPrincipal").show();' +
                    '   $("#mensagemInteracao").hide();' +
                    '});</script>');
            }
        } catch(e) {
            console.error("Erro em displayFields:", e);
        }
    }
 }