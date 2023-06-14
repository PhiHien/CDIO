const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');



registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

const btnPopup = document.querySelector('.btnLogin-popup');
btnPopup.addEventListener('click', () => {
    container.classList.add('active-popup');
});

const closeicon = document.querySelector('.close-icon');

closeicon.addEventListener('click', () => {
    container.classList.remove('active-popup');
});





function signup(event) {
    event.preventDefault();
    
    var fullname = document.querySelector(".register input[type='fullname']").value;
    var username = document.querySelector(".register input[type='username']").value;
    var email = document.querySelector(".register input[type='email']").value;
    var password = document.querySelector(".register input[type='password']").value;
    
    var user = {
      fullname: fullname,
      username: username,
      email: email,
      password: password
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    
    alert("Đăng ký thành công");
  }

  function login(event) {
    event.preventDefault();
    
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;
    
    // Kiểm tra thông tin đăng nhập
    var users = Object.keys(localStorage);
    var loggedIn = false;
    
    for (var i = 0; i < users.length; i++) {
      var user = JSON.parse(localStorage.getItem(users[i]));
      
      if (user.email === email && user.password === password) {
        loggedIn = true;
        break;
      }
    }
    
    if (loggedIn) {
      alert("Đăng nhập thành công");
      window.location.href="/Home.html";
    } else {
      alert("Thông tin đăng nhập không chính xác");
    }
  }

  