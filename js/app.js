/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
     */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}




var guardarCard = null;



$('.restart').click(function () {

    $('.card').removeClass('open')

})

// tenho que ver a classe do primeiro card e coletar e guardar
// fazer a mesma coisa com o segundo card que eu clicar, só que a classe do segundo vai ser comparada com a do primeiro

var guardarCard = null;
var classe1Card;
var segundoCard;


$('.card').click(function () {

    $(this).addClass('open');
    console.log(guardarCard);


    if (guardarCard === null) {
        console.log("Primeiro Card Clicado");
        classe1Card = $(this).children()[0].classList[1];
        guardarCard = $(this);
    }
    // se o primeiro card não for nulo = 2 card
    else if (guardarCard != null) {
        console.log('esse é o segundo card');
        var classe2Card = $(this).children()[0].classList[1];
        segundoCard = $(this);

        if (classe1Card === classe2Card) {
            console.log('São iguais');
            guardarCard = null;
        }
        else {
            console.log('são diferentes')
            
            setTimeout(
                function () {
                    
                    guardarCard.removeClass('open');
                    guardarCard = null;
                    segundoCard.removeClass('open');
                }, 1500);
                
                
        }
        
    }
    // comparação do primeiro card com o segundo


    else {
        // se os card nao baterem, remover class open de ambos
        $(guardarCard).removeClass('open');
        $(segundoCard).removeClass('open');
    }









    // atribuir guardarCard para primeiro clique
    // se uma card for clicado verificar se ele é ou não igual ao guardarCard




})


$('li').each(
    function () {
        var classes = this.classList;
        for (var i = 0, len = classes.length; i < len; i++) {
            if ($('li').hasClass(classes['open'])) {
                $(this).addClass('Yeah');
            }
        }
    })



// o que eu preciso fazer é um loop each entre todos os card da lista
// os numeros que baterem que forem cards igual, vao ficar com a classe open nele mesmo
// colocar o if pra quando forem igual os numeros da array, a classe open fica ativa
// se os numeros da array forem diferentes, colocar o atributo else para tirar a classe open dos mesmos 



// os cards estão sendo validos para ver se são iguais antes da classe open ser chamada
// isso quer dizer que o card que eu estou clicando por segundo tem que aparecer como open antes de verificar pra depois verficar
// no caso é aquele esquema duration
// a classe apareceria como open durante alguns segundos e logo depois a função continuria
// apagando o open se os card tiverem classes diferetes e deixando se tiverem classes iguais

// os card nao estao sendo comparados
// isso porque o primeiro card perde seu valor apos o segundo clique

// o card guardar card esta guardando apenas o primeiro valor que eu clico
// vai ficar guardando pra sempre no null porque ele só fui null uma vez
// isso porque null só igual ao card clicado no primeiro clique, depois disso nenhum card é null

// uma função if separada que leia todas as terceira classes de todos os item dentro do li, assim como eu fiz la em cima using square bracktes
// se essa função for verdadeira, então aparece um modal dizendo que o jogo foi ganho






if (($('.anchor1') || $('.anchor2')).hasClass('open')) {
    alert("right buddy");
    console.log('cool buddy');
} else {

}













/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
















// var guardarCard;

// $('.card').click(function() {

//     const segundoCard = $(this).children()[0].classList[1];

//     guardarCard = $(this).children()[0].classList[1];
//     $(this).addClass('open')
//     console.log(guardarCard);

//     if (guardarCard === segundoCard) {
//         console.log("Yep Iguais");
//     }
