function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inpano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados informados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'crianca-mas.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-mas.png')                
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-mas.png') 
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-mas.png') 
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'crianca-fem.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-fem.png') 
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-fem.png') 
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-fem.png') 
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}