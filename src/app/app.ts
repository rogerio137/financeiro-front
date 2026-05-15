import { Component, signal } from '@angular/core';
import { CartaoComponent } from './pages/cartao-component/cartao-component';
import { HomeComponent } from './pages/home-component/home-component';



@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('financeiro-front');
}
