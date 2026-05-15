import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { CartaoComponent } from './pages/cartao-component/cartao-component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cartao', component: CartaoComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
