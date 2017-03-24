import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ApartmentDetailComponent } from './apartment-detail.component';
import { ApartmentsComponent } from './apartments.component';
import { ApartmentAddComponent } from './apartment-add.component';

import { ApartmentService } from './services/apartment.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentDetailComponent,
    ApartmentAddComponent,
    ApartmentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
