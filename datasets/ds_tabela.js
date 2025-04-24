function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	 var dataset = DatasetBuilder.newDataset();
	 
	 dataset.addColumn("Preco");
	 dataset.addColumn("Produto");
	    
	 dataset.addRow(new Array("", ""));
	    
	 return dataset;

}function onMobileSync(user) {

}