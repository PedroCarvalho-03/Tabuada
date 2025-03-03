function tabuada() {
    const num = parseInt(document.getElementById("num").value);
    const resposta = document.getElementById('resposta');

    // Verifica se o número é válido
    if (isNaN(num)) {
        alert('Por favor, digite um número válido!');
        return;
    }

    let tabuada = '';

    // Gera a tabuada de 1 a 10
    for (let count = 1; count <= 10; count++) {
        tabuada += `${num} x ${count} = ${num * count}<br>`;
    }

    resposta.innerHTML = tabuada;
}