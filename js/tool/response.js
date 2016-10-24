(function () {

    var standardWidth = 375;
    var standardFontSize = 12;

    $('html').attr({'data-dpr': 2})
        .css({
            'font-size': $(window).width() / standardWidth * standardFontSize + 'px',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        })
})()

