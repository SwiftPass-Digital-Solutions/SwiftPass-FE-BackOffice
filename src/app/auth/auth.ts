import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './auth.html',
})
export class Auth {
}
