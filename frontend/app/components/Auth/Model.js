export class SignUpRequest {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ["user"];
    }
}

export class User {
    constructor(id, username, email, password, roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
    }
}