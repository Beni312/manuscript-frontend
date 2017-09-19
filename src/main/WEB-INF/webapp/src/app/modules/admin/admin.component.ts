import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'app-admin',
    moduleId: module.id,
    templateUrl: './admin.component.html'
})
export class AdminComponent {

    constructor(private service: AuthenticationService) {
    }

    logout() {
        this.service.logOut().subscribe();
    }
}
