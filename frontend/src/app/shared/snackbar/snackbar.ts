import { Component, Injectable, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SnackbarData {
    message: string;
    type: 'info' | 'error' | 'success' | 'warning';
}

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    private _data = signal<SnackbarData | null>(null);
    readonly data = this._data.asReadonly();
    private timeoutId: any;

    show(message: string, type: 'info' | 'error' | 'success' | 'warning' = 'info', duration = 3000) {
        this._data.set({ message, type });

        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => {
            this.close();
        }, duration);
    }

    close() {
        this._data.set(null);
    }
}

@Component({
    selector: 'app-snackbar',
    standalone: true,
    imports: [CommonModule],
    template: `
    @if (snackbarData()) {
      <div class="snackbar" [class]="snackbarData()?.type">
        <span class="message">{{ snackbarData()?.message }}</span>
        <button class="close-btn" (click)="close()">×</button>
      </div>
    }
  `,
    styles: [`
    .snackbar {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 24px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      min-width: 300px;
      justify-content: space-between;
      animation: slideDown 0.3s ease-out;
      color: var(--text-color);
      background-color: var(--secondary-background-color);
      border: 1px solid var(--border-color);
    }

    .snackbar.error {
      border-left: 4px solid #ff5f56;
    }
    
    .snackbar.warning {
      border-left: 4px solid #ffbd2e;
    }
    
    .snackbar.success {
      border-left: 4px solid #27c93f;
    }
    
    .snackbar.info {
      border-left: 4px solid var(--primary-color);
    }

    .close-btn {
      background: none;
      border: none;
      color: inherit;
      font-size: 20px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      opacity: 0.7;
    }

    .close-btn:hover {
      opacity: 1;
    }

    @keyframes slideDown {
      from {
        transform: translate(-50%, -100%);
        opacity: 0;
      }
      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  `]
})
export class SnackbarComponent {
    snackbarData;

    constructor(private snackbarService: SnackbarService) {
        this.snackbarData = this.snackbarService.data;
    }

    close() {
        this.snackbarService.close();
    }
}
