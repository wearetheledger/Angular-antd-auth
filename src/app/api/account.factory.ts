import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class AccountFactory extends ApiService {

    constructor(
        protected auth: AuthService,
        protected httpClient: HttpClient
    ) { super(auth, httpClient); }


}
