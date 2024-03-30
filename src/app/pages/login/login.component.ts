import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { UserType } from '../../models/enum/user-type';
import { RequestDoLoginModel } from '../../models/request/login/request-do-login-model';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private router: Router){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  get form(): { [key:string]: AbstractControl } {
    return this.loginForm.controls;
  }

  detectChange(): void {
    this.submitted = false;
  }

  onSubmit(): void{

    this.submitted = true;

    if(this.loginForm.valid){

      var requestDoLogin = new RequestDoLoginModel;
      requestDoLogin.emailAddress = this.loginForm.controls['email'].value;
      requestDoLogin.password = this.loginForm.controls['password'].value;
      requestDoLogin.userType = UserType.Employee;
      
      this.doLogin(requestDoLogin);
    }

  }

  doLogin(doLoginRequest: RequestDoLoginModel) {

    this.loginService.doLogin(doLoginRequest).subscribe(result => {
      
      this.tokenService.clear();
      this.tokenService.set(result.name, result.token);

      this.router.navigate(['']);

    });

  }
}
