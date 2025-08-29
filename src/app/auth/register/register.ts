import { Component, inject, OnInit, signal } from '@angular/core';
import { LogoComponent } from '@shared/components/logo';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "@shared/components/input/input";
import { Button } from "@shared/components/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [LogoComponent, ReactiveFormsModule, InputComponent, Button, RouterLink],
  templateUrl: './register.html',
})
export class Register {
  private fb = inject(FormBuilder);
  isLoading = signal(false);

  registrationForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  initRegistration(){}
}
