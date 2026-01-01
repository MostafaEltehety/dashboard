import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AdminRoutingModule } from '../../../admin-routing-module';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { childRoutes } from '../../../child-routes';

@Component({
  selector: 'app-side-nav-closed',
  imports: [MatCardModule, MatListModule, NgFor,RouterLinkActive,RouterModule, MatIcon],
  templateUrl: './side-nav-closed.html',
  styleUrl: './side-nav-closed.scss',
})
export class SideNavClosed {
  showMenu = false;
  routes = childRoutes;
}
