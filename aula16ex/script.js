var n = []
var numInput = document.getElementById('numerotxt')
var quant = document.getElementById('quant')
var maior = document.getElementById('maior')
var menor = document.getElementById('menor')
var media = document.getElementById('media')
var soma = document.getElementById('soma')
var sel = document.getElementById('arraySel')


function addNumArray(){
    quant.innerHTML = ''
    media.innerHTML = ''
    soma.innerHTML = ''
    maior.innerHTML = ''
    menor.innerHTML = ''
    
    var num = Number(numInput.value)


    if(numInput.value.length == 0){
        alert('O campo está vazio, verifique e tente novamente.')
    } else {

        if(n.indexOf(num) == -1){
            if(num > 100 || num < 0){
                alert('Limite de valor violado, verifique e tente novamente.')
            } else {

                n.push(num)

                var opc = document.createElement('option')
                opc.innerHTML += `Adcionado número ${num} ao array`
                sel.appendChild(opc)
            }


        }else{
            alert('Valor já adicionado, verifique e tente novamente.')
        }
    }




}

function finalizar(){
    quant.innerHTML = `Foram adicionados ${n.length} números.`

    n.sort()
    maior.innerHTML = `O maior número cadastrado é ${n[n.length-1]}.`
    menor.innerHTML = `O menor número cadastrado é ${n[0]}.`

    var s = 0
    for(var i = 0; i <= n.length - 1 ; i++){
        s += n[i]
    }

    soma.innerHTML = `A soma dos núero cadstrados é ${s}.`

    var m = s/n.length

    media.innerHTML = `A média dos números cadastrados é ${m}.`
}