import { Injectable } from '@angular/core';
import { Headers, Response, Http/*, RequestOptions */} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  // private loggedIn = false;
  private loginUrl = 'http://localhost:8080/login';
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) {
  }

  login(username, password) {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    return this.http.post(this.loginUrl, body, this.headers)
      .map((response: Response) => {
          const user = response.json();
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }
      );
  }

  logOut() {
    localStorage.removeItem('currentUser');
  }
}
