import { Component, ViewChild  } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TitleCasePipe } from '@angular/common';
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-home-component',
  imports: [MatSidenavModule,
    MatButtonModule,
    MatDrawer,
    MatToolbar,
    MatIcon,
    MatListModule,
    TitleCasePipe, RouterOutlet, RouterLinkWithHref],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }

  fragments = [
    {title: 'Inicio', icon: 'home', route: '/home'},
    {title: 'Cadastro de cartões', icon: 'credit_card', route: '/cartao'}
  ];
  activeLink: string | null = null;

}
