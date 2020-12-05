var volumeSlider = document.querySelector(".volume_slider");

let start_value = volumeSlider.getAttribute("value");

let x = start_value;
let color = 'linear-gradient(90deg,  rgb(29, 185, 84)' + x + '% , rgb(214, 214, 214)' + x + '%)';
volumeSlider.style.background = color;

volumeSlider.addEventListener("mousemove", function () {
    x = volumeSlider.value;
    color = 'linear-gradient(90deg,  rgb(29, 185, 84)' + x + '% , rgb(214, 214, 214)' + x + '%)';
    volumeSlider.style.background = color;
});