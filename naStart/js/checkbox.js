$('#checkbox').click(function() {
    if ($(this).is(':checked')) {
        $('#payment').removeAttr('disabled');
    } else {
        $('#payment').attr('disabled', 'disabled');
    }
});