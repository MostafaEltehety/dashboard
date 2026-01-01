 import { Component, Input } from '@angular/core';
import { childRoutes } from '../../../child-routes';
import { NgFor, NgIf } from '@angular/common';

import { MatNavList } from '@angular/material/list';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  imports: [
    NgFor,
    NgIf,
    RouterModule,
    RouterLinkActive,
    MatNavList,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatIcon,
    MatTooltip
  ]
})
export class SideNav {
  @Input() isExpanded = true;

  routes = childRoutes;

  trackByPath(_: number, item: any) {
    return item.path;
  }
}
