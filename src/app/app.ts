import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialCssVarsModule, MaterialCssVarsService } from 'angular-material-css-vars';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,


  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',

})
export class App {
  protected readonly title = signal('dashboard');
}
