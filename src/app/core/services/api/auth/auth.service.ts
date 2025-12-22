import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '@core/models/auth/login-request.model';
import { environment } from '@env/environment';
import { BaseResponse } from '@shared/models/api';
import { LoginResponse } from 'src/app/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  constructor(private client: HttpClient) {}

  login(loginRequest: LoginRequest) {
    return this.client.post<BaseResponse<LoginResponse>>(
      `${this.baseUrl}/Identity/login`,
      loginRequest,
    );
  }
}
