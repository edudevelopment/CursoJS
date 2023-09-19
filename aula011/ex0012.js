var agora = new Date()
var horas = agora.getHours()
if (horas < 12) {    
    console.log('Bom dia!')
} else if (horas <= 18){
    console.log('Boa Tarde!')
} else if (horas > 18) {
    console.log('Boa noite!')
} else {
    console.log('madrugando ne')
}