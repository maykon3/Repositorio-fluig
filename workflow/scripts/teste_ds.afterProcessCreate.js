function afterProcessCreate(processId){
	var indexes = hAPI.getChildrenIndexes("respoTable");
	log.info("###### indexes");
	log.info(indexes);

	 for (var i = 0; i < indexes.length; i++) {
		 var fieldValue = hAPI.getCardValue("txt_preco___" + indexes[i]);
		 log.info("##### fieldValue: txt_preco___" + fieldValue );
	 }
	
	 
}