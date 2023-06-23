import Person from "./person.js";
import Student from "./student.js";
import Employee from "./employee.js";
import Customer from "./customer.js";

const getEle = (id) => document.getElementById(id);

const person = new Person();

const getInfoStudent = () => {
    const ma = getEle("idStudent").value;
    const name = getEle("tenStudent").value;
    const email = getEle("eMailStudent").value;
    const address = getEle("diaChiStudent").value;
    const diemToan = getEle("diemToan").value;
    const diemLy = getEle("diemLy").value;
    const diemHoa = getEle("diemHoa").value;

    const student = new Student(name, address, ma, email, diemToan, diemLy, diemHoa);
    student.getArea();
    return student;
}

const getInfoEmployee = () => {
    const ma = getEle("idEmp").value;
    const name = getEle("tenEmp").value;
    const email = getEle("eMailEmp").value;
    const address = getEle("diaChiEmp").value;
    const soNgayLam = getEle("soNgayLam").value;
    const luongNgay = getEle("luongTheoNgay").value;

    const employee = new Employee(name, address, ma, email, soNgayLam, luongNgay);
    employee.getArea();
    return employee;
}

const getInfoCustomer = () => {
    const ma = getEle("idCus").value;
    const name = getEle("tenCus").value;
    const email = getEle("eMailCus").value;
    const address = getEle("diaChiCus").value;
    const tenCongTy = getEle("tenCongTy").value;
    const triHoaDon = getEle("giaTriDon").value;
    const danhGia = getEle("danhGia").value;

    const customer = new Customer(name, address, ma, email, tenCongTy, triHoaDon, danhGia);
    return customer;
}


// Render List UI
const renderUIStudent = (data) => {
    let content = "";
    if (data && data.length > 0) {
        data.forEach((student) => {
            content += `
                  <tr>
                      <td>${student.ma}</td>
                      <td>${student.hoTen}</td>
                      <td>${student.diaChi}</td>
                      <td>${student.eMail}</td>
                      <td>${student.toan}</td>
                      <td>${student.ly}</td>
                      <td>${student.hoa}</td>
                      <td>${student.dtb}</td>
                      <td>
                        <button class = "btn btn-danger" onclick="xoaUser(${student.ma})">Xoá</button>
                      </td>
                   </tr>            
              `
        });
    };
    getEle("tbodyStudent").innerHTML = content;
}
renderUIStudent();

const renderUIEmp = (data) => {
    let content = "";
    if (data && data.length > 0) {
        data.forEach((employee) => {
            content += `
                  <tr>
                      <td>${employee.ma}</td>
                      <td>${employee.hoTen}</td>
                      <td>${employee.diaChi}</td>
                      <td>${employee.eMail}</td>
                      <td>${employee.soNgayLamViec}</td>
                      <td>${employee.luongTheoNgay}</td>
                      <td>${employee.luong}</td>
                      <td>
                        <button class = "btn btn-danger" onclick="xoaUser(${employee.ma})">Xoá</button>
                      </td>
                   </tr>            
              `
        });
    };
    getEle("tbodyEmployee").innerHTML = content;
}
renderUIEmp();

const renderUICustomer = (data) => {
    let content = "";
    if (data && data.length > 0) {
        data.forEach((customer) => {
            content += `
                  <tr>
                      <td>${customer.ma}</td>
                      <td>${customer.hoTen}</td>
                      <td>${customer.diaChi}</td>
                      <td>${customer.eMail}</td>
                      <td>${customer.tenCongTy}</td>
                      <td>${customer.triGiaHoaDon}</td>
                      <td>${customer.danhGia}</td>
                      <td>
                        <button class = "btn btn-danger" onclick="xoaUser(${customer.ma})">Xoá</button>
                      </td>
                   </tr>            
              `
        });
    };
    getEle("tbodyCustomer").innerHTML = content;
}
renderUICustomer();


// Add Student
getEle("addStudent").addEventListener("click", () => {
    getEle("exampleModalLabel").innerHTML = "Student";

});

getEle("btnThemStudent").addEventListener("click", () => {
    const user = getInfoStudent();
    person.addList(user);
    renderUIStudent(person.arr);
    setLocalStorage();
});

// Add Employee
getEle("addEmp").addEventListener("click", () => {
    getEle("exampleModalLabel1").innerHTML = "Employee";

});

getEle("btnThemEmp").addEventListener("click", () => {
    const user = getInfoEmployee();
    person.addList(user);
    renderUIEmp(person.arr);
    setLocalStorageEmp();
});

// Add Customer
getEle("addCus").addEventListener("click", () => {
    getEle("exampleModalLabel2").innerHTML = "Customer";

});

getEle("btnThemCustomer").addEventListener("click", () => {
    const user = getInfoCustomer();
    person.addList(user);
    renderUICustomer(person.arr);
    setLocalStorageCus();
});

// Delete Item
const xoaUser = () => {
    localStorage.clear();
}
window.xoaUser = xoaUser;

// //LOCALSTORAGE
const setLocalStorage = () => {
    const dataString = JSON.stringify(person.arr);
    localStorage.setItem("LISTStudent", dataString);
}
const getLocalStorage = () => {
    if (localStorage.getItem("LISTStudent")) {
        const dataString = localStorage.getItem("LISTStudent");
        const dataJson = JSON.parse(dataString);
        renderUIStudent(dataJson);
    }
}
getLocalStorage();


const setLocalStorageEmp = () => {
    const dataStringEmp = JSON.stringify(person.arr);
    localStorage.setItem("LISTEmp", dataStringEmp);
}

const getLocalStorageEmp = () => {
    if (localStorage.getItem("LISTEmp")) {
        const dataStringEmp = localStorage.getItem("LISTEmp");
        const dataJsonEmp = JSON.parse(dataStringEmp);
        renderUIEmp(dataJsonEmp);
    }
}
getLocalStorageEmp();


const setLocalStorageCus = () => {
    const dataStringCus = JSON.stringify(person.arr);
    localStorage.setItem("LISTCus", dataStringCus);
}

const getLocalStorageCus = () => {
    if (localStorage.getItem("LISTCus")) {
        const dataStringCus = localStorage.getItem("LISTCus");
        const dataJsonCus = JSON.parse(dataStringCus);
        renderUICustomer(dataJsonCus);
    }
}

getLocalStorageCus();
