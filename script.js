//elements
const start_btn = document.querySelector('.start-button button');
const restart_btn = document.querySelector('.buttons .restart');
const quiz_box = 

//If start quiz
start_btn.onclick = () =>{
    
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
        question:'What syntax can you use to hold your Javascript in HTML?',
        answers:{
            a:'<src>',
            b:'<script>',
            c:'<java>'
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


