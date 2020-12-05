let coll = document.querySelectorAll(".collapsible");
let icon = document.querySelectorAll("#icc");
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var temp = i;
        icon[temp].classList.replace('fa-angle-down', 'fa-angle-up');
        let content = this.nextElementSibling;
        content.style.maxHeight ? content.style.maxHeight = null:content.style.maxHeight = content.scrollHeight + "px";
    });
}