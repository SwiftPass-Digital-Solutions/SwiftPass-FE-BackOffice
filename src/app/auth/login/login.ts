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

    this.router.navigateByUrl('/main/dashboard');
    // Replace with real auth integration
    // console.log('Login payload', this.form.value);
    // alert('Submitted: ' + JSON.stringify(this.form.value));
  }
}
