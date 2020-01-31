$(function () {

    var checkBox = $('.list__check--label--input')

    checkBox.each(function () {
        $(this).on('click', function () {

            parent = $(this).parents('.list')

            if ($(this).is(':checked')) {
                parent.addClass('active')
            } else {
                parent.removeClass('active')
            }

        })
    })

})