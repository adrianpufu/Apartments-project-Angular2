import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';

import { Apartment }         from './models/apartment';
import { ApartmentService }  from './services/apartment.service';

@Component({
    selector: 'apartments-add-form',
    templateUrl: './templates/apartment-add.component.html',
})

export class ApartmentAddComponent implements OnInit {

    constructor(
        private apartmentService: ApartmentService,
        private location: Location
    ) { }

    apartments: Apartment[];

    ngOnInit(): void {
        this.getApartments();
    }

    goBack(): void {
        this.location.back();
    }

    getApartments(): void {
        this.apartmentService.getApartments().then(apartments => this.apartments = apartments);
    }

    add(rooms: number, baths: number, address: string, surface: number, price: number): void {
        address = address.trim();

        if (!rooms && !baths && !address && !surface && !price) { return; }
        this.apartmentService.create(rooms, baths, address, surface, price)
            .then(apartment => {
                this.apartments.push(apartment);
            });
    }


}
