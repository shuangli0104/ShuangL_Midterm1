// Helps us pluralize word formatting by returning if we should
// add an 's' for a given quantity.
//
// For example, we should say '1 car' but '5 cars'
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}

let thingInput = document.querySelector('#problem-2 #thing-num-input');
let thingCountOutput = document.querySelector('#problem-2 #thing-count');


// Write your code here
thingInput.addEventListener('input', ()=>{
        thingCountOutput.textContent = "You clicked the button " + thingInput.value + " thing"+addS(parseInt(thingInput.value));
    
});
