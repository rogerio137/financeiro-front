import { Routes } from '@angular/router';
import { InicialComponent } from './pages/inicial-component/inicial-component';
import { CartaoComponent } from './pages/cartao-component/cartao-component';

export const routes: Routes = [
    { path: 'cartao', component: CartaoComponent },
    { path: 'home', component: InicialComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
