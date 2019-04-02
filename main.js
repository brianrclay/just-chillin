$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.menu').addClass('open');
    })
    $('.close').click(function(){
        $('.menu').removeClass('open');
    })

    $('.menu').scroll(function(){
        var menuTop = $('.menu').scrollTop();
        var wWidth = $(window).width();
        if(menuTop > 30 && wWidth >= 768){
            $('.menu .menu-top').css({
                'padding': '30px 60px',
                'background-color': '#fff',
                'box-shadow': '0px 2px 6px rgba(0, 0, 0, .2)',
            });
        } else{
            $('.menu .menu-top').css({
                'box-shadow': 'none',
                'padding': '60px',
                'background-color': 'transparent'
            });
        }
    })
})