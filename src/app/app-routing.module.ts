import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsComponent } from './apartments.component';
import { ApartmentDetailComponent } from './apartment-detail.component';
import { ApartmentAddComponent } from './apartment-add.component';

const routes: Routes = [
    { path: 'add', component: ApartmentAddComponent },
    { path: 'detail/:id', component: ApartmentDetailComponent },
    { path: 'apartments', component: ApartmentsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
