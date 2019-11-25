function editInformationEmployee() {
    choose = prompt("Chọn nhân viên muốn edit \n" + get2InforEmployee() + arrListEmployee.length + ".Back");
    switch (choose) {
        case (arrListEmployee.length) + "":
            displayMainMenu();
            break;
        default:
            displayEditEmployee(choose);
    }
}
function displayEditEmployee(index) {
    choose = prompt("Chọn đối tượng cần chỉnh sửa: \n" + getInformationEmployee(index)
        + arrListEmployee[index].length + ".Back");
    processEditEmployee(index);
}

function processEditEmployee(index) {
    switch (choose) {
        case (arrListEmployee[index].length) + "":
            displayMainMenu();
            break;
        default:
            arrListEmployee[index][parseInt(choose)] = prompt("Nhập nội dung muốn thay đổi");
            displayEditEmployee(index);
    }
}