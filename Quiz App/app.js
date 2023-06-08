var questionsList = [
    {
        question: "HTML Stands For _______",
        answer: "Hyper Text Markup Language",
        options:[
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ]
    },
    {
        question: "What does CSS stand for _______",
        answer: "Cascading Style Sheet",
        options:[
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ]
    },
    {
        question: "What does SQL stand for _______",
        answer: "Structured Query Language",
        options:[
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ]
    },
    {
        question: "What does PHP stand for _______",
        answer: "Hypertext Preprocessor",
        options:[
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ]
    },
    {
        question: "What does XML stand for _______",
        answer: "eXtensible Markup Language",
        options:[
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language",
        ]
    },

]

var displayQuestion = document.getElementById("displayQuestion");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var optionsParent = document.getElementById("optionsParent");

var indexVal = 0;
var marks = 0;

function renderQuestion() {
    var que = questionsList[indexVal];
    displayQuestion.innerHTML = que.question;
    totalQuestionNumber.innerHTML = questionsList.length;
    currentQuestionNumber.innerHTML = indexVal + 1;
    
    optionsParent.innerHTML = "";

    for (var i = 0; i < que.options.length; i++) {
        optionsParent.innerHTML += ` <div class="col-md-6 my-3 ">
        <button onclick="checkAnswer('${que.answer}', '${que.options[i]}')" class="btn btn-outline-danger py-2 rounded-5 w-100 custom_btn" >${que.options[i]}</button>
       </div>`;
        
    }

}
function nextQue(){
    indexVal++;
    renderQuestion()
}

function checkAnswer(answer, selectedOption){
    console.log('Correct Answer:', answer);
    console.log('Selected Option:', selectedOption);
if(answer == selectedOption){
    marks = marks + 1;
}
console.log('Marks:', marks);
nextQue()
}
renderQuestion();