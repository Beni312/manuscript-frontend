import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ManageComponent} from './manage/manage.component';
import {AboutComponent} from './about/about.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HomeComponent,
        ManageComponent,
        AboutComponent
    ],
    exports: [
        HomeComponent,
        ManageComponent,
        AboutComponent
    ],
    providers: [
    ]
})
export class SharedModule {
}
