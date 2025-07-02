import React, { useState, useEffect } from 'react';
import './TechInnovationWebinar.css';

const TechInnovationWebinar = () => {
  const [glitchText, setGlitchText] = useState('TECH INNOVATION');
  const [matrixCode, setMatrixCode] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    techStack: '',
    experience: ''
  });

  useEffect(() => {
    // Glitch effect for title
    const glitchInterval = setInterval(() => {
      const glitchChars = ['TECH INNOVATION', 'T3CH 1NN0V4T10N', 'T£CH |NN0VAT|0N', 'TECH INNOVATION'];
      const randomIndex = Math.floor(Math.random() * glitchChars.length);
      setGlitchText(glitchChars[randomIndex]);
      
      setTimeout(() => {
        setGlitchText('TECH INNOVATION');
      }, 150);
    }, 4000);

    // Matrix code effect
    const generateMatrixCode = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const newMatrix = [];
      for (let i = 0; i < 20; i++) {
        newMatrix.push({
          id: i,
          char: chars[Math.floor(Math.random() * chars.length)],
          position: Math.random() * 100,
          speed: Math.random() * 3 + 1
        });
      }
      setMatrixCode(newMatrix);
    };

    generateMatrixCode();
    const matrixInterval = setInterval(generateMatrixCode, 2000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(matrixInterval);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tech innovation webinar registration:', formData);
  };

  return (
    <div className="tech-innovation-webinar">
      <div className="tech-innovation-webinar__matrix-bg">
        {matrixCode.map((item) => (
          <div 
            key={item.id}
            className="tech-innovation-webinar__matrix-char"
            style={{ 
              left: `${item.position}%`,
              animationDuration: `${item.speed}s`
            }}
          >
            {item.char}
          </div>
        ))}
      </div>

      <div className="tech-innovation-webinar__grid-overlay">
        <div className="tech-innovation-webinar__grid"></div>
      </div>

      <div className="tech-innovation-webinar__container">
        {/* Header */}
        <header className="tech-innovation-webinar__header">
          <div className="tech-innovation-webinar__header-content">
            <div className="tech-innovation-webinar__status-bar">
              <div className="tech-innovation-webinar__status-item">
                <span className="tech-innovation-webinar__status-dot"></span>
                <span>SYSTEM ONLINE</span>
              </div>
              <div className="tech-innovation-webinar__status-item">
                <span>2024.12.20</span>
              </div>
              <div className="tech-innovation-webinar__status-item">
                <span>WEBINAR.EXE</span>
              </div>
            </div>

            <h1 className="tech-innovation-webinar__title">
              <span className="tech-innovation-webinar__title-prefix">./</span>
              {glitchText}
              <span className="tech-innovation-webinar__cursor">_</span>
            </h1>

            <div className="tech-innovation-webinar__subtitle">
              <span className="tech-innovation-webinar__prompt">root@innovation:~$</span>
              <span className="tech-innovation-webinar__command">init_future_tech_leaders.sh</span>
            </div>

            <div className="tech-innovation-webinar__event-info">
              <div className="tech-innovation-webinar__info-block">
                <div className="tech-innovation-webinar__info-label">EVENT_TYPE:</div>
                <div className="tech-innovation-webinar__info-value">LIVE_WEBINAR</div>
              </div>
              <div className="tech-innovation-webinar__info-block">
                <div className="tech-innovation-webinar__info-label">DURATION:</div>
                <div className="tech-innovation-webinar__info-value">120_MINUTES</div>
              </div>
              <div className="tech-innovation-webinar__info-block">
                <div className="tech-innovation-webinar__info-label">ACCESS_LEVEL:</div>
                <div className="tech-innovation-webinar__info-value">AUTHENTICATED_USERS</div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="tech-innovation-webinar__main">
          <div className="tech-innovation-webinar__content-grid">
            {/* Left Column */}
            <div className="tech-innovation-webinar__left-column">
              {/* System Overview */}
              <section className="tech-innovation-webinar__section">
                <div className="tech-innovation-webinar__section-header">
                  <h2 className="tech-innovation-webinar__section-title">
                    <span className="tech-innovation-webinar__section-icon">▶</span>
                    SYSTEM_OVERVIEW.md
                  </h2>
                </div>
                
                <div className="tech-innovation-webinar__code-block">
                  <div className="tech-innovation-webinar__code-header">
                    <span>innovation_framework.py</span>
                    <span className="tech-innovation-webinar__code-status">ACTIVE</span>
                  </div>
                  <div className="tech-innovation-webinar__code-content">
                    <div className="tech-innovation-webinar__code-line">
                      <span className="tech-innovation-webinar__line-number">01</span>
                      <span className="tech-innovation-webinar__code-text">
                        <span className="tech-innovation-webinar__keyword">class</span> 
                        <span className="tech-innovation-webinar__class">TechLeadership</span>:
                      </span>
                    </div>
                    <div className="tech-innovation-webinar__code-line">
                      <span className="tech-innovation-webinar__line-number">02</span>
                      <span className="tech-innovation-webinar__code-text">
                        &nbsp;&nbsp;<span className="tech-innovation-webinar__keyword">def</span> 
                        <span className="tech-innovation-webinar__function">disrupt_industry</span>(self):
                      </span>
                    </div>
                    <div className="tech-innovation-webinar__code-line">
                      <span className="tech-innovation-webinar__line-number">03</span>
                      <span className="tech-innovation-webinar__code-text">
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tech-innovation-webinar__keyword">return</span> 
                        <span className="tech-innovation-webinar__string">"Revolutionary impact"</span>
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Program Modules */}
              <section className="tech-innovation-webinar__section">
                <div className="tech-innovation-webinar__section-header">
                  <h2 className="tech-innovation-webinar__section-title">
                    <span className="tech-innovation-webinar__section-icon">◆</span>
                    PROGRAM_MODULES.json
                  </h2>
                </div>
                
                <div className="tech-innovation-webinar__modules-grid">
                  <div className="tech-innovation-webinar__module">
                    <div className="tech-innovation-webinar__module-header">
                      <span className="tech-innovation-webinar__module-icon">🚀</span>
                      <span className="tech-innovation-webinar__module-name">AI_REVOLUTION</span>
                    </div>
                    <div className="tech-innovation-webinar__module-desc">
                      Next-gen AI implementation strategies
                    </div>
                    <div className="tech-innovation-webinar__module-status">STATUS: LOADING...</div>
                  </div>

                  <div className="tech-innovation-webinar__module">
                    <div className="tech-innovation-webinar__module-header">
                      <span className="tech-innovation-webinar__module-icon">🔗</span>
                      <span className="tech-innovation-webinar__module-name">BLOCKCHAIN_FUTURE</span>
                    </div>
                    <div className="tech-innovation-webinar__module-desc">
                      Decentralized system architecture
                    </div>
                    <div className="tech-innovation-webinar__module-status">STATUS: LOADING...</div>
                  </div>

                  <div className="tech-innovation-webinar__module">
                    <div className="tech-innovation-webinar__module-header">
                      <span className="tech-innovation-webinar__module-icon">☁️</span>
                      <span className="tech-innovation-webinar__module-name">CLOUD_QUANTUM</span>
                    </div>
                    <div className="tech-innovation-webinar__module-desc">
                      Quantum computing integration
                    </div>
                    <div className="tech-innovation-webinar__module-status">STATUS: LOADING...</div>
                  </div>

                  <div className="tech-innovation-webinar__module">
                    <div className="tech-innovation-webinar__module-header">
                      <span className="tech-innovation-webinar__module-icon">🔒</span>
                      <span className="tech-innovation-webinar__module-name">CYBERSEC_MATRIX</span>
                    </div>
                    <div className="tech-innovation-webinar__module-desc">
                      Advanced security protocols
                    </div>
                    <div className="tech-innovation-webinar__module-status">STATUS: LOADING...</div>
                  </div>
                </div>
              </section>

              {/* Speaker Profile */}
              <section className="tech-innovation-webinar__section">
                <div className="tech-innovation-webinar__section-header">
                  <h2 className="tech-innovation-webinar__section-title">
                    <span className="tech-innovation-webinar__section-icon">👤</span>
                    SPEAKER_PROFILE.exe
                  </h2>
                </div>
                
                <div className="tech-innovation-webinar__speaker">
                  <div className="tech-innovation-webinar__speaker-terminal">
                    <div className="tech-innovation-webinar__terminal-header">
                      <div className="tech-innovation-webinar__terminal-controls">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <span>speaker_data.sh</span>
                    </div>
                    <div className="tech-innovation-webinar__terminal-content">
                      <div>$ cat speaker_profile.txt</div>
                      <div><span className="tech-innovation-webinar__prompt">NAME:</span> Dr. Marcus Chen</div>
                      <div><span className="tech-innovation-webinar__prompt">ROLE:</span> Chief Innovation Officer @ TechCorp</div>
                      <div><span className="tech-innovation-webinar__prompt">EXP:</span> 15+ years in disruptive technology</div>
                      <div><span className="tech-innovation-webinar__prompt">PATENTS:</span> 47 revolutionary innovations</div>
                      <div><span className="tech-innovation-webinar__prompt">MISSION:</span> "Code the future, one breakthrough at a time"</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Registration Terminal */}
            <div className="tech-innovation-webinar__right-column">
              <div className="tech-innovation-webinar__registration">
                <div className="tech-innovation-webinar__terminal">
                  <div className="tech-innovation-webinar__terminal-header">
                    <div className="tech-innovation-webinar__terminal-controls">
                      <span className="tech-innovation-webinar__control-close"></span>
                      <span className="tech-innovation-webinar__control-minimize"></span>
                      <span className="tech-innovation-webinar__control-maximize"></span>
                    </div>
                    <span>registration_portal.exe</span>
                  </div>

                  <div className="tech-innovation-webinar__terminal-body">
                    <div className="tech-innovation-webinar__registration-header">
                      <div>$ ./init_registration.sh</div>
                      <div className="tech-innovation-webinar__loading">
                        Initializing secure connection...
                        <span className="tech-innovation-webinar__dots">...</span>
                      </div>
                      <div className="tech-innovation-webinar__success">✓ Connection established</div>
                      <div className="tech-innovation-webinar__access">ACCESS_LEVEL: INNOVATOR</div>
                    </div>

                    <form className="tech-innovation-webinar__form" onSubmit={handleSubmit}>
                      <div className="tech-innovation-webinar__form-group">
                        <label className="tech-innovation-webinar__label">
                          <span className="tech-innovation-webinar__prompt">user@system:~$</span> 
                          enter_full_name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="tech-innovation-webinar__input"
                          placeholder="Enter your full name..."
                          required
                        />
                      </div>

                      <div className="tech-innovation-webinar__form-group">
                        <label className="tech-innovation-webinar__label">
                          <span className="tech-innovation-webinar__prompt">user@system:~$</span> 
                          enter_email_address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="tech-innovation-webinar__input"
                          placeholder="your.email@domain.com"
                          required
                        />
                      </div>

                      <div className="tech-innovation-webinar__form-group">
                        <label className="tech-innovation-webinar__label">
                          <span className="tech-innovation-webinar__prompt">user@system:~$</span> 
                          select_company_name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="tech-innovation-webinar__input"
                          placeholder="Your organization..."
                          required
                        />
                      </div>

                      <div className="tech-innovation-webinar__form-group">
                        <label className="tech-innovation-webinar__label">
                          <span className="tech-innovation-webinar__prompt">user@system:~$</span> 
                          define_role_level
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="tech-innovation-webinar__input"
                          required
                        >
                          <option value="">--select-role--</option>
                          <option value="developer">Software Developer</option>
                          <option value="architect">System Architect</option>
                          <option value="lead">Tech Lead</option>
                          <option value="manager">Engineering Manager</option>
                          <option value="cto">CTO/Tech Executive</option>
                          <option value="founder">Founder/Entrepreneur</option>
                        </select>
                      </div>

                      <div className="tech-innovation-webinar__form-group">
                        <label className="tech-innovation-webinar__label">
                          <span className="tech-innovation-webinar__prompt">user@system:~$</span> 
                          list_tech_stack
                        </label>
                        <input
                          type="text"
                          name="techStack"
                          value={formData.techStack}
                          onChange={handleInputChange}
                          className="tech-innovation-webinar__input"
                          placeholder="React, Node.js, Python, AWS..."
                        />
                      </div>

                      <div className="tech-innovation-webinar__form-group">
                        <label className="tech-innovation-webinar__label">
                          <span className="tech-innovation-webinar__prompt">user@system:~$</span> 
                          set_experience_level
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="tech-innovation-webinar__input"
                          required
                        >
                          <option value="">--select-experience--</option>
                          <option value="junior">1-3 years</option>
                          <option value="mid">3-7 years</option>
                          <option value="senior">7-15 years</option>
                          <option value="expert">15+ years</option>
                        </select>
                      </div>

                      <button type="submit" className="tech-innovation-webinar__submit">
                        <span className="tech-innovation-webinar__submit-text">
                          {'>'}  EXECUTE_REGISTRATION.sh
                        </span>
                      </button>
                    </form>

                    <div className="tech-innovation-webinar__terminal-footer">
                      <div>Registration secured with 256-bit encryption</div>
                      <div>Limited access: 100 innovators only</div>
                      <div className="tech-innovation-webinar__status-live">
                        <span className="tech-innovation-webinar__live-dot"></span>
                        SYSTEM READY
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TechInnovationWebinar;
