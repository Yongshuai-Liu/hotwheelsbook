import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationValidator } from '../validators/register.validator';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  
  signUpForm: FormGroup;

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        RegistrationValidator.matchPassword,
      ]),
    }, {
      
    });
  }
  get password() { return this.signUpForm.get('password'); }
  
  get email() { return this.signUpForm.get('email'); }

  get confirmPassword() { return this.signUpForm.get('confirmPassword'); }

}
