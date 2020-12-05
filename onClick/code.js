let box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
    box[i].classList.add("active");
};

/*
let temp = -1;
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function () {
        if(temp>-1)
        {
            box[temp].classList.remove("active");
        }
        box[i].classList.add("active");
        temp = i;
    });
};
*/
/*
let temp = 0;
for (let i = 0; i < box.length; i++) {

    box[i].addEventListener("click", function () {
        if (temp == 1) {
            rmv();
        }
        box[i].classList.add("active");
        temp = 1;
    });
};

function rmv() {
    for (let i = 0; i < box.length; i++) {
        box[i].classList.remove("active");
    };
}*/