import React, { useState, useEffect } from 'react';
import './UXDesignerPortfolio.css';

const UXDesignerPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "HealthTrack Mobile App",
      tagline: "Redesigning the patient experience for digital health monitoring",
      thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Mobile App",
      duration: "12 weeks",
      role: "Lead UX Designer",
      description: "HealthTrack is a patient-centered mobile application that helps users monitor chronic conditions and share data with healthcare providers. The redesign focused on improving data visualization, simplifying the tracking process, and enhancing communication features.",
      process: [
        {
          phase: "Research",
          details: "Conducted user interviews with 15 patients and 8 healthcare providers to understand pain points in health tracking. Created user personas and journey maps to identify opportunity areas. Competitive analysis of 5 similar health tracking applications."
        },
        {
          phase: "Problem Definition",
          details: "Users found the previous interface overwhelming and difficult to navigate. Data entry was time-consuming, and visualizations were hard to interpret. Communication with healthcare providers was disconnected from the tracking experience."
        },
        {
          phase: "Ideation",
          details: "Facilitated 3 design thinking workshops with stakeholders. Sketched 20+ potential solutions for key user flows. Created information architecture that prioritized frequent tasks and logical grouping of related features."
        },
        {
          phase: "Design",
          details: "Developed wireframes for core user journeys. Created a design system with accessibility-focused UI components. Designed high-fidelity mockups with clean, intuitive data visualizations and streamlined input methods."
        },
        {
          phase: "Testing & Iteration",
          details: "Conducted usability testing with 12 participants across different age groups and technical abilities. Iterated designs based on feedback, focusing on simplifying navigation, enhancing readability, and adding customization options."
        },
        {
          phase: "Results",
          details: "The redesigned app saw a 42% increase in daily active users, 78% improvement in task completion rates, and 86% of surveyed users reported higher satisfaction with the data visualization features."
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ]
    },
    {
      id: 2,
      title: "EcoShop E-commerce Platform",
      tagline: "Creating a sustainable shopping experience that connects values with actions",
      thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "E-commerce",
      duration: "16 weeks",
      role: "UX/UI Designer",
      description: "EcoShop is an e-commerce platform focused on eco-friendly and sustainable products. The design challenge was to create an intuitive shopping experience that also educates users about environmental impact and transparently communicates product sustainability credentials.",
      process: [
        {
          phase: "Research",
          details: "Conducted market research on sustainable shopping trends and consumer behavior. Interviewed 20 environmentally-conscious consumers to understand shopping priorities and pain points. Analyzed existing eco-friendly marketplaces to identify opportunities for improvement."
        },
        {
          phase: "Problem Definition",
          details: "Consumers struggled to verify sustainability claims and compare environmental impacts between products. Shopping for eco-friendly products often required sacrificing user experience, with clunky interfaces and confusing information architecture."
        },
        {
          phase: "Ideation",
          details: "Created concept maps to visualize how sustainability information could be integrated into the shopping experience. Developed user flows that balanced product discovery with sustainability education. Explored visual systems for communicating environmental impact at a glance."
        },
        {
          phase: "Design",
          details: "Designed a component-based UI system that maintained consistency while allowing for rich sustainability information. Created interactive product cards with expandable impact details. Developed a sustainability scoring system with intuitive visual indicators."
        },
        {
          phase: "Testing & Iteration",
          details: "Conducted A/B testing on different approaches to displaying sustainability information. Gathered feedback through user testing sessions on prototype. Iterated on designs to address pain points in the checkout process and impact verification."
        },
        {
          phase: "Results",
          details: "The platform launched successfully with a 93% positive user feedback rating. Average time spent on product pages increased by 37%, and the platform saw a 28% higher conversion rate compared to industry benchmarks for eco-friendly e-commerce."
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ]
    },
    {
      id: 3,
      title: "MindSpace Meditation App",
      tagline: "Transforming mental wellness through intuitive design and personalization",
      thumbnail: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Mobile App",
      duration: "10 weeks",
      role: "UX Researcher & Designer",
      description: "MindSpace is a meditation and mental wellness app designed to make mindfulness practices accessible to beginners while providing depth for experienced practitioners. The focus was on creating a distraction-free experience that adapts to users' progress and preferences.",
      process: [
        {
          phase: "Research",
          details: "Conducted diary studies with 12 participants to understand meditation habits and barriers. Analyzed user reviews of existing meditation apps to identify common pain points. Interviewed mindfulness instructors to understand best practices for guided sessions."
        },
        {
          phase: "Problem Definition",
          details: "Novice users found it difficult to build consistent meditation habits without proper guidance. Experienced users felt constrained by rigid programs. Both groups reported distracting interfaces that contradicted the mindful experience they sought."
        },
        {
          phase: "Ideation",
          details: "Explored different onboarding approaches to assess user skill level and goals. Developed concepts for adaptable meditation programs that evolved with user progress. Created mood boards and visual explorations for a calming, focus-promoting interface."
        },
        {
          phase: "Design",
          details: "Designed an interface with minimal visual clutter and thoughtful animation to promote calm focus. Created an adaptive recommendation system based on user behavior and explicit preferences. Developed an innovative progress visualization that emphasized quality over quantity."
        },
        {
          phase: "Testing & Iteration",
          details: "Conducted remote usability testing with users of varying meditation experience. Implemented eye-tracking studies to identify potential visual distractions. Iterated on the notification system to find the right balance between engagement and mindfulness."
        },
        {
          phase: "Results",
          details: "Users showed a 64% increase in session completion rates compared to their previous meditation apps. The 30-day retention rate reached 74%, significantly above the industry average. User interviews revealed high satisfaction with the personalization system."
        }
      ],
      images: [
        "https://images.unsplash.com/photo-1569161031678-f49b4b9ca1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1615552931805-92b77f813ff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ]
    }
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100; // Offset for header
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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

  // Open case study modal
  const openCaseStudy = (caseStudy) => {
    setSelectedCase(caseStudy);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close case study modal
  const closeCaseStudy = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling again
  };

  // Modal navigation
  const handleKeyDown = (e) => {
    if (isModalOpen) {
      if (e.key === 'Escape') {
        closeCaseStudy();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="ux-portfolio">
      {/* Header */}
      <header>
        <div className="container">
          <div className="logo">Emma<span>Design</span></div>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><a className={activeSection === 'home' ? 'active' : ''} href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home')}}>Home</a></li>
              <li><a className={activeSection === 'about' ? 'active' : ''} href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about')}}>About</a></li>
              <li><a className={activeSection === 'work' ? 'active' : ''} href="#work" onClick={(e) => {e.preventDefault(); scrollToSection('work')}}>Case Studies</a></li>
              <li><a className={activeSection === 'process' ? 'active' : ''} href="#process" onClick={(e) => {e.preventDefault(); scrollToSection('process')}}>Process</a></li>
              <li><a className={activeSection === 'contact' ? 'active' : ''} href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Creating meaningful digital experiences through human-centered design</h1>
              <p>Hi, I'm Emma Chen — a UX designer focused on crafting intuitive interfaces and impactful user experiences that solve real problems.</p>
              <div className="hero-buttons">
                <a href="#work" className="btn primary" onClick={(e) => {e.preventDefault(); scrollToSection('work')}}>View My Work</a>
                <a href="#contact" className="btn secondary" onClick={(e) => {e.preventDefault(); scrollToSection('contact')}}>Get In Touch</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="emoji">👩‍🎨</div>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">
              <span></span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p className="subtitle">Design philosophy & background</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>I believe in design that empowers people.</h3>
              <p>
                With over 5 years of experience in UX design, I combine research-driven insights with creative problem-solving to create products that people love to use. My approach centers on understanding human behavior and designing solutions that feel intuitive and meaningful.
              </p>
              <p>
                I specialize in translating complex requirements into simple, elegant user experiences across mobile and web platforms. My background in cognitive psychology gives me a unique perspective on how people interact with digital products, allowing me to design experiences that align with natural human thought processes.
              </p>
              <p>
                When I'm not designing, you'll find me hiking with my dog, experimenting with ceramics, or reading about emerging technologies. I'm passionate about continuous learning and sharing knowledge through mentoring and community workshops.
              </p>
              <div className="skills">
                <div className="skill-category">
                  <h4>UX Design</h4>
                  <div className="skill-tags">
                    <span>User Research</span>
                    <span>Information Architecture</span>
                    <span>Wireframing</span>
                    <span>Prototyping</span>
                    <span>Usability Testing</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>UI Design</h4>
                  <div className="skill-tags">
                    <span>Visual Design</span>
                    <span>Interaction Design</span>
                    <span>Design Systems</span>
                    <span>Responsive Design</span>
                    <span>Accessibility</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Tools</h4>
                  <div className="skill-tags">
                    <span>Figma</span>
                    <span>Adobe XD</span>
                    <span>Sketch</span>
                    <span>Principle</span>
                    <span>Framer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience">
              <div className="experience-item">
                <div className="year">2020-Present</div>
                <div className="details">
                  <h4>Senior UX Designer</h4>
                  <p>HealthTech Innovations</p>
                </div>
              </div>
              <div className="experience-item">
                <div className="year">2018-2020</div>
                <div className="details">
                  <h4>Product Designer</h4>
                  <p>Fintech Solutions Inc.</p>
                </div>
              </div>
              <div className="experience-item">
                <div className="year">2017-2018</div>
                <div className="details">
                  <h4>UX/UI Designer</h4>
                  <p>Creative Digital Agency</p>
                </div>
              </div>
              <div className="education-item">
                <div className="year">2016</div>
                <div className="details">
                  <h4>M.A. Human-Computer Interaction</h4>
                  <p>Stanford University</p>
                </div>
              </div>
              <div className="education-item">
                <div className="year">2014</div>
                <div className="details">
                  <h4>B.S. Cognitive Psychology</h4>
                  <p>University of California, Berkeley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work">
        <div className="container">
          <div className="section-header">
            <h2>Case Studies</h2>
            <p className="subtitle">Selected projects that showcase my design process</p>
          </div>
          <div className="case-studies">
            {caseStudies.map(caseStudy => (
              <div className="case-study" key={caseStudy.id} onClick={() => openCaseStudy(caseStudy)}>
                <div className="case-thumbnail">
                  <img src={caseStudy.thumbnail} alt={caseStudy.title} />
                  <div className="overlay">
                    <button className="btn-view">View Case Study</button>
                  </div>
                </div>
                <div className="case-info">
                  <span className="case-category">{caseStudy.category}</span>
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <div className="section-header">
            <h2>My Process</h2>
            <p className="subtitle">How I approach design challenges</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Research & Discovery</h3>
                <p>Understanding the problem space through user research, stakeholder interviews, and competitive analysis. I focus on developing empathy and uncovering insights that drive the design process.</p>
                <div className="step-methods">
                  <span>User Interviews</span>
                  <span>Contextual Inquiry</span>
                  <span>Competitive Analysis</span>
                  <span>Surveys</span>
                  <span>Heuristic Evaluation</span>
                </div>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Define & Synthesize</h3>
                <p>Organizing research findings into meaningful patterns and insights. I create user personas, journey maps, and problem statements to clearly define the challenges and opportunities.</p>
                <div className="step-methods">
                  <span>Affinity Mapping</span>
                  <span>User Personas</span>
                  <span>Journey Mapping</span>
                  <span>Jobs-to-be-Done</span>
                  <span>Problem Framing</span>
                </div>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Ideate & Explore</h3>
                <p>Generating a wide range of possible solutions through collaborative ideation sessions. I explore multiple approaches before narrowing down to the most promising concepts.</p>
                <div className="step-methods">
                  <span>Design Studios</span>
                  <span>Sketching</span>
                  <span>Crazy 8's</span>
                  <span>Storyboarding</span>
                  <span>How Might We</span>
                </div>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Design & Prototype</h3>
                <p>Translating concepts into wireframes and interactive prototypes. I create information architecture, user flows, and iterative designs that bring ideas to life for testing.</p>
                <div className="step-methods">
                  <span>Wireframing</span>
                  <span>Information Architecture</span>
                  <span>Interaction Design</span>
                  <span>Prototyping</span>
                  <span>UI Design</span>
                </div>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Test & Iterate</h3>
                <p>Validating designs through usability testing and gathering feedback. I conduct multiple rounds of testing and refinement to ensure solutions effectively address user needs.</p>
                <div className="step-methods">
                  <span>Usability Testing</span>
                  <span>A/B Testing</span>
                  <span>Accessibility Checks</span>
                  <span>Design Critique</span>
                  <span>Analytics Review</span>
                </div>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <div className="step-content">
                <h3>Deliver & Evaluate</h3>
                <p>Finalizing designs and collaborating with development teams for implementation. I create detailed specifications and remain involved through launch to ensure design integrity.</p>
                <div className="step-methods">
                  <span>Design Specs</span>
                  <span>Developer Handoff</span>
                  <span>Implementation Support</span>
                  <span>Post-Launch Analysis</span>
                  <span>Success Metrics</span>
                </div>
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
            <p className="subtitle">Let's discuss your project needs</p>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email address" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Case Study Modal */}
      {isModalOpen && selectedCase && (
        <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`} onClick={closeCaseStudy}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeCaseStudy}></button>
            
            <div className="modal-header">
              <h3>{selectedCase.title}</h3>
              <p>{selectedCase.tagline}</p>
            </div>
            
            <div className="modal-content">
              <div className="case-details">
                <div className="detail-item">
                  <h4>Category</h4>
                  <p>{selectedCase.category}</p>
                </div>
                <div className="detail-item">
                  <h4>Duration</h4>
                  <p>{selectedCase.duration}</p>
                </div>
                <div className="detail-item">
                  <h4>Role</h4>
                  <p>{selectedCase.role}</p>
                </div>
              </div>
              
              <div className="case-description">
                <p>{selectedCase.description}</p>
              </div>
              
              <div className="case-gallery">
                {selectedCase.images.map((image, index) => (
                  <div className="gallery-item" key={index}>
                    <img src={image} alt={`${selectedCase.title} - Image ${index + 1}`} />
                  </div>
                ))}
              </div>
              
              <div className="process-timeline">
                <h3>Design Process</h3>
                {selectedCase.process.map((phase, index) => (
                  <div className="timeline-phase" key={index}>
                    <h4>{phase.phase}</h4>
                    <p>{phase.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UXDesignerPortfolio;
