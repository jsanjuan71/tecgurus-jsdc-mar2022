import Response from '/models/response.class.js';
class User {
    name = undefined;
    #email = undefined;
    #password = undefined;

    constructor(data) {
        const {name, email, password, ...args} = data;
        this.name = name;
        this.#email = email;
        this.#password = password;
    }

    toPlainObject(){
        return {
            "name": this.name,
            "email": this.#email
        };
    }
}

export default User