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

let questions;
let currentIndex =0;
let currentScore=0;
let totalScore = 0;
let Time =10;
let timer;
    

const progress =(value)=>{
   
     const percentage = (value/Time)*100;
     progressColor.style.width = `${percentage}%`;
      
     if (percentage <= 33.3) {
        progressColor.style.backgroundColor = "#FD5E53"; // Red
      } else if (percentage <= 66.6) {
        progressColor.style.backgroundColor = "#FFA500"; // Orange
      } else {
        progressColor.style.backgroundColor = "#8CBA51"; // Green
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
    
    Time =10;
    progressColor.style.width = "100%";
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



function shuffleArray(answers)
{ 
    let curr = answers.length;

    while(curr!=0)
        {
            let randomIndx = Math.floor(Math.random() * curr);
            curr--;

            [answers[curr],answers[randomIndx]] = [answers[randomIndx],answers[curr]];

        }
   
       return answers; 

}



function showQuiz()
{
    
    const currentQuestion= questions[currentIndex];
    questionDiv.innerHTML = "";   
    const Question = document.createElement("p");
    Question.innerHTML = currentQuestion.questionText;
    questionDiv.appendChild(Question);

    let allAnswers = [currentQuestion.option1,currentQuestion.option2,currentQuestion.option3,currentQuestion.option4];
    
   
    let answers = shuffleArray(allAnswers);

  
    
    answersDiv.innerHTML ="";
    
    let answerSelected = false
 
    
    answers.forEach((answer)=>{
      
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
    <span class="total-q">${totalScore}</span>
    `;

  
    progressColor.style.width = "100%";
    
    startTimer(Time);

}


async function fetchCategories()
{
   
      const categoryAPI = `http://localhost:8080/api/v1/categories/getAll`;
      const selectElement =  document.getElementById("choose-categories");

      try{
        const categoryResponse =  await fetch(categoryAPI,{
              method :'GET',
        });
        
        const categoryData = await categoryResponse.json();

        console.log(categoryData);

        categoryData.forEach(category=>{
            
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.categoryName;
            selectElement.appendChild(option);

        });

      }catch(error)
      {
        console.error("Error fetching quiz data:", error);
        alert("Failed to load quiz data. Please try again later.");
      }
}

async function startQuiz() {

    
    const difficutly = document.getElementById("choose-difficutly").value;
    const category = document.getElementById("choose-categories").value;

    if (difficutly === "" || category === "") {
        alert("Please Select all the Fields");
        return;
    }

    const questionsAPI = `http://localhost:8080/api/v1/questions/filter?difficultyLevel=${difficutly}&categoryId=${category}`;

    try {
        const questionsResponse = await fetch(questionsAPI, {
            method: 'GET',
        });

        if (!questionsResponse.ok) {
            throw new Error(`HTTP error! status: ${questionsResponse.status}`);
        }
        

        questions = await questionsResponse.json();
        totalScore = questions.length;
         
        if(questions.length==0)
        {
            alert("No Questions in Such Category");

        }
        else{
           selectingPage.classList.add("hide");
           quizPage.classList.remove("hide");
           showQuiz();
        }

    } catch (error) {
        console.error("Error fetching quiz data:", error);
        alert("Failed to load quiz data. Please try again later.");
    }
}

fetchCategories();
const startQuizBtn = document.getElementById("starting-btn");
startQuizBtn.addEventListener("click",startQuiz);

