import { Component, ViewChild  } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home-component',
  imports: [MatSidenavModule, 
            MatButtonModule, 
            MatDrawer, 
            MatToolbar, 
            MatIcon, 
            MatListModule,
            TitleCasePipe],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }

  fragments = ['inbox', 'outbox', 'drafts'];
  activeLink: string | null = null;
}
