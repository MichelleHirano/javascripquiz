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

    // //If start quiz
    // start_btn.onclick = () =>{
    //     quiz_box.classList.add("activeQuiz)"); //show quiz box
    //     showQuestions(0); //calling showQuestions function
    //     queCounter(1);
    //     startTimer()
    // }



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
var currentQuestionIndex =0;
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
    butto
}

