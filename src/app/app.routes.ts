import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { PlatosComponent } from './shared/platos/platos.component';

export const routes: Routes = [
    {
        path:'shared/home',
        component: HomeComponent
    },
    {
        path:'shared/platos',
        component: PlatosComponent
    },
    {
        path:'',
        redirectTo: 'shared/home', pathMatch: 'full',
    },
];
