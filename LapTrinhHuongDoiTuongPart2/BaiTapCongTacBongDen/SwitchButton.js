let SwitchButton = function () {
    this.setStatus = function (status) {
        this.status = status;
    };
    this.getStatus = function () {
        return this.status;
    };
    this.connectToLamp = function (lamp) {
        this.lamp = lamp;
    };
    this.lamp = function () {
        return this.lamp;
    };
    this.switchOn = function () {
        this.setStatus(true);
        this.lamp.turnOn();
    };
    this.switchOff = function () {
        this.setStatus(false);
        this.lamp.turnOff();
    }
}