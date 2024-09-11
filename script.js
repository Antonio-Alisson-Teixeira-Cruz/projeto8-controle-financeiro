let options = 0
let aditionalMoney = 0
let reductionMoney = 0
let atualMoney = 0

let initialMoney = parseInt(prompt('Qual a quantia inicial de dinheiro na sua conta?'))

do {
    options = prompt(`Dineiro inicial: R$${initialMoney},00.
    Opções:
    1 - Adicione dinheiro da conta.
    2 - Remover dinheiro da conta.
    3 - Sair.
    (ex.:1)`)

    if (options == '1'){
        aditionalMoney = parseInt(prompt('Qual será quantia a ser adicionada?'))
        initialMoney += aditionalMoney
    }

    if (options == '2'){
        aditionalMoney = parseInt(prompt('Qual será quantia a ser adicionada?'))
        initialMoney -= aditionalMoney
    }
} while ( options != '3' )
