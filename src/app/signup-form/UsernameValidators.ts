import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Observable} from "rxjs";

export class UsernameValidators{
  //Simple validator
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null  {
    if((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    return null;
  }

  //Async validator
  static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors| null>{

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('ok')
            if(control.value === 'mosh')
              resolve({shouldBeUnique: true });
            else
              resolve(null);
          }, 2000);
        });

  }
}
