let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    } else {
        return false
    }
     
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    } 
}

function adicionar () {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    
    num.value = ''
    num.focus()

}

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos] 
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p> o maior numero é ${maior} </p>`
        res.innerHTML += `<p>o menor numero é ${menor} </p>`
        res.innerHTML += `<p>a soma dos numeros ${soma} </p>`
        res.innerHTML += `<p>a media dos valores é ${media} </p>`
    }
}