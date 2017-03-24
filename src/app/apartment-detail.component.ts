import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Apartment } from './models/apartment';
import { ApartmentService } from './services/apartment.service';

@Component({
  selector: 'apartment-detail',
  templateUrl: './templates/apartment-detail.component.html',

})
export class ApartmentDetailComponent implements OnInit {
  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  @Input() apartment: Apartment;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.apartmentService.getApartment(+params['id']))
      .subscribe(apartments => this.apartment = apartments);
  }

  goBack(): void {
    this.location.back();
  }
}