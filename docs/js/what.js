var layer1 = $("#layer1");
var layer2 = $("#layer2");
var layer3 = $("#layer3");
var layer4 = $("#layer4");
var layer5 = $("#layer5");
var layer6 = $("#layer6");
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 600) {
        layer1.animate({
            '-webkit-transform' : 'translate(0px, -100px)',
            '-moz-transform'    : 'translate(0px, -100px)',
            '-ms-transform'     : 'translate(0px, -100px)',
            '-o-transform'      : 'translate(0px, -100px)',
            'transform'         : 'translate(0px, -100px)',
        });
        layer2.animate({
            '-webkit-transform' : 'translate(0px, -50px)',
            '-moz-transform'    : 'translate(0px, -50px)',
            '-ms-transform'     : 'translate(0px, -50px)',
            '-o-transform'      : 'translate(0px, -50px)',
            'transform'         : 'translate(0px, -50px)',
        });
        layer3.animate({
            '-webkit-transform' : 'translate(0px, 0px)',
            '-moz-transform'    : 'translate(0px, 0px)',
            '-ms-transform'     : 'translate(0px, 0px)',
            '-o-transform'      : 'translate(0px, 0px)',
            'transform'         : 'translate(0px, 0px)',
        });
        layer4.animate({
            '-webkit-transform' : 'translate(0px, 50px)',
            '-moz-transform'    : 'translate(0px, 50px)',
            '-ms-transform'     : 'translate(0px, 50px)',
            '-o-transform'      : 'translate(0px, 50px)',
            'transform'         : 'translate(0px, 50px)',
        });
        layer5.animate({
            '-webkit-transform' : 'translate(0px, 100px)',
            '-moz-transform'    : 'translate(0px, 100px)',
            '-ms-transform'     : 'translate(0px, 100px)',
            '-o-transform'      : 'translate(0px, 100px)',
            'transform'         : 'translate(0px, 100px)',
        });
        layer5.animate({
            '-webkit-transform' : 'translate(0px, 150px)',
            '-moz-transform'    : 'translate(0px, 150px)',
            '-ms-transform'     : 'translate(0px, 150px)',
            '-o-transform'      : 'translate(0px, 150px)',
            'transform'         : 'translate(0px, 150px)',
        });
    }
});