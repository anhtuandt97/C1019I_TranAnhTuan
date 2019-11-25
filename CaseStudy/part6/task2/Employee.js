let Employee = function () {
    this.setNameEmployee = function (name) {
        this.name = name;
    };
    this.setIdCard = function (idCard) {
        this.idCard = idCard;
    };
    this.setBirthdayEmployee = function (birthDay) {
        this.birthDay = birthDay;
    };
    this.setEmailEmployee = function (email) {
        this.email = email;
    };
    this.setAddressEmployee = function (adress) {
        this.adress = adress;
    };
    this.setTypeEmployee = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    };
    this.setNumberOfAccompanying = function (numberOfAccompanying) {
        this.numberOfAccompanying = numberOfAccompanying;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.setRentDays = function (rentDays) {
        this.rentDays = rentDays;
    };
    this.setTypeService = function (typeService) {
        this.typeService = typeService;
    };

    this.getNameEmployee= function () {
        return this.name;
    };
    this.getIdCard = function () {
        return this.idCard;
    };
    this.getBirthdayEmployee = function () {
        return this.birthDay;
    };
    this.getEmailEmployee = function () {
        return this.email;
    };
    this.getAddressEmployee = function () {
        return this.adress
    };
    this.getTypeEmployee = function () {
        return this.typeCustomer;
    };
    this.getDiscount = function () {
        return this.discount;
    };
    this.getNumberOfAccompanying = function () {
        return this.numberOfAccompanying;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.getRentDays = function () {
        return this.rentDays;
    };
    this.getTypeService = function () {
        return this.typeService;
    };
    this.getTotalPays = function () {
        return totalPays = 500 * Number.parseInt(this.rentDays) * (1 - Number.parseFloat(this.discount) / 100);
    };
};