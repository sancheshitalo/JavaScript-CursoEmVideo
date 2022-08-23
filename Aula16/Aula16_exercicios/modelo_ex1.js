let num = document.querySelector('#id-num')
let lista = document.querySelector('#id-sel-addnum')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {

}

function adicionar() {    
    if(isNumero(num.value) && !inLista(num.value, valores)) {
    } else {
        alert('Valor inválido ou já inserido anteriormente!')
    }
}

//let botaoadd = document.querySelector('#id-botao-addnum')