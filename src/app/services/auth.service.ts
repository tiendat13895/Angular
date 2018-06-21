import { Injectable } from '@angular/core';
import { IUSer } from 'src/app/interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

    private _users: BehaviorSubject<IUSer[]> = new BehaviorSubject<IUSer[]>([]);

    user: IUSer;
    constructor(private http: HttpClient) {
        // this.user = {
        //     fullName: '',
        //     password: '',
        //     username: ''
        // };
    }

    // login(username: string, password: string) {
    //     this.user.username = username;
    //     this.user.password = password;
    // }

    getUser(id: string) {
        return this.http.get('http://localhost:3000/users/' + id);
    }

    createUser(user: IUSer) {
        // user.id = Date.now();
        return this.http.post('http://localhost:3000/users', user).subscribe(() => {
            this._users.getValue().push(user);
            const newUsers = this._users.getValue();
            this._users.next(newUsers);
        });
    }
}


