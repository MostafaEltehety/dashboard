 import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  @ViewChild('snav') sideNav!: MatSidenav;

  sideNavDefaultOpened = true;
  showFullMenu = true;
  isExpanded = true;

  closedWidth = 90;
  openedWidth = 250;

  isMobile = false;
  sideNavMode: 'side' | 'over' = 'side';
  hasBackdrop = false;
  toolBarHeight = 64;

  private mediaSub!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map(result => result.matches))
      .subscribe(isMobile => {
        this.isMobile = isMobile;

        if (isMobile) {
          this.sideNavDefaultOpened = false;
          this.isExpanded = false;
          this.sideNavMode = 'over';
          this.hasBackdrop = true;
          this.toolBarHeight = 56;
          this.showFullMenu = true;
        } else {
          this.sideNavDefaultOpened = true;
          this.isExpanded = true;
          this.sideNavMode = 'side';
          this.hasBackdrop = false;
          this.toolBarHeight = 64;
          this.showFullMenu = true;
        }
      });
  }

  ngAfterViewInit(): void {
    this.sidenavContainer.scrollable
      .elementScrolled()
      .subscribe(() => {
        // scroll logic if needed
      });
  }

  ngOnDestroy(): void {
    this.mediaSub?.unsubscribe();
  }

  onToolbarMenuToggle(): void {
    if (this.isMobile) {
      this.sideNav.toggle();
    } else {
      this.showFullMenu = !this.isExpanded;
      this.isExpanded = !this.isExpanded;
    }
  }
}
