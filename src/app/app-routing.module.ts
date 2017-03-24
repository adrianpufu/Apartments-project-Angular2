import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsComponent } from './apartments.component';
import { ApartmentDetailComponent } from './apartment-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/apartments', pathMatch: 'full' },
    { path: 'detail/:id', component: ApartmentDetailComponent },
    { path: 'apartments', component: ApartmentsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
