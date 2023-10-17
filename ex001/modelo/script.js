function carregar() {
    var msg = document.getElementById('mensagem')
    var img = document.querySelector('img#image')
    var data = new Date()
    var hora = data.getHours()
    var hora = 12
    var rev = document.getElementById('rev')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        //BOM DIA
        img.src = 'estilos/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
        rev.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'estilos/fototarde.jpg'
        document.body.style.background = '#b9846f'
        rev.innerHTML = 'Boa Tarde!'
    } else {
        //BOA NOITE
        img.src ='estilos/fotonoite.jpg'
        document.body.style.background = '#515154'
        rev.innerHTML = 'Boa noite!'
    }
}