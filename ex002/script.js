function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebehomem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemhomem.jpg')
            } else if (idade < 50) {
                //Adult
                img.setAttribute('src', 'imagens/adultohomem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosohomem.jpg')
            }

            
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebemulher.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovemmulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adultomulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosomulher.jpg')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img)
    }
}