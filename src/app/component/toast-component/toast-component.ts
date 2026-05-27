import { Component, Injectable } from '@angular/core';
import * as M from 'materialize-css'
import { ToastrService } from 'ngx-toastr';

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

  constructor(private mensagem: ToastrService){}
  showSuccess(message: string, titulo: string) {
    this.mensagem.success(message, titulo)
  }

  showError(message: string, titulo: string) {
    this.mensagem.error(message,titulo)
  }

  showInfo(message: string) {
    M.toast({
      html: `<span>${message}</span>`,
      classes: 'blue darken-2',
      displayLength: 3500
    });
  }
}
