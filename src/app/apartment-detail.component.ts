import { Component, Input } from '@angular/core';
import { Apartment } from './models/apartment';

@Component({
  selector: 'apartment-detail',
  templateUrl: './templates/apartment-detail.component.html',

})
export class ApartmentDetailComponent {
  @Input() apartment: Apartment;
}