import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BreadcrumbsComponent } from '../../../components/breadcrumbs/breadcrumbs.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { matchPassword } from '../../../validators/match-password-validator';

@Component({
  selector: 'app-students-add-edit',
  standalone: true,
  imports: [PrimaryInputComponent, ReactiveFormsModule, BreadcrumbsComponent],
  templateUrl: './students-add-edit.component.html',
  styleUrl: './students-add-edit.component.scss'
})
export class StudentsAddEditComponent implements OnInit {
  submitted = false;
  studentForm!: FormGroup;

  constructor(){

    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      repeatPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
      cpf: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('',[Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        number: new FormControl('',[Validators.required]),
      })
    },
    {
      validators: matchPassword
    })
  }

  ngOnInit(): void {
  }

  get studentFormControls(): { [key:string]: AbstractControl } {
    return this.studentForm.controls;
  }

  get addressFormControls(): {[key:string]: AbstractControl} {
    var addressGroup = this.studentFormControls['address'] as FormGroup;

    return addressGroup.controls;
  }

  detectChange(): void {
    this.submitted = false;
  }
 
  saveStudentsInfo(): void {
    this.submitted = true; 

  }
}
