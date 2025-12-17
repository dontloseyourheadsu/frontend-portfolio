import { Component } from '@angular/core';
import { CodeEditor } from '../../code-editor/code-editor';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CodeEditor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }
