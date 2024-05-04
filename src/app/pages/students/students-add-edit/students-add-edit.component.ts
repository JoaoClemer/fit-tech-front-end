import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from '../../../components/breadcrumbs/breadcrumbs.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';

@Component({
  selector: 'app-students-add-edit',
  standalone: true,
  imports: [PrimaryInputComponent, ReactiveFormsModule, BreadcrumbsComponent],
  templateUrl: './students-add-edit.component.html',
  styleUrl: './students-add-edit.component.scss'
})
export class StudentsAddEditComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(){
    this.studentForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      repeatPassword: new FormControl(''),
      cpf: new FormControl(''),
      phone: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl(''),
        country: new FormControl(''),
        number: new FormControl(''),
      })
    })
  }

  ngOnInit(): void {
  }

  saveStudentsInfo(): void {
    
  }
}
