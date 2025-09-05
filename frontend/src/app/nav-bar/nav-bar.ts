import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

interface NavLink {
  name: string;
  link: string | null;
  childs: NavLink[] | null;
  expanded?: boolean; // For tracking group visibility
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
  hidden = true;

  navElements: NavLink[] = [
    { name: 'Home', link: '/', childs: null },
    { 
      name: 'Contact', 
      link: null, 
      childs: [
        { name: 'About', link: '/about', childs: null }
      ], 
      expanded: false 
    }
  ];

  switchTheme() {
    this.theme = this.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    document.body.classList.toggle('dark-theme', this.theme === Themes.DARK);
    document.body.classList.toggle('light-theme', this.theme === Themes.LIGHT);
  }

  toggleGroup(item: NavLink) {
    if (item.childs && item.childs.length > 0) {
      item.expanded = !item.expanded;
    }
  }

  toggleHidden() {
    this.hidden = !this.hidden;
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('nav-open', !this.hidden);
    }
  }

  handleGroupParentClick(item: NavLink, event: Event) {
    // If the parent has a link, navigate to it
    if (item.link) {
      // Let the router handle navigation
      return;
    } else {
      // If no link, toggle the group
      event.preventDefault();
      this.toggleGroup(item);
    }
  }
}
