var apiCustomer = "http://localhost:3000/i4Customer";

function bookroom(event) {
    event.preventDefault();

    var UserName = document.querySelector('input[name="UserName"]').value;
    var Phone = document.querySelector('input[name="Phone"]').value;
    var RoomType = document.querySelector('#roomType').value;
    var numberOfPeople = document.querySelector('input[name="numberOfpeple"]').value;
    var CheckinDate = document.querySelector('input[name="checkInDate"]').value;
    var CheckoutDate = document.querySelector('input[name="checkOutDate"]').value;


    var i4customer = {
        UserName: UserName,
        Phone: Phone,
        RoomType: RoomType,
        numberOfPeople: numberOfPeople,
        CheckinDate: CheckinDate,
        CheckoutDate: CheckoutDate,
    };

    function createUser(data) {
        var options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch(apiCustomer, options)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                alert("Đăng ký thành công");
            })
            .catch(function (error) {
                console.log(error);
                alert("Đăng ký không thành công");
            });
    }

    createUser(i4customer);
    window.location.href='/HTML/pay.html';
}