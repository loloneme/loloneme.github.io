$('.burger-btn').on('click', (function(e){
    $('.navigation, .burger-btn').toggleClass('open');
    $('body').toggleClass('lock');
}));