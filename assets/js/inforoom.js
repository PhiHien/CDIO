var btnSetrooms = document.querySelectorAll('.bookingromm');
var costroommodal = document.querySelector('.roomcost');
var dientichroom = document.querySelector('.room-area');
var roomDeposit = document.querySelector('.room-Deposit');
var amountOfpeople = document.querySelector('.amountOfpeople');
var infoAddress = document.querySelector('.room__address--content');
var costRoom = document.querySelector('.info--price');
var modal = document.querySelector('.js-modal');
var closeModal = document.querySelector('.js-close-modal');

btnSetrooms.forEach(function (btnSetroom) {
    btnSetroom.onclick = function() {
    var parentElement = btnSetroom.parentNode; // lấy phần tử cha của button
    var info = parentElement.querySelectorAll('p');
    var address = info[0].innerText.slice(8);
    var amountpeple = info[1].innerText.slice(18);
    var roomcost = info[2].innerText.slice(11);
    var roomarea = info[3].innerText.slice(11);
    var Deposit = info[4].innerText.slice(9);
    console.log(Deposit);
    costroommodal.innerText = roomcost;
    dientichroom.innerText = roomarea;
    roomDeposit.innerText = Deposit;
    amountOfpeople.innerText = amountpeple;
    infoAddress.innerText = address;
    costRoom.innerText = roomcost.concat('/DAY');

    modal.classList.add('open');
    
    }
  })