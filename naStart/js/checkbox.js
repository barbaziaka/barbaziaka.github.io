$('#checkbox').click(function() {
    if ($(this).is(':checked')) {
        $('#payment').removeAttr('disabled');
    } else {
        $('#payment').attr('disabled', 'disabled');
    }
});


$('a[href="#offer-agreement"]').on('click', function() {
    $('.overlay, #offer-agreement').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #offer-agreement').fadeOut('slow');
});