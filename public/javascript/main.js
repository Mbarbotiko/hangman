

var wordsToPick = {
    genesis: {
        picture: "genesis.jpg",
        song: "Illegal Alien",
        preview: "https://p.scdn.co/mp3-preview/b29a2b925b9654e0efaaff37504fd234307e0ad8"
    },
    madonna: {
        picture: "madonna.jpg",
        song: "Material Girl",
        preview: "https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c"
    },
    toto: {
        picture: "toto.jpg",
        song: "Rosanna",
        preview: "https://p.scdn.co/mp3-preview/7cef811eaeb7c7b98245750e73d9d68e9008f317"
    }

}



// console.log(hangManGameObj);
// console.log(hangManGameObj.wordsToPick);
// console.log(hangManGameObj.wordsToPick.genesis);
// console.log(hangManGameObj.wordsToPick.genesis.song); testing accessing the object

let currentWord = null;
let lettersInWord = [];
let correctGuessLetters = ['a','i', 'o', 'u', 'z'];
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

}

randomWord();

function letterUnderScore() {
    let underScore = " ";
    // console.log(underScore);
    for (var i = 0; i < lettersInWord.length; i++)
    console.log(correctGuessLetters.indexOf(lettersInWord[i])!==-1);
    //loop through the letters in the word array
    if (correctGuessLetters.indexOf(lettersInWord[i]) !==-1 ){
        console.log(lettersInWord[i]);
        console.log(correctGuessLetters.indexOf(lettersInWord[i])!==-1);
        //check each letter against the correctly guessed array of letters find the first occurance in letters in word array index 
        underScore +=lettersInWord[i];
    }else{
        underScore+="  _  ";
        // console.log(underScore);
        //if the letter doesnt occur add an underscore
    }
}

letterUnderScore();
