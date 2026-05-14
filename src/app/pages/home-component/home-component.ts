import { Component, ViewChild  } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home-component',
  imports: [MatSidenavModule, MatButtonModule, MatDrawer],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
})
export class HomeComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  toggleDrawer() {
    this.drawer.toggle();
  }
}
