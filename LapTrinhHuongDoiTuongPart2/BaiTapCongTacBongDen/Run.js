let bongDen = new ElectricLamp();
let congTac = new SwitchButton();
congTac.connectToLamp(bongDen);
let trangThaiBongDen = document.getElementById("trangThaiBongDen");
function batCongTac() {
    congTac.switchOn();
    trangThaiBongDen.innerText = bongDen.getStatus();
};
function tatCongTac() {
    congTac.switchOff();
    trangThaiBongDen.innerText = bongDen.getStatus();
}