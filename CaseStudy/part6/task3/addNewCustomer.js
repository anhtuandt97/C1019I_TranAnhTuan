let arrListCustomer = [];

function addNewCustomer() {
    var customer = new Customer();
    customer.setNameCustomer(prompt("Enter Name Customer:"));
    customer.setIdCard(checkIdCard());
    customer.setBirthdayCustomer(checkBirthDay());
    customer.setEmailCustomer(checkEmail());
    customer.setAddressCustomer(prompt("Enter Address Customer:"));
    customer.setTypeCustomer(prompt("Enter Type Customer:"));
    customer.setDiscount(checkDiscount());
    customer.setNumberOfAccompanying(checkNumberOfAccompanying());
    customer.setTypeRoom(prompt("Enter Type Room:"));
    customer.setRentDays(checkRentDays());
    customer.setTypeService(prompt("Enter Type Service:"));

    arrListCustomer.push(customer);
    displayMainMenu();
}

function checkIdCard(idCard) {
    idCard = prompt("Enter Id Card Customer:");
    regexp = /^[0-9]{9}$/;
    if (regexp.test(idCard)) {
        alert("Id Card hop le");
        return idCard;
    } else {
        alert("Id Card khong hop le, vui long nhap lai!!!");
        checkIdCard();
    }
}

function checkBirthDay(birthDay) {
    birthDay = prompt("Enter Birthday Customer (dd/MM/YYYY):");
    regexp = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[6-9][0-9]|200[0-9])$/;
    if (regexp.test(birthDay)) {
        alert("Ngay sinh hop le");
        return birthDay;
    } else {
        alert("Ngay sinh khong hop le, vui long nhap lai!!!");
        checkBirthDay();
    }
}

function checkEmail(email) {
    email = prompt("Enter email Customer:");
    regexp = /^[A-Za-z0-9]+@[A-Za-z0-9]+(\.com)$/;
    if (regexp.test(email)) {
        alert("Email hop le");
        return email;
    } else {
        alert("Email khong hop le, vui long nhap lai!!!");
        checkEmail();
    }
}

function checkDiscount(discount) {
    discount = prompt("Enter Discount:");
    regexp = /^[0-9]{1,3}$/;
    if (regexp.test(discount)) {
        alert("Discount hop le");
        return discount;
    } else {
        alert("Discount khong hop le, vui long nhap lai!!!");
        checkDiscount();
    }
}

function checkNumberOfAccompanying(number) {
    number = prompt("Enter Number Of Accompanying:");
    regexp = /^[0-9]{1,2}$/;
    if (regexp.test(number)) {
        alert("Discount hop le");
        return number;
    } else {
        alert("Number Of Accompanying khong hop le, vui long nhap lai!!!");
        checkNumberOfAccompanying();
    }
}

function checkRentDays(rentDays) {
    rentDays = prompt("Enter Number Of Accompanying:");
    regexp = /^[0-9]{1,2}$/;
    if (regexp.test(rentDays)) {
        alert("Type Service hop le");
        return rentDays;
    } else {
        alert("Type Service khong hop le, vui long nhap lai!!!");
        checkRentDays();
    }
}

