import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
    const navigate = useNavigate();

    // Scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all sections and animated elements
        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="App">
            {/* Hero Section */}
            <section className="hero">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src="/hero-section.mp4" type="video/mp4" />
                </video>
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)', lineHeight: '1.2', marginBottom: '1rem', fontWeight: '800' }}>
                            Redefining Global Readiness
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontStyle: 'italic', color: 'var(--accent-gold)', opacity: 1 }}>
                            Through Structured, Strategic and Experiential Education.
                        </p>
                    </div>
                </div>
            </section>

            {/* The World Has Changed */}
            <section className="about-section about-section-dark">
                <div className="container">
                    <div className="about-section-content">
                        <div className="about-section-icon-circle about-icon-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </div>
                        <h2 className="about-section-title">The World Has Changed</h2>

                        <div className="about-change-grid">
                            <div className="about-change-card">
                                <div className="about-change-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                        <rect x="9" y="9" width="6" height="6"></rect>
                                        <line x1="9" y1="1" x2="9" y2="4"></line>
                                        <line x1="15" y1="1" x2="15" y2="4"></line>
                                        <line x1="9" y1="20" x2="9" y2="23"></line>
                                        <line x1="15" y1="20" x2="15" y2="23"></line>
                                        <line x1="20" y1="9" x2="23" y2="9"></line>
                                        <line x1="20" y1="14" x2="23" y2="14"></line>
                                        <line x1="1" y1="9" x2="4" y2="9"></line>
                                        <line x1="1" y1="14" x2="4" y2="14"></line>
                                    </svg>
                                </div>
                                <h3>AI is Reshaping Industries</h3>
                                <p>Artificial Intelligence is transforming every sector of the global economy.</p>
                            </div>

                            <div className="about-change-card">
                                <div className="about-change-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </div>
                                <h3>Borders Are Becoming Fluid</h3>
                                <p>Global boundaries are shifting, creating new opportunities and challenges.</p>
                            </div>

                            <div className="about-change-card">
                                <div className="about-change-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </div>
                                <h3>Careers Are No Longer Linear</h3>
                                <p>Professional paths now demand adaptability, agility, and global thinking.</p>
                            </div>

                            <div className="about-change-card">
                                <div className="about-change-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                </div>
                                <h3>Education Alone Isn't Enough</h3>
                                <p>Traditional education alone is no longer sufficient for global readiness.</p>
                            </div>

                            <div className="about-change-card">
                                <div className="about-change-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                </div>
                                <h3>Aspirations Have Evolved</h3>
                                <p>Students seek high-impact careers with global exposure and competitive compensation.</p>
                            </div>

                            <div className="about-change-card">
                                <div className="about-change-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path>
                                    </svg>
                                </div>
                                <h3>Preparing for Industry 5.0</h3>
                                <p>Institutions must now prepare students to become Industry 5.0-ready talent — blending technology, human intelligence, adaptability and global competence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="about-section about-section-light">
                <div className="container">
                    <div className="about-section-content">
                        <div className="about-section-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h2 className="about-section-title">Who We Are</h2>
                        <p className="about-section-text">
                            At GlobalXcelerate, we exist to build a new category of learner —{' '}
                            <strong>globally intelligent, technologically fluent, culturally adaptable and strategically prepared.</strong>
                        </p>
                        <p className="about-section-text" style={{ marginTop: '1rem' }}>
                            We are an <strong style={{ color: 'var(--accent-gold)' }}>integrated transformation ecosystem.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Future Global Cohorts Section */}
            <section className="future-cohorts-section">
                <div className="container">
                    <h2 className="future-title">Global Cohorts</h2>
                    <p className="future-subtitle">
                        Get ready for a world-class, one-of-a-kind experience.
                    </p>

                    <div className="future-grid">
                        <div className="future-card" style={{ backgroundImage: 'url(/UAE.jpg)', cursor: 'pointer' }} onClick={() => navigate('/uae-cohort')}>
                            <div className="future-overlay"><span className="future-name">UAE</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/Singapore.jpg)', cursor: 'pointer' }} onClick={() => navigate('/singapore-cohort')}>
                            <div className="future-overlay"><span className="future-name">Singapore</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/Taiwan.jpg)', cursor: 'pointer' }} onClick={() => navigate('/taiwan-cohort')}>
                            <div className="future-overlay"><span className="future-name">Taiwan</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/South%20korea.jpg)', cursor: 'pointer' }} onClick={() => navigate('/south-korea-cohort')}>
                            <div className="future-overlay"><span className="future-name">South Korea</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/Vietnam.jpg)', cursor: 'pointer' }} onClick={() => navigate('/vietnam-cohort')}>
                            <div className="future-overlay"><span className="future-name">Vietnam</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/Indonesia.png)', cursor: 'pointer' }} onClick={() => navigate('/indonesia-cohort')}>
                            <div className="future-overlay"><span className="future-name">Indonesia</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/USA.png)', cursor: 'pointer' }} onClick={() => navigate('/usa-cohort')}>
                            <div className="future-overlay"><span className="future-name">USA</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/Japan.jpg)', cursor: 'pointer' }} onClick={() => navigate('/japan-cohort')}>
                            <div className="future-overlay"><span className="future-name">Japan</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/Malaysia.jpg)', cursor: 'pointer' }} onClick={() => navigate('/malaysia-cohort')}>
                            <div className="future-overlay"><span className="future-name">Malaysia</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/England.jpg)', cursor: 'pointer' }} onClick={() => navigate('/england-cohort')}>
                            <div className="future-overlay"><span className="future-name">England</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/Scotland.jpg)', cursor: 'pointer' }} onClick={() => navigate('/scotland-cohort')}>
                            <div className="future-overlay"><span className="future-name">Scotland</span></div>
                        </div>
                        <div className="future-card" style={{ backgroundImage: 'url(/Australia.jpg)', cursor: 'pointer' }} onClick={() => navigate('/australia-cohort')}>
                            <div className="future-overlay"><span className="future-name">Australia</span></div>
                        </div>
                    </div>

                    <p className="future-tagline">Different countries. One global vision.</p>
                </div>
            </section >

            {/* Why GlobalXcelerate Section */}
            <section className="why-section">
                <div className="container">
                    <h2 className="why-title">Your future deserves global exposure</h2>
                    <div className="why-features">
                        <div className="why-feature-item">
                            <span className="why-icon">🌍</span>
                            <p>Learn in international environments that push you out of your comfort zone</p>
                        </div>
                        <div className="why-feature-item scroll-animate">
                            <span className="why-icon">🏫</span>
                            <p>Attend sessions at world-class universities &amp; innovation hubs</p>
                        </div>
                        <div className="why-feature-item scroll-animate">
                            <span className="why-icon">🚀</span>
                            <p>Understand how startups, tech &amp; global companies really work</p>
                        </div>
                        <div className="why-feature-item">
                            <span className="why-icon">🤝</span>
                            <p>Network with founders, CXOs &amp; global mentors</p>
                        </div>
                        <div className="why-feature-item">
                            <span className="why-icon">🏆</span>
                            <p>Compete in innovation challenges &amp; build standout profiles</p>
                        </div>
                        <div className="why-feature-item">
                            <span className="why-icon">📸</span>
                            <p>Travel, culture, nightlife &amp; Instagram-worthy moments included</p>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}

export default Home;
