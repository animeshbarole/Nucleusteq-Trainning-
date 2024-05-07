const selectingPage = document.querySelector(".selecting-page");
const quizPage =  document.querySelector(".quiz-page");
const resultPage  = document.querySelector(".result-page");
const questionDiv =  document.querySelector(".question");
const answersDiv = document.querySelector(".answers");
const totalQuestions = document.querySelector(".total-questions")
const progressColor = document.querySelector(".progress-colour");
const progressTxt = document.querySelector(".progress-txt");
const submitTotal = document.querySelector(".submit-total");
const score  =  document.querySelector(".score");
const finalScoreElement = document.querySelector('.final-score');
const finalFeedbackElement = document.querySelector('.final-feedback');

let questions =[];
let currentIndex =0;
let currentScore=0;
let totalScore = 0;
let Time =10;
let timer;
    

const progress =(value)=>{
   
     const percentage = (value/Time)*100;
     progressColor.style.width = `${percentage}%`;
      
     if(value<= Time/2 )
        {
            progressColor.style.backgroundColor ="#FD5E53";
        }
        else{
            progressColor.style.backgroundColor = "#8CBA51";
        }
     
     progressTxt.innerHTML = `${value}`;
 
};




function showScore()
{
    quizPage.classList.add("hide");
    resultPage.classList.remove("hide");
     
    
    finalScoreElement.textContent = `Total Score : ${currentScore} / ${totalScore}`;

    let feedback ='';

    if(currentScore===totalScore)
        {
            feedback ="Excellent! You've got all the questions right!";
        }
        else if(currentScore>=totalScore)
            {
                feedback = "Good job! Keep practicing to improve!";
            }
        else {
            feedback = "You can do better. Please practice more!";
        }
    finalFeedbackElement.textContent = feedback;
    
    const restartBtn =  document.getElementById("restart-btn");

    restartBtn.addEventListener("click",()=>{
               
           currentScore =0;
           score.innerHTML =`
           <span id="score-txt">SCORE: </span>
           <span id="score-num">${currentScore}</span>
           `
           currentIndex =0;
           resultPage.classList.add("hide");
           selectingPage.classList.remove("hide");
    });

    
    

}



function showCorrectAnswer()
{
    const buttons  =  answersDiv.querySelectorAll("button");
  
    buttons.forEach((button)=>{
         if(button.innerHTML === questions[currentIndex].correct_answer)
            {
                 button.style.background = "#A2EF44";
            }
    })
    const nxtButton =   document.getElementById("btn-next");
    nxtButton.classList.remove("hide");
    nxtButton.addEventListener("click",nextQuestionHandler);
}






const startTimer =((time)=>{
     
    let answerShown = false; 
    timer  =  setInterval(()=>{
        time--;
        if(time>=0 )
        {
            progress(time);
           
        }
        else if (!answerShown){
           
            showCorrectAnswer();
            answerShown = true;
            const allbtn =  document.querySelectorAll(".btn");

            allbtn.forEach((button)=>{
                button.disabled = true;
            })
        }
        
       
    },1000);


});

function nextQuestionHandler()
{
    clearInterval(timer);  
    Time =10;
    progressColor.style.width = "100%";
    progress(Time);
    currentIndex++;
     if(currentIndex < questions.length)
     {
       
        answerSelected = false;
        showQuiz();
   
     }
     else { 
        showScore();
     
   
     }
     const nxtButton = document.getElementById("btn-next");
     nxtButton.removeEventListener("click", nextQuestionHandler);
     nxtButton.classList.add("hide");
}



function updateScore()
{
    let scoreElement = document.getElementById("score-num");
    scoreElement.innerText = currentScore;
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
    
    let answerSelected = false
 
    
    allAnswers.forEach((answer)=>{
      
        const button =document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        answersDiv.appendChild(button);
        button.addEventListener("click",()=>{
            clearInterval(timer);
             if(!answerSelected){
            const isCorrect = answer===currentQuestion.correct_answer;

                if(isCorrect)
                {
                    currentScore += 1;
                    console.log(currentScore);
                    score.innerHTML =`
                    <span id="score-txt">SCORE: </span>
                    <span id="score-num">${currentScore}</span>
                    `
                    button.style.background = "#A2EF44";
                }
                else 
                {
                    button.style.background = "#FF6B6B";
                }
            
            }

            answerSelected = true;
          
          
           
            const nxtButton =   document.getElementById("btn-next");
            nxtButton.classList.remove("hide");
            nxtButton.addEventListener("click",nextQuestionHandler);
          
            
            const allbtn =  document.querySelectorAll(".btn");

            allbtn.forEach((button)=>{
                button.disabled = true;
            })
         })
       
       
    });    

    totalQuestions.innerHTML =`
    <span class="q">${currentIndex+1} </span> / 
    <span class="total-q">${questions.length}</span>
    `;

    progressColor.style.width = "100%";
    
    startTimer(Time);

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
      totalScore =questions.length;
      console.log(questions);
      console.log(totalScore);
     

      selectingPage.classList.add("hide");
      quizPage.classList.remove("hide");
      showQuiz();

      
      
    
}

const startQuizBtn = document.getElementById("starting-btn");
startQuizBtn.addEventListener("click",startQuiz);

