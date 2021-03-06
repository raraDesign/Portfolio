//Initialize Swiper
var swiper = new Swiper(".slide", {
    direction: "vertical",
    sensitivity: 3,
    mousewheel: true,
    touchRatio: 2,
    // followFinger: false,
    pagination: {
        el: ".slide .swiper-pagination",
        type: "fraction",
    },
    on: {
        reachEnd: function () {
            swiper.mousewheel.disable();
        }
    },
    noSwipingID: 'no-swiping' //슬라이드 가장 마지막에서 touch 스크롤 활성화하기 위해 가장 마지막 슬라이드 no swiper
});
// 슬라이드 가장 마지막에서 스크롤 활성화
window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
        swiper.mousewheel.enable();
    } else if (event.deltaY > 0) {}
});

// //버튼 클릭시 스크롤 이동
$(document).ready(function () {
    $("#scroll").on("click", function (event) {
        var offset = $(".Sec6").offset().top;
        // swiper.mousewheel.disable();
        $("html, body").animate({
            scrollTop: offset,
        }, 400);
        console.log(offset);
    });
});
//스크롤이내려가면(슬라이드가끝나면) fixed된 버튼이 사라짐
$(window).scroll(function () {
    if ($(window).scrollTop() == 0) {
        $('#scroll').show();
    } else {
        $('#scroll').hide();
    }
});

