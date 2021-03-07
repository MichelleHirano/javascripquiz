//elements
var quizBody = document.querySelector("quiz_box");
var resultsEl = document.getElementById('result');
var finalScoreEl = document.getElementById('finalScore');
var gameoverDiv = document.getElementById('gameover');
var quizTimer = document.getElementById('timer');
var startQuizButton = document.querySelector('start-button');
var highscoreContainer = document.getElementById('highscoreContainer');
var highscoreDiv = document.getElementById('high-scorePage');
var highscoreInputName = document.getElementById('initials');
var highscoreDisplayName = document.getElementById('highscore-initials');
var endGameBtns = document.getElementById('endGameBtns');
var submitScoreBtn = document.getElementById('submitScore');
var highscoreDisplayScore = document.getElementById('highscore-score');
var buttonA = document.getElementById('a');
var buttonB = document.getElementById('b');
var buttonC = document.getElementById('c');



//Array for questions and answers
var quizQuestions = [
    {
        question:'what is a var?',
            a:'short for varsity',
            b:'a name assigned to a literal value or object',
            c:'a simple collection of similar object that can be accessed by a variable',
        correctAnswer:'b'
    },

    {
        question:'Which is not a valid JavaScript name?',
            choiceA:'5dots',
            choiceB:'he_llo',
            choiceC:'javascriptQuiz',        
        correctAnswer:'a'
    },

    {
        question:'Using ___ statement is how you test for a specific condition',
            choiceA:'Select',
            choiceB:'For',
            choiceC:'If',
        correctAnswer:'c'
    }
];

// Variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timeInterval;
var score = 0;
var correct;

//Function to generate questions & answers

function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if(currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }

    var currentQuestionIndex = quizQuestions[currentQuestionIndex];
    questionsEl.innerhtml = "<p>" + currentQuestionIndex.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
};

//Start Quiz!
function startQuiz(){
    gameoverDiv.style.display="none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();
}

    //Timer   
      timerInterval = setInterval(function() {
          timeLeft--;
          quizTimer.textContent = "Time left: " + timeLeft;

          if(timeLeft === 0) {
              clearInterval(timerInterval);
              showScore();
          }
      }, 1000);

      quizBody.style.display = "block";

    //Score Display

    function showScore(){
        quizBody.style.display="none"
        gameoverDiv.style.display="flex";
        clearInterval(timerInterval);
        highscoreInputName.value = "";
        finalScoreEl.innerHTML ="You got " + score +" out of " + quizQuestions.length + " correct" ; 
     }

    //Local storage for high scores
    submitScoreBtn.addEventListener("click" , function highscore() {

        if (highscoreInputName.value === ""){
            alert("Initials cannot be black");
            return false;
    }
        else{
            var savedHighscores = JSON.parse(localStorage.getItem('savedHighscores')) || [];
            var currentUser = highscoreInputName.valure.trim();
            var currentHighscore ={
                name: currentUser,
                score: score
            };

            gameoverDiv.style.display = "none";
            highscoreContainer.style.display = "flex";
            highscoreDiv.style.display = "block";
            endGameBtns.style.display = "flex";

            savedHighscores.push(currentHighscore);
            localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
            generateHighscores();

        }
    //Highscore Page Only
    function showHighscore(){
        startQuizDiv.style.display = "none"
        gameoverDiv.style.display = "none";
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
    
        generateHighscores();
    }


    //replay quiz

    //this function checks answers

    //start quiz
      startQuizButton.addEventListener("click", startQuiz);
