import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs";

export class PasswordValidators {
  static passwordMatchesOldPassword(control: AbstractControl): ValidationErrors | null {
    if(control.value == '1234')
      return {passwordMatchesOldPassword: true};
    return null;
  }


  //Async validator
  static passwordMatchesOldPasswordAsync(control: AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors| null>{

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if(control.value !== '1234') {
          console.log('ok')
          resolve({passwordMatchesOldPasswordAsync: true });
        }
        resolve(null);
      }, 1);
    });
  }
}
