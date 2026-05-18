import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {
  systemLogs: string[] = [];
  contactInfo = {
    name: "Jesus Alvarez Sombrerero",
    role: "Backend Software Engineer",
    specialization: ["Distributed Systems", "AI Integration", "Cloud Infrastructure"],
    location: "Puebla, Mexico",
    status: "READY_FOR_CONNECTION"
  };

  socials = [
    { name: 'Email', icon: 'email', value: 'jesusalvarez.code4@gmail.com', link: 'mailto:jesusalvarez.code4@gmail.com' },
    { name: 'LinkedIn', icon: 'public', value: 'linkedin.com/in/jesus-as', link: 'https://linkedin.com/in/jesus-as' },
    { name: 'GitHub', icon: 'terminal', value: 'github.com/dontloseyourheadsu', link: 'https://github.com/dontloseyourheadsu' }
  ];

  ngOnInit() {
    this.simulateSystemBoot();
  }

  private simulateSystemBoot() {
    const logs = [
      "Initializing connection protocol...",
      "Resolving dns: jesus-alvarez.remote",
      "Handshake: TLS 1.3 | AES-256-GCM",
      "Establishing secure tunnel...",
      "Node identified: 0xJESUS_ALVAREZ",
      "READY FOR INPUT."
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        this.addLog(log);
      }, index * 600);
    });
  }

  private addLog(message: string) {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.systemLogs.push(`[${timestamp}] ${message}`);
  }

  sendMessage(event: Event) {
    event.preventDefault();
    this.addLog("Inbound request detected...");
    this.addLog("POST /api/messages HTTP/1.1");
    
    setTimeout(() => {
      this.addLog("Payload validated. Sending...");
    }, 800);

    setTimeout(() => {
      this.addLog("200 OK: Message received. I'll get back to you soon!");
    }, 2000);
  }
}
