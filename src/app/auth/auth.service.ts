import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { BaseResponse } from '@shared/models/api';
import { Observable, tap } from 'rxjs';
import {
  CompleteRegistrationPayload,
  ConfirmEmail,
  LoginResponse,
  RegisterUser,
  User,
  UserLogin,
} from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/Identity/Admin`;

  private _user = signal<LoginResponse | null>(
    sessionStorage.getItem('user_info')
      ? JSON.parse(sessionStorage.getItem('user_info') as string)
      : null,
  );
  readonly user = computed(() => this._user());
  private _token = signal<string | null>(sessionStorage.getItem('token') || null);

  setUser(user: LoginResponse) {
    this._user.set(user);
    sessionStorage.setItem('user_info', JSON.stringify(user));
  }

  getUser() {
    const user = this._user();
    if (!user) {
      this.router.navigate(['login']);
    }
    return user!;
  }

  getToken() {
    return this._token();
  }

  setToken(token: string) {
    this._token.set(token);
    sessionStorage.setItem('token', token);
  }

  login(payload: UserLogin): Observable<BaseResponse<LoginResponse>> {
    return this.http.post<BaseResponse<LoginResponse>>(`${this.apiUrl}/login`, payload).pipe(
      tap((res) => {
        this.setUser(res.data);
        this.setToken(res.data.token);
      }),
    );
  }

  // registerUser(payload: RegisterUser): Observable<BaseResponse<string>> {
  //     return this.http.post<BaseResponse<string>>(`${this.apiUrl}/register`, payload).pipe(
  //         tap((res) => {
  //             this.setUser(payload.swiftPassUser);
  //         })
  //     );
  // }

  confirmEmail(payload: ConfirmEmail) {
    return this.http.post<BaseResponse<string>>(`${this.apiUrl}/confirm-sw-email`, payload);
  }

  resendOTP(email: string) {
    return this.http.post<BaseResponse<string>>(
      `${this.apiUrl}/resend-otp`,
      {},
      {
        params: {
          email,
        },
      },
    );
  }

  completeRegistration(payload: CompleteRegistrationPayload): Observable<BaseResponse<string>> {
    return this.http.patch<BaseResponse<string>>(
      `${this.apiUrl}/complete-new-user-registration`,
      payload,
    );
  }

  logout() {
    this._user.set(null);
    sessionStorage.removeItem('user_info');
    this.router.navigate(['login']);
  }
}
