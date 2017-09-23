import {Component} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-admin',
    moduleId: module.id,
    templateUrl: './admin.component.html'
})
export class AdminComponent {

    constructor(private service: AuthenticationService, private router: Router) {
        this.router.navigate(['admin/home'], {replaceUrl: true});
    }

    logout() {
        this.service.logOut().subscribe();
    }
}
