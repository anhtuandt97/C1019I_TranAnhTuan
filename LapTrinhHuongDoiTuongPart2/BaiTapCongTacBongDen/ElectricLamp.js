let ElectricLamp = function () {
    this.setStatus = function (status) {
        this.status = status;
    };
    this.getStatus = function () {
        if (this.status) {
            return "Den dang bat";
        }
        return "Den da tat";
    };
    this.turnOff = function () {
        this.setStatus(false);
    };
    this.turnOn = function () {
        this.setStatus(true);
    };
}