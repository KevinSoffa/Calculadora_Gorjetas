function formatMoney(valor) {
    valor = Math.ceil(valor * 100) / 100 // Corrigindo arredondamento de valor
    valor = valor.toFixed(2)
    return 'R$' + valor
}

function formatSplit(pessoa) {
    if (pessoa == 1) return pessoa + ' Amigo'
    return pessoa + ' Amigos'
}

function update() {
    let conta = Number(document.getElementById('yourBill').value)
    let porcentagem = document.getElementById('tipInput').value
    let dividir = document.getElementById('splitInput').value

    // Lógica do calculo
    let valorConta = conta * (porcentagem / 100)
    let valorTotal = conta + valorConta
    let valorPessoas = valorTotal / dividir

    //Passando valores para o HTML
    document.getElementById('tipPercent').innerHTML = porcentagem + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(valorConta) 
    document.getElementById('totalWithTip').innerHTML = formatMoney(valorTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(dividir)
    document.getElementById('billEach').innerHTML = valorTotal / dividir
    document.getElementById('billEach').innerHTML = formatMoney(valorPessoas)

}