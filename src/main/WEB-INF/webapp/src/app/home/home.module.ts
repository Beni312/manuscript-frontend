import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationService} from '../services/authentication.service';
import {ManageComponent} from './manage/manage.component';
import {AboutComponent} from './about/about.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ManageComponent,
        AboutComponent
    ],
    providers: [
        AuthenticationService
    ]
})
export class HomeModule {
}
