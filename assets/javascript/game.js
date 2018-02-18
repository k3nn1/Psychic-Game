// ***********************************//
// ******** THE PYSCHIC GAME *********//
// ***********************************//
        // Variables I need //
        var Wins = 0;
        var Losses = 0;
        var GuessesLeft = 9;
        var YourGuessesSoFar = [];
        var userGuess = [];
        
        var compChoices = "abcdefghijklmnopqrstuvwxyz".split("");
        var computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
        
        // Checking to see if it works
        console.log("compChoices: "+ compChoices);
        console.log("computer Guess: " + computerGuess);

        //
        document.onkeyup = function(event) {
            var userGuess = event.key;

            // *** Lose *** //
            if (GuessesLeft == 0) {
                Losses++;
                GuessesLeft = 9;
                YourGuessesSoFar = [];
                computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
                console.log("computer Guess: " + computerGuess);
                console.log("userGuess: "+ userGuess);
                console.log("Wins: " + Wins);
                console.log("Losses: " + Losses);
                console.log("Guesses Left: "+ GuessesLeft);
                console.log("Your Guesses: "+ YourGuessesSoFar);
                console.log("==========================================")

                

            } else if (userGuess === computerGuess) {       // *** WINS *** //
                Wins++;
                GuessesLeft = 9;
                YourGuessesSoFar = [];
                computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
                console.log("computer Guess: " + computerGuess);
                console.log("userGuess: "+ userGuess);
                console.log("Wins: " + Wins);
                console.log("Losses: " + Losses);
                console.log("Guesses Left: "+ GuessesLeft);
                console.log("Your Guesses: "+ YourGuessesSoFar);
                console.log("==========================================")
            } else if (YourGuessesSoFar.indexOf(userGuess)<0 && compChoices.indexOf(userGuess) >=0) {       //**Guesses Left**//
                YourGuessesSoFar[YourGuessesSoFar.length] = userGuess;
                GuessesLeft--;
                console.log("computer Guess: " + computerGuess);
                console.log("userGuess: "+ userGuess);
                console.log("Wins: " + Wins);
                console.log("Losses: " + Losses);
                console.log("Guesses Left: "+ GuessesLeft);
                console.log("Your Guesses: "+ YourGuessesSoFar);
                // console.log(YourGuessesSoFar.indexOf(userGuess));
                // console.log(compChoices.indexOf(userGuess));
                console.log("==========================================");
            }
                    
            // To Display on HTML
            document.querySelector("#Wins").innerHTML = Wins;
            document.querySelector("#Losses").innerHTML = Losses;
            document.querySelector("#GuessesLeft").innerHTML = GuessesLeft;
            document.querySelector("#YourGuessesSoFar").innerHTML = YourGuessesSoFar;
        }
        