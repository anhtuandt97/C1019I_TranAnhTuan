let BongDen = function () {
    this.setTrangThai = function (trangThai) {
        this.trangThai = trangThai;
    };
    this.getTrangThai = function () {
        if (this.trangThai) {
            return "Den dang bat";
        }
        return "Den da tat";
    };
    this.batDen = function () {
        this.setTrangThai(true);
    };
    this.tatDen = function () {
        this.setTrangThai(false);
    };
}