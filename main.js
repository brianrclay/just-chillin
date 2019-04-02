$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu').addClass('open');
    })
    $('.close').click(function(){
        $('.menu').removeClass('open');
    })

    var topPadding = '60px';
    var topScrollPadding = '30px 60px';
    var wWidth = $(window).width();
    if(wWidth <= 768){
        topPadding = '30px'
        topScrollPadding = '30px'
    }

    $('.menu').scroll(function(){
        var menuTop = $('.menu').scrollTop();
        if(menuTop > 30){
            $('.menu .menu-top').css({
                'padding': topScrollPadding,
                'background-color': '#fff',
                'box-shadow': '0px 2px 6px rgba(0, 0, 0, .2)',
            });
        } else{
            $('.menu .menu-top').css({
                'box-shadow': 'none',
                'padding': topPadding,
                'background-color': 'transparent'
            });
        }
        if(menuTop > 30){
            $('.menu .menu-top').css({
                'padding': topScrollPadding,
                'background-color': '#fff',
                'box-shadow': '0px 2px 6px rgba(0, 0, 0, .2)',
            });
        } else{
            $('.menu .menu-top').css({
                'box-shadow': 'none',
                'padding': topPadding,
                'background-color': 'transparent'
            });
        }
    })
})