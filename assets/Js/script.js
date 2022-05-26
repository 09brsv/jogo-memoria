const allCards = document.querySelectorAll('.card');
const playAgain = document.getElementsByTagName('button')[0];
const titleResult = document.querySelector('h2');
let primeiraCard, segundaCard;
let temCartaVirada = false;
let bloqueiaCard = false


function viraCardSelect(){
    if(bloqueiaCard) return;
    if (this === primeiraCard) return;

    this.classList.add('vira');
    if(!temCartaVirada){
        temCartaVirada = true;
        primeiraCard = this;
        return;
    }
    segundaCard = this;
    temCartaVirada = false;
    combinationResult();
}

function combinationResult(){
    primeiraCard.dataset.card === segundaCard.dataset.card ? viraCardSelectCancel() : desviraCard();
      
}
function viraCardSelectCancel(){
    let removeEvent = removeEventListener('click', viraCardSelect);
    textResult();
    primeiraCard = removeEvent;
}

function desviraCard(){
    bloqueiaCard = true;
    textResult();
    setTimeout(() => {
        primeiraCard.classList.remove('vira');
        segundaCard.classList.remove('vira');
        primeiraCard = null;
        bloqueiaCard = false;
    }, 1500)
}

function textResult(){
    const titleStyle = titleResult.style.borderBottom = '2px solid rgb(75, 72, 72)';
    let firstCardName = primeiraCard.dataset.card;
    let secondCardName = segundaCard.dataset.card;

    if(firstCardName === "dog" && secondCardName === "dog"){
        titleResult.textContent = `Xiii o ${firstCardName} travou seu jogo`;
        titleStyle
        bloqueiaCard = true;
        return
    }
    if (firstCardName === secondCardName){
        titleResult.textContent = `Você combinou ${firstCardName}`;
    titleStyle
        return
    }

    titleResult.textContent = `Você errou a combinação para ${firstCardName}`
    titleStyle
}

(function embaralhaCards(){
    allCards.forEach((card)=>{
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})()
    

allCards.forEach((card)=>{
    card.addEventListener('click', viraCardSelect);
})

playAgain.addEventListener('click',() => window.location.reload())


































// const cards = document.querySelectorAll('.card');
// let hasFlippedCard = false;
// let firstCard, secondCard;
// let lockBoard = false;

// //função para virar carta
// function flipCard() {
//     if(lockBoard) return;
//     if(this === firstCard) return;

//     this.classList.add('flip');
//     if(!hasFlippedCard) {
//         hasFlippedCard = true;
//         firstCard = this;
//         return;
//     }

//     secondCard = this;
//     hasFlippedCard = false;
//     checkForMatch();
// }

// //função que checa se as cartas são iguais
// function checkForMatch() {
//     if(firstCard.dataset.card === secondCard.dataset.card) {
//         disableCards();
//         return;
//     }

//     unflipCards();
// }

// //função que desabilita as cartas
// function disableCards() {
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);

//     resetBoard();
// }

// //funcão que desvira as cartas
// function unflipCards() {
//     lockBoard = true;

//     setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');

//         resetBoard();
//     }, 1500);
// }

// //função que reseta o tabuleiro
// function resetBoard() {
//     [hasFlippedCard, lockBoard] = [false, false];
//     [firstCard, secondCard] = [null, null];
// }

// //função que embaralha as cartas
// (function shuffle() {
//     cards.forEach((card) => {
//         let ramdomPosition = Math.floor(Math.random() * 12);
//         card.style.order = ramdomPosition;
//     })
// })();

// //adiciona evento de clique na carta
// cards.forEach((card) => {
//     card.addEventListener('click', flipCard)
// });