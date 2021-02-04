function animation() {
    const text = baffle('.data');
    text.set({
        characters:
            'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()▓░▒ ▒/░▒░ ▓██<░ /▓░ /▒█░> ▓░▓▒ ░<▓ █░█▒ /░██',
        speed: 60,
    });
    text.start();
    text.reveal(2000);
}

fetch('http://api.quotable.io/random')
    .then((blob) => blob.json())
    .then((data) => (document.querySelector('.data').innerHTML = `${data.content} - ${data.author}`))
    .then(animation);
