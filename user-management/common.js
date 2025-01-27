class UserManagement {
    dataBase = {
        milan: {
            username: 'milan',
            email: 'milan@gmail.com',
            password: 'milan123'
        },
        john: {
            username: 'john',
            email: 'john@gmail.com',
            password: 'john123'
        },
        todd: {
            username: 'todd',
            email: 'todd@gmail.com',
            password: 'todd123'
        },
    };
    saveData() {
        localStorage.setItem("userData", JSON.stringify(this.dataBase));
    }
    getData() {
        this.dataBase = JSON.parse(localStorage.getItem("userData"));
    }
    login() {
        this.getData()
    }
    register() {
        let uname = userName.value
        let uemail = userEmail.value
        let upassword = userPassword.value
        if (uname !== '' && uemail !== '' && upassword !== '') {
            this.getData();
            //logic to add data to local storage
            if (uname in this.dataBase) {
                alert(`${uname} already exists in db!`)
            }
            else {
                this.dataBase[uname] = { username: uname, email: uemail, password: upassword }
                this.saveData();
                alert(`${uname} successfully registered!`)
            }
        }
        else {
            alert("Please Fill The Form Completely!")
        }
    }
}
const obj = new UserManagement();
obj.saveData();
