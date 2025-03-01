(function () {
	// API: https://www.frankfurter.app/
	const texto = document.getElementById("texto");

	const url = "https://api.frankfurter.app/latest?amount=1&from=USD&to=BRL";
	fetch(url)
		.then((resposta) => resposta.json())
		.then((dados) => {
			console.log(dados);
			const valorDolar = dados.rates.BRL;
			texto.innerText = `E ai carinha que mora logo ali, passa R$ ${valorDolar.toFixed(
				2
			)}.`;
		});
})();
