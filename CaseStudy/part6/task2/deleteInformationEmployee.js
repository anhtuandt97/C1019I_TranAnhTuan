function deleteInformationEmployee() {
    choose = prompt("Nhập nhân viên cần xóa \n" + get2InforEmployee() + arrListEmployee.length + ".Back");
    switch (choose) {
        case (arrListEmployee.length) + "":
            displayMainMenu();
            break;
        default:
            confirmDeleteEmployee(choose);
    }
    displayMainMenu();
}

function confirmDeleteEmployee(index) {
    choose = prompt(" Bạn có muốn xóa nhân viên có tên (" + arrListEmployee[index][0]  + ") này chứ : \n"
        + "1. Có \n"
        + "2. Không \n");
    processDeleteEmployee(index);
}

function processDeleteEmployee(index) {
    switch (choose) {
        case "1":
            arrListEmployee.slice(index, 1);
            displayMainMenu();
            break;
        case "2":
            displayMainMenu();
    }
}