import './App.css';

function About() {
    return (
        <div className="about-page-new">
            {/* Hero */}
            <section className="svc-hero">
                <div className="svc-hero-particles">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className={`svc-particle svc-particle-${i + 1}`} />
                    ))}
                </div>
                <div className="container svc-hero-inner">
                    <h1 className="svc-hero-title">About Us</h1>
                    <div className="svc-hero-divider" />
                </div>
            </section>



            {/* Our Approach */}
            <section className="about-section about-section-light">
                <div className="container">
                    <div className="about-section-content">
                        <div className="about-section-icon-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <h2 className="about-section-title">Our Approach</h2>
                        <div className="about-feature-box">
                            <p className="about-section-text">
                                We partner with international institutions, industry leaders,
                                innovation ecosystems, and global employers to ensure that
                                students don't just witness the world —{' '}
                                <strong>they are prepared to operate within it.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Promise */}
            <section className="about-section about-section-dark about-section-promise">
                <div className="container">
                    <div className="about-section-content">
                        <div className="about-section-icon-circle about-icon-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h2 className="about-section-title">Our Promise</h2>
                        <div className="about-promise-grid">
                            <div className="about-promise-item">
                                <div className="about-promise-number">01</div>
                                <p>Every program is <strong>intentionally designed.</strong></p>
                            </div>
                            <div className="about-promise-item">
                                <div className="about-promise-number">02</div>
                                <p>Every pathway is <strong>strategically aligned.</strong></p>
                            </div>
                            <div className="about-promise-item">
                                <div className="about-promise-number">03</div>
                                <p>Every experience builds <strong>measurable confidence.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
