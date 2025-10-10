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
  loginData = {
    email: '',
    password: '',
  };

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.showPassword ? 'text' : 'password';
  }

  onSubmit() {
    console.log('Login data:', this.loginData);
  }
}
