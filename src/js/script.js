let cartas_viradas = []
let cartas_encontradas = []
let som_de_virar = new Audio('./src/sound_effects/virar.mp3');
let som_de_ganhar = new Audio('./src/sound_effects/winning.mp3');
    som_de_ganhar.volume = 0.03;
let par_encontrado = new Audio('./src/sound_effects/Ding.mp3');


function add(carta){
    cartas_viradas.push(carta)
}

function rem(carta){
    cartas_viradas = cartas_viradas.filter(item => item !== `${carta}`)
}


function virar(posicao){
    id_f = `f_${posicao}` //id correto do fundo
    id_c = `c_${posicao}` //id correto da carta
    
    

    if(!cartas_viradas.includes(id_c)){ //quando clicar, se a carta nao estiver virada ###

        if(cartas_encontradas.includes(id_c)){// se ja for um par encontrado nao faz nada
            return;
        }
        
        if(cartas_viradas.length == 2){ //limita a 2 cartas viradas ----------
            
            document.getElementById(`${cartas_viradas[0]}`).classList.add('hidden');
            document.getElementById(`f_${cartas_viradas[0].charAt(2)}`).classList.remove('hidden');
            rem(`${cartas_viradas[0]}`)

            document.getElementById(`${cartas_viradas[0]}`).classList.add('hidden');
            document.getElementById(`f_${cartas_viradas[0].charAt(2)}`).classList.remove('hidden');
            rem(`${cartas_viradas[0]}`)
            
        }//-------------------------------------------------------------------

        //add audio aqui XXXXX
        som_de_virar.play()
        falar(sorted_cards[posicao])
        document.getElementById(id_c).classList.remove('hidden'); //### vira a carta
        document.getElementById(id_f).classList.add('hidden');

        add(id_c)//adiciona a carta virada, na lista de cartas viradas

        
    }else{
        som_de_virar.play();
        document.getElementById(id_c).classList.add('hidden'); //### desvira a carta
        document.getElementById(id_f).classList.remove('hidden');

        rem(id_c)//remove a carta virada, na lista de cartas viradas

    }

    if (cartas_viradas.length == 2){ //quando viradas 2 cartas ###
        if(sorted_cards[cartas_viradas[0].charAt(2)] === sorted_cards[cartas_viradas[1].charAt(2)]){ //### e forem do mesmo tipo ex:('urso', 'belha')
            cartas_encontradas.push(cartas_viradas[0])  //adiciona em 'cartas encontradas'
            cartas_encontradas.push(cartas_viradas[1])  //adiciona em 'cartas encontradas'
            cartas_viradas.length = 0 //limpa a lista de cartas viradas, mas mantem o par encontrado visivel

        }
    }
    //console.log(cartas_viradas)
    
    if(cartas_encontradas.length == 10){//quando todas as cartas forem encontradas o jogo acaba
        som_de_ganhar.play();
    }

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
            //console.log('a');
            break;
        
        case 83:
            virar('1')
            //console.log('s');
            break;

        case 68:
            virar('2')
            //console.log('d')
            break;
        
        case 70:
            virar('3')
            //console.log('f')
            break;

        case 71:
            virar('4')
            //console.log('g')
            break;

        case 72:
            virar('5')
            //console.log('h')
            break;

        case 74:
            virar('6')
            //console.log('j')
            break;

        case 75:
            virar('7')
            //console.log('k')
            break;
        
        case 76:
            virar('8')
            //console.log('l')
            break;

        case 186:
            virar('9')
            //console.log('ç')
            break;

        case 32:
            init_game()
            //console.log('Game reiniciado')
            break;
        
    }
} 

function atribuir_cartas(){
    for (let i = 0; i<10; i++){
        document.getElementById(`c_${i}`).src = `./src/images/${sorted_cards[i]}.png`
    }
}

function init_game(){
    sort_cards()
    atribuir_cartas()

    for (let i = 0; i<10; i++){
        document.getElementById(`c_${i}`).classList.add('hidden');
        document.getElementById(`f_${i}`).classList.remove('hidden');
    }

    cartas_viradas.length = 0
    cartas_encontradas.length = 0

}

document.addEventListener('DOMContentLoaded', function() {
    init_game();
});


function show_cards(){// APENAS PARA DESENVOLVIMENTO
    for (let i = 0; i<10; i++){
        document.getElementById(`c_${i}`).classList.remove('hidden');
        document.getElementById(`f_${i}`).classList.add('hidden');
    }
}