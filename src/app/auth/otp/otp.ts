import { AfterViewInit, Component, computed, inject, OnInit, signal } from '@angular/core';
import { LogoComponent } from '@shared/components/logo';
import { Button } from "@shared/components/button";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgOtpInputComponent } from 'ng-otp-input';


@Component({
  selector: 'app-login',
  imports: [LogoComponent, Button, NgOtpInputComponent],
  templateUrl: './otp.html',
})
export class Otp implements AfterViewInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);

  user = computed(() => this.authService.user());

  otp = signal('');
  isLoading = signal(false);
  countDown = signal(120);

  countDownInterval!: number;

  ngAfterViewInit(): void {
    this.startCountDown();
  }

  onOtpChange(otp: string){
    this.otp.set(otp);
  }

  verify() {
    this.isLoading.set(true);
  }

  resendOtp(){
    this.resetCountDown();
  }

  goBack(){}

  startCountDown(){
    this.countDownInterval = setInterval(() => {
        if(this.countDown() > 0) this.countDown.update((value) => value - 1);
      },
      1000
    )
  }

  resetCountDown(){
    clearInterval(this.countDownInterval);
    this.countDown.set(120);
    this.startCountDown();
  }
}
