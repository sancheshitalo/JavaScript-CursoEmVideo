function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são  ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha_250x250.png' 
        document.body.style.background = '#bde5fe'
        document.body.style.color = '#000000'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde_250x250.png'
        document.body.style.background = '#ff7e03'
    } else {
        //BOA NOITE!
        img.src = 'noite_250x250.png'
        document.body.style.background = '#141721'
    }
}
