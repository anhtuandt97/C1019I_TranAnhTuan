let arrListCustomer = [];

function addNewCustomer() {
    var customer = new Customer();
    customer.setNameCustomer(prompt("Enter Name Customer:"));
    customer.setIdCard(prompt("Enter Id Card Customer:"));
    customer.setBirthdayCustomer(checkBirthDay());
    customer.setEmailCustomer(checkEmail());
    customer.setAddressCustomer(prompt("Enter Address Customer:"));
    customer.setTypeCustomer(prompt("Enter Type Customer:"));
    customer.setDiscount(prompt("Enter Discount"));
    customer.setNumberOfAccompanying(prompt("Enter Number Of Accompanying:"));
    customer.setTypeRoom(prompt("Enter Type Room:"));
    customer.setRentDays(prompt("Enter Rent Days:"));
    customer.setTypeService(prompt("Enter Type Service:"));

    arrListCustomer.push(customer);
    displayMainMenu();
}

function checkBirthDay() {
    let inputBirthDay = prompt("Enter Birthday Customer (dd/MM/YYYY):");
    regexp = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[6-9][0-9]|200[0-9])$/;
    if (regexp.test(inputBirthDay)) {
        alert("Ngay sinh hop le");
        return inputBirthDay;
    } else {
        alert("Ngay sinh khong hop le, vui long nhap lai!!!");
        checkBirthDay();
    }
}


function checkEmail() {
    let inputEmail = prompt("Enter email Customer:");
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(inputEmail)) {
        alert("Email hop le");
        return inputEmail;
    } else {
        alert("Email khong hop le, vui long nhap lai!!!");
        checkEmail();
    }
}
