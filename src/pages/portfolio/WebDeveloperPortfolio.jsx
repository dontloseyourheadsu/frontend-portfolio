import React, { useEffect, useState } from 'react';
import './WebDeveloperPortfolio.css';

const WebDeveloperPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [projects, setProjects] = useState([]);

  // Sample projects data
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "A comprehensive e-commerce solution with React, Node.js, and MongoDB. Features include product search, filtering, cart management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
      link: "#"
    },
    {
      id: 2,
      title: "Health & Wellness App",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "A mobile-first web application for tracking fitness goals, nutrition, and wellness metrics. Includes data visualization, progress tracking, and personalized recommendations.",
      technologies: ["Vue.js", "Chart.js", "SCSS", "PWA", "IndexedDB"],
      link: "#"
    },
    {
      id: 3,
      title: "Content Management System",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "A custom CMS built for content creators with a focus on performance and SEO. Features include content scheduling, analytics integration, and multi-user collaboration.",
      technologies: ["PHP", "Laravel", "MySQL", "Redis", "AWS", "REST API"],
      link: "#"
    },
    {
      id: 4,
      title: "Real Estate Listing Platform",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "A property listing website with advanced search capabilities, virtual tours, and mortgage calculator. Integrated with multiple MLS systems for real-time data.",
      technologies: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Google Maps API"],
      link: "#"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "An analytics dashboard that aggregates data from multiple social media platforms. Features include customizable widgets, data export, and automated reporting.",
      technologies: ["React", "D3.js", "Material UI", "GraphQL", "Firebase"],
      link: "#"
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "A robust inventory tracking system for small businesses. Includes barcode scanning, vendor management, and low stock alerts with extensive reporting capabilities.",
      technologies: ["Django", "Python", "PostgreSQL", "Docker", "Celery", "Redis"],
      link: "#"
    }
  ];

  // Filter projects
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    if (filter === 'all') {
      setProjects(projectsData);
    } else {
      setProjects(projectsData.filter(project => project.category.toLowerCase() === filter.toLowerCase()));
    }
  }, [filter]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="web-portfolio">
      {/* Header */}
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">Jordan<span>Dev</span></a>
            <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="hamburger"></div>
            </div>
            <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              <span className="greeting">Hello, I'm</span>
              <span className="name">Jordan Webber</span>
              <span className="profession">Full Stack Developer</span>
            </h1>
            <p className="tagline">
              I create <span>responsive</span>, <span>performance-optimized</span> web applications that deliver exceptional user experiences.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}>View My Work</a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>Get In Touch</a>
            </div>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-github"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-codepen"></i></a>
            </div>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            <div className="about-image">
              <div className="image-container">
                <div className="image-placeholder">👨‍💻</div>
              </div>
            </div>
            <div className="about-text">
              <h3>Creating digital experiences that make a difference</h3>
              <p>
                I'm a Full Stack Web Developer with over 5 years of experience designing and developing user-friendly websites and applications. I specialize in creating clean, efficient code and intuitive user interfaces that drive business growth and improve user satisfaction.
              </p>
              <p>
                My journey in web development began with a curiosity about how things work on the internet, which evolved into a passion for building digital solutions that solve real-world problems. I approach each project with a focus on performance, accessibility, and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying updated with industry trends to deliver cutting-edge solutions.
              </p>
              <div className="about-details">
                <div className="detail">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">Jordan Webber</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">jordan@webdevportfolio.com</span>
                </div>
                <div className="detail">
                  <span className="detail-label">From:</span>
                  <span className="detail-value">San Francisco, CA</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Availability:</span>
                  <span className="detail-value">Open to Opportunities</span>
                </div>
              </div>
              <a href="#" className="btn btn-primary">Download Resume</a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>My Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={filter === 'frontend' ? 'active' : ''} 
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </button>
            <button 
              className={filter === 'backend' ? 'active' : ''} 
              onClick={() => setFilter('backend')}
            >
              Backend
            </button>
            <button 
              className={filter === 'full stack' ? 'active' : ''} 
              onClick={() => setFilter('full stack')}
            >
              Full Stack
            </button>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.link} className="btn btn-sm">View Project</a>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <h2>My Skills</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Frontend Development</h3>
              <div className="skills-list">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular', 'SASS/SCSS', 'Redux', 'Webpack'].map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-name">{skill}</div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{width: `${Math.floor(Math.random() * 31) + 70}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3>Backend Development</h3>
              <div className="skills-list">
                {['Node.js', 'Express.js', 'PHP', 'Laravel', 'Python', 'Django', 'Ruby on Rails', 'SQL', 'MongoDB', 'RESTful APIs'].map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-name">{skill}</div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{width: `${Math.floor(Math.random() * 31) + 70}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3>Tools & Platforms</h3>
              <div className="skills-list">
                {['Git', 'GitHub', 'Docker', 'AWS', 'Firebase', 'Heroku', 'CI/CD', 'Jira', 'Figma', 'Jest'].map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-name">{skill}</div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{width: `${Math.floor(Math.random() * 31) + 70}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Build Something Amazing Together</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or through my social profiles.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Location</h4>
                    <p>San Francisco, California</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <p>jordan@webdevportfolio.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link"><i className="fab fa-github"></i></a>
                <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link"><i className="fab fa-codepen"></i></a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2023 Jordan Webber. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button 
        className={`scroll-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default WebDeveloperPortfolio;
