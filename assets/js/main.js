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
})


/* Tab */

const s = document.querySelector.bind(document);
const ss = document.querySelectorAll.bind(document);

const tabs = ss('.tab-item');
const panes = ss('.tab-pane');   

const line = s('.line');

tabs.forEach(function (tab ,index) {
    const pane = panes[index];
    tab.onclick = function () {
        s('.tab-item.active').classList.remove('active');
        s('.tab-pane.active').classList.remove('active');

        line.style.left = tab.offsetLeft + 'px';
        line.style.width = tab.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
    };
});

/* đang ký */

// const dk = document.querySelector('.Resigter');

// dk.onclick = function () {
//     document.querySelect('.login-container').classList.add('dky');
// };

/* ẩn hiện đặt phòng */
const btnBuys = document.querySelectorAll('.js-home_product-btn_booking');
const modal = document.querySelector('.js-modal')
const closeModal = document.querySelector('.js-close-modal')
const bodyModal = document.querySelector('.modal__body')

//C1
// btnBuys.forEach(function (btn) {
//     btn.onclick = function () {
//             modal.classList.add('open');
//         }
// })

// closeModal.onclick = function() {
//     modal.classList.remove('open');
// }

// modal.onclick = function () {
//     modal.classList.remove('open');
// }

// bodyModal.onclick = function(e) {
//     e.stopPropagation();
// }

//C2

function showModal () {
    modal.classList.add('open');
}

function hideModal () { 
    modal.classList.remove('open');
}

for(const btnBuy of btnBuys)  {
    btnBuy.addEventListener('click', showModal);
}

closeModal.onclick = () => { 
    modal.classList.remove('open');
}
modal.addEventListener('click', hideModal);

bodyModal.addEventListener('click', function(e) { 
    e.stopPropagation();
});

//gắn tên user tương ứng
var username = localStorage.getItem("username");
var nameuser = document.querySelector('.username');
if (nameuser !== null) {
  nameuser.innerText = username;
}

