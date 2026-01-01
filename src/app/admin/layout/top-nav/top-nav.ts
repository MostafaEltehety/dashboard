import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  imports: [ ],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();
  constructor(private readonly router: Router) {}

  ngOnInit() {}

  toggleSidebar(): void {
    this.sideNavToggled.emit();
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/']);
  }
}
