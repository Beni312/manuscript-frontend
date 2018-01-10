import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from '../helpers/fakeBackend';
import { RouterModule } from '@angular/router';
import { RegistrationService } from './services/registration.service';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService } from './services/authentication.service';
import { ClickOutsideDirective } from './components/directives/dropdown.directive';
import { AutocompleteComponent } from './components/autocompl/autocompl.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
        {
            path: 'login', component: LoginComponent
        },
        {
            path: 'registration', component: RegistrationComponent
        },
        ], {useHash: true});

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        ClickOutsideDirective,
        AutocompleteComponent
    ],
    imports: [
        AdminModule,
        UserModule,
        SharedModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        rootRouting
    ],
    providers: [
        AuthenticationService,
        // fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        RegistrationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
