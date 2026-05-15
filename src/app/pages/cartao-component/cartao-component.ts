import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDivider } from "@angular/material/divider";
import { MatDividerModule } from '@angular/material/divider';
 
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cartao-component',
  imports: [MatToolbarModule, MatButton, MatGridListModule, MatDivider, MatDividerModule],
  templateUrl: './cartao-component.html',
  styleUrl: './cartao-component.scss',
})
export class CartaoComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
