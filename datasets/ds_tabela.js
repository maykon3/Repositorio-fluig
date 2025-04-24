function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	var dataset = DatasetBuilder.newDataset();

	dataset.addColumn("Preco");
	dataset.addColumn("Produto");
	
	//Cria a constraint para buscar os formulários ativos
	var cst = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
	var constraints = new Array(cst);

	// Consulta dataset do formulário que tem o elemento Pai x Filho
	var datasetPrincipal = DatasetFactory.getDataset("DSexemplopaiefilho", null, constraints, null);

	for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
		var documentId = datasetPrincipal.getValue(i, "metadata#id");
		var documentVersion = datasetPrincipal.getValue(i, "metadata#version");

		//Cria as constraints para buscar os campos filhos, passando o tablename, número da formulário e versão
		var c1 = DatasetFactory.createConstraint("tablename", "respoTable", "respoTable", ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
		var constraintsFilhos = new Array(c1, c2, c3);

		//Busca o dataset
		var datasetFilhos = DatasetFactory.getDataset("DSexemplopaiefilho", null, constraintsFilhos, null);

		for (var j = 0; j < datasetFilhos.rowsCount; j++) {
			dataset.addRow(new Array(
				datasetFilhos.getValue(j, "txt_preco"),
				datasetFilhos.getValue(j, "txt_produto")
			));

		}}
	


	return dataset;

	
}
function onMobileSync(user) {

}