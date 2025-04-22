
function validateForm(form){
		var msg = "";
		 
		    if (form.getValue("nome") == ""){
		        msg+= "\n Nome, ";
		    }
		    if (form.getValue("email")  == ""){
		        msg+= "\n Email, ";
		    }
		 
		    if (form.getValue("linkedin")  == ""){
		        msg+= "\n LinkedIn, "
		    }
		    if (msg != ""){
		        msg = "Os seguintes campos são obrigatórios: " + msg;
		         throw msg;
		    }
		   
		}
