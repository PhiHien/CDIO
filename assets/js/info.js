fetch('/json-server/db.json')
.then(response => response.json())
.then(data => {
  inforoom.innerText = data.i4Customer[1].UserName;
  infophone.innerText = data.i4Customer[1].Phone;
  roomtype.innerText = data.i4Customer[1].RoomType;
  Numberofpeople.innerText = data.i4Customer[1].numberOfPeople;
  Checkin.innerText = data.i4Customer[1].CheckinDate;
  Checkout.innerText = data.i4Customer[1].CheckoutDate;
  const date1 = Checkin.innerText;
  const date2 = Checkout.innerText;
  function calculateDaysBetweenDates(date1, date2) {
    // Chuyển đổi các chuỗi ngày thành đối tượng Date
    const d1 = new Date(date1);
    const d2 = new Date(date2);
  
    // Tính số milliseconds giữa hai ngày
    const diffInMs = Math.abs(d2 - d1);
  
    // Chuyển đổi số milliseconds thành số ngày
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  
    // Trả về số ngày
    return diffInDays;
  }
  
  var total = calculateDaysBetweenDates(date1,date2);
  if(Numberofpeople.innerText == 2)
  {
    Totalcost.innerText = total * 2000000;
  }
  if(Numberofpeople.innerText == 3)
  {
    Totalcost.innerText = total * 3000000;
  }
  if(Numberofpeople.innerText == 4)
  {
    Totalcost.innerText = total * 4000000;
  }
})
const inforoom = document.querySelector(".info-room span");
const infophone = document.querySelector(".info-phone span");
const roomtype = document.querySelector(".info-roomtype span");
const Numberofpeople = document.querySelector(".info-Numberofpeople span");
const Checkin = document.querySelector(".info-Check-in span");
const Checkout = document.querySelector(".info-Check-out span");
const Totalcost = document.querySelector(".Totalcost span");




