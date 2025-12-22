import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '@core/models/auth/login-request.model';
import { environment } from '@env/environment';
import { BaseResponse } from '@shared/models/api';
import { LoginResponse } from 'src/app/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthDomainService {
  private baseUrl = environment.apiUrl;
  constructor() {}

  setUserInfo(user: LoginResponse) {
    localStorage.setItem('user_info', JSON.stringify(user));
  }

  getUserInfo(): LoginResponse | null {
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : null;
  }

  clearUserInfo() {
    localStorage.removeItem('user_info');
  }

  setToken(token: string) {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  clearToken() {
    localStorage.removeItem('auth_token');
  }
}
