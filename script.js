(function () {
    // API: https://www.frankfurter.app/
    const spanDolar = document.getElementById("dolar")

    const url = "https://api.frankfurter.app/latest?amount=1&from=USD&to=BRL";
    fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log(dados)
            const valorDolar = dados.rates.BRL;
            spanDolar.innerText = `R$ ${valorDolar.toFixed(2)}`;
        });
})();
