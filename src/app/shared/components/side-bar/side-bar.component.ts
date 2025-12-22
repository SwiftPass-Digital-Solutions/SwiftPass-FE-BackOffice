import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginResponse } from 'src/app/auth/auth.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  menuOpen = false;
  isDesktop = false;
  userInfo!: LoginResponse;

  constructor(private authService: AuthService) {
    const userData = sessionStorage.getItem('user_info');
    if (userData) {
      this.userInfo = JSON.parse(userData) as LoginResponse;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 768;
  }

  ngOnInit() {
    this.onResize();
    this.userInfo = this.authService.getUser();
  }
}
