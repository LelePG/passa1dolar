(function () {
    // API: https://exchangerate.host/#/docs
    const spanDolar = document.getElementById("dolar");

    const url = "https://api.exchangerate.host/latest?base=USD&amount=1&symbols=BRL";
    fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
            const valorDolar = dados.rates.BRL;
            spanDolar.innerText = `R$ ${valorDolar.toFixed(2)}`;
        });
})();
