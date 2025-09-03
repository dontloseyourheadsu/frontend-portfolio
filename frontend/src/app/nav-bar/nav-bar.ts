import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})

export class NavBar {
  theme = Themes.LIGHT;
  Themes = Themes;
  
  
  switchTheme() {
    this.theme = this.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    document.body.classList.toggle('dark-theme', this.theme === Themes.DARK);
  }
}
