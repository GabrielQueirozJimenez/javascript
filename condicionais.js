/*console.log('Este é igual ao document.write')
//-----------------------------------------------------------------------------------
var t = 1
if (100/t <= 50){
    console.log('Sem multa para você')
}
else{
    console.log('Multado')
}*/
//-----------------------------------------------------------------------------------
function calcular(){
    var posta = document.querySelector('#resp')
    var t = Number(document.getElementById('txtt').value)
    var x = Number(document.getElementById('txtx').value)
    if(x/t <= 50)
        posta.innerHTML=`Você estava à ${x/t}km/h, e <strong>NÃO FOI multado<strong>`
    
    else
        posta.innerHTML=`Você estava à ${x/t}km/h, e <strong>FOI MULTADO<strong>`
}
/*-------------------------------CONDICIONAIS-2-------------------------------------*/
//O switch só funciona com números inteiros e strings. EX: (valor 'Correto') ou (valor 1)
switch (expressão){
    case valor 1:
        //blá blá blá
        break   //(Obrigatório)
    case valor 2:
        //blá blá blá
        break   //(Obrigatório)
    case valor 3:
        //blá blá blá
        break   //(Obrigatório)
    default //Opcional
        //blá blá blá
        break   //(Opcional?)
}