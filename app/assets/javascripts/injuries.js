// None of the above checkbox functionality
$('.govuk-checkboxes__input').change(function() {
    if ($(this).is('#none')) {
        $('.govuk-checkboxes__input').not(this).removeAttr('checked');
    }
    else {
        $('#none').removeAttr('checked');
    }
});
$( "#none").closest(".govuk-checkboxes__item").before( "<div class='govuk-radios__divider'>or</div>");
