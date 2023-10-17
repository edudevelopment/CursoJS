let num = [2,6,3]
num[3] = 5
num.push(4)
num.sort()
console.log(num)
console.log(`Primeiro vetor é ${num[0]}`)

let pos = num.indexOf(2) // valor procurado
if (pos == -1) {
    console.log('valor nao encontrado!')
} else {
    console.log(`o valor esta na posicao ${pos}`)
}
