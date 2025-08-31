import { Component, computed, inject, signal } from '@angular/core';
import { LogoComponent } from '@shared/components/logo';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "@shared/components/input/input";
import { Button } from "@shared/components/button";
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { passwordMatchValidator } from '@shared/validators/password-match';
import { CompleteRegistrationPayload } from '../auth.model';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [LogoComponent, ReactiveFormsModule, InputComponent, Button, RouterLink],
  templateUrl: './complete-registration.html',
})
export class CompleteRegistration {
  private toast = inject(ToastrService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);

  user = computed(() => this.authService.user());

  isLoading = signal(false);

  passwordForm: FormGroup = this.fb.group({
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  },
  {
    validators: passwordMatchValidator(),
  });

  password = toSignal(this.passwordForm.get('password')!.valueChanges, { initialValue: '' });

  passwordCriteria = [
    {
      name: 'Minimum of eight(8) characters',
      isValid: computed(() => this.password().length >= 8),
    },
    {
      name: 'One uppercase letter',
      isValid: computed(() => /[A-Z]/.test(this.password())),
    },
    {
      name: 'One lowercase letter',
      isValid: computed(() => /[a-z]/.test(this.password())),
    },
    {
      name: 'One number',
      isValid: computed(() => /\d/.test(this.password())),
    },
    {
      name: 'One special character',
      isValid: computed(() => /[^a-zA-Z0-9]/.test(this.password())),
    },
  ];

  completeRegistration() {
    if (!this.passwordForm.valid) {
      this.passwordForm.markAllAsTouched();
      return;
    }

    const payload: CompleteRegistrationPayload = {
      email: this.user()?.email as string,
      password: this.passwordForm.value.password,
      token: this.authService.getToken() || '',
    };

    this.isLoading.set(true);

    this.authService.completeRegistration(payload)
    .pipe(finalize(() => this.isLoading.set(false)))
    .subscribe({
      next: (res) => {
        this.toast.success(res.message || 'Registration successful');
        this.router.navigate(['login']);
      }
    })
  }

  goBack(){
    this.router.navigate(['/register']);
  }
}
