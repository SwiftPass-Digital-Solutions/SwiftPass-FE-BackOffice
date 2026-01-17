import { Component, Input } from '@angular/core';
import { BusinessInfo } from '@core/interfaces/business/business-info.interface';

@Component({
  selector: 'app-business-info',
  imports: [],
  templateUrl: './business-info.component.html',
  styleUrl: './business-info.component.scss',
})
export class BusinessInfoComponent {
  @Input() businessInfo!: BusinessInfo;
}
