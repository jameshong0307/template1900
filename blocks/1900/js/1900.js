/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    var dem = 0;
    var blog = 0;

    $('.menuiconnav').click(function () {
        setTimeout(function () {
            $('.menunav').toggleClass("activemenunav");
            $('.menuiconnav').css({"opacity": "1"});
            if ($(window).width() < 767) {
                $('.buttonclosemenu span').css({"right": "48%"});
            }
            if ($(window).width() <= 666) {
                $('.buttonclosemenu span').css({"right": "40%"});
            }
            if ($(window).width() <= 500) {
                $('.buttonclosemenu span').css({"right": "28%"});
            }
            if ($(window).width() <= 400) {
                $('.buttonclosemenu span').css({"right": "8%"});
            }
        }, 400)
        $('.menumobile').css({"display": "block", "left": "0", "top": "0"});
        $('.activemenumobile').css({"visibility": "visible"});
    });

    $('.buttonclosemenu span').click(function () {
        $('.buttonclosemenu span').css({"right": "100%"});
        $('.menunav').toggleClass("activemenunav");
        $('.activemenumobile').css({"visibility": "hidden"});
        setTimeout(function () {
            $('.menumobile').css({"left": "-100%"});
            $('.menuiconnav').css({"opacity": "1"});
        }, 350)
    });

    $('.menumobile ul li').click(function () {
        dem++;
        $(this).toggleClass("active");
        if (dem == 1)
        {
            $(this).find('.title i').attr({"class": "fa fa-angle-up"});
        }
        if (dem == 2)
        {
            $(this).find('.title i').attr({"class": "fa fa-angle-down"});
            dem = 0;
        }
    });

    $('.menumobile ul li .context ul li').click(function () {
        blog++;
        $(this).find('.subcontext').toggleClass("activesubcontext");
        if (blog == 1)
        {
            $(this).find('.title i').css({"top": "30px"});
            $(this).find('a i').attr({"class": "fa fa-angle-up"});
        } else if (blog == 2)
        {
            $(this).find('a i').attr({"class": "fa fa-angle-right"});
            blog = 0;
        }
    });

    $(".list-category-toggle li a").click(function () {
        var text = $(this).text();

        $(".category-toggle-link").text(text);

        return false;
    });
    $('.clickit').click(function () {
        $('.active').css({"background": "none", "color": "#666"});
        $('#collap').css({"display": "none"});
    });
    $('.btn-collapse').click(function () {
        $('#collap').css({"display": "inline-table"});
    });
    $('.active').click(function () {
        $('.active').css({"background": "#fe9c00", "color": "#fff"});
        $('#collap').css({"display": "none"});
    });
});

