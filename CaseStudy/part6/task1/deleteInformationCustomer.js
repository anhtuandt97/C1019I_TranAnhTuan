function deleteInformationCustomer() {
    choose = prompt("Nhập Khách hàng cần xóa \n" + get2InforCustomer() + arrListCustomer.length + ".Back");
    switch (choose) {
        case (arrListCustomer.length) + "":
            displayMainMenu();
            break;
        default:
            confirmDeleteCustomer(choose);
    }
    displayMainMenu();
}

function confirmDeleteCustomer(index) {
    choose = prompt(" Bạn có muốn xóa khách hàng có tên " + arrListCustomer[index].getNameCustomer() + " này chứ : \n"
        + "1. Có \n"
        + "2. Không \n");
    processDeleteCustomer(index);
}

function processDeleteCustomer(index) {
    switch (choose) {
        case "1":
            arrListCustomer.slice(index, 1);
            deleteInformationCustomer();
            break;
        case "2":
            displayMainMenu();
    }
}