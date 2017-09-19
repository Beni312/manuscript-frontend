import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
    // private loggedIn = false;
    private url = 'http://localhost:4200/#';

    // private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    constructor(private http: Http, private router: Router) {
    }

    login(username, password) {
        return this.http.post(this.url + '/j_spring_security_check', {username: username, password: password})
            .map((response: Response) => {
                    const user = response.json();
                    if (user) {
                      if (user.role == 'admin'){
                        localStorage.setItem('currentUser', JSON.stringify(user.role));
                        this.router.navigate(['admin'], {replaceUrl: true});
                      } else {
                        localStorage.setItem('currentUser', JSON.stringify(''));
                        this.router.navigate([''], {replaceUrl: true});
                      }
                    }
                }
            );
    }

  logOut() {
      return this.http.post(this.url + '/logout', JSON.stringify({}))
          .map((response: Response) => {
                  const success = response.json();
                  if (success) {
                      localStorage.removeItem('currentUser');
                      this.router.navigate(['/login'], { replaceUrl: true });
                  }
              }
          );
  }
}
