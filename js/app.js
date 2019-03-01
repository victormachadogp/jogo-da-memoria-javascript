/*
 * Create a list that holds all of your cards
 */

//  shuffle dos cards
$(document).ready(function () {



    function discardCards() {
        var listOfCards = ["fa-diamond", "fa-bomb", "fa-paper-plane-o", "fa-cube", "fa-leaf", "fa-bicycle", "fa-anchor", "fa-bolt", "fa-diamond", "fa-bomb", "fa-paper-plane-o", "fa-cube", "fa-leaf", "fa-bicycle", "fa-anchor", "fa-bolt"];

        /*
         * Display the cards on the page
         *   - shuffle the list of cards using the provided "shuffle" method below
         *   - loop through each card and create its HTML
         *   - add each card's HTML to the page
             */

        shuffledListOfCards = shuffle(listOfCards);
        console.log(shuffledListOfCards);


        shuffledListOfCards.forEach(element => {
            // elemnt = fa-diamond
            var template = '<li class="card"><i class="fa ' + element + '"></i></li>'
            $('#deck').append(template);

        });

    }

    discardCards();


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


    // botao restart
    $('.restart').click(function deleteAll() {

        $('.card').removeClass('open');
        $('.card').removeClass('match');
        $('.card').removeClass('not-match');
        document.getElementById("clicks").innerHTML = "0";
        clicks = 0;
        $('.star1').removeClass('d-none');
        $('.star2').removeClass('d-none');
        $('#chronoExample .resetButton').show(function () {
            timer.reset();
        });
        document.getElementById("deck").innerHTML = "";
        discardCards();
        $('.card').click(function () {
            cardClicked(this)
        }
        );


    })


    var guardarCard = null;
    var classe1Card;
    var segundoCard;
    var timer;

    
    // timer
    timer = new easytimer.Timer();
    timer.start();
    timer.addEventListener('secondsUpdated', function (e) {
        $('#basicUsage').html(timer.getTimeValues().toString());
    });

    var clicks = 0;





    function cardClicked(self) {

        console.log(self);
        

        // contando o numero de cliques em cada card
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("cliques").innerHTML = clicks;

        if (clicks ==40) {
            $('.star1').addClass('d-none');
        } else if (clicks >= 50) {
            $('.star2').addClass('d-none');
        }



        $(self).addClass('open');
        console.log(guardarCard);

        // verfica se o card é o primeiro card que se esta clicando
        if (guardarCard === null) {
            console.log("Primeiro Card Clicado");
            classe1Card = $(self).children()[0].classList[1];
            guardarCard = $(self);
        }
        // se o primeiro card não for nulo = segundo card
        // segundo card abaixo:
        else if (guardarCard != null) {
            console.log('esse é o segundo card');
            var classe2Card = $(self).children()[0].classList[1];
            segundoCard = $(self);
            // se o segundo card for igual o primeiro card
            if (classe1Card === classe2Card) {
                console.log('São iguais');
                setTimeout(
                    function () {
                        guardarCard.addClass('match');
                        guardarCard = null;
                    }, 310);
                setTimeout(
                    function () {
                        segundoCard.addClass('match');
                    }, 310);

            }
            // se forem diferentes
            else {
                console.log('são diferentes')
            // ficarao vermelhos e se moveram
                setTimeout(
                    function () {
                        guardarCard.addClass('not-match');

                        segundoCard.addClass('not-match');
                    }, 400);

                // apos ficarem vermelhos eles vao retornar virados para baixo
                setTimeout(
                    function () {

                        guardarCard.removeClass('open');
                        guardarCard.removeClass('not-match');
                        guardarCard = null;
                        segundoCard.removeClass('open');
                        segundoCard.removeClass('not-match');
                    }, 1100);
            }



        }




        // checar se todos os card tem a classe open ao mesmo tempo 
        if ($(".deck li.open").length == $(".deck li").length) {
            console.log('agora terminou');
            $('#finalTime').html(timer.getTimeValues().toString());
            $('#myModal').modal('show');

        }



    }




    $('.card').click(function () {
        cardClicked(this)
    }
    );

    // botao jogar novamente do Modal
    $('#reset').click(function deleteAll() {


        $('.card').removeClass('open');
        $('.card').removeClass('match');
        $('.card').removeClass('not-match');
        document.getElementById("clicks").innerHTML = "0";
        clicks = 0;
        $('.star1').removeClass('d-none');
        $('.star2').removeClass('d-none');
        $('#chronoExample .resetButton').show(function () {
            timer.reset();
        });
        document.getElementById("deck").innerHTML = "";
        discardCards();
        $('.card').click(function () {
            cardClicked(this)
        }
        );

        

    })

})


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put self functionality in another function that you call from self one)
 *  - add the card to a *list* of "open" cards (put self functionality in another function that you call from self one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put self functionality in another function that you call from self one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put self functionality in another function that you call from self one)
 *    + increment the move counter and display it on the page (put self functionality in another function that you call from self one)
 *    + if all cards have matched, display a message with the final score (put self functionality in another function that you call from self one)
 */


