const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here

showRhymesButton.addEventListener('click',()=>{
    rhymesOutput.textContent ="";
    getRhymes(wordInput.value, (result) => {
        if(result.length == 0){
            rhymesOutput.textContent = "no rhymes";
        }
        else{
            for(const key in result){
                const word = result[key].word;
                rhymesOutput.innerHTML += word + "<hr>";
            }
        }
    });
    wordInput.value = "";

});
clearButton.addEventListener('click',()=>{
    wordInput.value = "";
    rhymesOutput.textContent ="";
})