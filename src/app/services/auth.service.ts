import { Injectable } from '@angular/core';
import { IUSer } from 'src/app/interfaces/IUser';

@Injectable()
export class AuthService {

    user: IUSer;
    constructor() {
        this.user = {
            fullName: '',
            password: '',
            username: ''
        };
    }

    login(username: string, password: string) {
        this.user.username = username;
        this.user.password = password;
    }
}


