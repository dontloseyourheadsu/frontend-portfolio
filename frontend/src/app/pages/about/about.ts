import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  careerTimeline = [
    {
      period: 'Dec 2025 - Present',
      role: 'Software Developer Intern',
      company: 'Aleph Group, Inc.',
      description: [
        'Built AI-powered survey analytics dashboard integrating OpenAI API to auto-generate conversational insights.',
        'Implemented query caching and Fingerprint.js rate limiting to control LLM API costs.',
        'Architected ‘Espacios Publicitarios’ React Native app with offline-first architecture and background cloud sync.'
      ],
      tech: ['OpenAI', 'React Native', 'PaddleOCR', 'YOLO11', 'Moondream VLM']
    },
    {
      period: 'Aug 2025 - Feb 2026',
      role: 'Software & Game Developer',
      company: 'Bondzú',
      description: [
        'Engineered IoT animal monitoring system bridging hardware sensors to a live web dashboard.',
        'Developed ‘Bondzú Survival’ in C++/Unreal Engine 5 with complex entity AI behavior systems.',
        'Built custom WordPress/PHP modules for live MongoDB-backed data feed visualization.'
      ],
      tech: ['C++', 'Unreal Engine 5', 'IoT', 'MongoDB', 'PHP']
    },
    {
      period: 'Jun 2024 - May 2025',
      role: 'Software Developer (.NET)',
      company: 'dipoleDIGITAL',
      description: [
        'Rebuilt corporate website from scratch following a live security breach in under 2 hours.',
        'Automated SharePoint-to-Excel/Access financial report consolidation, cutting processing time from hours to minutes.',
        'Architected Unified Task Management Dashboard in Blazor (Server/WASM) with real-time sync.'
      ],
      tech: ['.NET 8', 'Blazor', 'Azure', 'OAuth2', 'Power Automate']
    },
    {
      period: 'May 2023 - Feb 2025',
      role: 'Software Developer (.NET)',
      company: 'Enstoa',
      description: [
        'Achieved 100% unit test coverage during internal library migration to a modern .NET stack.',
        'Led migration of legacy systems from .NET Framework 4.8 to .NET 8.',
        'Developed AI-powered containerized candidate search tool using OpenAI API.'
      ],
      tech: ['.NET 8', 'Hangfire', 'SQL Server', 'Docker', 'OpenAI']
    },
    {
      period: 'Apr 2022 - Apr 2023',
      role: 'Full Stack Developer',
      company: 'Freelance / Independent',
      description: [
        'Delivered end-to-end architecture and deployment of custom web applications and e-commerce platforms.',
        'Built performant React and Angular frontends with .NET REST API backends.'
      ],
      tech: ['React', 'Angular', '.NET REST API', 'AWS', 'Stripe']
    }
  ];

  education = {
    degree: 'B.S. Computer Systems Engineering',
    school: 'Universidad de las Américas Puebla (UDLAP)',
    expected: 'May 2026',
    highlights: 'Ex-Secretary, Computer Systems Engineering Student Board'
  };

  certifications = [
    {
      name: 'Foundational C# Certification',
      issuer: 'Microsoft / FreeCodeCamp',
      date: '2023',
      link: 'https://www.freecodecamp.org/certification/dontloseyourheadsu/foundational-c-sharp-with-microsoft'
    },
    {
      name: 'Problem Solving Intermediate',
      issuer: 'HackerRank',
      date: '2023',
      link: 'https://www.hackerrank.com/certificates/0bc0ce8a1554'
    }
  ];

  philosophyPoints = [
    {
      title: 'Infrastructure Thinking',
      icon: 'dns',
      text: 'I don\'t just write code; I build systems. Every line is written with scalability, security, and observability in mind.'
    },
    {
      title: 'Neuro-Inclusive Design',
      icon: 'psychology',
      text: 'Engineering for the brain. I design interfaces that minimize cognitive load, ensuring technology is accessible to everyone.'
    },
    {
      title: 'Production Ownership',
      icon: 'account_tree',
      text: 'From the first line of architecture to the final deployment pipeline, I take full responsibility for the lifecycle of my software.'
    }
  ];
}
