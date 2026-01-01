import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../../../child-routes';
import { MatNavList } from "@angular/material/list";
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle } from "@angular/material/card";
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-side-nav',
  imports: [MatNavList, MatCard, MatCardHeader, MatCardTitle, RouterLinkActive, RouterModule, MatCardSubtitle, MatIcon],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {

showMenu=false;
routes=childRoutes;


}
