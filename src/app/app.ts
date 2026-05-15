import { Component, signal } from '@angular/core';
import { HomeComponent } from './pages/home-component/home-component';
import { CartaoComponent } from "./pages/cartao-component/cartao-component";



@Component({
  selector: 'app-root',
  imports: [HomeComponent, CartaoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('financeiro-front');
}
