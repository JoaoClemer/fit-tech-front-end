import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassword: ValidatorFn = (control: AbstractControl):ValidationErrors | null => {
    
    var password = control.get('password');
    let repeatPassword = control.get('repeatPassword');

    if(password && repeatPassword && password?.value != repeatPassword?.value){
        return {
            passwordMatchError: true
        }
    }
    
    return null;
}