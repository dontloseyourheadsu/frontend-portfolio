import React, { useState } from 'react';
import './CodeBootcamp.css';

const CodeBootcamp = () => {
  const [activeProgram, setActiveProgram] = useState('fullstack');
  const [activeTab, setActiveTab] = useState('structure');
  
  // Program data
  const programs = {
    fullstack: {
      title: 'Full-Stack Web Development',
      description: 'Master front-end and back-end technologies to become a versatile full-stack developer capable of building complete web applications from scratch.',
      duration: '16 Weeks',
      level: 'Beginner to Advanced',
      nextCohort: 'Sept 15, 2023',
      price: '$8,995',
      keyTopics: [
        'HTML5, CSS3, JavaScript ES6+',
        'React & Redux',
        'Node.js & Express',
        'MongoDB & SQL Databases',
        'RESTful & GraphQL APIs',
        'Authentication & Security',
        'Deployment & DevOps'
      ]
    },
    datascience: {
      title: 'Data Science & AI',
      description: 'Develop expertise in data analysis, machine learning, and artificial intelligence to extract valuable insights and build predictive models.',
      duration: '20 Weeks',
      level: 'Intermediate',
      nextCohort: 'Oct 1, 2023',
      price: '$9,995',
      keyTopics: [
        'Python for Data Science',
        'Statistical Analysis',
        'Machine Learning Algorithms',
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Data Visualization',
        'Big Data Technologies'
      ]
    },
    uxdesign: {
      title: 'UX/UI Design',
      description: 'Learn user experience and interface design principles to create intuitive, accessible, and visually appealing digital products.',
      duration: '14 Weeks',
      level: 'Beginner Friendly',
      nextCohort: 'Aug 30, 2023',
      price: '$7,995',
      keyTopics: [
        'Design Thinking Process',
        'User Research Methods',
        'Wireframing & Prototyping',
        'UI Design Fundamentals',
        'Design Systems',
        'Usability Testing',
        'Figma & Adobe Creative Suite'
      ]
    }
  };
  
  // Job stats data
  const jobStats = {
    placementRate: '94%',
    avgSalary: '$92,850',
    hiringPartners: '250+',
    careerEvents: '20+ yearly'
  };
  
  // Graduate testimonials
  const graduates = [
    {
      name: 'Alex Rivera',
      role: 'Full-Stack Developer at Google',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'This bootcamp changed my life. I went from working retail to landing a six-figure developer job within 2 months of graduation.'
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer at Adobe',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'The hands-on projects and real-world experience were invaluable. My portfolio from the bootcamp is what got me in the door at my dream company.'
    },
    {
      name: 'Michael Johnson',
      role: 'Data Scientist at Netflix',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      quote: 'The instructors were industry veterans who taught us exactly what employers are looking for. The career support was exceptional.'
    }
  ];
  
  // Instructors data
  const instructors = [
    {
      name: 'Dr. James Wilson',
      role: 'Lead Instructor, Full-Stack Development',
      experience: '15+ years of experience, former Tech Lead at Amazon',
      image: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
      name: 'Lisa Patel',
      role: 'Senior Instructor, Data Science',
      experience: 'Ph.D. in Computer Science, 8 years at IBM Research',
      image: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead UX/UI Design Instructor',
      experience: '12+ years in design, previously at Apple and Airbnb',
      image: 'https://randomuser.me/api/portraits/men/29.jpg'
    }
  ];

  return (
    <div className="bootcamp">
      {/* Header */}
      <header className="bootcamp-header">
        <div className="bootcamp-container">
          <div className="header-content">
            <div className="logo">
              <span className="logo-text">BYTE</span>
              <span className="logo-accent">ACADEMY</span>
            </div>
            <div className="header-cta">
              <a href="#apply" className="cta-button">Apply Now</a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="bootcamp-container">
          <div className="hero-content">
            <div className="hero-text">
              <h5 className="superheading">HANDS-ON TECH EDUCATION</h5>
              <h1>Launch Your Tech Career in Weeks, Not Years</h1>
              <p className="subheading">
                Intensive, industry-aligned bootcamps taught by experienced professionals.
                Learn the skills employers actually need through hands-on projects and real-world applications.
              </p>
              <div className="hero-cta-group">
                <a href="#programs" className="primary-button">Explore Programs</a>
                <a href="#curriculum" className="secondary-button">View Curriculum</a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-value">5,000+</span>
                  <span className="stat-label">Graduates</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{jobStats.placementRate}</span>
                  <span className="stat-label">Job Placement</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{jobStats.hiringPartners}</span>
                  <span className="stat-label">Hiring Partners</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="code-snippet">
                <pre>
                  <code>
                    <span className="code-comment">// Your future starts here</span><br/>
                    <span className="code-keyword">function</span> <span className="code-function">launchCareer</span>() &#123;<br/>
                    &nbsp;&nbsp;<span className="code-keyword">const</span> you = <span className="code-keyword">new</span> <span className="code-class">Developer</span>();<br/>
                    &nbsp;&nbsp;you.<span className="code-property">learnSkills</span>();<br/>
                    &nbsp;&nbsp;you.<span className="code-property">buildProjects</span>();<br/>
                    &nbsp;&nbsp;you.<span className="code-property">connectWithEmployers</span>();<br/>
                    &nbsp;&nbsp;<span className="code-keyword">return</span> <span className="code-string">"Dream Job"</span>;<br/>
                    &#125;<br/>
                    <br/>
                    <span className="code-keyword">const</span> yourFuture = <span className="code-function">launchCareer</span>();<br/>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>
      
      {/* Programs Section */}
      <section className="programs" id="programs">
        <div className="bootcamp-container">
          <div className="section-header">
            <h2>Our Intensive Programs</h2>
            <p className="section-description">
              Choose the program that aligns with your career goals. All programs include hands-on projects, 
              real-world experience, and dedicated career support.
            </p>
          </div>
          
          <div className="program-tabs">
            <button 
              className={`program-tab ${activeProgram === 'fullstack' ? 'active' : ''}`}
              onClick={() => setActiveProgram('fullstack')}
            >
              Full-Stack Development
            </button>
            <button 
              className={`program-tab ${activeProgram === 'datascience' ? 'active' : ''}`}
              onClick={() => setActiveProgram('datascience')}
            >
              Data Science & AI
            </button>
            <button 
              className={`program-tab ${activeProgram === 'uxdesign' ? 'active' : ''}`}
              onClick={() => setActiveProgram('uxdesign')}
            >
              UX/UI Design
            </button>
          </div>
          
          <div className="program-details">
            <h3>{programs[activeProgram].title}</h3>
            <p className="program-description">{programs[activeProgram].description}</p>
            
            <div className="program-meta">
              <div className="meta-item">
                <span className="meta-icon">⏱️</span>
                <div className="meta-content">
                  <h4>Duration</h4>
                  <p>{programs[activeProgram].duration}</p>
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🎯</span>
                <div className="meta-content">
                  <h4>Level</h4>
                  <p>{programs[activeProgram].level}</p>
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🗓️</span>
                <div className="meta-content">
                  <h4>Next Cohort</h4>
                  <p>{programs[activeProgram].nextCohort}</p>
                </div>
              </div>
              <div className="meta-item">
                <span className="meta-icon">💲</span>
                <div className="meta-content">
                  <h4>Tuition</h4>
                  <p>{programs[activeProgram].price}</p>
                </div>
              </div>
            </div>
            
            <div className="key-topics">
              <h4>Key Topics Covered:</h4>
              <ul>
                {programs[activeProgram].keyTopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
            
            <div className="program-cta">
              <a href="#apply" className="primary-button">Apply Now</a>
              <a href={`#${activeProgram}-curriculum`} className="secondary-button">View Full Curriculum</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Curriculum Section */}
      <section className="curriculum" id="curriculum">
        <div className="bootcamp-container">
          <div className="section-header">
            <h2>Curriculum & Course Structure</h2>
            <p className="section-description">
              Our curriculum is designed by industry experts and constantly updated to reflect current industry needs. 
              Learn through a combination of lectures, hands-on projects, and real-world applications.
            </p>
          </div>
          
          <div className="curriculum-tabs">
            <button 
              className={`curriculum-tab ${activeTab === 'structure' ? 'active' : ''}`}
              onClick={() => setActiveTab('structure')}
            >
              Course Structure
            </button>
            <button 
              className={`curriculum-tab ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button 
              className={`curriculum-tab ${activeTab === 'schedule' ? 'active' : ''}`}
              onClick={() => setActiveTab('schedule')}
            >
              Schedule
            </button>
          </div>
          
          <div className="curriculum-content">
            {activeTab === 'structure' && (
              <div className="curriculum-structure">
                <div className="phase">
                  <div className="phase-header">
                    <div className="phase-number">01</div>
                    <h3>Foundations</h3>
                  </div>
                  <div className="phase-content">
                    <p>Build a solid foundation in core programming concepts, tools, and workflows.</p>
                    <ul>
                      <li>Development environment setup</li>
                      <li>Version control with Git</li>
                      <li>Programming fundamentals</li>
                      <li>Problem-solving approaches</li>
                    </ul>
                  </div>
                </div>
                
                <div className="phase">
                  <div className="phase-header">
                    <div className="phase-number">02</div>
                    <h3>Core Technologies</h3>
                  </div>
                  <div className="phase-content">
                    <p>Dive deep into the fundamental technologies of your chosen field.</p>
                    <ul>
                      <li>Field-specific languages and frameworks</li>
                      <li>Best practices and patterns</li>
                      <li>Building basic applications</li>
                      <li>Collaborative development</li>
                    </ul>
                  </div>
                </div>
                
                <div className="phase">
                  <div className="phase-header">
                    <div className="phase-number">03</div>
                    <h3>Advanced Concepts</h3>
                  </div>
                  <div className="phase-content">
                    <p>Master advanced concepts and techniques used in professional environments.</p>
                    <ul>
                      <li>Architecture and system design</li>
                      <li>Performance optimization</li>
                      <li>Testing and quality assurance</li>
                      <li>Integration with third-party services</li>
                    </ul>
                  </div>
                </div>
                
                <div className="phase">
                  <div className="phase-header">
                    <div className="phase-number">04</div>
                    <h3>Capstone Project</h3>
                  </div>
                  <div className="phase-content">
                    <p>Apply everything you've learned to build a comprehensive project for your portfolio.</p>
                    <ul>
                      <li>Project planning and management</li>
                      <li>Implementation of complex features</li>
                      <li>Deployment and presentation</li>
                      <li>Code reviews and refinement</li>
                    </ul>
                  </div>
                </div>
                
                <div className="phase">
                  <div className="phase-header">
                    <div className="phase-number">05</div>
                    <h3>Career Preparation</h3>
                  </div>
                  <div className="phase-content">
                    <p>Get ready to launch your new career with comprehensive job preparation.</p>
                    <ul>
                      <li>Portfolio development</li>
                      <li>Resume and LinkedIn optimization</li>
                      <li>Interview preparation</li>
                      <li>Networking and job search strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'projects' && (
              <div className="project-showcase">
                <div className="project-cards">
                  <div className="project-card">
                    <div className="project-icon">🚀</div>
                    <h3>Real-World Client Projects</h3>
                    <p>Work with actual clients to solve real business problems and build your portfolio with meaningful projects that demonstrate your abilities to employers.</p>
                  </div>
                  <div className="project-card">
                    <div className="project-icon">🔄</div>
                    <h3>Collaborative Development</h3>
                    <p>Learn to work in agile teams using industry-standard collaboration tools, git workflows, and code reviews to prepare for professional development environments.</p>
                  </div>
                  <div className="project-card">
                    <div className="project-icon">🏆</div>
                    <h3>Capstone Project</h3>
                    <p>Create an extensive capstone project that showcases the full range of your skills, serving as the centerpiece of your professional portfolio.</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'schedule' && (
              <div className="schedule-info">
                <div className="schedule-types">
                  <div className="schedule-option">
                    <h3>Full-Time Immersive</h3>
                    <div className="schedule-details">
                      <div className="schedule-item">
                        <span className="schedule-icon">⏰</span>
                        <div className="schedule-text">
                          <h4>Hours</h4>
                          <p>Monday-Friday, 9am-5pm</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="schedule-icon">📅</span>
                        <div className="schedule-text">
                          <h4>Duration</h4>
                          <p>12-20 weeks (program dependent)</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="schedule-icon">💡</span>
                        <div className="schedule-text">
                          <h4>Best For</h4>
                          <p>Career changers who can commit full-time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="schedule-option">
                    <h3>Part-Time Flex</h3>
                    <div className="schedule-details">
                      <div className="schedule-item">
                        <span className="schedule-icon">⏰</span>
                        <div className="schedule-text">
                          <h4>Hours</h4>
                          <p>Evenings (6-9pm) + Saturday (10am-2pm)</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="schedule-icon">📅</span>
                        <div className="schedule-text">
                          <h4>Duration</h4>
                          <p>24-30 weeks (program dependent)</p>
                        </div>
                      </div>
                      <div className="schedule-item">
                        <span className="schedule-icon">💡</span>
                        <div className="schedule-text">
                          <h4>Best For</h4>
                          <p>Working professionals transitioning careers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Outcomes Section */}
      <section className="outcomes">
        <div className="bootcamp-container">
          <div className="section-header">
            <h2>Career Outcomes</h2>
            <p className="section-description">
              Our graduates go on to work at top tech companies, startups, and organizations across industries.
              Our career services team works with you throughout the program and after graduation.
            </p>
          </div>
          
          <div className="outcome-stats">
            <div className="stat-card">
              <div className="stat-value">{jobStats.placementRate}</div>
              <div className="stat-description">Job Placement Rate</div>
              <p className="stat-detail">Of our graduates find employment in their field within 6 months of graduation</p>
            </div>
            <div className="stat-card">
              <div className="stat-value">{jobStats.avgSalary}</div>
              <div className="stat-description">Average Starting Salary</div>
              <p className="stat-detail">Average starting salary for our graduates across all programs</p>
            </div>
            <div className="stat-card">
              <div className="stat-value">{jobStats.hiringPartners}</div>
              <div className="stat-description">Hiring Partners</div>
              <p className="stat-detail">Companies that regularly hire our graduates and participate in our career events</p>
            </div>
            <div className="stat-card">
              <div className="stat-value">{jobStats.careerEvents}</div>
              <div className="stat-description">Yearly Career Events</div>
              <p className="stat-detail">Including career fairs, networking events, and employer presentations</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="bootcamp-container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p className="section-description">
              Our graduates have transformed their careers and lives through our programs. 
              Read their stories and see what's possible for your future.
            </p>
          </div>
          
          <div className="stories-carousel">
            {graduates.map((graduate, index) => (
              <div className="story-card" key={index}>
                <div className="graduate-image">
                  <img src={graduate.image} alt={graduate.name} />
                </div>
                <div className="story-content">
                  <div className="quote">{graduate.quote}</div>
                  <div className="graduate-info">
                    <h4>{graduate.name}</h4>
                    <p>{graduate.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instructors Section */}
      <section className="instructors">
        <div className="bootcamp-container">
          <div className="section-header">
            <h2>Learn From Industry Experts</h2>
            <p className="section-description">
              Our instructors bring years of real-world experience from top tech companies. 
              They are passionate about teaching and dedicated to your success.
            </p>
          </div>
          
          <div className="instructors-grid">
            {instructors.map((instructor, index) => (
              <div className="instructor-card" key={index}>
                <div className="instructor-image">
                  <img src={instructor.image} alt={instructor.name} />
                </div>
                <div className="instructor-info">
                  <h3>{instructor.name}</h3>
                  <h4>{instructor.role}</h4>
                  <p>{instructor.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Apply Section */}
      <section className="apply" id="apply">
        <div className="bootcamp-container">
          <div className="application-container">
            <div className="application-content">
              <h2>Ready to Start Your Journey?</h2>
              <p>
                Apply now to join our upcoming cohorts. Our admissions team will guide you through 
                the process and help determine if our program is the right fit for your goals.
              </p>
              
              <div className="application-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Submit Application</h4>
                    <p>Complete our online application form</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Technical Assessment</h4>
                    <p>Complete a basic skills assessment</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Admissions Interview</h4>
                    <p>Meet with our admissions team</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Enrollment</h4>
                    <p>Secure your spot in an upcoming cohort</p>
                  </div>
                </div>
              </div>
              
              <div className="financing-options">
                <h4>Financing Options Available:</h4>
                <p>Income Share Agreements, Payment Plans, Scholarships, and more.</p>
              </div>
            </div>
            
            <div className="application-form">
              <h3>Start Your Application</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="program">Program of Interest</label>
                  <select id="program">
                    <option value="">Select a program</option>
                    <option value="fullstack">Full-Stack Web Development</option>
                    <option value="datascience">Data Science & AI</option>
                    <option value="uxdesign">UX/UI Design</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="background">Technical Background</label>
                  <select id="background">
                    <option value="">Select your experience level</option>
                    <option value="none">No technical experience</option>
                    <option value="beginner">Some basics (self-taught)</option>
                    <option value="intermediate">Intermediate knowledge</option>
                    <option value="advanced">Advanced/Professional experience</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="goals">Career Goals</label>
                  <textarea id="goals" placeholder="Tell us about your career goals"></textarea>
                </div>
                <button type="submit" className="apply-button">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq">
        <div className="bootcamp-container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Do I need prior coding experience?</h3>
              <p>For our Full-Stack and Data Science programs, basic familiarity with programming concepts is recommended but not required. We provide pre-work materials to bring everyone up to speed. For UX/UI Design, no coding experience is necessary.</p>
            </div>
            <div className="faq-item">
              <h3>What are the payment options?</h3>
              <p>We offer various payment plans including upfront payment, monthly installments, and Income Share Agreements where you pay only after you're employed. We also have scholarship opportunities for underrepresented groups in tech.</p>
            </div>
            <div className="faq-item">
              <h3>Will I receive a certificate?</h3>
              <p>Yes, upon successful completion of the program, you'll receive a certificate. However, employers are typically more interested in your portfolio and the skills you can demonstrate.</p>
            </div>
            <div className="faq-item">
              <h3>What computer/equipment do I need?</h3>
              <p>You'll need a reliable laptop (Mac, Windows, or Linux) with at least 8GB RAM and a modern processor. Specific requirements vary by program and will be provided upon acceptance.</p>
            </div>
            <div className="faq-item">
              <h3>What if I can't attend full-time?</h3>
              <p>We offer part-time evening and weekend options for most of our programs to accommodate working professionals. The curriculum is the same, but spread over a longer timeframe.</p>
            </div>
            <div className="faq-item">
              <h3>What career support is provided?</h3>
              <p>Our career services include resume reviews, portfolio development, interview preparation, LinkedIn optimization, networking opportunities, and connections to our employer partners. Support continues for 6 months after graduation.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="bootcamp-container">
          <div className="cta-content">
            <h2>Begin Your Tech Career Transformation Today</h2>
            <p>Join thousands of successful graduates who have changed their careers and lives through our programs.</p>
            <a href="#apply" className="cta-button">Apply Now</a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bootcamp-footer">
        <div className="bootcamp-container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">BYTE</span>
              <span className="logo-accent">ACADEMY</span>
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} Byte Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CodeBootcamp;
