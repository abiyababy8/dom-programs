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
    login(){
        this.getData()
    }
    register(){
        this.getData()
    }
}