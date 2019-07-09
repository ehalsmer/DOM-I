const digits = document.querySelectorAll('.digit:not(#colon)');
// console.log(digits);

// const startTime = new Date

// function countTen () {
//     digits.forEach((digit)=>digit.textContent='0');

// };

// Timer function:

function timer(){
    const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

let time = new Date();
time.setTime(0);

let interval = setInterval(seconds, 1000);

function seconds(){
    time.setTime(time.getTime()+1);
    // console.log(time.getTime());

    secondOnes.textContent = time.getTime();
    if (time.getTime() === 10){
        secondOnes.style.color = 'red';
        clearInterval(interval);
    }
}

seconds();

// 

let time2 = new Date();
time2.setTime(0);

let interval2 = setInterval(msHund, 100);

function msHund(){
    time2.setTime(time2.getTime()+1);
    msHundreds.textContent = Math.floor(time2.getTime() % 6);
    // console.log(msHundreds.textContent);
    if (time.getTime() === 10){
        msHundreds.style.color = 'red';
        clearInterval(interval2);
        msHundreds.textContent = '0';
    }
}


msHund();

// 

let time3 = new Date();
time3.setTime(0);

let interval3 = setInterval(msT, 10);

function msT(){
    time3.setTime(time3.getTime()+1);
    msTens.textContent = Math.floor(time3.getTime() % 6);
    if (time.getTime() === 10){
        msTens.style.color = 'red';
        clearInterval(interval3);
        msTens.textContent = '0';
    }
}


msT();
}

///////////////// Button event listener
const btn = document.querySelector('button');
btn.addEventListener('click', (event)=>{
    timer();
    btn.setAttribute("disabled", "disabled");
    setTimeout(()=>btn.removeAttribute("disabled"), 10000)

})