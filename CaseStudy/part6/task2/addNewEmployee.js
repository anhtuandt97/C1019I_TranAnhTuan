let arrListEmployee = [];

function addNewEmployee() {
    var employee = new Employee();
    employee.setNameEmployee(prompt("Enter Name Employee:"));
    employee.setIdCard(prompt("Enter Id Card Employee:"));
    employee.setBirthdayEmployee(checkBirthDay());
    employee.setEmailEmployee(checkEmail());
    employee.setAddressEmployee(prompt("Enter Address Employee:"));
    employee.setTypeEmployee(prompt("Enter Type Employee:"));
    employee.setDiscount(prompt("Enter Discount"));
    employee.setNumberOfAccompanying(prompt("Enter Number Of Accompanying:"));
    employee.setTypeRoom(prompt("Enter Type Room:"));
    employee.setRentDays(prompt("Enter Rent Days:"));
    employee.setTypeService(prompt("Enter Type Service:"));


    arrListEmployee.push(employee);
    displayMainMenu();
}

function checkBirthDay() {
    let inputBirthDay = prompt("Enter Birthday Employee (dd/MM/YYYY):");
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
    let inputEmail = prompt("Enter email Employee:");
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(inputEmail)) {
        alert("Email hop le");
        return inputEmail;
    } else {
        alert("Email khong hop le, vui long nhap lai!!!");
        checkEmail();
    }
}
