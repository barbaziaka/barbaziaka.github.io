document.querySelectorAll(".tariffs-tab").forEach((item) =>
    item.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.target.getAttribute("href").replace("#", "");

        document.querySelectorAll(".tariffs-tab").forEach(
            (child) => child.classList.remove("tariffs-tab_active")
        );
        document.querySelectorAll(".tariffs__content").forEach(
            (child) => child.classList.remove("tariffs__content_active")
        );

        item.classList.add("tariffs-tab_active");
        document.getElementById(id).classList.add("tariffs__content_active");

    })
);

document.querySelector(".tariffs-tab").click();


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("up").style.padding = "20px 0 0 0";
        document.getElementById("up").style.height = "80px";
        document.getElementById("logo").style.width = "180px";
        document.getElementById("up").style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
    } else {
        document.getElementById("up").style.padding = "70px 0 0 0";
        document.getElementById("up").style.height = "145px";
        document.getElementById("logo").style.width = "239px";
        document.getElementById("up").style.boxShadow = "none";
    }
}

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


let $replaceBanner = ['<div class="connect__banner connect__banner_internet-tv"><div class="connect__descr connect__descr_internet-tv">интернет + ТВ</div><div class="connect__icons connect__icons_internet-tv"><img src="img/connect_internet-icon.svg" alt="wifi-icon"><img src="img/connect_tv-icon.svg" alt="tv-icon"></div></div>', '<div class="connect__banner connect__banner_tv"><div class="connect__descr connect__descr_tv">интернет + ТВ + Кино</div><div class="connect__icons connect__icons_tv"><img src="img/connect_internet-icon.svg" alt="wifi-icon"><img src="img/connect_tv-icon.svg" alt="tv-icon"><img src="img/movie-icon.svg" alt="movie-icon"></div></div>'];

let $replaceBtn = ['<input value="подключиться" class="button button_internet-tv" type="submit">', '<input value="подключиться" class="button button_internet-tv-movie" type="submit">'];

let $replaceSelect = ['<select class="form__select" name="tariff" id="tariff-select"><option value="easy-start">Легкий старт / 50 Мбит/c + ТВ</option><option value="quick-start">Быстрый старт / 100 Мбит/с + ТВ</option><option value="afterburner">Форсаж / 200 Мбит/с + ТВ</option><option value="rocket">Ракета / 300 Мбит/с + ТВ</option></select>'];

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

    $('.modal__close').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeOut('slow');
    });



    $('.tariff-2-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        return false;
    });

    $('.tariff-2-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:nth-child(2)').prop('selected', true);
        return false;
    });

    $('.tariff-2-3').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:nth-child(3)').prop('selected', true);
        return false;
    });

    $('.tariff-2-4').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('#tariff-select option:last-child').prop('selected', true);
        return false;
    });




    $('.tariff-3-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);

        return false;
    });

    $('.tariff-3-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:nth-child(2)').prop('selected', true);
        return false;
    });

    $('.tariff-3-3').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:nth-child(3)').prop('selected', true);
        return false;
    });

    $('.tariff-3-4').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('#tariff-select option:last-child').prop('selected', true);
        return false;
    });
});