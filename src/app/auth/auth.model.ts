import { UserType } from "@shared/enums/app-enums";

export interface RegisterUser {
  swiftPassUser: User;
  userType: UserType
}

export interface ConfirmEmail {
  email: string,
  otp: string,
  trackingId: string
}

export interface CompleteRegistrationPayload {
  email: string,
  password: string,
  token: string
}

export interface User {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface LoginResponse {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  userType: UserType;
}
