 import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { childRoutes } from '../../../child-routes';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    RouterLinkActive,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class SideNav {
  @Input() isExpanded = true;
  routes = childRoutes;

  trackByPath(_: number, item: any) {
    return item.path;
  }
}
