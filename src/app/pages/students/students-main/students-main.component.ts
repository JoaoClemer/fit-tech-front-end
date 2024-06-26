import { AsyncPipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbsComponent } from '../../../components/breadcrumbs/breadcrumbs.component';
import { InfoCardComponent } from '../../../components/info-card/info-card.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { ResponseDashBoardModel } from '../../../models/response/shared/response-dashboard-model';
import { ResponseStudentInListModel } from '../../../models/response/student/response-student-in-list-model';
import { LocalDateTimePipe } from '../../../pipes/local-date-time.pipe';
import { DashboardService } from '../../../services/dashboard.service';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-students-main',
  standalone: true,
  imports: [InfoCardComponent, PrimaryInputComponent, ReactiveFormsModule, LocalDateTimePipe, BreadcrumbsComponent, AsyncPipe],
  templateUrl: './students-main.component.html',
  styleUrl: './students-main.component.scss'
})
export class StudentsMainComponent implements OnInit {

  queryString = new HttpParams();
  currentPage:number = 1;
  onlyActive:boolean = false;
  onlyInative:boolean = false;
  filterText: string; 

  searchForm!: FormGroup;
  students:ResponseStudentInListModel[] = [];
  totalPages:number[] = [];
  dashboard:ResponseDashBoardModel;
  
  constructor(
    private studentService: StudentService,
    private dashboardService: DashboardService,
    private router:Router,
    private route: ActivatedRoute){
    this.searchForm = new FormGroup({
      searchText: new FormControl('')
    })
  }
  
  ngOnInit(): void {

    this.getStudents();
    this.getStudentDashboard();
  }

  private getStudents(): void {

    this.buildQueryString();

    this.totalPages = [];

    this.studentService.getAllStudentsrOfGym(this.queryString).subscribe(result => {
      this.students = result.data;

      for(var i = 1; i < result.pageCount; i++){
        this.totalPages.push(i);
      }

      this.currentPage = result.currentPage;
    })

  }

private getStudentDashboard(): void {
  this.dashboardService.getStudentDashBoard().subscribe(result => {
    this.dashboard = result;
  })
}

  private buildQueryString(): void {

    this.queryString = new HttpParams();

    if(this.onlyActive)
      this.queryString = this.queryString.append('onlyIsActive', true)

    if(this.onlyInative)
    this.queryString = this.queryString.append('onlyIsNotActive', true)

    if(this.filterText)
    this.queryString = this.queryString.append('filterText', this.filterText)

    this.queryString = this.queryString.append('pageNumber', this.currentPage)
  }

  public changePage(page:number): void{
    this.currentPage = page;

    this.getStudents();
  }

  public getOnlyActives(): void{
    this.onlyActive = true;
    this.onlyInative = false;

    this.getStudents();
  }

  public getOnlyInatives(): void{
    this.onlyInative = true;
    this.onlyActive = false;

    this.getStudents();
  }

  public getAll(): void{
    this.onlyActive = false;
    this.onlyInative = false;

    this.getStudents();
  }

  public search(): void{
    this.filterText = this.searchForm.controls['searchText'].value;

    this.getStudents();
  }

  public createNewUser(): void {
    this.router.navigate(['add-edit'], {relativeTo: this.route});
  }
}
