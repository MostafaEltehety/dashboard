import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-top-nav',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule,MatFormFieldModule, MatInputModule, MatMenuTrigger, MatMenu, MatMenuItem],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {


 router=inject(Router);


onLoggedout(){
  localStorage.removeItem('liLoggedin');
  this.router.navigate(['/']);
}@Output() sideNavToggled = new EventEmitter<void>();

toggleSidebar() {
  this.sideNavToggled.emit();
}


}
