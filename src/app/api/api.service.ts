import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

    public serverEndpoint = environment.serverEndpoint;

    constructor(
        protected auth: AuthService,
        protected httpClient: HttpClient
    ) { }

    protected createHeaders() {
        return {
            headers: new HttpHeaders().set(
                'Authorization', `Bearer ${localStorage.getItem('id_token')}`
            )
        };
    }

}
