export interface LoginResponse {
  email: string;
  firstName: string;
  lastName: string;
  userType: number;
  hasSetUpSecurityQuestions: any;
  hasCompletedProfileSetup: any;
  token: string;
}
