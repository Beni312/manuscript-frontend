import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';

  constructor(private service: AuthenticationService) {
  }
  ngOnInit(): void {
    // localStorage.removeItem('currentUser');
  }

  logout() {
      this.service.logOut().subscribe();
  }
}
