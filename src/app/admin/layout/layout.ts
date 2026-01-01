import { Component, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
 import {   MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {  RouterOutlet } from '@angular/router';
 import { TopNav } from "./top-nav/top-nav";
import { FormsModule } from '@angular/forms';
 import { SideNavClosed } from "./side-nav-left/side-nav-closed/side-nav-closed";
import { SideNav } from "./side-nav-left/side-nav/side-nav";
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone:true,
 imports: [MatCardModule, MatIconModule,  FormsModule,  TopNav, MatSidenav, MatSidenavContainer, NgStyle, SideNavClosed, SideNav, NgIf, MatSidenavContent, RouterOutlet]
})
export class Layout implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  @ViewChild('snav') sideNav!: MatSidenav;

  sideNavDefaultOpened = true;
  showFullMenu = true;
  isExpanded = true;
  isMobile = false;
closedWidth=75;
openedWidth=250;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;

  private mediaWatcher!: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngAfterViewInit(): void {
    this.sidenavContainer.scrollable.elementScrolled().subscribe((a) => {});
  }

  ngOnInit(): void {
    this.mediaWatcher = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        const isMobile = result.matches;

        if (isMobile) {
          if (this.sideNavDefaultOpened) {
            this.sideNavDefaultOpened = false;
            this.isExpanded = false;
          }

          this.isMobile = true;
          this.showFullMenu = true;
          this.sideNavMode = 'over';
        } else {
          this.isMobile = false;
          this.sideNavDefaultOpened = true;
          this.sideNavMode = 'side';
        }

        // Toolbar height logic (xs فقط)
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.toolBarHeight = 56;
        } else {
          this.toolBarHeight = 64;
        }
      });
  }

  ngOnDestroy(): void {
    this.mediaWatcher?.unsubscribe();
  }

  onToobbarMenuToggle() {
    if (this.isMobile) {
      if (!this.isExpanded) {
        setTimeout(() => {
          this.sideNav.toggle();
        }, 150);
      } else {
        this.sideNav.toggle();
      }
    } else {
      if (!this.isExpanded) {
        setTimeout(() => {
          this.showFullMenu = true;
        }, 150);
      } else {
        this.showFullMenu = false;
      }
    }
    this.isExpanded=!this.isExpanded;
  }
}
