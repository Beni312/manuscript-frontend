import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { usersData } from './users';
import { academicDisciplineData } from './academicDisciplines';
import { ValidationError } from './validation.error';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    backend.connections.subscribe((connection: MockConnection) => {
        const users: any[] = usersData;
        const academicDisciplines: any[] = academicDisciplineData;


        setTimeout(() => {
            if (connection.request.url.endsWith('/j_spring_security_check') && connection.request.method === RequestMethod.Post) {
                const params = JSON.parse(connection.request.getBody());

                let filteredUser;
                filteredUser = users.filter(user => {
                    if (user.username === params.username && user.password === params.password) {
                        return user;
                    }
                });

                if (filteredUser[0]) {
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            success: true,
                            role: filteredUser[0].role,
                            session: '54EBC762017F4CCCAFC5B9F175F4E1DE'
                        }
                    })));
                } else {
                    // connection.mockRespond(new Response(new ResponseOptions({
                    //     status: 403,
                    //     body: {
                    //         success: false,
                    //         errorMessage: 'Wrong username or password. Please try again.'
                    //     }
                    // })));
                    connection.mockError(new Error('Username or password is incorrect'));
                }
            }
            if (connection.request.url.endsWith('/logout') && connection.request.method === RequestMethod.Post) {
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: {
                        success: true
                    }
                })));
            }

            if (connection.request.url.endsWith('/registration/preload') && connection.request.method === RequestMethod.Post) {
                connection.mockRespond((new Response(new ResponseOptions({
                    status: 200,
                    body: {
                        academicDisciplines: academicDisciplines
                    }
                }))));
            }
            if (connection.request.url.endsWith('/registration/create') && connection.request.method === RequestMethod.Post) {
                const request = JSON.parse(connection.request.getBody());
                let userNameSuccess = true;
                users.forEach(item => {
                    if (item.username === request.user.userName) {
                        userNameSuccess = false;
                    }
                });
                let passwordSuccess = true;
                if (request.user.password.password !== request.user.password.passwordAgain) {
                    passwordSuccess = false;
                }

                const errors: ValidationError[] = [];

                if (!userNameSuccess) {
                    errors.push(new ValidationError(null, 'User name is already used!'));
                }
                if (!passwordSuccess) {
                    errors.push(new ValidationError(null, 'Password parity check failed. The given passwords are not matched.'));
                }
                if (errors.length === 0) {
                    users.push({
                            'username': request.user.userName,
                            'password': request.user.password.password,
                            'role': 'user',
                            'title': request.user.title,
                            'firstName': request.user.firstName,
                            'lastName': request.user.lastName,
                            'job': request.user.job,
                            'email': request.user.email,
                            'academicDisciplines': request.user.academicDisciplines
                    });
                    connection.mockRespond((new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            success: true,
                            errors: []
                        }
                    }))));
                }else {
                    connection.mockRespond((new Response(new ResponseOptions({
                        status: 403,
                        body: {
                            success: false,
                            errors: errors
                        }
                    }))));
                }
            }
        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
