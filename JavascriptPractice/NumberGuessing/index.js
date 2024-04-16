



let randomNumber  =  Math.floor(Math.random() *100) + 1; 
console.log(randomNumber);


const guesses =  document.querySelector(".guesses");
const lastResult  = document.querySelector(".lastResult");
const lowOrHi =  document.querySelector(".lowOrHi");

const guessSubmit  =  document.querySelector(".guessSubmit");
const guessField =  document.querySelector(".guessField")


let guessCount = 1;
let resetButton; 




function resetGame()
{
     guessCount =1;

     const resetParas =  document.querySelectorAll(".resultParas p");
     for(const resetPara of resetParas)
     {
          resetPara.textContent = "";
     }

     resetButton.parentNode.removeChild(resetButton);

     guessField.disabled = false;
     guessSubmit.disabled = false;
     guessField.value = "";
     guessField.focus();

     lastResult.style.backgroundColor = "white";

     randomNumber = Math.floor(Math.random() * 100) + 1;
     console.log(randomNumber);
}

function setGameOver()
{
     guessField.disabled = true;
     guessSubmit.disabled = true;
     resetButton = document.createElement("button");
     resetButton.textContent = "Start new Game";
     document.body.append(resetButton);
     resetButton.addEventListener("click",resetGame);

}


function checkGuess()
{
    const userGuess =  Number(guessField.value);

    if(guessCount === 1)
    {
        guesses.textContent = "Previous Guessses : ";

    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess===randomNumber)
    {
      lastResult.textContent=  "Congratulations! You got it right!";
      lastResult.style.backgroundColor = "green";
      lowOrHi.textContent = "";
      setGameOver();
    }

   else if(guessCount===10)
    {
        lastResult.textContent = "GAME OVER";
        lowOrHi.textContent ="";
        setGameOver();
    }
    else{
      lastResult.textContent = "Wrong";
      lastResult.style.backgroundColor ="red";
      if(userGuess<randomNumber)
      {
          lowOrHi.textContent = "Number is Too Low"
      }
      else if(userGuess > randomNumber)
      {
          lowOrHi.textContent = "Number is too high"
      }
    }


    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);
