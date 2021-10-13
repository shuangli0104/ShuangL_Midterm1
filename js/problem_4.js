const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here
messageInput.addEventListener('input',()=>{
    let left_word;
    
    if(messageInput.value.length <=MAX_CHARACTERS){
        left_word = MAX_CHARACTERS - messageInput.value.length;
        messageInput.classList.remove("is-invalid");
        messageFeedback.classList.remove("invalid-feedback");
        messageInput.classList.add("is-valid");
        messageFeedback.classList.add("valid-feedback");
        messageFeedback.textContent = left_word+" characters left";
    }
    else{
        left_word = messageInput.value.length - MAX_CHARACTERS;
        messageInput.classList.add("is-invalid");
        messageFeedback.classList.add("invalid-feedback");
        messageFeedback.textContent = left_word + " characters too long";
    }
})