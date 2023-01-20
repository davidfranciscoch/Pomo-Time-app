let focusInput = document.getElementById('focusTime');
let breakInput = document.getElementById('breakTime');

let saveSettings = document.querySelector('.saveBtn');

saveSettings.addEventListener('click', () => {
    focusMins.innerText = focusInput.value;
    breakMins.innerText = breakInput.value;
});
