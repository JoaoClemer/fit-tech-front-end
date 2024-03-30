import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RequestDoLoginModel } from '../models/request/login/request-do-login-model';
import { ResponseDoLoginModel } from '../models/response/login/response-do-login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlApi = environment.urlApi;

  constructor(private httpClient: HttpClient) { }

  public doLogin(request: RequestDoLoginModel): Observable<ResponseDoLoginModel>{
    var url = `${this.urlApi}login`
    return this.httpClient.post<ResponseDoLoginModel>(url, request);
  }
}
