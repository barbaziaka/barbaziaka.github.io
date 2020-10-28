let $replaceBanner = ['<div class="connect__banner connect__banner_internet-tv"><div class="connect__descr connect__descr_internet-tv bcg_yellow">Интернет + ТВ</div><div class="connect__icons connect__icons_internet-tv"><img src="icons/connect_internet-icon.svg" alt="wifi-icon"><img src="icons/connect_tv-icon.svg" alt="tv-icon"></div></div>', '<div class="connect__banner connect__banner_internet-tv-movie"><div class="connect__descr connect__descr_internet-tv-movie bcg_lime">Интернет + ТВ + Кино</div><div class="connect__icons connect__icons_internet-tv-movie"><img src="icons/connect_internet-icon.svg" alt="wifi-icon"><img src="icons/connect_tv-icon.svg" alt="tv-icon"><img src="icons/movie-icon.svg" alt="movie-icon"></div></div>', '<div class="connect__banner connect__banner_tv"><div class="connect__descr connect__descr_tv bcg_blue">Кабельное телевидение</div><div class="connect__icons connect__icons_tv"><img src="icons/connect_tv-icon.svg" alt="tv-icon"></div></div>', '<div class="connect__banner connect__banner_cctv"><div class="connect__descr connect__descr_cctv bcg_violet">Видеонаблюдение</div><div class="connect__icons connect__icons_cctv"><img src="icons/cctv-camera.svg" alt="cctv-icon"></div></div>', '<div class="connect__banner"><div class="connect__descr bcg_red">Интернет</div><div class="connect__icons"><img src="icons/connect_internet-icon.svg" alt="wifi-icon"></div></div>'];

let $replaceBtn = ['<input name="button" value="подключиться" class="button bcg-btn_yellow txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_lime txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_blue txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" value="подключиться" class="button bcg-btn_violet txt_white" type="submit" id="btn-confirm" disabled="disabled" >', '<input name="button" class="button bcg-btn_red txt_white" type="submit" value="подключиться" id="btn-confirm" disabled="disabled" />'];

let $replaceSelect = ['<select class="form__select" name="tariff" id="tariff-select"><option value="easy-start-tv">Легкий старт / 50 Мбит/c + ТВ</option><option value="quick-start-tv">Быстрый старт / 100 Мбит/с + ТВ</option><option value="afterburner-tv">Форсаж / 200 Мбит/с + ТВ</option><option value="rocket-tv">Ракета / 300 Мбит/с + ТВ</option></select>', '<select class="form__select" name="tariff" id="tariff-select"><option value="easy-start-tv-movie">Легкий старт / 50 Мбит/c + ТВ + Кино</option><option value="quick-start-tv-movie">Быстрый старт / 100 Мбит/с + ТВ + Кино</option><option value="afterburner-tv-movie">Форсаж / 200 Мбит/с + ТВ + Кино</option><option value="rocket-tv-movie">Ракета / 300 Мбит/с + ТВ + Кино</option></select>', '<select class="form__select" name="tariff" id="tariff-select"><option value="tv">Кабельное ТВ</option><option value="online-tv">Онлайн-ТВ</option><option value="online-tv-movie"> Онлайн-ТВ + Кино</option></select>', '<select class="form__select" name="tariff" id="tariff-select"><option value="easy-start">Легкий старт / 50 Мбит/с</option><option value="quick-start">Быстрый старт / 100 Мбит/с</option><option value="afterburner">Форсаж / 200 Мбит/с</option><option value="rocket">Ракета / 300 Мбит/с</option></select>', ' <select class="form__select" name="tariff" id="tariff-select"><option value="cabel-tv">Кабельное телевидение</option><option value="online-tv">Онлайн-ТВ</option><option value="online-tv-movie">Онлайн-ТВ + Кино</option></select>'];

$(document).ready(function() {
    let animClass = 'animate__animated animate__slideInLeft animate__slow';

    let tariff = [$('.tariff-1-1'), $('.tariff-1-2'), $('.tariff-1-3'), $('.tariff-1-4'), $('.tariff-2-1'), $('.tariff-2-2'), $('.tariff-2-3'), $('.tariff-2-4'), $('.tariff-3-1'), $('.tariff-3-2'), $('.tariff-3-3'), $('.tariff-3-4')];

    let rocket = [$('.rocket-1-1'), $('.rocket-1-2'), $('.rocket-1-3'), $('.rocket-1-4'), $('.rocket-2-1'), $('.rocket-2-2'), $('.rocket-2-3'), $('.rocket-2-4'), $('.rocket-3-1'), $('.rocket-3-2'), $('.rocket-3-3'), $('.rocket-3-4')];

    let vector = [$('.vector-1-1'), $('.vector-1-2'), $('.vector-1-3'), $('.vector-1-4'), $('.vector-2-1'), $('.vector-2-2'), $('.vector-2-3'), $('.vector-2-4'), $('.vector-3-1'), $('.vector-3-2'), $('.vector-3-3'), $('.vector-3-4')];

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[0]).offset().top + $(tariff[0]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[0]).removeClass(animClass);
                $(rocket[0]).addClass(animClass);
                $(vector[0]).stop().animate({ 'width': '100px' }, 2000);
            } else {
                $(vector[0]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[0]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[0]).removeClass(animClass);
                $(rocket[0]).addClass(animClass);
                $(vector[0]).stop().animate({ 'width': '50px' }, 2000);
            } else {
                $(vector[0]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[0]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[1]).offset().top + $(tariff[1]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[1]).removeClass(animClass);
                $(rocket[1]).addClass(animClass);
                $(vector[1]).stop().animate({ 'width': '300px' }, 2000);
            } else {
                $(vector[1]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[1]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[1]).removeClass(animClass);
                $(rocket[1]).addClass(animClass);
                $(vector[1]).stop().animate({ 'width': '180px' }, 2000);
            } else {
                $(vector[1]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[1]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[2]).offset().top + $(tariff[2]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[2]).removeClass(animClass);
                $(rocket[2]).addClass(animClass);
                $(vector[2]).stop().animate({ 'width': '480px' }, 2000);
            } else {
                $(vector[2]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[2]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[2]).removeClass(animClass);
                $(rocket[2]).addClass(animClass);
                $(vector[2]).stop().animate({ 'width': '340px' }, 2000);
            } else {
                $(vector[2]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[2]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1300px)').matches) {
            if (scroll > offset) {
                $(rocket[2]).removeClass(animClass);
                $(rocket[2]).addClass(animClass);
                $(vector[2]).stop().animate({ 'width': '280px' }, 2000);
            } else {
                $(vector[2]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[2]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[3]).offset().top + $(tariff[3]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[3]).removeClass(animClass);
                $(rocket[3]).addClass(animClass);
                $(vector[3]).stop().animate({ 'width': '760px' }, 2000);
            } else {
                $(vector[3]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[3]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[3]).removeClass(animClass);
                $(rocket[3]).addClass(animClass);
                $(vector[3]).stop().animate({ 'width': '500px' }, 2000);
            } else {
                $(vector[3]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[3]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1300px)').matches) {
            if (scroll > offset) {
                $(rocket[3]).removeClass(animClass);
                $(rocket[3]).addClass(animClass);
                $(vector[3]).stop().animate({ 'width': '430px' }, 2000);
            } else {
                $(vector[3]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[3]).removeClass(animClass);
            }
        }
    });


    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[4]).offset().top + $(tariff[4]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[4]).removeClass(animClass);
                $(rocket[4]).addClass(animClass);
                $(vector[4]).stop().animate({ 'width': '100px' }, 2000);
            } else {
                $(vector[4]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[4]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[4]).removeClass(animClass);
                $(rocket[4]).addClass(animClass);
                $(vector[4]).stop().animate({ 'width': '50px' }, 2000);
            } else {
                $(vector[4]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[4]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[5]).offset().top + $(tariff[5]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[5]).removeClass(animClass);
                $(rocket[5]).addClass(animClass);
                $(vector[5]).stop().animate({ 'width': '300px' }, 2000);
            } else {
                $(vector[5]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[5]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[5]).removeClass(animClass);
                $(rocket[5]).addClass(animClass);
                $(vector[5]).stop().animate({ 'width': '180px' }, 2000);
            } else {
                $(vector[5]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[5]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[6]).offset().top + $(tariff[6]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[6]).removeClass(animClass);
                $(rocket[6]).addClass(animClass);
                $(vector[6]).stop().animate({ 'width': '480px' }, 2000);
            } else {
                $(vector[6]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[6]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[6]).removeClass(animClass);
                $(rocket[6]).addClass(animClass);
                $(vector[6]).stop().animate({ 'width': '340px' }, 2000);
            } else {
                $(vector[6]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[6]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1300px)').matches) {
            if (scroll > offset) {
                $(rocket[6]).removeClass(animClass);
                $(rocket[6]).addClass(animClass);
                $(vector[6]).stop().animate({ 'width': '280px' }, 2000);
            } else {
                $(vector[6]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[6]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[7]).offset().top + $(tariff[7]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[7]).removeClass(animClass);
                $(rocket[7]).addClass(animClass);
                $(vector[7]).stop().animate({ 'width': '760px' }, 2000);
            } else {
                $(vector[7]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[7]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[7]).removeClass(animClass);
                $(rocket[7]).addClass(animClass);
                $(vector[7]).stop().animate({ 'width': '500px' }, 2000);
            } else {
                $(vector[7]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[7]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1300px)').matches) {
            if (scroll > offset) {
                $(rocket[7]).removeClass(animClass);
                $(rocket[7]).addClass(animClass);
                $(vector[7]).stop().animate({ 'width': '430px' }, 2000);
            } else {
                $(vector[7]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[7]).removeClass(animClass);
            }
        }
    });


    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[8]).offset().top + $(tariff[8]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[8]).removeClass(animClass);
                $(rocket[8]).addClass(animClass);
                $(vector[8]).stop().animate({ 'width': '100px' }, 2000);
            } else {
                $(vector[8]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[8]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[8]).removeClass(animClass);
                $(rocket[8]).addClass(animClass);
                $(vector[8]).stop().animate({ 'width': '50px' }, 2000);
            } else {
                $(vector[8]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[8]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[9]).offset().top + $(tariff[9]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[9]).removeClass(animClass);
                $(rocket[9]).addClass(animClass);
                $(vector[9]).stop().animate({ 'width': '300px' }, 2000);
            } else {
                $(vector[9]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[9]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[9]).removeClass(animClass);
                $(rocket[9]).addClass(animClass);
                $(vector[9]).stop().animate({ 'width': '180px' }, 2000);
            } else {
                $(vector[9]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[9]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[10]).offset().top + $(tariff[10]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[10]).removeClass(animClass);
                $(rocket[10]).addClass(animClass);
                $(vector[10]).stop().animate({ 'width': '480px' }, 2000);
            } else {
                $(vector[10]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[10]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[10]).removeClass(animClass);
                $(rocket[10]).addClass(animClass);
                $(vector[10]).stop().animate({ 'width': '340px' }, 2000);
            } else {
                $(vector[10]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[10]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1300px)').matches) {
            if (scroll > offset) {
                $(rocket[10]).removeClass(animClass);
                $(rocket[10]).addClass(animClass);
                $(vector[10]).stop().animate({ 'width': '280px' }, 2000);
            } else {
                $(vector[10]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[10]).removeClass(animClass);
            }
        }
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();
        let offset = $(tariff[11]).offset().top + $(tariff[11]).height();
        if (this.matchMedia('(min-width: 1700px)').matches) {
            if (scroll > offset) {
                $(rocket[11]).removeClass(animClass);
                $(rocket[11]).addClass(animClass);
                $(vector[11]).stop().animate({ 'width': '760px' }, 2000);
            } else {
                $(vector[11]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[11]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1699px)').matches) {
            if (scroll > offset) {
                $(rocket[11]).removeClass(animClass);
                $(rocket[11]).addClass(animClass);
                $(vector[11]).stop().animate({ 'width': '500px' }, 2000);
            } else {
                $(vector[11]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[11]).removeClass(animClass);
            }
        }
        if (window.matchMedia('(max-width: 1300px)').matches) {
            if (scroll > offset) {
                $(rocket[11]).removeClass(animClass);
                $(rocket[11]).addClass(animClass);
                $(vector[11]).stop().animate({ 'width': '430px' }, 2000);
            } else {
                $(vector[11]).stop().animate({ 'width': '0px' }, 50);
                $(rocket[11]).removeClass(animClass);
            }
        }
    });

    // smooth scroll and page up
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    function resetCost() {
        $('.form-confirm__discount').css('display', 'none');
        $('.form-confirm__cost').text();
        $('.form-confirm__cost').css('text-decoration', 'none');
    }


    $('.form-check__item-pay-period input:checkbox').click(function() {
        if ($(this).is(':checked')) {
            $('.form-check__item-pay-period input:checkbox').not(this).prop('checked', false);
        }
    });

    let cost = [$('.price-1-1').text(), $('.price-1-2').text(), $('.price-1-3').text(), $('.price-1-4').text(), $('.price-2-1').text(), $('.price-2-2').text(), $('.price-2-3').text(), $('.price-2-4').text(), $('.price-3-1').text(), $('.price-3-2').text(), $('.price-3-3').text(), $('.price-3-4').text(), $('.price-4-1').text(), $('.price-5-1').text()];

    let discountHalfYear = [$('.price-half-year-1-1').text(), $('.price-half-year-1-2').text(), $('.price-half-year-1-3').text(), $('.price-half-year-1-4').text()];

    let discountYear = [$('.price-year-1-1').text(), $('.price-year-1-2').text(), $('.price-year-1-3').text(), $('.price-year-1-4').text()];

    let currentValueCost = ['easy-start', 'quick-start', 'afterburner', 'rocket', 'easy-start-tv', 'quick-start-tv', 'afterburner-tv', 'rocket-tv', 'easy-start-tv-movie', 'quick-start-tv-movie', 'afterburner-tv-movie', 'rocket-tv-movie', 'cabel-tv'];



    function replaceCost() {
        $(".form-check__item-pay-period input:checkbox").on('change', function() {
            resetCost();
            let tariffValue = $('#tariff-select').val();
            let i = currentValueCost.indexOf(tariffValue);
            if ($('#checkbox-year').is(':checked')) {
                $('.form-confirm__cost').css('text-decoration', 'line-through');
                $('.form-confirm__discount').css('display', 'block');
                $('.form-confirm__discount').text(discountYear[i]);
            } else if ($('#checkbox-half-year').is(':checked')) {
                $('.form-confirm__cost').css('text-decoration', 'line-through');
                $('.form-confirm__discount').css('display', 'block');
                $('.form-confirm__discount').text(discountHalfYear[i]);
            } else {
                resetCost();
            }
        });

        $('#tariff-select').on('change', function() {
            for (let i = 0; i < currentValueCost.length; i++) {
                if ($(this).val() === currentValueCost[i]) {
                    $('.form-confirm__cost').text(cost[i]);
                    $(".form-check__item-pay-period input:checkbox").on('change', function() {
                        if ($('#checkbox-half-year').is(':checked')) {
                            resetCost();
                            $('.form-confirm__discount').css('display', 'block');
                            $('.form-confirm__discount').text(discountHalfYear[i]);
                            $('.form-confirm__cost').css('text-decoration', 'line-through');
                        } else if ($('#checkbox-year').is(':checked')) {
                            resetCost();
                            $('.form-confirm__discount').css('display', 'block');
                            $('.form-confirm__cost').css('text-decoration', 'line-through');
                            $('.form-confirm__discount').text(discountYear[i]);
                        } else {
                            resetCost();
                        }
                    });
                    if ($('#checkbox-half-year').is(':checked')) {
                        resetCost();
                        $('.form-confirm__discount').css('display', 'block');
                        $('.form-confirm__discount').text(discountHalfYear[i]);
                        $('.form-confirm__cost').css('text-decoration', 'line-through');
                    } else if ($('#checkbox-year').is(':checked')) {
                        resetCost();
                        $('.form-confirm__discount').css('display', 'block');
                        $('.form-confirm__cost').css('text-decoration', 'line-through');
                        $('.form-confirm__discount').text(discountYear[i]);
                    } else {
                        resetCost();
                    }
                }
            }
        });
    }



    $('.tariff-1-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[4]);
        $('#btn-confirm').replaceWith($replaceBtn[4]);
        $('#tariff-select').replaceWith($replaceSelect[3]);
        $('.form-confirm__cost').text(cost[0]);
        replaceCost();
        return false;
    });

    $('.tariff-1-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[0]);
        $('#btn-confirm').replaceWith($replaceBtn[0]);
        $('#tariff-select').replaceWith($replaceSelect[0]);
        $('.form-confirm__cost').text(cost[4]);
        replaceCost();
        return false;
    });

    $('.tariff-2-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
        $('.connect__banner').replaceWith($replaceBanner[1]);
        $('#btn-confirm').replaceWith($replaceBtn[1]);
        $('#tariff-select').replaceWith($replaceSelect[1]);
        $('.form-confirm__cost').text(cost[8]);
        replaceCost();
        return false;
    });

    $('.tariff-3-2').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('visible');
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
        $('.form-check__item_five, .form__tariff').addClass('visible');
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_six').addClass('hidden');
        $('.form-confirm__cost').text(cost[12]);
        return false;
    });



    $('.tariff-5-1').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeIn('slow');
        $('.connect__banner').replaceWith($replaceBanner[3]);
        $('#btn-confirm').replaceWith($replaceBtn[3]);
        $('.form-check__item-pay-period, .form-check__item_four, .form-check__item_five, .form-check__item_six, .form__tariff').addClass('hidden');
        $('.form-confirm__cost').text('17 500 р. (6 месяцев)');
        return false;
    });



    $('.modal-internet__close').on('click', function() {
        $('.modal-internet__wrapper, #tariff-modal').fadeOut('fast');
        $('#tariff-select').prop('selectedIndex', 0);
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').removeClass('visible');
        $('.one, .two, .three, .four, .five, .six, .seven, .eight').removeClass('hidden');
        $('.form__checkboxes input:checkbox').prop('checked', false);
        resetCost();
    });



    $('.tariffs-tab').click(function(e) {
        e.preventDefault();
        $('.tariffs-tab').removeClass('tariffs-tab_active');
        $('.tariffs__content').removeClass('tariffs__content_active');
        $('.tariffs__content').removeClass('animate__animated animate__slideInRight');
        $(this).addClass('.tariffs-tab_active');
        $($(this).attr('href')).addClass('tariffs__content_active');
        $('.tariffs__content').addClass('animate__animated animate__slideInRight');
    });

    $('.tariffs-tab:first').click();

    $('a[href="#tariffs"], a[href="#contacts"], a[href="#address-wrapper"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('#up').innerHeight()
        }, 1000);
    });

    $('a[href="#tab-1"], a[href="#tab-2"], a[href="#tab-3"], a[href="#tab-3"], a[href="#tab-4"], a[href="#tab-5"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight()
        }, 1000);
    });


    if (window.location.hash) {

        let a = "#tariffs";
        let b = "#contacts";
        let c = "#address-wrapper";


        if (window.location.hash === a || b || c) {
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() + 'px'
            }, 300);
        }

        let d = "#tab-1";
        let e = "#tab-2";
        let f = "#tab-3";
        let g = "#tab-4";
        let h = "#tab-5";

        if (window.location.hash === d) {
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
            }, 300);
        }

        if (window.location.hash === e) {
            $('.tab-2').click();
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
            }, 300);
        }

        if (window.location.hash === f) {
            $('.tab-3').click();
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
            }, 300);
        }

        if (window.location.hash === g) {
            $('.tab-4').click();
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
            }, 300);
        }

        if (window.location.hash === h) {
            $('.tab-5').click();
            $('html,body').animate({
                scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
            }, 300);
        }
    }


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
            $(element).addClass('animate__animated animate__fadeInUp animate__slow');
        }
    });
});


window.onscroll = function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("up").style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.15)";
    } else {
        document.getElementById("up").style.boxShadow = "none";
    }
};



// if (window.location.hash) {

//     let a = "#tariffs";
//     let b = "#contacts";
//     let c = "#address-wrapper";


//     if (window.location.hash === a) {
//         if (window.matchMedia('(min-width: 1700px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() + 'px'
//             }, 1000);
//         } else if (window.matchMedia('(max-width: 1699px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() + 'px'
//             }, 1000);
//         }
//     }
//     if (window.location.hash === b) {
//         if (window.matchMedia('(min-width: 1700px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() + 'px'
//             }, 1000);
//         } else if (window.matchMedia('(max-width: 1699px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() + 'px'
//             }, 1000);
//         }
//     }
//     if (window.location.hash === c) {
//         if (window.matchMedia('(min-width: 1700px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() + 'px'
//             }, 1000);
//         } else if (window.matchMedia('(max-width: 1699px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() + 'px'
//             }, 1000);
//         }
//     }

//     let d = "#tab-1";
//     let e = "#tab-2";
//     let f = "#tab-3";
//     let g = "#tab-4";
//     let h = "#tab-5";

//     if (window.location.hash === d) {
//         if (window.matchMedia('(min-width: 1700px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 1000);
//         } else if (window.matchMedia('(max-width: 1699px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 1000);
//         }
//     }

//     if (window.location.hash === e) {
//         $('.tab-2').click();
//         if (window.matchMedia('(min-width: 1700px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 300);
//         } else if (window.matchMedia('(max-width: 1699px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 300);
//         }
//     }

//     if (window.location.hash === f) {
//         $('.tab-3').click();
//         if (window.matchMedia('(min-width: 1700px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 300);
//         } else if (window.matchMedia('(max-width: 1699px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 300);
//         }
//     }

//     if (window.location.hash === g) {
//         $('.tab-4').click();
//         if (window.matchMedia('(min-width: 1700px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 300);
//         } else if (window.matchMedia('(max-width: 1699px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 300);
//         }
//     }

//     if (window.location.hash === h) {
//         $('.tab-5').click();
//         if (window.matchMedia('(min-width: 1700px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 1000);
//         } else if (window.matchMedia('(max-width: 1699px)').matches) {
//             $('html,body').animate({
//                 scrollTop: $(window.location.hash).offset().top - $('#up').innerHeight() - $('#tariffs').innerHeight() + 'px'
//             }, 1000);
//         }
//     }
// }