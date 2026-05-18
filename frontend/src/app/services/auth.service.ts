import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

declare var netlifyIdentity: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Use ReplaySubject so late subscribers (like the Guard) get the last emitted value
  private userSubject = new ReplaySubject<any>(1);
  user$ = this.userSubject.asObservable();
  private isInitialized = false;

  constructor(private ngZone: NgZone) {
    this.initIdentity();
  }

  private initIdentity() {
    if (typeof netlifyIdentity !== 'undefined') {
      const fullUrl = window.location.href;
      const hasToken = fullUrl.includes('_token=');

      console.log('--- Identity Debug ---');
      console.log('Current URL:', fullUrl);
      console.log('Token detected:', hasToken);

      if (hasToken) {
        localStorage.removeItem('netlifySiteURL');
        console.log('Cleared netlifySiteURL due to token detection');
      }

      this.ngZone.runOutsideAngular(() => {
        netlifyIdentity.on('init', (user: any) => {
          this.isInitialized = true;
          console.log('Identity Init Event - User:', user);
          
          if (hasToken && !user) {
            console.log('FORCE OPENING WIDGET FOR TOKEN');
            // Increase delay slightly to ensure DOM is ready
            setTimeout(() => {
              netlifyIdentity.open('signup'); // 'signup' is specifically for invites
            }, 1000);
          }

          this.ngZone.run(() => {
            this.userSubject.next(user || null);
          });
        });

        netlifyIdentity.init();
        
        // Final fallback: if we have a token, just try to open it after 2 seconds no matter what
        if (hasToken) {
          setTimeout(() => {
            if (typeof netlifyIdentity !== 'undefined') {
              console.log('Final fallback: Opening widget');
              netlifyIdentity.open();
            }
          }, 2000);
        }

        netlifyIdentity.on('login', (user: any) => {
          this.ngZone.run(() => {
            this.userSubject.next(user);
          });
          netlifyIdentity.close();
        });

        netlifyIdentity.on('logout', () => {
          this.ngZone.run(() => {
            this.userSubject.next(null);
          });
        });

        netlifyIdentity.on('error', (err: any) => {
          console.error('Netlify Identity Error:', err);
        });
      });
    } else {
      // If script failed to load, emit null so guard doesn't hang
      this.userSubject.next(null);
    }
  }

  login() {
    if (typeof netlifyIdentity !== 'undefined') {
      netlifyIdentity.open();
    }
  }

  logout() {
    if (typeof netlifyIdentity !== 'undefined') {
      netlifyIdentity.logout();
    }
  }

  async getToken(): Promise<string | null> {
    if (typeof netlifyIdentity === 'undefined') return null;
    
    const user = netlifyIdentity.currentUser();
    if (!user) return null;
    
    try {
      await user.jwt(); 
      return user.token?.access_token || null;
    } catch (err) {
      console.error('Error getting JWT token', err);
      return null;
    }
  }
}
