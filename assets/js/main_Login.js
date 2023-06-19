var apiUser = "http://localhost:3000/user";

function signup(event) {
  event.preventDefault();

  var fullname = document.querySelector(".register input[type='fullname']").value;
  var username = document.querySelector(".register input[type='username']").value;
  var email = document.querySelector(".register input[type='email']").value;
  var password = document.querySelector(".register input[type='password']").value;

  var option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(apiUser + "?email=" + email, option)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var existingUser = data[0];
      if (existingUser && existingUser.email !== email) {
        // Email đã thay đổi và không tồn tại trong cơ sở dữ liệu
        createUser(fullname, username, email, password, function (response) {
          
            alert("Đăng ký thành công ");
          
        });
      } else if (!existingUser) {
        // Email không tồn tại trong cơ sở dữ liệu
        createUser(fullname, username, email, password, function (response) {
          
            alert("Đăng ký thành công");
          
        });
      } else {
        // Email đã tồn tại trong cơ sở dữ liệu
        alert("Email đã tồn tại");
      }
    });
}

function createUser(fullname, username, email, password, callback) {
  var user = {
    fullname: fullname,
    username: username,
    email: email,
    password: password,
  };

  var option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  fetch(apiUser, option)
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      callback(response);
    });
}



function login() {
  getUser(hanldeLogin)
  
}

function getUser(callback) {
  fetch(apiUser).then(function(res) {
    return res.json().then(callback);
  });
}

function hanldeLogin(data) {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;
  var isLoggedIn = false;
  for(var i = 0; i < data.length; i++) {
    if(data[i].email == email && data[i].password == password) {
      var username = data[i].username;
      alert("Đăng nhập thành công");
      window.location.href = "/Home.html";
      localStorage.setItem("username", username);
      isLoggedIn = true; // gán giá trị true cho biến cờ nếu đăng nhập thành công
      break; // dừng vòng lặp khi đăng nhập thành công
    }
  }
  if (!isLoggedIn) {
    alert("Đăng nhập thất bại");
  }
}

// var nameuser = document.querySelector('.username');
// nameuser.innerText = `${a}`;



































