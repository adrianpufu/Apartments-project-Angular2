import { Component, OnInit } from '@angular/core';
import { Apartment } from './models/apartment';
import { ApartmentService } from './services/apartment.service';

@Component({
    selector: 'my-apartments',
    templateUrl: './templates/apartment-add.component.html',
})

export class ApartmentAddComponent implements OnInit {

    constructor(private apartmentService: ApartmentService) { }

    apartments: Apartment[];
    
    getApartments(): void {
        this.apartmentService.getApartments().then(apartments => this.apartments = apartments);
    }

    ngOnInit(): void {
        this.getApartments();
    }
    
    add(rooms: number, baths: number, address: string, surface: number, price: number): void {
        address = address.trim();
        
        if (!rooms && !baths && !address && !surface && !price) { return; }
        this.apartmentService.create(rooms,baths,address,surface,price)
            .then(apartment => {
                this.apartments.push(apartment);
            });
    }


}
