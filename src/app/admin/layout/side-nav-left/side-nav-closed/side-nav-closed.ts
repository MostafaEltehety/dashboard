 import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule, RouterLinkActive, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { childRoutes } from '../../../child-routes';

@Component({
  selector: 'app-side-nav-closed',
  standalone: true,
  templateUrl: './side-nav-closed.html',
  styleUrl: './side-nav-closed.scss',
  imports: [
    MatNavList,
    RouterModule,
    MatIconModule
]

})
export class SideNavClosed {

}
