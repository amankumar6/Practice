const text = document.querySelector('.fancy'),
    strText = 'Fancy Schemnzy',
    splitText = strText.split('');

let char = 0,
    currentColorClass = 1,
    timer = setInterval(onTick, 100);

splitText.forEach((element) => (text.innerHTML += `<span>${element}</span>`));

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        char = 0;
        complete();
        return setInterval(changeColor, 100);
    }
}

function changeColor() {
    const span = text.querySelectorAll('span')[char];

    if (currentColorClass > 1)
        span.classList.remove(`color-${currentColorClass - 1}`);

    if (currentColorClass == 1) span.classList.remove('color-10');

    if (currentColorClass > 10) currentColorClass = 1;

    span.classList.add(`color-${currentColorClass}`);

    char++;

    if (char === splitText.length) {
        char = 0;
        currentColorClass++;
        changeColor();
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
