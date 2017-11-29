import {Component} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
    model: any = {};

    constructor(private service: AuthenticationService) {
    }

    login() {
        this.service.login(this.model.username, this.model.password).subscribe();
    }
}
