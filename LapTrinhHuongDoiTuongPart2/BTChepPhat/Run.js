var bongDen = new BongDen();
var congTac = new CongTac();
var trangThaiBongDen = document.getElementById("trangThaiCuaBongden");
function congTacBat() {
    congTac.batCongTac();
    congTac.ketNoi(bongDen);
    trangThaiBongDen.innerText = bongDen.getTrangThai();
}

function CongTacTat() {
    congTac.tatCongTac();
    congTac.ketNoi(bongDen);
    trangThaiBongDen.innerText = bongDen.getTrangThai();
}