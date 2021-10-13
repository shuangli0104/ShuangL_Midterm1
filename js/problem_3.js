const clickCountButton = document.querySelector('#problem-3 #click-count');

function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
}
// write your code here
let count = 0;
clickCountButton.addEventListener('click',()=>{
    count++;
    clickCountButton.textContent = "You clicked the button " + count + " time"+addS(count);

})