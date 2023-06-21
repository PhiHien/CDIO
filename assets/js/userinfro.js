
var username = localStorage.getItem("username");
var nameuser = document.querySelector('.username');
if (nameuser !== null) {
nameuser.innerText = username;
}

//userinfo

const infovalue = document.querySelector('.edit-info-content');
const infouser = document.querySelector('.info-user');
const edit = document.querySelector('.edit-info');
const update = document.querySelector('.update-content');

edit.onclick = function() {
    infouser.classList.add('hiden');
    infovalue.classList.add('open');
}

function editinfo() {
    var name = document.querySelector('input[name="name"]').value;
    var fullname = document.querySelector('input[name="fullname"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phone = document.querySelector('input[name="phone"]').value;
    var address = document.querySelector('input[name="address"]').value;
    var date = document.querySelector('input[name="date"]').value;
    var gender = document.querySelector('input[name="gender"]').value;
    
    const name1 = document.querySelector(".name span");
    const fullname1 = document.querySelector(".fullname span");
    const email1 = document.querySelector(".email span");
    const phone1 = document.querySelector(".phone span");
    const address1 = document.querySelector(".address span");
    const date1 = document.querySelector(".birthday span");
    const gender1 = document.querySelector(".gender span");

    name1.innerText = name;
    fullname1.innerText = fullname;
    email1.innerText = email;
    phone1.innerText = phone;
    address1.innerText = address;
    date1.innerText = date;
    gender1.innerText = gender;

}
    update.addEventListener('click', () => {
        editinfo();
        alert('lưu thành công');
        infovalue.classList.remove('open');
        infouser.classList.remove('hiden');
    })
    document.querySelector('.btn-submit').addEventListener('click', function (event) {
event.preventDefault(); // Prevent form submission

// Get the entered values from the form
var name = document.querySelector('input[name="name"]').value;
var fullName = document.querySelector('input[name="fullname"]').value;
var email = document.querySelector('input[name="email"]').value;
var phone = document.querySelector('input[name="phone"]').value;
var address = document.querySelector('input[name="address"]').value;
var date = document.querySelector('input[name="date"]').value;
var gender = document.querySelector('input[name="gender"]').value;

if (name === '' || fullName === '' || email === '' || phone === '' || address === '' || date === '' || gender === '') {
    alert('Please fill in all required fields.');
    return;
}
// Update the user information in the displayed content
const name1 = document.querySelector(".name span");
const fullname1 = document.querySelector(".fullname span");
const email1 = document.querySelector(".email span");
const phone1 = document.querySelector(".phone span");
const address1 = document.querySelector(".address span");
const date1 = document.querySelector(".birthday span");
const gender1 = document.querySelector(".gender span");

name1.innerText = name;
fullname1.innerText = fullName;
email1.innerText = email;
phone1.innerText = phone;
address1.innerText = address;
date1.innerText = date;
gender1.innerText = gender;

alert('User information updated successfully!');
});