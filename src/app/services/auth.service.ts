import { Injectable } from '@angular/core';
import { IUSer } from 'src/app/interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

    private _users: BehaviorSubject<IUSer[]> = new BehaviorSubject<IUSer[]>([]);
    private _user: BehaviorSubject<IUSer> = new BehaviorSubject<IUSer>({});

    get user() {
        return this._user.asObservable();
    }
    constructor(private http: HttpClient) {
        const user: IUSer = {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password')
        };
        this._user.next(user);
    }

    login(username: string, password: string) {
        if (!username || !password) {
            return;
        }
        const user = {
            username: username,
            password: password
        }
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        this._user.next(user);

    }

    getUser(id: string) {
        return this.http.get('/users/' + id);
    }

    createUser(user: IUSer) {
        // user.id = Date.now();
        return this.http.post('/users', user).subscribe(() => {
            this._users.getValue().push(user);
            const newUsers = this._users.getValue();
            this._users.next(newUsers);
        });
    }
}


