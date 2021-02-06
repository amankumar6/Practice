function navSlide() {
    $('.burger').click(() => {
        // for making sidebar visible
        $('.nav-links').toggleClass('nav-active');

        // animating item list 
        $(".nav-links li").each(function (index) {
            this.style.animation ? this.style.animation = '' : this.style.animation = `navlinkfade 500ms ease forwards ${index/10+0.2}s`
        })

        // animating the hamburger button
        $('.burger').toggleClass('toggle');

        $("body").toggleClass("removeOverflow")
    });
}

$(document).ready(function(){
    if (screen.width<=800) {
        $(".random").clone().insertAfter("#last")
        $("div .random").css("display","none")
    } 
})

navSlide();
