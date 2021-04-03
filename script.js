function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    //fano= formulário input de entrada do index
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('Erro digite um ano valido')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if( idade >= 0 && idade < 10 ){
                img.setAttribute('src', 'foto-bebe-h.png')
            }else if(idade < 21){
                img.setAttribute('src', 'foto-adolescente-h.png')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-jovem-h.png')
            }else{
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if( idade >= 0 && idade < 10 ){
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade < 21){
                img.setAttribute('src', 'foto-adolescente-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'foto-jovem-m.png')
            }else{
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}