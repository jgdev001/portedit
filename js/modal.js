$(function(){

    $('.work-card.video').click(function(){
        const video = $(this).data('video');
        $('.modal-content').html(`
            <iframe src="${video}" frameborder="0" allowfullscreen></iframe>
        `);
        $('.modal').fadeIn();
    });

    $('.work-card.image').click(function(){
        const img = $(this).data('image');
        $('.modal-content').html(`<img src="${img}">`);
        $('.modal').fadeIn();
    });

    $('.modal').click(function(){
        $(this).fadeOut();
        $('.modal-content').html('');
    });

});

