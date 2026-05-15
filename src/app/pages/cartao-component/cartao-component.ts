import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDivider } from "@angular/material/divider";
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { BandeiraCartao } from '../../enums/bandeira-cartao';
import { TitleCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Bancos } from '../../enums/bancos';
 
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cartao-component',
  imports: [MatToolbarModule, 
            MatButton, 
            MatGridListModule, 
            MatDivider, 
            MatDividerModule, 
            MatFormField, 
            MatLabel,
            MatInputModule,
            MatSelect,
            MatOption,
            TitleCasePipe,
            CommonModule,
            ReactiveFormsModule 
          ],
  templateUrl: './cartao-component.html',
  styleUrl: './cartao-component.scss',
})
export class CartaoComponent {
  form: FormGroup;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  bandeiras = Object.values(BandeiraCartao);
  selecionado? = BandeiraCartao;

  bancos = Object.values(Bancos);
  bancoSelecionado? = Bancos;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      bandeira: [''],
      banco: [''],
      fechamento: [''],
      vencimento: [''],
      limite: [''],
      descricao: ['']
    });
  }

  salvar() {
    const valores = this.form.value;
    console.log(valores);
  }


}
