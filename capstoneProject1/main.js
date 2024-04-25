
async function startQuiz()
{
      const difficutly = document.getElementById("choose-difficutly").value;
      const category = document.getElementById("choose-categories").value;
      
      console.log(difficutly);
      console.log(category);
 
      const QUIZ_API = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficutly}&type=multiple`);
      const quizData = await QUIZ_API.json();

      
      console.log(quizData);


}

