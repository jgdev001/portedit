$(function(){

    let index = 0;

    $('.next').click(function(){
        index++;
        $('.carousel-track').each(function(){
            const width = $(this).width();
            $(this).scrollLeft(index * width);
        });
    });

    $('.prev').click(function(){
        index = Math.max(0, index - 1);
        $('.carousel-track').each(function(){
            const width = $(this).width();
            $(this).scrollLeft(index * width);
        });
    });

});
