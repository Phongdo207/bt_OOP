import Person from "./person.js";

class Student extends Person{
    constructor(_hoten, _diachi, _ma, _email,_toan, _ly, _hoa){
        super(_hoten, _diachi, _ma, _email);
        this.toan = _toan;
        this.ly = _ly;
        this.hoa = _hoa;
    }

    getArea(){
        this.dtb = (Number(this.toan) + Number(this.ly) + Number(this.hoa))/3;
    }
}

export default Student;