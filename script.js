//elements
var quizBody = document.getElementById('quiz');
var resultsEl = document.getElementById('result');
var finalScoreEl = document.getElementById('finalScore');
var gameoverDiv = document.getElementById('gameover');
var questions = document.getElementById('questions');
var quizTimer = document.getElementById('timer');
var startQuizButton = document.getElementById('startbtn');
var startQuizDiv = document.getElementById('startpage');
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
        question:"what is a var?",
            choiceA:"short for varsity",
            choiceB:"a name assigned to a literal value or object",
            choiceC:"a simple collection of similar object that can be accessed by a variable",
        correctAnswer:"b"
    },

    {
        question:"Which is not a valid JavaScript name?",
            choiceA:"5dots",
            choiceB:"he_llo",
            choiceC:"javascriptQuiz",        
        correctAnswer:"a"
    },

    {
        question:"Using ___ statement is how you test for a specific condition",
            choiceA:"Select",
            choiceB:"For",
            choiceC:"If",
        correctAnswer:"c"
    },
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
    
        var currentQuestion = quizQuestions[currentQuestionIndex];
        questions.innerHTML = currentQuestion.question 
        buttonA.innerHTML = currentQuestion.choiceA;
        buttonB.innerHTML = currentQuestion.choiceB;
        buttonC.innerHTML = currentQuestion.choiceC;
    };


//Start Quiz!
function startQuiz(){
    gameoverDiv.style.display="none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();


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



startQuizButton.addEventListener("click", generateQuizQuestion);
}

    //Score Display

    function showScore(){
        quizBody.style.display="none"
        gameoverDiv.style.display="flex";
        clearInterval(timerInterval);
        highscoreInputName.value = "";
        finalScoreEl.innerHTML ="You got " + score + " out of " + quizQuestions.length + " correct"; 
     }

    //Local storage for high scores
    submitScoreBtn.addEventListener("click" , function highscore() {

        if (highscoreInputName.value === ""){
            alert("Initials cannot be blank");
            return false;
    }else{
            var savedHighscores = JSON.parse(localStorage.getItem('savedHighscores')) || [];
            var currentUser = highscoreInputName.value;
            var currentHighscore = {
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
    });

        function generateHighscores(){
            highscoreDisplayName.innerHTML = "";
            highscoreDisplayScore.innerHTML = "";
            var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
            for (i=0; i<highscores.length; i++){
                var newNameSpan = document.createElement("li");
                var newScoreSpan = document.createElement("li");
                newNameSpan.textContent = highscores[i].name;
                newScoreSpan.textContent = highscores[i].score;
                highscoreDisplayName.appendChild(newNameSpan);
                highscoreDisplayScore.appendChild(newScoreSpan);
            }
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

    function clearScore(){
        window.localStorage.clear();
        highscoreDisplayName.textContent = "";
        highscoreDisplayScore.textContent = "";
    }


    //replay quiz

    function replayQuiz(){
        highscoreContainer.style.display = "none";
        gameoverDiv.style.display = "none";
        startQuizDiv.style.display = "flex";
        timeLeft = 60;
        score = 0;
        currentQuestionIndex = 0;
    }
    

    //this function checks answers

    function checkAnswer(answer){
       var correct = quizQuestions[currentQuestionIndex].correctAnswer;
        
       //correct
        if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
            score++;
            alert("That Is Correct!");
            currentQuestionIndex++;
            generateQuizQuestion();

        //wrong & add to timer

        }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
            alert("That Is Incorrect. Your penalty is minus one second!")
            currentQuestionIndex++;
            timeLeft--;
            generateQuizQuestion();
            
        }else{
            showScore();
        }
    }

    // This button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);