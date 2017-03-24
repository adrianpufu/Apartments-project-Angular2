import { Component } from '@angular/core';
import { Apartment } from './models/apartment';

const APARTMENTS: Apartment[] = [
  { id: 1, rooms: 2, baths: 1, address: "addressforap1", surface: 65.4, price: 50 },
  { id: 2, rooms: 3, baths: 2, address: "addressforap2", surface: 80.7, price: 65 },
];

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  apartments = APARTMENTS;
  selectedApartment: Apartment;
  
  onSelect(apartment: Apartment): void {
    this.selectedApartment = apartment;
  }
}
