import { FormGroup, FormControl } from '@angular/forms';

export class RegistrationValidator {
    static matchPassword(confirmPassword: FormControl) {
        let password = confirmPassword.root.get('password');
        let repeatPassword = confirmPassword.value;
    
        if (repeatPassword.length <= 0 || !password) {
            return null;
        }

        if (repeatPassword !== password.value) {
            return {
                doesMatchPassword: true
            };
        }
 
        return null;
 
    }
}