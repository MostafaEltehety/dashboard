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

]
})
export class Layout  {

  
}
