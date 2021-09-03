var inputInicio = document.getElementById('manda')
var valorChave = document.getElementById('add')
var seuCode = document.getElementById('seuCode')
var results = document.getElementById('results')
var radioslc1 = document.getElementById('codifica')
var radioslc2 = document.getElementById('decodifica')
var butao = document.getElementById('mandaCod')
var cifra = document.getElementById('cifra')
var resultaFora = ""

radioslc1.addEventListener('click',function(){
    mandaCod.textContent = 'Codificar mensagem'
})
radioslc2.addEventListener('click',function(){
    mandaCod.textContent = 'Decodificar mensagem'
})

document.getElementById('mandaCod').onclick = baseDoCode;

// Base da Cifra de César

function baseDoCode(event){
    event.preventDefault()
    const i = seuCode.value;
    
    if (i==1){
        if(butao.textContent=='Codificar mensagem'){
            resultaFora = crscod(inputInicio.value,+valorChave.value)
            results.textContent=resultaFora
        }
        else{
            resultaFora = crsdcod(inputInicio.value,+valorChave.value)
            results.textContent=resultaFora
        }
    }
    else if (i==2){
        if(mandaCod.textContent=='Codificar mensagem'){
            resultaFora = window.btoa(inputInicio.value)
            results.textContent=resultaFora
        }
        else{
            resultaFora = window.atob(inputInicio.value)
            results.textContent=resultaFora
        }
    }
    
}

function crscod(texto,chave){
    texto=texto.toLowerCase()
    texto=texto.split('')
    var cripto = []
    var strarr = []

    for(var i=0; i<texto.length;i++){
        var texto2 = texto[i].charCodeAt()
        if (texto2==32){
            cripto.push(texto2)
        }
        else{
            cripto.push((texto2-97+chave)%26+97)
        }
    }
    for(var j=0; j<cripto.length;j++){
        strarr.push(String.fromCharCode(cripto[j]))
    }
    return strarr.join("")
}

function crsdcod(texto,chave){
    texto=texto.toLowerCase()
    texto=texto.split('')
    var cripto = []
    var strarr = []

    for(var i=0; i<texto.length;i++){
        var texto2 = texto[i].charCodeAt()
        if (texto2==32){
            cripto.push(texto2)
        }
        else{
            cripto.push((texto2-122-chave)%26+122)
        }
    }
    for(var j=0; j<cripto.length;j++){
        strarr.push(String.fromCharCode(cripto[j]))
    }
    return strarr.join("")
}
seuCode.addEventListener("click", function some(evento){
    const i = seuCode.value;
    evento.preventDefault()
    if (i==2){
        return cifra.style.display="none"
    }
    else{
        return cifra.style.display="block"
    }
})