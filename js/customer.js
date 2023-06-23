import Person from "./person.js";


 class Customer extends Person{
    constructor(_hoten, _diachi, _ma, _email,_tenCongTy, _triGiaHoaDon, _danhGia){
        super(_hoten, _diachi, _ma, _email);
        this.tenCongTy = _tenCongTy;
        this.triGiaHoaDon = _triGiaHoaDon;
        this.danhGia = _danhGia;
    }
}

export default Customer;