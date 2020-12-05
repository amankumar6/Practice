const progress = document.querySelector('.progress');
const currentTime = document.querySelector('.current_time');
const duration = document.querySelector('.total_duration');
const progress_div = document.querySelector('.progress_div');
const music = document.querySelector('audio');
const shadow = document.querySelector('.music_container');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const fillbar = document.querySelector(".fill");
const img = document.querySelector('img');
const songList = [{
        name: "s1",
        title: "title-1",
        artist: "artist-1",
    },
    {
        name: "s2",
        title: "title-2",
        artist: "artist-2",
    },
    {
        name: "s3",
        title: "title-3",
        artist: "artist-3",
    },
    {
        name: "s4",
        title: "title-4",
        artist: "artist-4",
    },
    {
        name: "s5",
        title: "title-5",
        artist: "artist-5",
    },
];

let isPlay = false;
let songIndex = 0;
let loader = document.getElementById("loading");

function loadnow() {
    loader.style.display = 'none';
}

function preloader() {
    setTimeout(loadnow, 2000);
};

const playmusic = () => {
    isPlay = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add('animation');
};

const pauseMusic = () => {
    isPlay = false;
    music.pause();
    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove('animation');
};
const oneTime = ['one'];
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        if (isPlay) {
            pauseMusic();
        } else {
            playmusic();
        }
    } else if (e.keyCode == 39 && oneTime[0] !== 'one') {
        if (isPlay) {
            oneTime.shift();
            music.currentTime += 5;
        } else {
            music.currentTime += 5;
        }

    } else if (e.keyCode == 37) {
        if (isPlay) {
            music.currentTime -= 5;
        } else {
            music.currentTime -= 5;
        }

    }
};

play.addEventListener('click', () => {
    isPlay ? pauseMusic() : playmusic();
});

const loadSong = (songList) => {
    title.textContent = songList.title;
    artist.textContent = songList.artist;
    music.src = "music/" + songList.name + ".mp3";
    img.src = "image/" + songList.name + ".jpg";
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songList.length) % songList.length;
    loadSong(songList[songIndex]);
    playmusic();
};

const nextSong = () => {
    songIndex = (songIndex + 1) % songList.length;
    loadSong(songList[songIndex]);
    playmusic();
};

prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);

const progress_circle = document.querySelector('.progress_circle');

music.addEventListener("timeupdate", () => {
    let position = music.currentTime / music.duration;
    progress.style.width = position * 100 + "%";
    //progress_circle.style.marginLeft = position * 100 + "%";
    convertTime(Math.round(music.currentTime));
    if (music.ended) {
        nextSong();
    }
});

function convertTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    sec = sec < 10 ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;
    totalTime(Math.round(music.duration));
};

function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    sec = sec < 10 ? "0" + sec : sec;
    if (music.duration) {
        duration.textContent = min + ":" + sec;
    }
};

progress_div.addEventListener('click', (event) => {
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * music.duration;
    music.currentTime = move_progress;
});