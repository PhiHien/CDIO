$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 5,//hIện lên 5 hình
        slidesToScroll: 1, // dịch chuyển qua 1 hình
        infinite: true,// true là dịch chuyển vô hạn
        arrows: true,
        //Tự động chạy sau 0.5s
        // autoplay: true,
        // autoplaySpeed: 500,
        // chuyển đổi chữ thành 2mũi tên
        prevArrow:`<button type='button' class='slick-prev pull-left slick-arrow'><i class="fa fa-angle-left"></i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right slick-arrow'><i class="fa fa-angle-right"></i></button>`,
        
    }) ;
});
