import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {RegistrationService} from '../../services/registration.service';
import {AcademicDiscipline} from '../../models/academic.discipline';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    academicDisciplines: AcademicDiscipline[];

    constructor(private service: RegistrationService) {
    }

    async ngOnInit() {
      this.service.preload().subscribe(
        academicDisciplines => this.academicDisciplines = academicDisciplines,
          err=> {
            console.log(err)
          }
      );
    }
}
