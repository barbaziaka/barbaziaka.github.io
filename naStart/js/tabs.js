window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("up").style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.15)";
    } else {
        document.getElementById("up").style.boxShadow = "none";
    }
};

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}




$(document).ready(function() {

    // smooth scroll and page up

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

});

let $replaceBanner = ['<div class="connect__banner connect__banner_internet-tv"><div class="connect__descr connect__descr_internet-tv bcg_yellow">Интернет + ТВ</div><div class="connect__icons connect__icons_internet-tv"><img src="img/connect_internet-icon.svg" alt="wifi-icon"><img src="img/connect_tv-icon.svg" alt="tv-icon"></div></div>', '<div class="connect__banner connect__banner_internet-tv-movie"><div class="connect__descr connect__descr_internet-tv-movie bcg_lime">Интернет + ТВ + Кино</div><div class="connect__icons connect__icons_internet-tv-movie"><img src="img/connect_internet-icon.svg" alt="wifi-icon"><img src="img/connect_tv-icon.svg" alt="tv-icon"><img src="img/movie-icon.svg" alt="movie-icon"></div></div>', '<div class="connect__banner connect__banner_tv"><div class="connect__descr connect__descr_tv bcg_blue">ТВ</div><div class="connect__icons connect__icons_tv"><img src="img/connect_tv-icon.svg" alt="tv-icon"></div></div>', '<div class="connect__banner connect__banner_cctv"><div class="connect__descr connect__descr_cctv bcg_violet">Видеонаблюдение</div><div class="connect__icons connect__icons_cctv"><img src="icons/cctv-camera.svg" alt="cctv-icon"></div></div>'];

let $replaceBtn = ['<input name="button" value="подключиться" class="button bcg-btn_yellow txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_lime txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_blue txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_violet txt_white" type="submit" id="btn-confirm" disabled="disabled" >'];

let $replaceSelect = ['<select class="form__select" name="tariff" id="tariff-select"><option value="easy-start-tv">Легкий старт / 50 Мбит/c + ТВ</option><option value="quick-start-tv">Быстрый старт / 100 Мбит/с + ТВ</option><option value="afterburner-tv">Форсаж / 200 Мбит/с + ТВ</option><option value="rocket-tv">Ракета / 300 Мбит/с + ТВ</option></select>', '<select class="form__select" name="tariff" id="tariff-select-tv-movie"><option value="easy-start-tv-movie">Легкий старт / 50 Мбит/c + ТВ + Кино</option><option value="quick-start-tv-movie">Быстрый старт / 100 Мбит/с + ТВ + Кино</option><option value="afterburner-tv-movie">Форсаж / 200 Мбит/с + ТВ + Кино</option><option value="rocket-tv-movie">Ракета / 300 Мбит/с + ТВ + Кино</option></select>', '<select class="form__select" name="tariff" id="tariff-select"><option value="tv">Кабельное ТВ</option><option value="online-tv">Онлайн-ТВ</option><option value="online-tv-movie"> Онлайн-ТВ + Кино</option></select>'];

$(document).ready(function() {

    $('.tariff-1-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
    });

    $('.tariff-1-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('#tariff-select option:nth-child(2)').prop('selected', true);
    });

    $('.tariff-1-3').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('#tariff-select option:nth-child(3)').prop('selected', true);
    });

    $('.tariff-1-4').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('#tariff-select option:last-child').prop('selected', true);
    });

    $('.modal-internet__close').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeOut('slow');
    });



    $('.tariff-2-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        return false;
    });

    $('.tariff-2-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:nth-child(2)').prop('selected', true);
        return false;
    });

    $('.tariff-2-3').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:nth-child(3)').prop('selected', true);
        return false;
    });

    $('.tariff-2-4').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:last-child').prop('selected', true);
        return false;
    });



    $('.tariff-3-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        return false;
    });

    $('.tariff-3-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:nth-child(2)').prop('selected', true);
        return false;
    });

    $('.tariff-3-3').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:nth-child(3)').prop('selected', true);
        return false;
    });

    $('.tariff-3-4').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:last-child').prop('selected', true);
        return false;
    });

    $('.tariff-4-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .six').detach();
        $('.connect__banner').replaceWith($replaceBanner[2]);
        $('#btn-confirm').replaceWith($replaceBtn[2]);
        $('#tariff-select').replaceWith($replaceSelect[2]);
        $('#tariff-select option:first-child').prop('selected', true);
        return false;
    });

    $('.tariff-5-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').detach();
        $('.connect__banner').replaceWith($replaceBanner[3]);
        $('#btn-confirm').replaceWith($replaceBtn[3]);
        $('#tariff-select').replaceWith($replaceSelect[3]);
        $('#tariff-select option:first-child').prop('selected', true);
        return false;
    });
});

$(document).ready(function() {
    $('.tariffs-tab').click(function(e) {
        e.preventDefault();

        $('.tariffs-tab').removeClass('tariffs-tab_active');
        $('.tariffs__content').removeClass('tariffs__content_active');

        $(this).addClass('.tariffs-tab_active');
        $($(this).attr('href')).addClass('tariffs__content_active');

    });

    $('.tariffs-tab:first').click();

    $('a[href="#tariffs"], a[href="#contacts"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 1000);
    });

    $('.accordion-item__trigger').click(function() {
        $(this).next('.accordion-item__content').slideToggle(700);
        if ($(this).find('.accordion-item__icon-down').css('display') == 'none') {

            $(this).find('.accordion-item__icon-down').css('display', 'block');

            $(this).find('.accordion-item__icon-up').css('display', 'none');
        } else {
            $(this).find('.accordion-item__icon-down').css('display', 'none');

            $(this).find('.accordion-item__icon-up').css('display', 'block');
        }
    });


    $('#checkbox-confirm').click(function() {
        if ($(this).is(':checked')) {
            $('#btn-confirm').removeAttr('disabled');
        } else {
            $('#btn-confirm').attr('disabled', 'disabled');
        }
    });

});

var letAnimate = false;

function scrollTracking() {
    if (letAnimate) {
        return false;
    }

    let wt = $(window).scrollTop();
    let wh = $(window).height();
    let et = $('.advantages__wrapper').offset().top - 100;
    let eh = $('.advantages__wrapper').outerHeight();
    let dh = $(document).height();


    if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        block_show = true;

        // Код анимации
        $('.advantages__wrapper div').addClass('animate__animated animate__fadeInUp');
        $('.anime div').addClass('animate__animated animate__fadeInLeftBig animate__delay-2s');
    }
}

$(window).scroll(function() {
    scrollTracking();
});

$(document).ready(function() {
    scrollTracking();
});