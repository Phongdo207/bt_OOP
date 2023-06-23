class Person{
    constructor(_hoten, _diachi, _ma, _email){
        this.hoTen = _hoten;
        this.diaChi = _diachi;
        this.ma = _ma;
        this.eMail = _email;
        this.arr = [];
    }

    addList(user){
        this.arr.push(user);
    }
}

export default Person;