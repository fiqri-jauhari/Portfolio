$('.page-scroll').on('click', function(){
    
    //ambil isi href
    var tujuan = $(this).attr('href');
    
    //get element
    var elemenTujuan = $(tujuan);
    
    $('body').animate({
        scrollTop: elemenTujuan.offset().top
    });

});