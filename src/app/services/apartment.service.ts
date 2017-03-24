import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Apartment } from '../models/apartment';

@Injectable()
export class ApartmentService {

    constructor(private http: Http) { }

    private apartmentsUrl = 'api/apartments';

    getApartments(): Promise<Apartment[]> {
        return this.http.get(this.apartmentsUrl)
            .toPromise()
            .then(response => response.json().data as Apartment[])
            .catch(this.handleError);
    }

    getApartment(id: number): Promise<Apartment> {
        const url = `${this.apartmentsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Apartment)
            .catch(this.handleError);
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });

    update(apartment: Apartment): Promise<Apartment> {
        const url = `${this.apartmentsUrl}/${apartment.id}`;
        return this.http
            .put(url, JSON.stringify(apartment), { headers: this.headers })
            .toPromise()
            .then(() => apartment)
            .catch(this.handleError);
    }

    create(rooms: number, baths: number, address: string, surface: number, price: number): Promise<Apartment> {
        return this.http
            .post(this.apartmentsUrl, JSON.stringify({ rooms: rooms, baths: baths, address: address, surface: surface, price: price }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Apartment)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.apartmentsUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}

