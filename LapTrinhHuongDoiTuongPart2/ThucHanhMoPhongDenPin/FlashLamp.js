let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.baterry = battery;
    };
    this.getBattery = function () {
        return this.baterry.getEnergy();
    };
    this.getBatteryInfo = function () {
        return this.baterry.decreaseEnergy();
    };
    this.light = function () {
        if (this.status) {
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };
}