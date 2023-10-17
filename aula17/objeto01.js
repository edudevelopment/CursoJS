let amigo = {nome:'Edu',
 sexo: 'm', 
 peso:85.4, 
 engordar(p){
    console.log('engordou')
    this.peso += p
 }
}
amigo.engordar(70)
console.log(`${amigo.nome} engordou ${amigo.peso} quilos`)