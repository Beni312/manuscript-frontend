import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  moduleId: module.id,
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  constructor(private service: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    // this.router.navigate(['home'], {replaceUrl: true});
  }

  logout() {
    this.service.logOut().subscribe();
  }
}
