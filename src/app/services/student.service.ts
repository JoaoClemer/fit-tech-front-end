import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseListForTableModel } from '../models/response/shared/response-list-for-table-model';
import { ResponseStudentInListModel } from '../models/response/student/response-student-in-list-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlApi = environment.urlApi;

  constructor(private httpClient: HttpClient) { }

  public getAllStudentsrOfGym(queryString: HttpParams): Observable<ResponseListForTableModel<ResponseStudentInListModel[]>>{
    var url = `${this.urlApi}student`;
    return this.httpClient.get<ResponseListForTableModel<ResponseStudentInListModel[]>>(url, {params: queryString});
  }
}
