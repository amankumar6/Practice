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

$.get('http://api.quotable.io/random', (data) => {
    $('.data').text(`${data.content} - ${data.author}`);
    animation();
});
