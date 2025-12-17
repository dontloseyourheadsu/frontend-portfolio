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
    }
  ];

  activeFileIndex = 0;
  displayedTokens: CodeToken[] = [];
  displayedOutput = '';
  isTyping = false;
  showCursor = true;

  private typingTimeout: any;
  private cursorInterval: any;

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
    if (this.cursorInterval) clearInterval(this.cursorInterval);
  }

  selectTab(index: number) {
    if (this.activeFileIndex === index) return;

    if (this.isTyping) {
      this.snackbar.show('Please wait for the animation to finish', 'warning');
      return;
    }

    this.activeFileIndex = index;
    this.startTypingAnimation();
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
      return;
    }

    this.displayedOutput += outputText[charIndex];

    const delay = 30 + Math.random() * 30;
    this.typingTimeout = setTimeout(() => {
      this.typeOutput(outputText, charIndex + 1);
    }, delay);
  }
}
