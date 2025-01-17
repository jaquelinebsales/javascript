function carregar(){
    var horas = document.getElementById('horas');
    var foto = document.getElementById('imagem')
    var date = new Date();
    var horaSis = date.getHours();
    horas.innerHTML =  `Agora são exatamente ${horaSis} horas.`



    var img = document.getElementById('img');

    if (horaSis < 6){
        horas.innerHTML += '<br>Boa madrugada!';
        foto.src = 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

        document.body.style.background = '#0f1d27';

    }else if (horaSis < 12){
        horas.innerHTML += '<br>Bom dia!'
        foto.src = 'https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = '#ffcb1f';
        
    }else if (horaSis < 18){
        horas.innerHTML += '<br>Boa tarde!'
        foto.src = 'https://images.pexels.com/photos/858241/pexels-photo-858241.jpeg?auto=compress&cs=tinysrgb&w=600'
        document.body.style.background = '#b8315e';
    }else{
        horas.innerHTML += '<br>Boa noite!'
        foto.src = 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = '#0f1d27';
    }

}


/*https://images.pexels.com/photos/30254240/pexels-photo-30254240.jpeg?auto=compress&cs=tinysrgb&w=600  menino crianaca*/

/*https://images.pexels.com/photos/30206878/pexels-photo-30206878/free-photo-of-menina-sorridente-com-galho-de-fruta-vermelha-ao-ar-livre.jpeg?auto=compress&cs=tinysrgb&w=600 menina crianca*/

/*https://images.pexels.com/photos/459971/pexels-photo-459971.jpeg?auto=compress&cs=tinysrgb&w=600 adolescente mulher*/

/* https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600 menino adolescente*/

/*https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600  mulher adulta*/

/*https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600 homem adulto */

/* https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600 mulher idosa*/

/*https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=600 homem idoso*/

