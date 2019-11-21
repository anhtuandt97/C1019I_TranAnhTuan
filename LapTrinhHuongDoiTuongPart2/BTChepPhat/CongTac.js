let CongTac = function () {
    this.setTrangThai = function (trangThai) {
        this.trangThai = trangThai;
    };
    this.getTrangThai = function () {
        return this.trangThai;
    };
    this.batCongTac = function () {
        this.setTrangThai(true);
    };
    this.tatCongTac = function () {
        this.setTrangThai(false);
    };
    this.ketNoi = function (bongDen) {
        if (this.trangThai==true) {
            bongDen.batDen();
        }else {
            bongDen.tatDen();
        }
    }
}