$(function () {

    let $navbar = $("#navBar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $('.btn').click(function() {
        window.location = "https://www.playstation.com/en-gb/games/bloodborne-ps4/" ;
    });
    $(window).scroll((e) => {
        let scrollTopBar = $(this).scrollTop();


        $('.feature').each((i, el) => {
            if(el.offsetTop < document.documentElement.scrollTop + 100) {
                $('nav a').removeClass('chosen');
                $(`nav a[href="#${el.id}"]`).addClass('chosen');
            }
        });

        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $('nav a').removeClass('chosen');
            $(`nav a[href="#jarnam"]`).addClass('chosen');
        }

        if (scrollTopBar > y_pos + height) {
            $navbar.addClass("navBar-fixed").animate({
                top: 0
            });
        } else if (scrollTopBar <= y_pos) {
            $navbar.removeClass("navBar-fixed").clearQueue().animate({
                top: "-48px"
            }, 0);
            $('nav a').removeClass('chosen');
        }
    });

    slowMo();
    outSlowMo();
});


function slowMo() {
    $("a").on('click', function (event) {
        event.preventDefault();
        $(this).parent().find('a').removeClass('chosen');
        $(this).addClass('chosen');
        let hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    });
}

function outSlowMo() {
    if (location.hash) {
        window.scrollTo(0, 0);
        let dest = location.hash;
        setTimeout(() => {
            $('a[href="' + dest + '"]').trigger("click")
        }, 1000);
    }
}


