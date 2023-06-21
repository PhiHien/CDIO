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

        const name1 = document.querySelector(".name span");
        const fullname1 = document.querySelector(".fullname span");
        const email1 = document.querySelector(".email span");
        const phone1 = document.querySelector(".phone span");
        const address1 = document.querySelector(".address span");
        const date1 = document.querySelector(".birthday span");
        const gender1 = document.querySelector(".gender span")
        
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

            //kiểm tra xem có trường nào trống không
            if (!name || !fullname || !email || !phone || !address || !date || !gender) {
                alert('Please fill in all fields');
                return;
            }
            
            const name1 = document.querySelector(".name span");
            const fullname1 = document.querySelector(".fullname span");
            const email1 = document.querySelector(".email span");
            const phone1 = document.querySelector(".phone span");
            const address1 = document.querySelector(".address span");
            const date1 = document.querySelector(".birthday span");
            const gender1 = document.querySelector(".gender span");

            localStorage.setItem("name", name);
            localStorage.setItem("fullname", fullname);
            localStorage.setItem("email", email);
            localStorage.setItem("phone", phone);
            localStorage.setItem("address", address);
            localStorage.setItem("date", date);
            localStorage.setItem("gender", gender);

            name1.innerText = localStorage.getItem("name");
            console.log(name1.innerText = localStorage.getItem("name"));
            fullname1.innerText = localStorage.getItem("fullname");
            email1.innerText = localStorage.getItem("email");
            phone1.innerText = localStorage.getItem("phone");
            address1.innerText = localStorage.getItem("address");
            date1.innerText = localStorage.getItem("date");
            gender1.innerText = localStorage.getItem("gender");
            alert('lưu thành công');

           
        }
        update.addEventListener('click', () => {
            editinfo();
            infovalue.classList.remove('open');
            infouser.classList.remove('hiden');
        })

        window.addEventListener('load', function() {
                name1.innerText = localStorage.getItem("name");
                console.log(name1.innerText = localStorage.getItem("name"));

                fullname1.innerText = localStorage.getItem("fullname");
                email1.innerText = localStorage.getItem("email");
                phone1.innerText = localStorage.getItem("phone");
                address1.innerText = localStorage.getItem("address");
                date1.innerText = localStorage.getItem("date");
                gender1.innerText = localStorage.getItem("gender");
        });
