$('.burger-btn').on('click', (function(e){
    $('.navigation, .burger-btn').toggleClass('open');
    $('body').toggleClass('lock');
}));

function n(){
    let b = $('#specialButton');
    if (window.innerWidth <= 600) {
        $("body").prepend(b);
    }
    else{
        $(".navigation ul").prepend(b);
    }
    
}


$( window ).resize(n);
if (window.innerWidth <= 600){
    n();
}