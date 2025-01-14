var idade = 16

if(idade < 16){
    console.log('não vota')
}else if(idade < 18 || idade > 65){
    console.log('voto opcional')
}else{
    console.log('voto obrigatório')
}

var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são examente ${hora} horas.`)

if(hora < 12 && hora > 6){
    console.log('Bom dia')
}else if (hora < 18){
    console.log('Boa tarde')
}else if (hora < 23){
    console.log('Boa noite')
}else{
    console.log('Boa madrugada')
}