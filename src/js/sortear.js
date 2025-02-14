//movido para 'lista.js' para facilitar na edição futura
//const cartas = ["urso", "abelha", "aranha", "esquilo", "elefante", "iguana", "ovelha", "urubu"];

let sorted_cards = []


function random_index(min, max) {
    //let max = cartas.length - 1; //passe essas vars como parametro para reutilizar com mais facilidade
    //let min = 0
    let randon_number = Math.floor(Math.random() * (max - min + 1)) + min;
    return randon_number;
}

function duplicar(){
    for (let i = 0; i<5; i++){
        sorted_cards.push(sorted_cards[i])
    }
}

function troca(de, para){
    let temp = sorted_cards[de]
    sorted_cards[de] = sorted_cards[para]
    sorted_cards[para] = temp
}

function embaralhar(){
    for (let i = 0; i <5; i++){
        troca(random_index(0, 9), random_index(0, 9))
    }

}

function sort_cards() {
    // garantir que a lista esta vazia
    sorted_cards.length = 0;

    for (let i = 0; i < 5; i++) { //repete 5 vezes

        let valid_card = false // var de controle

        do{
            let random_card = cartas[random_index(0, cartas.length - 1)] // pega uma carta aleatoria
    
            if (sorted_cards.includes(random_card) == false) {  // se ela nao estiver nas cartas sorteadas
                sorted_cards.push(random_card);                 //inclui ela
                valid_card = true                               //avisa que é valida pro 'do{ }while()'
            }

        }while(!valid_card);// vai repetir enquanto for uma carta invalida


    }
    duplicar();
    embaralhar();
    console.log(sorted_cards)
}



