function contar() {
    var inicio      = document.getElementById('id-inicio')
    var fim         = document.getElementById('id-fim')
    var passo       = document.getElementById('id-passo')
    var res         = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('Erro! Verifique os dados inseridos.')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Contando a partir de "1", o resultado é:')
            p = 1 
        }
        if (i < f) {
            // Contagem Crescente
            for (var s = i; s <= f; s += p) {
                res.innerHTML += ` ${s} \u{1F449}`
             //No JS, a formatação pra "Unicode" que é o jeito de colocar emoji é dessa forma.
            }
        } else {
            // Contagem Regressiva
            for(var s = i; s >= f; s -= p) {
                res.innerHTML += ` ${s} \u{1F449}`
            }
        }
                res.innerHTML += `\u{1F3C1}`
    }
} 

