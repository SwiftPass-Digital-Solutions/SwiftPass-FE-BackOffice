import { Component, inject, OnInit, signal } from '@angular/core';
import { LogoComponent } from '@shared/components/logo';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "@shared/components/input/input";
import { Button } from "@shared/components/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [LogoComponent, ReactiveFormsModule, InputComponent, Button, RouterLink],
  templateUrl: './login.html',
})
export class Login {
  private fb = inject(FormBuilder);
  isLoading = signal(false);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
  }
}
