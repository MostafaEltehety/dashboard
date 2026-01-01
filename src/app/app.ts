 import { Component, ViewChild, signal, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { DOCUMENT, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
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
    MatButtonModule,
    DragDropModule
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  isMobile = signal(false);
  isDark = signal(false);
  isRtl = signal(false);

  constructor(
    breakpoint: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document
  ) {
    breakpoint.observe([Breakpoints.Handset])
      .subscribe(r => this.isMobile.set(r.matches));
  }

  /* 📱 Swipe */
  onSwipe(event: CdkDragEnd) {
    if (!this.isMobile()) return;

    const x = event.distance.x;

    if (x > 80) this.sidenav.open();   // swipe right
    if (x < -80) this.sidenav.close(); // swipe left
  }

  /* 🌗 Theme */
 toggleTheme() {
  this.isDark.update(v => !v);
  document.body.classList.toggle('dark-theme', this.isDark());
}

  /* 🔄 RTL / LTR */
  toggleDir() {
    this.isRtl.update(v => !v);
    this.document.documentElement.dir = this.isRtl() ? 'rtl' : 'ltr';
  }

}
