    // Lấy phần tử hiển thị người dùng và cập nhật nó
    var userDisplay = document.getElementById("user-display");
    userDisplay.textContent = "Username"; // Thay đổi "John Smith" bằng tên người dùng thực tế
    
    // Lấy phần tử hiển thị ngày hôm nay và cập nhật nó
    var todayDisplay = document.getElementById("today-display");
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; // Tháng bắt đầu từ 0, nên cần +1
    var year = today.getFullYear();
    var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
    todayDisplay.textContent = formattedDate; // Sử dụng 'vi-VN' để định dạng ngày theo tiếng Việt
    
    
        
    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault();
      
        var keyword = document.getElementById("keywordInput").value.toLowerCase();
        var location = document.getElementById("locationInput").value.toLowerCase();
        var numberOfGuests = parseInt(location); // Chuyển đổi số người từ chuỗi thành số nguyên
      
        var searchResultsContainer = document.getElementById("searchResultsContainer");
        searchResultsContainer.innerHTML = ""; // Xóa kết quả tìm kiếm trước đó
      
        var roomCards = document.querySelectorAll("#roomContainer > div");
        var matchedResults = [];
      
        for (var i = 0; i < roomCards.length; i++) {
          var roomCard = roomCards[i];
          var roomName = roomCard.querySelector("h2").textContent.toLowerCase();
          var roomAddress = roomCard.querySelector("p:nth-child(3)").textContent.toLowerCase();
          var roomGuests = parseInt(roomCard.querySelector("p:nth-child(4)").textContent); // Chuyển đổi số người từ chuỗi thành số nguyên
      
          if ((roomName.includes(keyword) || roomGuests === numberOfGuests) && (location === "" || roomAddress.includes(location))) {
            matchedResults.push(roomCard.outerHTML);
          } else {
            roomCard.classList.add("hidden"); // Ẩn các phần tử không tương ứng
          }
        }
      
        if (matchedResults.length > 0) {
          searchResultsContainer.innerHTML = matchedResults.join("");
        } else {
          searchResultsContainer.innerHTML = "Không có kết quả tìm kiếm.";
        }
      });

var username = localStorage.getItem("username");
var nameuser = document.querySelector('.username');
if (nameuser !== null) {
  nameuser.innerText = username;
}
      