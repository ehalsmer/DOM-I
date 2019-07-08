const digits = document.querySelectorAll('.digit:not(#colon)');
// console.log(digits);

// const startTime = new Date

// function countTen () {
//     digits.forEach((digit)=>digit.textContent='0');

// };

// countTen();
const secondOnes = document.querySelector('#secondOnes');



let time = new Date();
time.setTime(0);

let interval = setInterval(timer, 1000);

function timer(){
    time.setTime(time.getTime()+1);
    // console.log(time.getTime());

    secondOnes.textContent = time.getTime();
    if (time.getTime() === 10){
        // time.setTime(0);
        secondOnes.style.color = 'red';
        clearInterval(interval);
    }
    // document.querySelector('#msHundreds').textContent = time.getTime()

}
timer();