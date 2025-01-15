var horas = document.getElementById('horas');
var msg = document.getElementById('msg')

var date = new Date();
var horaSis = date.getHours();
horas.innerHTML =  `Agora são exatamente ${horaSis} horas.`


if (horaSis < 6){
    msg.innerHTML = 'Boa madrugada!';
}else if (horaSis < 12){
    msg.innerHTML = 'Bom dia!'
}else if (horaSis < 18){
    msg.innerHTML = 'Boa tarde!'
}else{
    msg.innerHTML = 'Boa noite!'
}