$(document).ready(function(){
    var showcase = $('#showcase')
    var playBtn = $('.play_button_image')
    $(playBtn).click(function(){
        $(this).css({"background-image":"none"}).html("loading...");
        setTimeout(function(){
            $(showcase).css({'z-index':1});
        },3000)
    });
});
