import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../models/user.registration';
import { AcademicDiscipline } from '../../models/academic.discipline';
import { RegistrationService } from '../../services/registration.service';
import { Password } from '../../models/password';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationResult } from '../../models/registration.result';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    public userRegistration: UserRegistration;
    public academicDisciplines: AcademicDiscipline[];
    private formControl: FormGroup;
    success = false;
    private result: RegistrationResult;

    registration: FormGroup;

    constructor(private service: RegistrationService) {
        this.userRegistration = new UserRegistration();
        this.userRegistration.password = new Password();
        this.userRegistration.academicDisciplines = [];
    }

    async ngOnInit() {
        this.result = new RegistrationResult();

        this.formControl = new FormGroup({
            'title': new FormControl(this.userRegistration.title, [
                Validators.required
            ]),
            'firstName': new FormControl(this.userRegistration.firstName, [
                Validators.required
            ]),
            'lastName': new FormControl(this.userRegistration.lastName, [
                Validators.required
            ]),
            'job': new FormControl(this.userRegistration.job, [
                Validators.required
            ]),
            'email': new FormControl(this.userRegistration.email, [
                Validators.required,
                Validators.email
            ]),
            'userName': new FormControl(this.userRegistration.userName, [
                Validators.required
            ]),
            'authentication': new FormGroup({
                'password': new FormControl(this.userRegistration.password.password, [
                    Validators.required
                ]),
                'passwordAgain': new FormControl(this.userRegistration.password.password, [
                    Validators.required
                ])
            })
        });

        this.service.preload().subscribe(
            data => {
                this.academicDisciplines = data.academicDisciplines.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
            },
            err => console.log(err)
        );
    }

    addItems(items) {
        this.userRegistration.academicDisciplines = items;
    }

    register() {
        this.service.register(this.userRegistration).subscribe(result => {
            this.result = result;
        });
    }
}
