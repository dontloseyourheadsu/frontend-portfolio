import React, { useEffect, useState } from 'react';
import './GameDevPortfolio.css';

const GameDevPortfolio = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      p.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 6,
      });
    }
    setParticles(p);
  }, []);

  // Smooth scroll for nav links
  useEffect(() => {
    const anchors = document.querySelectorAll('.game-portfolio-app a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  // Parallax effect on sections
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.pageYOffset;
      const elements = document.querySelectorAll('.game-portfolio-app .section');
      elements.forEach((el, i) => {
        const speed = 0.5 + i * 0.1;
        el.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Form submit animation
  useEffect(() => {
    const form = document.querySelector('.game-portfolio-app .contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.submit-btn');
      const originalText = btn.textContent;

      btn.textContent = 'SENDING...';
      btn.style.background = 'linear-gradient(45deg, #00ff88, #4ecdc4)';

      setTimeout(() => {
        btn.textContent = 'MESSAGE SENT!';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
        }, 2000);
      }, 1500);
    });
  }, []);

  return (
    <div className="game-portfolio-app">
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <header>
          <h1 className="glitch-title" data-text="ALEX CHEN">
            ALEX CHEN
          </h1>
          <p className="subtitle">Game Designer &amp; Creative Technologist</p>
        </header>

        <nav>
          <div className="nav-content">
            <a href="#games" className="nav-item">
              GAMES
            </a>
            <a href="#about" className="nav-item">
              ABOUT
            </a>
            <a href="#skills" className="nav-item">
              SKILLS
            </a>
            <a href="#contact" className="nav-item">
              CONTACT
            </a>
          </div>
        </nav>

        <section id="games" className="section">
          <h2 className="section-title">FEATURED GAMES</h2>
          <div className="game-cards">
            {[
              {
                title: 'NEON RUNNERS',
                description:
                  'A cyberpunk endless runner with procedural city generation and dynamic soundtrack adaptation. Players navigate through a dystopian metropolis while the music evolves based on their performance.',
                tech: ['Unity', 'C#', 'Procedural Gen', 'Audio Systems'],
              },
              {
                title: 'QUANTUM PUZZLES',
                description:
                  'Mind-bending puzzle game exploring quantum mechanics concepts. Players manipulate probability waves and particle states to solve increasingly complex spatial challenges.',
                tech: ['Unreal Engine', 'Blueprint', 'Physics', 'Shaders'],
              },
              {
                title: 'MYSTIC REALMS',
                description:
                  'Open-world fantasy RPG with emergent storytelling system. AI-driven NPCs create unique narrative experiences based on player choices and world interactions.',
                tech: ['Custom Engine', 'C++', 'AI Systems', 'Procedural Narrative'],
              },
            ].map((game, idx) => (
              <div className="game-card" key={idx}>
                <div className="card-content">
                  <h3 className="game-title">{game.title}</h3>
                  <p className="game-description">{game.description}</p>
                  <div className="game-tech">
                    {game.tech.map((t, i) => (
                      <span className="tech-tag" key={i}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">ABOUT</h2>
          <div className="about-content">
            <div className="profile-area">
              <div className="profile-image">🎮</div>
              <h3 style={{ color: '#00ff88', marginBottom: '10px' }}>Creative Visionary</h3>
            </div>
            <div className="about-text">
              <p>
                I'm a passionate game designer with 8+ years of experience crafting immersive digital experiences. My work
                spans from indie experimental games to AAA productions, always pushing the boundaries of interactive storytelling
                and player engagement.
              </p>
              <br />
              <p>
                I believe games are the ultimate fusion of art, technology, and human psychology. Every project I undertake explores
                new ways to create meaningful connections between players and digital worlds, whether through innovative mechanics,
                emotional narratives, or cutting-edge technology integration.
              </p>
              <br />
              <p>
                When I'm not designing games, you'll find me experimenting with VR/AR technologies, contributing to open-source game
                development tools, or mentoring the next generation of game creators.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">SKILLS &amp; EXPERTISE</h2>
          <div className="skills-grid">
            {[
              ['🎨', 'Game Design', 'Level design, mechanics balancing, player psychology, and user experience optimization'],
              ['⚡', 'Technical Skills', 'Unity, Unreal Engine, C#, C++, Python, and custom tool development'],
              ['🧠', 'AI & Procedural', 'Machine learning integration, procedural generation, and emergent gameplay systems'],
              ['🎵', 'Audio Design', 'Dynamic music systems, spatial audio, and interactive sound design'],
              ['👥', 'Team Leadership', 'Cross-functional collaboration, agile development, and creative direction'],
              ['🚀', 'Innovation', 'VR/AR development, experimental gameplay, and emerging technologies'],
            ].map(([icon, name, desc], idx) => (
              <div className="skill-item" key={idx}>
                <span className="skill-icon">{icon}</span>
                <h3 className="skill-name">{name}</h3>
                <p className="skill-description">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">GET IN TOUCH</h2>
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input type="text" id="name" className="form-input" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input type="email" id="email" className="form-input" placeholder="your.email@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="projectType">
                Project Type
              </label>
              <select id="projectType" className="form-input" defaultValue="Game Development">
                <option>Game Development</option>
                <option>Consulting</option>
                <option>Collaboration</option>
                <option>Speaking Engagement</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="form-input"
                rows="5"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default GameDevPortfolio;
