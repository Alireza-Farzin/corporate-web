$(document).ready(function () {

    let topBtn = $('.top-scroll');

    let boxClick = $('#customer .box-customer .item-customer .items')
    let p = document.querySelector('#customer .box-customer .item-customer .items .pr');



    $(window).scroll(function () {

        if ($(window).scrollTop() > 100) {

            topBtn.fadeIn(500)

        } else {

            topBtn.fadeOut(500)

        }

    })

    topBtn.click(function () {
        $('html').animate({
            scrollTop: 0

        }, 1000)
    })



    


});




