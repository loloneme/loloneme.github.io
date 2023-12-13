$('.burger-btn').on('click', (function(e){
    $('.block-1').toggleClass('open');
    $('body').toggleClass('lock');
}));