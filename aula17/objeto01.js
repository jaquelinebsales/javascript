var amigo = {
    nome:'josé',
    sexo: 'M',
    peso: '69.8',
    engordar(p=0){
        this.peso += p
    }
}

amigo.engordar(2)