function beforeTaskSave(colleagueId, nextSequenceId, userList) {
	    var attachments = hAPI.listAttachments();
	    var hasAttachment = false;
	  
	    for (var i = 0; i < attachments.size(); i++) {
	        var attachment = attachments.get(i);
	        if (attachment.getDocumentDescription() == "Proposta Comercial.pdf") {
	            hasAttachment = true;
	        }
	    }
	  
	    if (!hasAttachment) {
	        throw "Adicione um PDF, salvo como: Proposta Comercial!";
	    }
	}