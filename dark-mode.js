let darkBtn = document.getElementById('dark');
let lightBtn = document.getElementById('light');

let a = document.querySelector('.label-1');
let b = document.querySelector('.label-2');

let changeColors = [a, b];
const changeBg = [focusInput, breakInput, saveSettings, start, reset, pause];

lightBtn.style.display = 'none';

darkBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#047857';

    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';

    changeColors.forEach((Array) => {
        Array.style.color = '#4ade80';
    });

    changeBg.forEach((Array) => {
        Array.style.backgroundColor = '#4ade80';
    });
});

lightBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#4ade80';

    darkBtn.style.display = 'block';
    lightBtn.style.display = 'none';

    changeColors.forEach((Array) => {
        Array.style.color = '#14532d';
    });

    changeBg.forEach((Array) => {
        Array.style.backgroundColor = '#14532d';
    });
});
