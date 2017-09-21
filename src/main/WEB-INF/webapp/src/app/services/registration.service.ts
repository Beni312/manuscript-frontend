import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AcademicDiscipline} from '../models/academic.discipline';

@Injectable()
export class RegistrationService {

  private url = 'http://localhost:4200/#/registration';


  constructor(private http: Http, private router: Router) {
  }

  preload(): Observable<AcademicDiscipline[]> {
    return this.http.post(this.url + '/preload', JSON.stringify({}))
      .map((response: Response) => response.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }
}
