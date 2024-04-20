import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseDashBoardModel } from '../models/response/shared/response-dashboard-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urlApi = environment.urlApi;

  constructor(private httpClient: HttpClient) { }

  public getStudentDashBoard() : Observable<ResponseDashBoardModel> {
    const url = `${this.urlApi}dashboard/student`;
    return this.httpClient.get<ResponseDashBoardModel>(url);
  }
}
