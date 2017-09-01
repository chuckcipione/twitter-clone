$(document).ready(function(){
    $('#tweet-controls').hide();
    $('.tweet-compose').click( function(){
        $('.tweet-compose').css('height', '75px');
        $('#tweet-controls').show();
    
    });


    $('#tweet-content .tweet-compose').on('input', updateCount);
    function updateCount(){
        var cs = [140 - $(this).val().length];
        $('#char-count').text(cs);
            if(cs <= 10){
                $('#char-count').css('color', 'red');
            } else $('#char-count').css('color', 'black');
            if(cs <= 0){
                $('#tweet-submit').prop('disabled', true);
            } else $('#tweet-submit').prop('disabled', false);
    }
    $('.button').click( function(){
        var tweet = $('.tweet-compose').val();
        var $tweet = $('.tweet').first().clone();
        $tweet.find('.tweet-text').text(tweet)
        $tweet.find('.fullname').text('Chuck Cipione')
        $tweet.find('.username').text('chuckcip')
        $tweet.find('.avatar').first().attr('src', '')

        $('#stream').prepend($tweet);
    });
    $('.tweet-actions').hide();
    $('.tweet').hover(function (){
        $(this).find('.tweet-actions').show();
    },
    function (){
        $('.tweet-actions').hide()
    });

    $('.stats').hide();
    $('.tweet').click(function (){
        $(this).find('.stats').show().animate({
            height: '100px'
        })

    })

})
