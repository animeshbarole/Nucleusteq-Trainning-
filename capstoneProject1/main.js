const selectingPage = document.querySelector(".selecting-page");
const quizPage =  document.querySelector(".quiz-page");
const resultPage  = document.querySelector(".result-page");
const questionDiv =  document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const nextButton = document.getElementsByClassName(".btn-next")


let questions =[];
let currentIndex =0;
let currentScore=0;
let totalScore =0;
    



function showScore()
{
    quizPage.classList.add("hide");
    resultPage.classList.remove("hide");
}


function showQuiz()
{
    const currentQuestion= questions[currentIndex];
     questionDiv.innerHTML = "";   
    const Question = document.createElement("p");
    Question.innerHTML = currentQuestion.question;
    questionDiv.appendChild(Question);

    let allAnswers = [...currentQuestion.incorrect_answers,currentQuestion.correct_answer];
    
    allAnswers.sort(()=>{
        Math.random()-0.5;
    })

    answersDiv.innerHTML ="";

    allAnswers.forEach((answer)=>{
      
        const button =document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click",()=> checAnswer(answer===currentQuestion.correct_answer));
        answersDiv.appendChild(button);
    });    
}


function checAnswer(isTrue)
{
    if(isTrue)
    {
        currentScore+=10;
        
    }
    else{

        if(currentIndex < questions.length)
        {
               
               nextButton.addEventListener("click",()=>{
                currentIndex++;
                showQuiz();
                return ;        

            })
        }
        else{
            showScore();
        }

    }


    if(currentIndex < questions.length)
    {
        currentIndex++;
        showQuiz();
        
    }
    else{
       
            nextButton.addEventListener("click",()=>{
                
                showScore();
                return ;        

            })

    }
}


async function startQuiz()
{   
      const difficutly = document.getElementById("choose-difficutly").value;
      const category = document.getElementById("choose-categories").value;
      if(difficutly===""||category==="")
      {
          alert("Please Choose Quiz Type");
          return;
      }

      const QUIZ_API = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficutly}&type=multiple`);
      const response = await QUIZ_API.json();

      questions = response.results;
      totalScore =questions.length *20;
      console.log(questions);
      console.log(totalScore);
     

      selectingPage.classList.add("hide");
      quizPage.classList.remove("hide");
      showQuiz();
}

const startQuizBtn = document.getElementById("starting-btn");
startQuizBtn.addEventListener("click",startQuiz);

