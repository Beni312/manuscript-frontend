import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { usersData } from './users';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    backend.connections.subscribe((connection: MockConnection) => {
        const users: any[] = usersData;

        setTimeout(() => {


            if (connection.request.url.endsWith('/j_spring_security_check') && connection.request.method === RequestMethod.Post) {
                const params = JSON.parse(connection.request.getBody());

                const filteredUsers = users.filter(user => {
                    return user.username === params.username && user.password === params.password;
                });

                if (filteredUsers.length) {
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            success: true,
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
        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
