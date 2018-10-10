

var wordsToPick = {
    genesis: {
        picture: "genesis.jpg",
        song: "Illegal Alien",
        preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
    },
    // madonna: {
    //     picture: "madonna.jpg",
    //     song: "Material Girl",
    //     preview: "https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c"
    // },
    // toto: {
    //     picture: "toto.jpg",
    //     song: "Rosanna",
    //     preview: "https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317"
    // }

}


let currentWord = null;
let lettersInWord = [];
let correctGuessLetters = ['g', 's'];
let allGuessedLetters = [];
let guessesLeft = 0;
let totalGuesses = 0;
let currentGuessedLetter = null;
wins = 0;

//setting up variables to hold values during game play

function randomWord() {
    let wordsKey = Object.keys(wordsToPick);
    // console.log(wordsKey);
    //creating an array from the words Key Object / changing options to string
    wordsToPick.currentWord = wordsKey[Math.floor(Math.random() * wordsKey.length)];
    // console.log(wordsToPick.currentWord);
    //setting current word in play to a random value in the array
    lettersInWord = wordsToPick.currentWord.split('');
    console.log(lettersInWord);
    letterUnderScore();

    

}

function letterUnderScore() {
    let underScore = ' ';
    // console.log(underScore);
    for (var i = 0; i < lettersInWord.length; i++)

    //loop through the letters in the word array
    if (correctGuessLetters.indexOf(lettersInWord[i]) !==-1 ){
        // console.log(lettersInWord[i]);
        //only i is present in this array after looping through and crossreferencing one array vs the other
        // console.log(correctGuessLetters.indexOf(lettersInWord[i])!==-1);
        //if we have a match (evaluates as TRUE and NOT FALSE (-1))
        // Evaluates against -1 which is an undefined index in the array, if not -1 print true, else print false.
        underScore +=lettersInWord[i];
        console.log(underScore);
    }else{
        underScore+="  _  ";
        // console.log(underScore);
        //if the letter doesnt occur add an underscore
    }
    document.getElementById("current-word").innerHTML = underScore;
}

function increaseTotalGuesses(){
    totalGuesses = lettersInWord.length+10;
    guessesLeft = totalGuesses;
    console.log(guessesLeft);
    document.querySelector("#guesses-remaining").innerHTML = guessesLeft;
    //give the player 10 additional guesses beyond the number of letters in the word and update DOM.

}

increaseTotalGuesses();





