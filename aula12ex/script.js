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


function verificar(){
    var data = new Date;
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.createElement('img');
    img.setAttribute('id','foto')


    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        fsex = document.getElementsByName('radsex');
        var idade = ano - fano.value;
        var sexo = '';
        if (fsex[0].checked){
            sexo = 'homem';

            if(idade >= 0 && idade <= 12){
                //crianca
                img.setAttribute('src','https://images.pexels.com/photos/30254240/pexels-photo-30254240.jpeg?auto=compress&cs=tinysrgb&w=600')
            }else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'https://images.pexels.com/photos/1304647/pexels-photo-1304647.jpeg?auto=compress&cs=tinysrgb&w=600')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600')
            }else{
                //idoso
                img.setAttribute('src','https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=600')
            }

        } else if (fsex[1].checked){
            sexo = 'mulher';

            if(idade >= 0 && idade <= 12){
                //crianca
                img.setAttribute('src','https://images.pexels.com/photos/30206878/pexels-photo-30206878/free-photo-of-menina-sorridente-com-galho-de-fruta-vermelha-ao-ar-livre.jpeg?auto=compress&cs=tinysrgb&w=600')
            }else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'https://images.pexels.com/photos/459971/pexels-photo-459971.jpeg?auto=compress&cs=tinysrgb&w=600')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src','https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600')
            }else{
                //idoso
                img.setAttribute('src', 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600')
            }


        }

    }
    res.innerHTML = `Detectamos um ${sexo} com ${idade} anos`
    res.appendChild(img)

}