console.dir(jQuery);
console.dir($);

// get the first button item on the page
var buttons = $('btn').first();
console.log(buttons);
$(document).ready(function(){
    // this code will only run when the ready event has happened
    // in other words, the DOM must be fully loaded before this runs

    // anytime any button is clicked on this page, run the following code
    $('button').click(function(){
        var theTrick = ($(this).attr('todo'));
        if (theTrick == 'hide'){
            $('#thing').hide();
        }else if(theTrick == 'show'){
            $('#thing').show();
        }else if(theTrick == 'toggle'){
            $('#thing').toggle();
        }else if(theTrick == 'html'){
            console.log($('#thing').html());
            $('#thing').html('<table border="1"><tr><td>I am a table</td></tr></table>');
        }else if(theTrick == 'prepend'){
            $('#thing').prepend('<div class="green">I have a friend to my right</div>');
        }else if(theTrick == 'append'){
            $('#thing').append('<div class="green">I have a friend to my left</div>');
        }else if(theTrick == 'css'){
            $('#thing').css({
                'color': 'orange',
                'font-size': '50px'
            })
        }else if(theTrick == 'each'){
            $('button').each(function(){
                console.log($(this).html());
            });
        }else if(theTrick == 'addClass'){
            $('#thing').addClass('fancy');
        }else if(theTrick == 'removeClass'){
            $('#thing').removeClass('fancy');
        }else if(theTrick == 'animate'){
            $('#thing').animate({
            	height: 'toggle',
            	right: '+=50',
            	opacity : 0.25
            }, 5000, function(){
            	alert("I am done!")
            });
        }else if(theTrick == 'delay') {
        	$('#thing').delay(5000).fadeTo("fast", 0.5)
        }

    });
    // document.getElementById('thing').style.display = "none";
});

// $('#thing')
// document.getElementById('thing')

// console.log(document.getElementById('thing'));

// function toggle(){
//     console.log(document.getElementById('thing'));
//     var thing = document.getElementById('thing');
//     if(thing.style.display == "inline-block"){
//         thing.style.display = "none";
//     }else{
//         thing.style.display = "inline-block";
//     }
// }

