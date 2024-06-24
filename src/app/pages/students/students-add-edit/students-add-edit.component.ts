import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { BreadcrumbsComponent } from '../../../components/breadcrumbs/breadcrumbs.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { RequestCreateStudentModel } from '../../../models/request/student/request-create-student-mode';
import { StudentService } from '../../../services/student.service';
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
  studentId:number;

  constructor(private studentService: StudentService,
    private route: ActivatedRoute
  ){

    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      repeatPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),
      cpf: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
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
    this.studentId = this.route.snapshot.params['id'];
    if(this.studentId != undefined)
      this.loadStudentInfo();
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
    
    if(this.studentForm.valid){
      var createUserRequest = this.studentForm.value as RequestCreateStudentModel;
      createUserRequest.address.state.toUpperCase();
      createUserRequest.gymId = 1;
      console.log(createUserRequest);
      this.createStudent(createUserRequest);

    }else{
      Swal.fire({
        icon: "error",
        title: "Ops.. Ocorreu algum problema!",
        text: "Alguma das informações preenchida está incorreta, verifique as informações e tente novamente."
      });
    } 

  }

  createStudent(requestCreateStudent:RequestCreateStudentModel): void{
    this.studentService.createStudent(requestCreateStudent).subscribe(result => {
    });
  }

  loadStudentInfo() : void{
    this.studentService.getStudentInfoById(this.studentId).subscribe(result => {
      this.studentForm.patchValue(result);
    })
  }
}
