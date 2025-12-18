import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarService } from '../shared/snackbar/snackbar';

interface CodeToken {
  text: string;
  type: 'keyword' | 'string' | 'type' | 'function' | 'plain' | 'comment';
}

interface FileTab {
  name: string;
  language: string;
  tokens: CodeToken[];
  output: string;
}

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-editor.html',
  styleUrl: './code-editor.css'
})
export class CodeEditor implements OnInit, OnDestroy {
  files: FileTab[] = [
    {
      name: 'Program.cs',
      language: 'csharp',
      output: 'Hello, World!',
      tokens: [
        { text: 'using', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: 'System', type: 'type' },
        { text: ';', type: 'plain' },
        { text: '\n\n', type: 'plain' },
        { text: 'class', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: 'Program', type: 'type' },
        { text: ' ', type: 'plain' },
        { text: '{', type: 'plain' },
        { text: '\n    ', type: 'plain' },
        { text: 'static', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: 'void', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: 'Main', type: 'function' },
        { text: '()', type: 'plain' },
        { text: ' ', type: 'plain' },
        { text: '{', type: 'plain' },
        { text: '\n        ', type: 'plain' },
        { text: 'Console', type: 'type' },
        { text: '.', type: 'plain' },
        { text: 'WriteLine', type: 'function' },
        { text: '(', type: 'plain' },
        { text: '"Hello, World!"', type: 'string' },
        { text: ');', type: 'plain' },
        { text: '\n    ', type: 'plain' },
        { text: '}', type: 'plain' },
        { text: '\n', type: 'plain' },
        { text: '}', type: 'plain' }
      ]
    },
    {
      name: 'main.rs',
      language: 'rust',
      output: 'Hello, world!',
      tokens: [
        { text: 'fn', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: 'main', type: 'function' },
        { text: '()', type: 'plain' },
        { text: ' ', type: 'plain' },
        { text: '{', type: 'plain' },
        { text: '\n    ', type: 'plain' },
        { text: 'println!', type: 'function' },
        { text: '(', type: 'plain' },
        { text: '"Hello, world!"', type: 'string' },
        { text: ');', type: 'plain' },
        { text: '\n', type: 'plain' },
        { text: '}', type: 'plain' }
      ]
    },
    {
      name: 'app.component.ts',
      language: 'typescript',
      output: 'angular-ui',
      tokens: [
        { text: 'import', type: 'keyword' },
        { text: ' { ', type: 'plain' },
        { text: 'Component', type: 'type' },
        { text: ' } ', type: 'plain' },
        { text: 'from', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: "'@angular/core'", type: 'string' },
        { text: ';', type: 'plain' },
        { text: '\n\n', type: 'plain' },
        { text: '@Component', type: 'function' },
        { text: '({\n  ', type: 'plain' },
        { text: "selector", type: 'plain' },
        { text: ': ', type: 'plain' },
        { text: "'app-root'", type: 'string' },
        { text: ',\n  ', type: 'plain' },
        { text: "template", type: 'plain' },
        { text: ': ', type: 'plain' },
        { text: "`<h1>Hello World</h1>`", type: 'string' },
        { text: '\n})\n', type: 'plain' },
        { text: 'export', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: 'class', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: 'AppComponent', type: 'type' },
        { text: ' {}', type: 'plain' }
      ]
    },
    {
      name: 'player.gd',
      language: 'gdscript',
      output: 'godot-game',
      tokens: [
        { text: 'extends', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: 'CharacterBody2D', type: 'type' },
        { text: '\n\n', type: 'plain' },
        { text: 'func', type: 'keyword' },
        { text: ' ', type: 'plain' },
        { text: '_ready', type: 'function' },
        { text: '():', type: 'plain' },
        { text: '\n    ', type: 'plain' },
        { text: 'print', type: 'function' },
        { text: '(', type: 'plain' },
        { text: '"Game Started!"', type: 'string' },
        { text: ')', type: 'plain' },
        { text: '\n    ', type: 'plain' },
        { text: '$AnimationPlayer', type: 'plain' },
        { text: '.', type: 'plain' },
        { text: 'play', type: 'function' },
        { text: '(', type: 'plain' },
        { text: '"idle"', type: 'string' },
        { text: ')', type: 'plain' }
      ]
    }
  ];

  activeFileIndex = 0;
  displayedTokens: CodeToken[] = [];
  displayedOutput = '';
  isTyping = false;
  showCursor = true;

  private typingTimeout: any;
  private cursorInterval: any;
  private gameLoopId: any;

  // Game state
  private playerY = 0;
  private playerVelocity = 0;
  private obstacleX = -50; // Start off-screen
  private readonly GRAVITY = 0.6;
  private readonly JUMP_FORCE = -12;
  private readonly GROUND_Y = 0;
  private readonly OBSTACLE_SPEED = 5;

  constructor(private snackbar: SnackbarService) { }

  ngOnInit() {
    this.startTypingAnimation();

    // Blinking cursor effect
    this.cursorInterval = setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  }

  ngOnDestroy() {
    this.clearTimeouts();
    this.stopGameLoop();
    if (this.cursorInterval) clearInterval(this.cursorInterval);
  }

  selectTab(index: number) {
    if (this.activeFileIndex === index) return;

    if (this.isTyping) {
      this.snackbar.show('Please wait for the animation to finish', 'warning');
      return;
    }

    this.stopGameLoop();
    this.activeFileIndex = index;
    this.startTypingAnimation();
  }

  private startGameLoop() {
    this.stopGameLoop();

    // Reset positions
    this.playerY = 0;
    this.playerVelocity = 0;
    this.obstacleX = -50;

    const loop = () => {
      const playerEl = document.querySelector('.player-sprite') as HTMLElement;
      const obstacleEl = document.querySelector('.obstacle') as HTMLElement;
      const containerEl = document.querySelector('.godot-preview') as HTMLElement;

      if (playerEl && obstacleEl && containerEl) {
        const containerWidth = containerEl.clientWidth;

        // Move obstacle (Right to Left)
        this.obstacleX += this.OBSTACLE_SPEED;

        // Reset if off-screen left
        if (this.obstacleX > containerWidth) {
          this.obstacleX = -50;
        }

        // AI Jump Logic
        // Player is at left: 50px. Width: 30px. Right edge: 80px.
        // Obstacle is at right: obstacleX. Width: 30px.
        // Obstacle Left Edge from container left = containerWidth - obstacleX - 30.

        const obstacleLeftEdge = containerWidth - this.obstacleX - 30;
        const playerRightEdge = 80;
        const distance = obstacleLeftEdge - playerRightEdge;

        // Jump if obstacle is close and we are on ground
        if (distance < 120 && distance > 0 && this.playerY === 0) {
          this.playerVelocity = this.JUMP_FORCE;
        }

        // Physics
        this.playerY += this.playerVelocity;
        this.playerVelocity += this.GRAVITY;

        // Ground collision
        if (this.playerY > this.GROUND_Y) {
          this.playerY = this.GROUND_Y;
          this.playerVelocity = 0;
        }

        // Apply styles
        playerEl.style.transform = `translateY(${this.playerY}px)`;
        obstacleEl.style.right = `${this.obstacleX}px`;
      }

      this.gameLoopId = requestAnimationFrame(loop);
    };

    this.gameLoopId = requestAnimationFrame(loop);
  }

  private stopGameLoop() {
    if (this.gameLoopId) {
      cancelAnimationFrame(this.gameLoopId);
      this.gameLoopId = null;
    }
  }

  isUiOutput(): boolean {
    const output = this.files[this.activeFileIndex].output;
    return output === 'angular-ui' || output === 'godot-game';
  }

  private clearTimeouts() {
    if (this.typingTimeout) clearTimeout(this.typingTimeout);
  }

  private startTypingAnimation() {
    this.clearTimeouts();
    this.isTyping = true;
    this.displayedTokens = [];
    this.displayedOutput = '';

    const currentFile = this.files[this.activeFileIndex];
    this.typeTokens(currentFile.tokens, 0);
  }

  private typeTokens(tokens: CodeToken[], tokenIndex: number) {
    if (tokenIndex >= tokens.length) {
      // Finished typing code, start output
      this.typingTimeout = setTimeout(() => {
        this.typeOutput(this.files[this.activeFileIndex].output, 0);
      }, 500);
      return;
    }

    const token = tokens[tokenIndex];
    // Initialize the token in displayed list if it's new
    if (this.displayedTokens.length <= tokenIndex) {
      this.displayedTokens.push({ text: '', type: token.type });
    }

    this.typeCharacters(token, tokenIndex, 0, tokens);
  }

  private typeCharacters(token: CodeToken, tokenIndex: number, charIndex: number, allTokens: CodeToken[]) {
    if (charIndex >= token.text.length) {
      // Move to next token
      this.typeTokens(allTokens, tokenIndex + 1);
      return;
    }

    this.displayedTokens[tokenIndex].text += token.text[charIndex];

    // Randomize typing speed slightly for realism
    const delay = 30 + Math.random() * 50;

    this.typingTimeout = setTimeout(() => {
      this.typeCharacters(token, tokenIndex, charIndex + 1, allTokens);
    }, delay);
  }

  private typeOutput(outputText: string, charIndex: number) {
    if (charIndex >= outputText.length) {
      this.isTyping = false;
      if (this.files[this.activeFileIndex].output === 'godot-game') {
        this.startGameLoop();
      }
      return;
    }

    this.displayedOutput += outputText[charIndex];

    const delay = 30 + Math.random() * 30;
    this.typingTimeout = setTimeout(() => {
      this.typeOutput(outputText, charIndex + 1);
    }, delay);
  }
}
