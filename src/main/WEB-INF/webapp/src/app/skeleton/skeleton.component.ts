import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './skeleton.component.html'
})

export class SkeletonComponent {

  constructor(private service: AuthenticationService) {
  }

  logout() {
    this.service.logOut().subscribe();
  }
}
