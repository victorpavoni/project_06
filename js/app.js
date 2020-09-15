$(function(){

    // Mobile Menu
    $('.menu-btn').click(function(){
        var elMenu = $('.mobile ul');
        elMenu.slideToggle()
    })

    // ScrollButton
    $('nav a, .conteudo-header a').click(function(){
    
        var href = $(this).attr('href')
        var offsetScrollTop = $(href).offset().top;

        $('html,body').animate({
            'scrollTop': offsetScrollTop
        })

        return false;
    })
})