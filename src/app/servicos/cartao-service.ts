import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CartaoDTO {
  bandeira: string;
  banco: string;
  fechamento: string;
  vencimento: string;
  limite: string;
  descricao: string;
}

@Injectable({ providedIn: 'root' })
export class CartaoService {
  private apiUrl = 'http://localhost:8080/api/cartao/salvar'; // ajuste conforme seu backend

  constructor(private http: HttpClient
  ) {}
  

  salvar(cartao: CartaoDTO, token: string): Observable<any> {
    return this.http.post(this.apiUrl, cartao, {
        headers: {Authorization: `Bearer ${token}`}
    });
  }
}