//import jwt from "jsonwebtoken";

const SECRET_KEY = "jwt-secret-key";

// interface User {
//   token: string;
//   email: string;
//   phoneNumber: string;
//   password: string;
//   name: string;
// }

export class AuthService {
  users = [];
  static instance = null;

  static getInstance = () => {
    if (!this.instance) {
      this.instance = new AuthService();
    }
    return this.instance;
  };

  register = (email, name, phoneNumber, password) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.users.find((item) => item.email === email)) {
          reject("User already exists");
        }

        const user = {
          name,
          password,
          phoneNumber,
          email,
          token: `${name}-${phoneNumber}-${SECRET_KEY}`,
        };
        this.users = [...this.users, user];
        console.log({ users: this.users });

        resolve(user);
      }, 1000);
    });

  login = (email, password) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = this.users.find((item) => item.email === email);

        if (!user) {
          reject("User does not exist");
        }

        if (user?.password !== password) {
          reject("Password is not correct");
        }

        resolve(user);
      }, 1000);
    });
}

/*
Login: get email & password: receive user
Register: get email, name, phoneNumber, password: receive user

Get this auth api only by getInstance method, don't touch any fields in class
const authApi = AuthService.getInstance();
*/
