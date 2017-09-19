import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { usersData } from './users';
import {academicDisciplineData} from './academicDisciplines';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    backend.connections.subscribe((connection: MockConnection) => {
        const users: any[] = usersData;
        const academicDisciplines: any[] = academicDisciplineData;


        setTimeout(() => {
            if (connection.request.url.endsWith('/j_spring_security_check') && connection.request.method === RequestMethod.Post) {
                const params = JSON.parse(connection.request.getBody());

                let filteredUser;
                filteredUser = users.filter(user => {
                    if (user.username === params.username && user.password === params.password)
                      return user;
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
              console.log(academicDisciplines);
                connection.mockRespond((new Response(new ResponseOptions({
                    status: 200,
                    body: {
                        academicDisciplines: academicDisciplines
                    }
                }))));
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
