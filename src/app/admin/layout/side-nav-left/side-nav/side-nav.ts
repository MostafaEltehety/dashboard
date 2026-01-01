import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { MatListModule, MatNavList } from '@angular/material/list';
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
    MatNavList, RouterModule,
    MatIconModule
  ]
})
export class SideNav {

}
