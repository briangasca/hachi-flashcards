
//mock flashcards, adding database later. Array of Key/Value pairs.
const flashcards = [
    { front: "What is the capital of France?", back: "Paris" },
    { front: "What is the boiling point of water?", back: "100°C" },
    { front: "What does HTML stand for?", back: "HyperText Markup Language" }
  ];
  
curr_flashcard = 0;
let showing_front = true;

card = document.getElementById("card");
flip_btn = document.getElementById("flip_btn");
prev_btn = document.getElementById("prev_btn");
next_btn = document.getElementById("next_btn");

card.innerHTML = flashcards[curr_flashcard]['front'];

flip_btn.addEventListener('click', function (){
    
    if(curr_flashcard >= 0 && curr_flashcard < flashcards.length){
        if(showing_front){
            card.innerHTML = flashcards[curr_flashcard]['back'];
        } else {
            card.innerHTML = flashcards[curr_flashcard]['front'];
        }
        showing_front = !showing_front;
    }
    
})

prev_btn.addEventListener('click', function (){
    if(curr_flashcard > 0){
        curr_flashcard--;
        card.innerHTML = flashcards[curr_flashcard]['front'];
        showing_front = true;
    } else {
        curr_flashcard = flashcards.length - 1;
        card.innerHTML = flashcards[curr_flashcard]['front'];
        showing_front = true;
    }

})

next_btn.addEventListener('click', function (){
    if(curr_flashcard < flashcards.length - 1){
        card.innerHTML = flashcards[curr_flashcard + 1]['front'];
        curr_flashcard++;
        showing_front = true
    } else {
        curr_flashcard = 0;
        card.innerHTML = flashcards[curr_flashcard]['front'];
        showing_front = true;
    }
    
})

//ADDING FUNCTIONALITY

const add_btn = document.getElementById("add_button");
const popupContent = document.getElementById("modal_content");
const save_btn = document.getElementById("save_btn");
const cancel_btn = document.getElementById("cancel_btn");

add_btn.addEventListener('click', () => {
    popupContent.classList.toggle("hidden");
})

cancel_btn.addEventListener('click', () => {
    popupContent.classList.toggle("hidden");
})

const front_text = document.getElementById("front-input");
const back_text = document.getElementById("back-input");


save_btn.addEventListener('click', () => {
    let curr_front = front_text.value;
    let curr_back = back_text.value;
    if(curr_front != '' && curr_back != ''){
        flashcards.push( {front: curr_front, back: curr_back});
        curr_flashcard = flashcards.length - 1;
        card.innerHTML = flashcards[curr_flashcard]['front'];

        //clearing text
        front_text.value = '';
        back_text.value = '';
    }
})