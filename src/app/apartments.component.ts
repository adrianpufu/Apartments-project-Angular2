import { Component, OnInit } from '@angular/core';
import { Apartment } from './models/apartment';
import { ApartmentService } from './services/apartment.service';


@Component({
  selector: 'my-apartments',
  templateUrl: './templates/apartments.component.html',
})

export class ApartmentsComponent implements OnInit {

  constructor(private apartmentService: ApartmentService) { }

  apartments: Apartment[];

  selectedApartment: Apartment;

  getApartments(): void {
    this.apartmentService.getApartments().then(apartments => this.apartments = apartments);
  }

  ngOnInit(): void {
    this.getApartments();
  }
  delete(apartment: Apartment): void {
    this.apartmentService
      .delete(apartment.id)
      .then(() => {
        this.apartments = this.apartments.filter(h => h !== apartment);
      });
  }

  onSelect(apartment: Apartment): void {
    this.selectedApartment = apartment;
  }
}
