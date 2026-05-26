import { Component, Injectable } from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-toast-component',
  standalone: true,
  imports: [],
  templateUrl: './toast-component.html',
  styleUrl: './toast-component.scss',
})

@Injectable({
  providedIn: 'root'
})
export class ToastComponent {
  showSuccess(message: string) {
    M.toast({
      html: `<span>${message}</span>`,
      classes: 'green darken-2',
      displayLength: 3000
    });
  }

  showError(message: string) {
    M.toast({
      html: `<span>${message}</span>`,
      classes: 'red darken-2',
      displayLength: 4000
    });
  }

  showInfo(message: string) {
    M.toast({
      html: `<span>${message}</span>`,
      classes: 'blue darken-2',
      displayLength: 3500
    });
  }
}
