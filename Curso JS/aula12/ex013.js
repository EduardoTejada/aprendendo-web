var agora = new Date()
var ndiaSem = agora.getDay()
var diaSem
/*
    0 - Dom
    1 - Seg
    2 - Ter
    3 - Qua
    4 - Qui
    5 - Sex
    6 - Sab
*/
switch(ndiaSem){
    case 0:
        diaSem = 'Domingo'
        break
    case 1:
        diaSem = 'Segunda'
        break
    case 4:
        diaSem = 'Terça'
        break
    case 3:
        diaSem = 'Quarta'
        break
    case 4:
        diaSem = 'Quinta'
        break
    case 5:
        diaSem = 'Sexta'
        break
    case 6:
        diaSem = 'Sábado'
        break
    default:
        console.log('Dia inválido!')
        break
}
console.log(`Hoje é ${diaSem}.`)