import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.html',
  imports: [RouterOutlet, CommonModule, SideBarComponent],
})
export class Main implements OnInit {
  isSidebarOpen = false;
  isDesktop = false;

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 768;
    if (this.isDesktop) this.isSidebarOpen = true;
  }

  ngOnInit() {
    this.onResize();
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    if (!this.isDesktop) {
      this.isSidebarOpen = false;
    }
  }
}
