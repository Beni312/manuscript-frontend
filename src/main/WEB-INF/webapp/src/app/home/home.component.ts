import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private service: AuthenticationService) {}

  ngOnInit(): void {
  }

  logout() {
    this.service.logOut().subscribe();
  }
}
