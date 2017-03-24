import { Injectable } from '@angular/core';
import { APARTMENTS } from '../mock-apartments';
import { Apartment } from '../models/apartment';

@Injectable()
export class ApartmentService {

    getApartments(): Promise<Apartment[]> {
        return Promise.resolve(APARTMENTS);
    }

    getApartment(id: number): Promise<Apartment> {
        return this.getApartments()
            .then(apartments => apartments.find(apartment => apartment.id === id));
    }
}
