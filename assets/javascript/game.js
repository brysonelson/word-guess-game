//Variables
var wordBlanks = document.getElementById("word-blanks");
var wrongGuesses = document.getElementById("wrong-guesses");
var guessesLeft = document.getElementById("guesses-left");
var winCounter = document.getElementById("win-counter");
var lossCounter = document.getElementById("loss-counter");
var wordBank = ["Afghanistan", "Albania", "Algeria", "Andorra", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Botswana", "Brazil", "Burundi", "China", "Colombia", "Comoros", "Congo", "Cyprus", "Denmark", "Djibouti", "Dominica", "Ecuador", "Egypt", "Eritrea", "Estonia", "Ethiopia", "Finland", "France", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Jamaica", "Japan", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Netherlands", "Nicaragua", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Reunion", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
var computerWord = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
var answerArr = [];
var wrongArr = [];
var answerWord = answerArr.join("");
var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var guessesRemaining = 9;
var lose = false
var wins = 0;
var loses = 0;


//function - create an array of all letters of the alphabet, when player guesses, if guess is correct, remove it from the array
// if the guess is wrong, .textcontent that indexed letter from the array.


for (var i = 0; i < computerWord.length; i++) {
    answerArr[i] = "_";
}
var remainingLetters = computerWord.length;

console.log(computerWord);
console.log(answerArr);



document.onkeyup = function(event) {

    var userChoice = event.key.toLowerCase();

    //Functions
    function pickWord () {
        computerWord = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
        for (var i = 0; i < computerWord.length; i++) {
            answerArr[i] = "_";
        }
    }
    
    function reset () {
        answerArr = [];
        wrongArr = [];
        allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        lose = false;
        guessesRemaining = 9;
        guessesLeft = 9;
        pickWord();
        remainingLetters = computerWord.length;
        //wrongArr.push(userChoice);
        //wrongGuesses.textContent = wrongArr.join(" ");
        winCounter.textContent = wins;
        lossCounter.textContent = loses;
    }

    
    function looser () {
        alert("You Lose!");
        loses++;
        reset();
    }

    function winner () {
        alert("You Win!");
        wins++;
        reset();
    }

    //If/Elses 
    if (guessesRemaining > 0) {
        guessesRemaining--;
        guessesLeft.textContent = guessesRemaining;
        lose = false;
    }

    if (guessesRemaining === 0) {
        guessesLeft.textContent = "0";
        lose = true;
    }

    if (lose === true) {
        looser();
    }

    if (remainingLetters === 0) {
        winner();
    }
    
    
        /*if (computerWord[k] !== userChoice) {
            
        }*/

    for (j = 0; j < computerWord.length; j++) {

        if (computerWord[j] === userChoice) {
            answerArr[j] = userChoice;
            wordBlanks.textContent = answerArr.join(" ");
            answerArr.join("");
            remainingLetters--;
            //delete allLetters[j];
            //allLetters.indexOf[j];
        }
    }

    for (k = 0; k < allLetters.length; k++) {
        if (allLetters[k] === userChoice) {
            delete allLetters[k];
            wrongArr.push(allLetters[k]);
            console.log(allLetters);
        } 
        else {
            //wrongArr.push(allLetters[k]);
            //delete allLetters[k];
            //guessesRemaining--;
        }
    }

    
    
        

        //answerArr = answerArr.toString();

        
             
    
    
    wrongArr.push(userChoice);
    wrongGuesses.textContent = wrongArr.join(" ");
    winCounter.textContent = wins;
    lossCounter.textContent = loses;

    console.log(userChoice);  
}          

     

            

    

           
           
           //wordBlanks.textContent = answerArr.join(" ");
           //guessesLeft.textContent = guessesRemaining;

           
           //wrongGuesses.textContent = ;
       
        
    


console.log(remainingLetters);




/*while (remainingLetters > 0) {
    // Game code goes here
    // Show the player their progress
    // Take input from the player
    // Update answerArray and remainingLetters for every correct guess
   }*/


//var userChoice = event.key;