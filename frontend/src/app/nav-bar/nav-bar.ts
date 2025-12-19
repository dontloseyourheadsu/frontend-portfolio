import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

interface NavLink {
  name: string;
  link: string | null;
  childs: NavLink[] | null; // Only 1 level supported for now
  expanded?: boolean; // For tracking group visibility
}

interface VisibleItem {
  name: string;
  link: string | null;
  depth: number; // 0 for top-level, 1 for child
  // If this visible item represents a parent with children
  isParent: boolean;
  parentIndex?: number; // index in navElements (for quick toggle)
  expanded?: boolean;
}

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})

export class NavBar implements AfterViewInit {
  theme = Themes.DARK;
  Themes = Themes;
  hidden = true;

  @ViewChild('navList', { static: false }) navListRef?: ElementRef<HTMLUListElement>;
  @ViewChild('navBg', { static: false }) navBgRef?: ElementRef<HTMLDivElement>;

  navElements: NavLink[] = [
    { name: 'Home', link: '/', childs: null },
    {
      name: 'Projects',
      link: '/projects',
      childs: [
        { name: 'Low-level', link: '/projects/low-level', childs: null }
      ],
      expanded: false
    },
    {
      name: 'Contact',
      link: null,
      childs: [
        { name: 'About', link: '/about', childs: null }
      ],
      expanded: false
    }
  ];

  constructor(private router: Router) {
    // Update the background after route changes complete
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(() => {
      this.expandActiveParents();
      // Small delay to allow RouterLinkActive to update DOM classes
      setTimeout(() => this.updateBackgroundToActive(), 0);
    });
  }

  ngAfterViewInit(): void {
    this.expandActiveParents();
    // Initial background positioning
    setTimeout(() => this.updateBackgroundToActive(), 0);
  }

  switchTheme() {
    this.theme = this.theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

    document.body.classList.toggle('dark-theme', this.theme === Themes.DARK);
    document.body.classList.toggle('light-theme', this.theme === Themes.LIGHT);
  }

  // Toggle only for 1st-level parents (1 level of depth supported)
  toggleParentByIndex(parentIndex: number | undefined) {
    if (parentIndex === undefined) return;
    const item = this.navElements[parentIndex];
    if (item && item.childs && item.childs.length > 0) {
      // Prevent collapsing if any child is active
      if (item.expanded && this.hasActiveChild(item)) {
        return;
      }

      item.expanded = !item.expanded;
      // Reposition the background to the active element after list height changes
      setTimeout(() => this.updateBackgroundToActive(), 100);
    }
  }

  private hasActiveChild(item: NavLink): boolean {
    if (!item.childs) return false;
    return item.childs.some(child => this.isLinkActive(child.link) || this.hasActiveChild(child));
  }

  private isLinkActive(link: string | null): boolean {
    if (!link) return false;
    return this.router.isActive(link, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  private expandActiveParents() {
    this.navElements.forEach(item => {
      if (this.hasActiveChild(item)) {
        item.expanded = true;
      }
    });
  }

  toggleHidden() {
    this.hidden = !this.hidden;
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('nav-open', !this.hidden);
    }
    // Recalculate when opening since layout changes
    if (!this.hidden) {
      setTimeout(() => this.updateBackgroundToActive(), 150);
    }
  }

  // Visible flattened list (1 level deep)
  get visibleItems(): VisibleItem[] {
    const out: VisibleItem[] = [];
    this.navElements.forEach((it, parentIdx) => {
      const isParent = !!(it.childs && it.childs.length);
      out.push({ name: it.name, link: it.link, depth: 0, isParent, parentIndex: parentIdx, expanded: it.expanded });
      if (isParent && it.expanded) {
        // Only 1 level depth supported
        it.childs!.forEach(child => {
          out.push({ name: child.name, link: child.link, depth: 1, isParent: false });
        });
      }
    });
    return out;
  }

  // Helper for template to render depth spacers (future-proof for deeper levels)
  indentArray(depth: number): number[] {
    return Array.from({ length: depth > 0 ? depth : 0 }).map((_, i) => i);
  }

  // Move background to the currently active router link
  updateBackgroundToActive(): void {
    const navList = this.navListRef?.nativeElement;
    const navBg = this.navBgRef?.nativeElement;
    if (!navList || !navBg) return;

    // Find the active link inside this nav
    const activeEl = navList.querySelector<HTMLAnchorElement>('a.nav-link.active');
    if (activeEl) {
      this.moveBackgroundToElement(activeEl);
    } else {
      // Fallback to first link if none is active
      const firstEl = navList.querySelector<HTMLAnchorElement>('a.nav-link');
      if (firstEl) this.moveBackgroundToElement(firstEl);
    }
  }

  // Called on click to move immediately, before route settles
  onNavClick(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;
    const anchor = target.closest('a.nav-link') as HTMLAnchorElement | null;
    if (anchor) {
      this.moveBackgroundToElement(anchor);
    }
  }

  private moveBackgroundToElement(el: HTMLElement): void {
    const navList = this.navListRef?.nativeElement;
    const navBg = this.navBgRef?.nativeElement;
    if (!navList || !navBg) return;

    const linkRect = el.getBoundingClientRect();
    const navRect = navList.getBoundingClientRect();
    const top = linkRect.top - navRect.top;

    navBg.style.height = `${linkRect.height}px`;
    navBg.style.top = `${top}px`;
  }

  @HostListener('window:resize')
  onResize() {
    // Recompute position on resize
    setTimeout(() => this.updateBackgroundToActive(), 100);
  }
}
