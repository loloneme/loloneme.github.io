function n(){
    let n = $(".navigation");
    // let b = $('#specialButton');
    if (window.innerWidth <= 600) {
        $("body").prepend(n);
        // $("body").prepend(b);
    }
    else{
        $(".block-1 .container").prepend(n);
        // $(".menu ul").prepend(b);
    }
    
}


$( window ).resize(n);
if (window.innerWidth <= 600){
    n();
}

// $('#specialButton').on('click', function(e) {
//     // $('.block-1').detach();
//     $('#main-grad').toggleClass('hide');
//     // $('.sur-image').css("display", "none");
//     var ch = document.querySelector("#special");
//     var p = document.querySelector("body");
//     console.log(ch);

//     if (p.contains(ch)){
//         alert('dspfoksdp');
//         console.log('a');
//     }

// });



// $('#special .special-panel .special-quit').on('click', function(e){
//     // $('#main-grad').css("display", "block");
//     alert('зывалызващ');
// });





