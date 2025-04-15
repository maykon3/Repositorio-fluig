function validateForm(form){
var msg = "";

    if (form.getValue("nome") == ""){
        msg+= i18n.translate("nome") + ", ";
    }

    if (form.getValue("email")  == ""){
        msg+= i18n.translate("email")+ ", ";
    }

    if (form.getValue("telefone")  == ""){
        msg+= i18n.translate("telofone")+ ", ";
    }
    if (form.getValue("cep")  == ""){
        msg+= i18n.translate("CEP")+ ", ";
    }
    if (msg != ""){
        msg = i18n.translate("campos")  + msg;
         throw msg;
    }
    
}