class DatosUsuarios {
    constructor() {
        this.firstName = null;
        this.lastName = null;
        this.email = null;
        this.password = null;
    }

    setFirstname(firstname) {
        this.firstName = firstname;
    }
    setLastname(lastname) {
        this.lastName = lastname;
    }
    setPassword(password) {
        this.password = password;
    }
    setEmail(email) {
        this.email = email;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getPassword() {
        return this.password;
    }
    getEmail() {
        return this.email;
    }

    // Continuar esta función
    getToken() {
        return localStorage.getItem("token");
    }
}