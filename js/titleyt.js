$(function(){

    $('.work-card.video').each(function(){
        const card = $(this);
        const videoUrl = card.data('url');

        $.getJSON(
            `https://www.youtube.com/oembed?url=${videoUrl}&format=json`,
            function(data){
                card.find('.video-title').text(data.title);
            }
        );
    });

});
