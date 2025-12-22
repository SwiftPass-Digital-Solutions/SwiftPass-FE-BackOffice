import { Component, inject, OnInit, signal } from '@angular/core';
import { LogoComponent } from '@shared/components/logo';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '@shared/components/input/input';
import { Button } from '@shared/components/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { finalize } from 'rxjs';
import { UserType } from '@shared/enums/app-enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class Login {
  form: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    let request = this.form.value;
    ///request.userType = 1;

    this.authService.login(request).subscribe({
      next: (response) => {
        // Handle successful login, e.g., store token, navigate based on user type
        this.router.navigateByUrl('/main/dashboard');

        // const userType = response.data.userType;
        // if (userType === UserType.Admin) {
        //   this.router.navigateByUrl('/main/admin-dashboard');
        // } else {
        //   this.router.navigateByUrl('/main/dashboard');
        // }
      },
      error: (error) => {
        // Handle login error, e.g., show error message
        console.error('Login failed', error);
      },
    });

    //this.router.navigateByUrl('/main/dashboard');
    // Replace with real auth integration
    // console.log('Login payload', this.form.value);
    // alert('Submitted: ' + JSON.stringify(this.form.value));
  }
}
