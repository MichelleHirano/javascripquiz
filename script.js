//elements
let start_btn = document.querySelector('.start-button button');
let restart_btn = document.querySelector('.buttons .restart');
let quiz_box = document.querySelector('.quiz_box');
let result_box = document.querySelector('.result_box');
let option_list = document.querySelector('.option_list');
let timeText = document.querySelector('.timer .time-text');
let timeCount = document.querySelector('.timer .timer-sec');

//If start quiz
start_btn.onclick = () =>{
    quiz_box.classList.add("activeQuiz)"); //show quiz box
    showQuestions(0); //calling showQuestions function
    queCounter(1);
    startTimer()
}



//Array for questions and answers
var quizQuestions = [
    {
        question:'what is a var?',
        answers:{
            a:'short for varsity',
            b:'a name assigned to a literal value or object',
            c:'a simple collection of similar object that can be accessed by a variable'
        }
        correctAnswer:'b'
    },

    {
        question:'Which is not a valid JavaScript name?',
        answers:{
            a:'5dots',
            b:'he_llo',
            c:'javascriptQuiz'        
        }
        correctAnswer:'a'
    },

    {
        question:'Using ___ statement is how you test for a specific condition',
        answers:{
            a:'Select',
            b:'For',
            c:'If'
        }
    }
    correctAnswer:'c'

]

//asking the question
function buildQuiz(){
    var output[];

    //each question
    quizQuestions.forEach(
        ()
    )

}


