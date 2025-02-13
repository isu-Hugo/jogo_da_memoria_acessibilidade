// Exemplo de atribuição de imagem pelo js 
//
//document.getElementById(id_c).src = './src/images/urso.png'
//

var qnt_c = 0 // quantidade de cartas viradas :D
//var carta1 = ''
//var carta2 = ''

function virar(posicao){
    id_f = `f_${posicao}`
    id_c = `c_${posicao}`
    
    let fundo = document.getElementById(id_f).classList.value

    if(fundo == ''){
        document.getElementById(id_c).classList.remove('hidden');
        document.getElementById(id_f).classList.add('hidden');

        qnt_c += 1
    }else{
        document.getElementById(id_c).classList.add('hidden');
        document.getElementById(id_f).classList.remove('hidden');

        qnt_c -=1
    }


}

function teste(){
    console.log(sorted_cards)
}


document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    //console.log(key)
    /*
    if(key===65){
        virar('1');
        }
    */
    
    switch (key){
        case 65:
            virar('0')
            console.log('a');
            break;
        
        case 83:
            virar('1')
            console.log('s');
            break;

        case 68:
            virar('2')
            console.log('d')
            break;
        
        case 70:
            virar('3')
            console.log('f')
            break;

        case 71:
            virar('4')
            console.log('g')
            break;

        case 72:
            virar('5')
            console.log('h')
            break;

        case 74:
            virar('6')
            console.log('j')
            break;

        case 75:
            virar('7')
            console.log('k')
            break;
        
        case 76:
            virar('8')
            console.log('l')
            break;

        case 186:
            virar('9')
            console.log('ç')
            break;
        
    }
} // 62 linhas kkkkkk