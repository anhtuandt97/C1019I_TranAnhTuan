function editInformationCustomer() {
    choose = prompt("Chọn khách hàng muốn edit \n" + get2InforCustomer() + arrListCustomer.length + ".Back");
    switch (choose) {
        case (arrListCustomer.length) + "":
            displayMainMenu();
            break;
        default:
            displayEditCustomer(choose);
    }
}
function displayEditCustomer(index) {
    choose = prompt("Chọn đối tượng cần chỉnh sửa: \n" + getInformationCustomer(index)
        + arrListCustomer[index].length + ".Back");
    processEditCustomer(index);
}

function processEditCustomer(index) {
    switch (choose) {
        case (arrListCustomer[index].length) + "":
            displayMainMenu();
            break;
        default:
            arrListCustomer[index][parseInt(choose)] = prompt("Nhập nội dung muốn thay đổi");
            displayEditCustomer(index);
    }
}