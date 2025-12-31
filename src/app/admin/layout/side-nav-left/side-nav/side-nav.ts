import { Component, OnInit } from '@angular/core';
import { childRoutes } from '../../../child-routes';

@Component({
  selector: 'app-side-nav',
  imports: [],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav implements OnInit{

showMenu=false;
routes=childRoutes;

ngOnInit(): void {
  throw new Error('Method not implemented.');
}

}
