class Employee {
    constructor(cpf, name, email, avatar, bio, password) {
        this.cpf = cpf;
        this.name = name;
        this.email = email;
        this.avatar = avatar;
        this.bio = bio;
        this.password = password;
    }
}

module.exports = {Employee}