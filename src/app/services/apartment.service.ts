import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/toPromise';

import { Apartment } from '../models/apartment';

@Injectable()
export class ApartmentService {

    constructor(private http: Http, private localStorageService: LocalStorageService) { }

    private apartmentsUrl = 'api/apartments';

    getApartments(): Promise<Apartment[]> {

        if (localStorage.getItem("apartments") != null) {
            var apartments = JSON.parse(localStorage.getItem("apartments") || "null");
            if (apartments) {
                return Promise.resolve(apartments);
            }
        }

        return this.http.get(this.apartmentsUrl)
            .toPromise()
            .then(response => response.json().data as Apartment[])
            .catch(this.handleError);
    }

    getApartment(id: number): Promise<Apartment> {

        if (localStorage.getItem("apartments") != null) {
            var apartments = JSON.parse(localStorage.getItem("apartments"));

            if (apartments) {
                var ap = apartments.find(ap => ap.id == id);
                if (ap) {
                    return Promise.resolve(ap);
                }
            }
        }

        const url = `${this.apartmentsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Apartment)
            .catch(this.handleError);
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });

    update(apartment: Apartment): Promise<Apartment> {

        const url = `${this.apartmentsUrl}/${apartment.id}`;

        if (localStorage.getItem("apartments") != null) {
            var apartments = JSON.parse(localStorage.getItem("apartments"));

            if (apartments) {
                var ap = apartments.find(ap => ap.id == apartment.id);
                if (ap) {
                    apartments.splice(apartments.indexOf(ap), 1);
                    apartments.push(apartment);
                    localStorage.setItem("apartments", JSON.stringify(apartments));
                }
            }
        }

        return this.http
            .put(url, JSON.stringify(apartment), { headers: this.headers })
            .toPromise()
            .then(() => apartment)
            .catch(this.handleError);
    }

    create(rooms: number, baths: number, address: string, surface: number, price: number): Promise<Apartment> {

        if (localStorage.getItem("apartments") != null) {
            var apartments = JSON.parse(localStorage.getItem("apartments"));

            if (apartments) {
                var maxid = 0;
                apartments.map(x => {
                    if (x.id > maxid) {
                        maxid = x.id;
                    }
                })

                apartments.push(new Apartment(maxid + 1, rooms, baths, address, surface, price));
                localStorage.setItem("apartments", JSON.stringify(apartments));
            }
        }

        var apartment = JSON.stringify({ rooms: rooms, baths: baths, address: address, surface: surface, price: price });

        return this.http
            .post(this.apartmentsUrl, apartment, { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Apartment)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {

        if (localStorage.getItem("apartments") != null) {
            var apartments = JSON.parse(localStorage.getItem("apartments"));

            if (apartments) {
                var ap = apartments.find(ap => ap.id == id);
                if (ap) {
                    apartments.splice(apartments.indexOf(ap), 1);
                    localStorage.setItem("apartments", JSON.stringify(apartments));
                }
            }
        }

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

