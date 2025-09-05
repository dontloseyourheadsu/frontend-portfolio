import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
    template: '<h1 [style.color]="\'var(--text-color)\'">Welcome to the Home Page</h1>',
  styles: ['h1 { font-family: Lato; color: #333; }']
})
export class HomeComponent {

}
