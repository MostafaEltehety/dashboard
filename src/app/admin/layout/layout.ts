import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { TopNav } from "./top-nav/top-nav";
import { FormsModule } from '@angular/forms';
import { SideNavClosed } from "./side-nav-left/side-nav-closed/side-nav-closed";
import { SideNav } from "./side-nav-left/side-nav/side-nav";
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone: true,
  imports: [MatCardModule, MatIconModule, FormsModule, TopNav, MatSidenav, MatSidenavContainer, NgStyle, SideNavClosed, SideNav, NgIf, MatSidenavContent, RouterOutlet]
})

export class Layout implements OnInit, OnDestroy {
  @ViewChild('snav') sideNav!: MatSidenav;

  sideNavDefaultOpened = true;
  showFullMenu = true;
  isExpanded = true;
  isMobile = false;

  closedWidth = 75;
  openedWidth = 250;

  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;

  private mediaWatcher!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.mediaWatcher = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {

        this.isMobile = result.matches;

        if (this.isMobile) {
          this.sideNavMode = 'over';
          this.sideNavDefaultOpened = false;
          this.isExpanded = false;
          this.showFullMenu = true;
          this.toolBarHeight = 56;
        } else {
          this.sideNavMode = 'side';
          this.sideNavDefaultOpened = true;
          this.isExpanded = true;
          this.showFullMenu = true;
          this.toolBarHeight = 64;
        }
      });
  }

  ngOnDestroy(): void {
    this.mediaWatcher?.unsubscribe();
  }

  onToobbarMenuToggle(): void {
    if (this.isMobile) {
      this.sideNav.toggle();
    } else {
      this.showFullMenu = !this.showFullMenu;
    }

    this.isExpanded = !this.isExpanded;
  }
}
