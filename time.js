let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');

let focusMins = document.getElementById('focusMins');
let focusSecs = document.getElementById('focusSecs');

let breakMins = document.getElementById('breakMins');
let breakSecs = document.getElementById('breakSecs');

let aud = new Audio('sound/bell.mp3');
let aud2 = new Audio('sound/snaps.mp3');

let focusTimer;
let breakTimer;

// ?Start Event
start.addEventListener('click', () => {
    if (focusTimer === undefined) {
        focusTimer = setInterval(timer, 1000);

        breakTimer = setInterval(break_Timer, 1000);
    } else {
        alert('Timer is already running');
    }
});

// ? Reset Event
reset.addEventListener('click', () => {
    focusMins.innerText = '25';
    focusSecs.innerText = '00';

    breakMins.innerText = '05';
    breakSecs.innerText = '00';

    focusInput.value = 0;
    breakInput.value = 0;
    pauseTimer();
    focusTimer = undefined;
});

// ? pause event
pause.addEventListener('click', () => {
    pauseTimer();
    focusTimer = undefined;
});

// ? Start Timer Function
function timer() {
    // ? work timer countdown
    if (focusSecs.innerText != 0) {
        focusSecs.innerText--;
    } else if (focusMins.innerText != 0 && focusSecs.innerText == 0) {
        focusSecs.innerText = 59;
        focusMins--;
    } else if (focusMins.innerText == 0 || focusSecs.innerText == 0) {
        clearInterval(focusTimer);
        aud.play();
    }
}

function break_Timer() {
    // ? break timer countdown
    if (focusMins.innerText == 0 && focusSecs.innerText == 0) {
        if (breakSecs.innerText != 0) {
            breakSecs.innerText--;
        } else if (breakMins.innerText != 0 && breakSecs.innerText == 0) {
            breakSecs.innerText = 59;
            breakMins.innerText--;
        } else {
            clearInterval(breakTimer);
            aud2.play();
        }
    }
}

// ? Pause Timer Function
function pauseTimer() {
    clearInterval(focusTimer);
    clearInterval(breakTimer);
}
