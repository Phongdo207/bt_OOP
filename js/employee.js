import Person from "./person.js";


class Employee extends Person{
    constructor(_hoten, _diachi, _ma, _email, _soNgayLamViec, _luongTheoNgay){
        super(_hoten, _diachi, _ma, _email);
        this.soNgayLamViec = _soNgayLamViec;
        this.luongTheoNgay = _luongTheoNgay;
    }

    getArea(){
        this.luong = Number(this.soNgayLamViec) * Number(this.luongTheoNgay);
    }
}

export default Employee;