export class SignUpRequest {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ["user"];
    }
}