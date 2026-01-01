 import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle } from '@angular/common';

import { TopNav } from './top-nav/top-nav';
import { SideNav } from './side-nav-left/side-nav/side-nav';
import { SideNavClosed } from './side-nav-left/side-nav-closed/side-nav-closed';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  imports: [
    MatSidenavModule,
    RouterOutlet,
    NgIf,
    
    SideNav,
    SideNavClosed
]
})
export class Layout implements OnInit, OnDestroy {

  @ViewChild('snav') sideNav!: MatSidenav;

  isMobile = false;
  isExpanded = true;

  closedWidth = 75;
  openedWidth = 250;

  sideNavMode: 'side' | 'over' = 'side';
  sideNavOpened = true;
  toolBarHeight = 64;

  private mediaWatcher!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.mediaWatcher = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(({ matches }) => {

        this.isMobile = matches;

        if (matches) {
          this.sideNavMode = 'over';
          this.sideNavOpened = false;
          this.isExpanded = false;
          this.toolBarHeight = 56;
        } else {
          this.sideNavMode = 'side';
          this.sideNavOpened = true;
          this.isExpanded = true;
          this.toolBarHeight = 64;
        }
      });
  }

  ngOnDestroy(): void {
    this.mediaWatcher?.unsubscribe();
  }

  onToolbarMenuToggle(): void {
    if (this.isMobile) {
      this.sideNav.toggle();
    } else {
      this.isExpanded = !this.isExpanded;
    }
  }
}
