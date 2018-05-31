import { AuthService } from './../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { DataDto } from '../models/datadto';

@Injectable()
export class InvestorsFactory extends ApiService {
  constructor(protected auth: AuthService, protected httpClient: HttpClient) {
    super(auth, httpClient);
  }

  public getData(): Observable<DataDto[]> {
    return this.httpClient.get<DataDto[]>(`${this.serverEndpoint}/data`, this.createHeaders());
  }

}
