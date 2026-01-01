import { Component, ViewChild, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';
 import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    NgIf,
    MatIconModule,
    RouterOutlet,
    MatButtonModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {


  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  isMobile = signal(false);

  constructor(private breakpoint: BreakpointObserver) {
    this.breakpoint.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe(result => {
      this.isMobile.set(result.matches);
    });
  }


}
