//Variables
let question_text = document.getElementById("curr_question");

let choice_1 = document.getElementById("answer1_image")
let choice_2 = document.getElementById("answer2_image")
let choice_3 = document.getElementById("answer3_image")
let choice_4 = document.getElementById("answer4_image")

let images = document.getElementsByClassName("choice_image");

//init
fetch('/questions.json')
    .then(response => response.json())
    .then(data => {
        updateDisplay(data['question_1']['question'], data['question_1']['choices']);
    }); 

let curr_question_num = 1;

let correct_answers = 0;

let answers = 5;


//function updated on click of any image
// fetch questions.json
//check for correct answer
//correct answer++ if yes, nothing if no
//change all text to prepare for next answer
//if reached end of questions, display score.

function updateQuiz(imageClicked){
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => {
        let curr_question_string = 'question_' + curr_question_num;
        console.log(curr_question_string);
        let correct_answer = data[curr_question_string]['answer'];

        if(imageClicked == correct_answer){
            correct_answer++;
        }
        
        curr_question_num++;
        curr_question_string = 'question_' + curr_question_num;
        if(answers < curr_question_num){
            //display score
        } else {
            console.log('Updating display');
            updateDisplay(data[curr_question_string]['question'], data[curr_question_string]['choices'])
        }
        
    }); 
}

function updateDisplay(question, choices){
    question_text.innerHTML = question;
    choice_1.src = choices[0];
    choice_2.src = choices[1];
    choice_3.src = choices[2];
    choice_4.src = choices[3];
}

choice_1.addEventListener('click', function (){
    updateQuiz(1);
});
choice_2.addEventListener('click', function (){
    updateQuiz(2);
});
choice_3.addEventListener('click', function (){
    updateQuiz(3);
});
choice_4.addEventListener('click', function (){
    updateQuiz(4);
});

