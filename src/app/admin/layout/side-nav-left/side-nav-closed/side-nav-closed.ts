 import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule, RouterLinkActive, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { childRoutes } from '../../../child-routes';

@Component({
  selector: 'app-side-nav-closed',
  standalone: true,
  templateUrl: './side-nav-closed.html',
  styleUrl: './side-nav-closed.scss',
  imports: [
  NgFor,
  RouterLink,
  RouterLinkActive,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatTooltipModule
]

})
export class SideNavClosed {
  routes = childRoutes;

  trackByPath(_: number, item: any) {
    return item.path;
  }
}
