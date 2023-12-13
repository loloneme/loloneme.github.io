function n(){
    let n = $(".navigation")
    if (window.innerWidth <= 600) {
        $("body").prepend(n);
    }
    else{
        $(".block-1 .container").prepend(n);
    }
}

$( window ).resize(n);
if (window.innerWidth <= 600){
    n();
}

// $('#specialButton').on('click', function(e) {
//     // $('.block-1').detach();
//     $('#main-grad').css("display", "none");
//     $('.sur-image').css("display", "none");
//     // $('#special .special-panel .special').on('click', function(e){
//     //     // $('#main-grad').css("display", "block");
//     //     alert('зывалызващ');
//     // });
// });






