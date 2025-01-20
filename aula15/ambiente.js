let num = [1, 2, 3]

num[3] = 3
num.push(7)//adiciona valor no final do vetor
num.length//diz o tamanho do array
num.sort()//bota todos os elementos numéricos em ordem crescente

for(let pos=0; pos<num.length;pos++){
    console.log(num[pos])
}

for (let pos in num){
    console.log(num[pos])
}

num.indexOf(7)//busca o valor entre parentenses no array(o valor nao a posição)