import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserRegistration } from '../models/user.registration';

@Injectable()
export class RegistrationService {

    private url = 'http://localhost:4200/#/registration';


    constructor(private http: Http) {
    }

    preload() {
        return this.http.post(this.url + '/preload', JSON.stringify({}))
            .map((res) => res.json());
    }

    register(userRegistration: UserRegistration) {
        return this.http.post(this.url + '/create', {user: userRegistration})
            .map((res) => res.json());
    }
}
