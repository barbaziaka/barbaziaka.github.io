let $replaceBanner = ['<div class="connect__banner connect__banner_internet-tv"><div class="connect__descr connect__descr_internet-tv bcg_yellow">Интернет + ТВ</div><div class="connect__icons connect__icons_internet-tv"><img src="img/connect_internet-icon.svg" alt="wifi-icon"><img src="img/connect_tv-icon.svg" alt="tv-icon"></div></div>', '<div class="connect__banner connect__banner_internet-tv-movie"><div class="connect__descr connect__descr_internet-tv-movie bcg_lime">Интернет + ТВ + Кино</div><div class="connect__icons connect__icons_internet-tv-movie"><img src="img/connect_internet-icon.svg" alt="wifi-icon"><img src="img/connect_tv-icon.svg" alt="tv-icon"><img src="img/movie-icon.svg" alt="movie-icon"></div></div>', '<div class="connect__banner connect__banner_tv"><div class="connect__descr connect__descr_tv bcg_blue">ТВ</div><div class="connect__icons connect__icons_tv"><img src="img/connect_tv-icon.svg" alt="tv-icon"></div></div>', '<div class="connect__banner connect__banner_cctv"><div class="connect__descr connect__descr_cctv bcg_violet">Видеонаблюдение</div><div class="connect__icons connect__icons_cctv"><img src="icons/cctv-camera.svg" alt="cctv-icon"></div></div>', '<div class="connect__banner"><div class="connect__descr bcg_red">Интернет</div><div class="connect__icons"><img src="img/connect_internet-icon.svg" alt="wifi-icon"></div></div>'];

let $replaceBtn = ['<input name="button" value="подключиться" class="button bcg-btn_yellow txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_lime txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_blue txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_violet txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" class="button bcg-btn_red txt_white" type="submit" value="подключиться" id="btn-confirm" disabled="disabled" />'];

let $replaceSelect = ['<select class="form__select" name="tariff" id="tariff-select"><option value="easy-start-tv">Легкий старт / 50 Мбит/c + ТВ</option><option value="quick-start-tv">Быстрый старт / 100 Мбит/с + ТВ</option><option value="afterburner-tv">Форсаж / 200 Мбит/с + ТВ</option><option value="rocket-tv">Ракета / 300 Мбит/с + ТВ</option></select>', '<select class="form__select" name="tariff" id="tariff-select"><option value="easy-start-tv-movie">Легкий старт / 50 Мбит/c + ТВ + Кино</option><option value="quick-start-tv-movie">Быстрый старт / 100 Мбит/с + ТВ + Кино</option><option value="afterburner-tv-movie">Форсаж / 200 Мбит/с + ТВ + Кино</option><option value="rocket-tv-movie">Ракета / 300 Мбит/с + ТВ + Кино</option></select>', '<select class="form__select" name="tariff" id="tariff-select"><option value="tv">Кабельное ТВ</option><option value="online-tv">Онлайн-ТВ</option><option value="online-tv-movie"> Онлайн-ТВ + Кино</option></select>', '<select class="form__select" name="tariff" id="tariff-select"><option value="easy-start">Легкий старт / 50 Мбит/с</option><option value="quick-start">Быстрый старт / 100 Мбит/с</option><option value="afterburner">Форсаж / 200 Мбит/с</option><option value="rocket">Ракета / 300 Мбит/с</option></select>', ' <select class="form__select" name="tariff" id="tariff-select"><option value="cabel-tv">Кабельное ТВ</option><option value="online-tv">Онлайн-ТВ</option><option value="online-tv-movie">Онлайн-ТВ + Кино</option></select>'];

$(document).ready(function() {

    // smooth scroll and page up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    let cost = [$('.price-1-1').text(), $('.price-1-2').text(), $('.price-1-3').text(), $('.price-1-4').text(), $('.price-2-1').text(), $('.price-2-2').text(), $('.price-2-3').text(), $('.price-2-4').text(), $('.price-3-1').text(), $('.price-3-2').text(), $('.price-3-3').text(), $('.price-3-4').text(), $('.price-4-1').text(), $('.price-5-1').text()];

    let currentValueCost = ['easy-start', 'quick-start', 'afterburner', 'rocket', 'easy-start-tv', 'quick-start-tv', 'afterburner-tv', 'rocket-tv', 'easy-start-tv-movie', 'quick-start-tv-movie', 'afterburner-tv-movie', 'rocket-tv-movie', 'cabel-tv'];


    function replaceCost() {
        $('#tariff-select').on('change', function() {
            for (let i = 0; i < currentValueCost.length; i++) {
                if ($(this).val() === currentValueCost[i]) {
                    $('.form-confirm__cost').text(cost[i]);
                }
            }
            return false;
        });
    }

    $('.tariff-1-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[4]);
        $('#btn-confirm').replaceWith($replaceBtn[4]);
        $('#tariff-select').replaceWith($replaceSelect[3]);
        $('.form-confirm__cost').text(cost[0]);
        replaceCost();




        // $('.form-check__item-pay-period input:checkbox').click(function() {
        //     if ($(this).is(':checked')) {
        //         $('.form-check__item-pay-period input:checkbox').not(this).prop('checked', false);


        //         $(".form-check__item-pay-period input:checkbox").on("change", function() {

        //             if ($('#checkbox-year').is(":checked")) {
        //                 $(this).change(function() {
        //                     $('.form-confirm__cost').css('text-decoration', 'line-through');
        //                     $('.form-confirm__cost').after('<div class="good"></div>');
        //                     let $newCost = $('.good').text(costHalfYearValues[0]);
        //                     $newCost.css({ 'color': 'red', 'font-size': '30px', 'font-weight': '700', 'margin-left': '30px' });
        //                 });
        //             } else {
        //                 $('.good').detach();
        //                 $('.form-confirm__cost').css('text-decoration', 'none');
        //             }
        //             if ($('#checkbox-half-year').is(":checked")) {
        //                 $(this).change(function() {
        //                     $('.form-confirm__cost').css('text-decoration', 'line-through');
        //                     $('.form-confirm__cost').after('<div class="good"></div>');
        //                     let $newCost = $('.good').text(costHalfYearValues[0]);
        //                     $newCost.css({ 'color': 'red', 'font-size': '30px', 'font-weight': '700', 'margin-left': '30px' });
        //                 });
        //             } else {
        //                 $('.good').detach();
        //                 $('.form-confirm__cost').css('text-decoration', 'none');
        //             }
        //             if ($('#checkbox-month').is(":checked")) {
        //                 $(this).change(function() {
        //                     $('.good').detach();
        //                     $('.form-confirm__cost').css('text-decoration', 'none');
        //                 });
        //             }
        //         });
        //     }
        // });

        $('.form-check__item-pay-period input:checkbox').click(function() {
            if ($(this).is(':checked')) {
                $('.form-check__item-pay-period input:checkbox').not(this).prop('checked', false);
                $(".form-check__item-pay-period input:checkbox").on('change', function() {
                    if ($('#checkbox-year').is(':checked')) {
                        $('.form-confirm__cost').replaceWith('<div class="form-confirm__discount"><span>400 р.</span>360 р.</div>');
                    } else if ($('#checkbox-half-year').is(':checked')) {
                        $('.form-confirm__cost').replaceWith('<div class="form-confirm__discount"><span>400 р.</span>380 р.</div>');
                    } else if ($('#checkbox-year:not(:checked)')) {
                        $('.form-confirm__discount').replaceWith('<div class="form-confirm__cost">400 р.</div>');
                    } else if ($('#checkbox-half-year:not(:checked)')) {
                        $('.form-confirm__discount').replaceWith('<div class="form-confirm__cost">400 р.</div>');
                    }

                });
            }
        });

        return false;
    });



    $('.tariff-1-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[4]);
        $('#btn-confirm').replaceWith($replaceBtn[4]);
        $('#tariff-select').replaceWith($replaceSelect[3]);
        $('#tariff-select option:nth-child(2)').prop('selected', true);
        $('.form-confirm__cost').text(cost[1]);
        replaceCost();

        return false;
    });

    $('.tariff-1-3').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[4]);
        $('#btn-confirm').replaceWith($replaceBtn[4]);
        $('#tariff-select').replaceWith($replaceSelect[3]);
        $('#tariff-select option:nth-child(3)').prop('selected', true);
        $('.form-confirm__cost').text(cost[2]);
        replaceCost();
        return false;
    });

    $('.tariff-1-4').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[4]);
        $('#btn-confirm').replaceWith($replaceBtn[4]);
        $('#tariff-select').replaceWith($replaceSelect[3]);
        $('#tariff-select option:last-child').prop('selected', true);
        $('.form-confirm__cost').text(cost[3]);
        replaceCost();
        return false;
    });



    $('.tariff-2-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('.form-confirm__cost').text(cost[4]);
        replaceCost();
        return false;
    });

    $('.tariff-2-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:nth-child(2)').prop('selected', true);
        $('.form-confirm__cost').text(cost[5]);
        replaceCost();
        return false;
    });

    $('.tariff-2-3').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:nth-child(3)').prop('selected', true);
        $('.form-confirm__cost').text(cost[6]);
        replaceCost();
        return false;
    });

    $('.tariff-2-4').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:last-child').prop('selected', true);
        $('.form-confirm__cost').text(cost[7]);
        replaceCost();
        return false;
    });



    $('.tariff-3-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('.form-confirm__cost').text(cost[8]);
        replaceCost();
        return false;
    });

    $('.tariff-3-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:nth-child(2)').prop('selected', true);
        $('.form-confirm__cost').text(cost[9]);
        replaceCost();
        return false;
    });

    $('.tariff-3-3').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:nth-child(3)').prop('selected', true);
        $('.form-confirm__cost').text(cost[10]);
        replaceCost();
        return false;
    });

    $('.tariff-3-4').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:last-child').prop('selected', true);
        $('.form-confirm__cost').text(cost[11]);
        replaceCost();
        return false;
    });



    $('.tariff-4-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[2]);
        $('#btn-confirm').replaceWith($replaceBtn[2]);
        $('#tariff-select').replaceWith($replaceSelect[4]);
        $('#tariff-select option:first-child').prop('selected', true);
        $('.five, .seven, .eight').addClass('visible');
        $('.one, .two, .three, .four, .six').addClass('hidden');
        $('.form-confirm__cost').text(cost[12]);
        return false;
    });



    $('.tariff-5-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[3]);
        $('#btn-confirm').replaceWith($replaceBtn[3]);
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').addClass('hidden');
        $('.form-confirm__cost').text('17 500 р. (6 месяцев)');
        return false;
    });

    $('.modal-internet__close').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeOut('fast');
        $('#tariff-select').prop('selectedIndex', 0);
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').removeClass('visible');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').removeClass('hidden');
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

    $('a[href="#tab-1"], a[href="#tab-2"],a[href="#tab-3"], a[href="#tab-3"], a[href="#tab-4"], a[href="#tab-5"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 160
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



    $(window).scroll(function() {
        let element = $('.advantages__wrapper');

        let scroll = $(window).scrollTop() + $(window).height();
        let offset = element.offset().top + element.height();
        if (scroll > offset) {
            $(element).removeClass('hidden');
            $(element).addClass('animate__animated animate__fadeInUp animate__slow');
        }
    });

    $(window).scroll(function() {
        let element = $('.rocket_start');

        let scroll = $(window).scrollTop() + $(window).height();
        let offset = element.offset().top + element.height();
        if (scroll > offset) {
            $(element).removeClass('hidden');
            $(element).addClass('animate__animated animate__bounceInLeft animate__slow');
        }
    });

    $(window).scroll(function() {
        let element = $('.rocket_first-step');

        let scroll = $(window).scrollTop() + $(window).height();
        let offset = element.offset().top + element.height();
        if (scroll > offset) {
            $(element).removeClass('hidden');
            $(element).addClass('animate__animated animate__bounceInLeft animate__slow');
        }
    });


    $(window).scroll(function() {
        let element = $('.rocket_second-step');

        let scroll = $(window).scrollTop() + $(window).height();
        let offset = element.offset().top + element.height();
        if (scroll > offset) {
            $(element).removeClass('hidden');
            $(element).addClass('animate__animated animate__bounceInLeft animate__slow');
        }
    });

    $(window).scroll(function() {
        let element = $('.rocket_finish');

        let scroll = $(window).scrollTop() + $(window).height();
        let offset = element.offset().top + element.height();
        if (scroll > offset) {
            $(element).removeClass('hidden');
            $(element).addClass('animate__animated animate__bounceInLeft animate__slow');
        }
    });

});








// $(window).scroll(function() {
//     let element = [$('.advantages__wrapper, .contacts__wrapper')];
//     for (let i = 0; i < element.length; i++) {
//         let scroll = $(window).scrollTop() + $(window).height();
//         let offset = element[i].offset().top + element[i].height();
//         if (scroll > offset) {
//             $(element[i]).removeClass('hidden');
//             $(element[i]).addClass('animate__animated animate__fadeInUp animate__slow');
//         }
//     }

// });


// let startAnimate = false;

// function scrollTracking() {
//     if (startAnimate) {
//         return false;
//     }

//     let wt = $(window).scrollTop();
//     let wh = $(window).height();
//     let et = $('.advantages__wrapper').offset().top - 100;
//     let eh = $('.advantages__wrapper').outerHeight();
//     let dh = $(document).height();


//     if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
//         block_show = true;

//         // Код анимации
//         $('.advantages__wrapper div').addClass('animate__animated animate__fadeInUp');
//     }
// }

// $(window).scroll(function() {
//     scrollTracking();
// });

// $(document).ready(function() {
//     scrollTracking();
// });


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

// const animItems = document.querySelectorAll('.anim-items');

// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);

//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }

//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('animate__animated animate__bounce animate__faster');
//             } else { if (!animItem.classList.contains('anim-disabled')) animItem.classList.remove('animate__animated animate__bounce animate__faster'); }

//         }
//     }

//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//     }
// }