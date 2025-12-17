import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { SnackbarComponent } from './shared/snackbar/snackbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, SnackbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
