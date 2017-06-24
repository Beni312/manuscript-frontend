import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private service: AuthenticationService
  ) { }

  ngOnInit() {
    this.service.logOut();
  }

  login() {
    this.service.login(this.model.username, this.model.password);
  }

}
