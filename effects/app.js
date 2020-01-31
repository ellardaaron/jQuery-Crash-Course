$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(function(){
            $('#btnFadeOut').text("It's gone!")
        });
    });
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn();
    // other things you can pass into the fadeIn, or fade out, function:
    //  $('#box').fadeIn(fast);
    //  $('#box').fadeIn(slow);
    //  $('#box').fadeIn(3000); is in milliseconds so 3 seconds
    //  $('#box').fadeIn();
    //  
    });
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle();
    });

    $('#btnSlideUp').click(function(){
        $('#box').slideUp(3000);
    });

    $('#btnSlideDown').click(function(){
        $('#box').slideDown(3000);
    });

    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(3000);
    });

    $('#btnStop').click(function(){
        $('#box').stop();
    });

    $('#moveRight').click(function(){
        $('#box2').animate({
            left:500,
            height: '300px',
            width:'300px',
            opacity:'0.5'
        })
    })

    $('#moveLeft').click(function(){
        $('#box2').animate({
            left:0,
            height:'100px',
            width:'100px',
            opacity:'1'
        })
    })

    $('#moveAround').click(function(){
        var box = $('#box2');
        box.animate({
            left: 300
        })
        box.animate({
            top: 300
        })
        box.animate({
            left: 0,
            top: 300
        })
        box.animate({
            left: 0,
            top: 0
        })
    })
})

