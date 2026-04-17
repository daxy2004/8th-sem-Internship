import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function UaeCohort() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const experiences = [
        { icon: '🎓', title: 'University Sessions', desc: 'Academic sessions at Zayed University across both Dubai & Abu Dhabi campuses' },
        { icon: '💡', title: 'Innovation Tracks', desc: 'Deep-dives into emerging technologies and cutting-edge startup innovation ecosystems' },
        { icon: '🧠', title: 'Global Ideathon', desc: 'Six-day Global Innovation Ideathon with cash prizes up to ₹50,000 for top ideas' },
        { icon: '🏢', title: 'Industry Immersion', desc: 'Tech hub visits, CXO roundtables and founder interactions at leading UAE companies' },
        { icon: '🏜️', title: 'Cultural Experiences', desc: 'Desert safari, Burj Khalifa, Global Village and an exclusive Abu Dhabi city tour' },
        { icon: '🛥️', title: 'Grand Finale', desc: 'Celebrate your journey with a spectacular Dhow cruise or yacht party grand finale' },
    ];

    const inclusions = [
        { icon: '✈️', label: 'Flights' },
        { icon: '🛂', label: 'Visa' },
        { icon: '🏨', label: 'Stay' },
        { icon: '🍽️', label: 'Food' },
        { icon: '🚌', label: 'Local Travel' },
        { icon: '🎓', label: 'University' },
        { icon: '🎯', label: 'Activities' },
        { icon: '🗺️', label: 'Sightseeing' },
    ];



    return (
        <div className="App">
            {/* ── Hero ── */}
            <section className="uae-hero">
                <img
                    src="/UAE.jpg"
                    alt="UAE skyline"
                    className="uae-hero-bg"
                />
                <div className="uae-hero-overlay" />
                <div className="uae-hero-particles">
                    {[...Array(12)].map((_, i) => (
                        <span key={i} className={`uae-particle uae-particle-${i + 1}`} />
                    ))}
                </div>
                <div className="container uae-hero-content">
                    <div className="uae-badge">🇦🇪 Upcoming Cohort</div>
                    <h1 className="uae-hero-title">UAE Global Immersion</h1>
                    <p className="uae-hero-subtitle">Future Leaders Global Immersion Program — UAE Edition</p>
                    <p className="uae-hero-desc">An 8-day intensive leadership experience across Dubai &amp; Abu Dhabi, designed to transform tomorrow's leaders.</p>
                    <div className="uae-hero-cta">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdPGYe0rowOsQo-mlmC0fvkTadGhSWM3-eYboYPEhCeuDlc-Q/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-hero"
                            style={{ textDecoration: 'none' }}
                        >
                            Register Now →
                        </a>
                        <a href="/Global%20Immersion%20Program%20-%20UAE%20Edition.pdf" download className="uae-btn-outline">
                            Download Brochure
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Stats / Key Details ── */}
            <section className="uae-stats-section">
                <div className="uae-stats-grid">
                    <div className="uae-stat-card">
                        <span className="uae-stat-icon">📅</span>
                        <div className="uae-stat-value">29 Mar – 5 Apr</div>
                        <div className="uae-stat-label">Program Dates</div>
                    </div>

                    <div className="uae-stat-card">
                        <span className="uae-stat-icon">👥</span>
                        <div className="uae-stat-value">25 – 30</div>
                        <div className="uae-stat-label">Curated Participants</div>
                    </div>
                    <div className="uae-stat-card uae-stat-card--gold">
                        <span className="uae-stat-icon">💰</span>
                        <div className="uae-stat-value">₹1,80,000</div>
                        <div className="uae-stat-label">All Inclusive</div>
                        <span className="uae-scholarship-pill">Scholarships Available</span>
                    </div>
                </div>
            </section>

            {/* ── Why UAE ── */}
            <section className="uae-why-section">
                <div className="container">
                    <div className="uae-why-inner">
                        <span className="uae-section-tag uae-section-tag--dark">Why UAE?</span>
                        <h2 className="uae-section-title uae-section-title--light" style={{ textAlign: 'left', marginTop: '1rem' }}>
                            A Nation Built on Vision
                        </h2>
                        <p className="uae-why-lead">
                            The United Arab Emirates offers a rare blend of ambition, speed, innovation, and global
                            connectivity. The UAE is not just a destination — <strong>it is a case study in visionary nation-building.</strong>
                        </p>
                        <p className="uae-why-body">
                            The UAE sits at the crossroads of Asia, Europe, and Africa. It is one of the world's most
                            important logistics and aviation hubs.
                        </p>

                        <div className="uae-why-callout">
                            <p>For management, commerce, and engineering students, this is <strong>real-world globalization in action.</strong></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── What You'll Experience ── */}
            <section className="uae-experience-section">
                <div className="container">
                    <div className="uae-section-header">
                        <span className="uae-section-tag">The Experience</span>
                        <h2 className="uae-section-title">What You'll Live Through</h2>
                        <p className="uae-section-sub">Every day is designed to push boundaries, build connections and ignite ideas.</p>
                    </div>
                    <div className="uae-experience-grid">
                        {experiences.map((exp, i) => (
                            <div className="uae-exp-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="uae-exp-icon-wrap">
                                    <span className="uae-exp-icon">{exp.icon}</span>
                                </div>
                                <div className="uae-exp-body">
                                    <h3 className="uae-exp-title">{exp.title}</h3>
                                    <p className="uae-exp-desc">{exp.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── All Inclusive ── */}
            <section className="uae-inclusive-section">
                <div className="container">
                    <div className="uae-section-header uae-section-header--light">
                        <span className="uae-section-tag uae-section-tag--dark">All Inclusive</span>
                        <h2 className="uae-section-title uae-section-title--light">Everything Is Taken Care Of</h2>
                        <p className="uae-section-sub uae-section-sub--light">From the moment you board to your final farewell — we handle it all.</p>
                    </div>
                    <div className="uae-inclusions-grid">
                        {inclusions.map((item, i) => (
                            <div className="uae-inclusion-chip" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                                <span className="uae-inclusion-icon">{item.icon}</span>
                                <span className="uae-inclusion-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Certificates & Recognition ── */}
            <section className="uae-conquered-section" id="certifications">
                <div className="container">
                    <div className="uae-section-header">
                        <span className="uae-section-tag">Recognition</span>
                        <h2 className="uae-section-title">Certifications You'll Earn</h2>
                    </div>
                    {/* Official Certifications Row */}
                    <div className="uae-certs-row" style={{ marginBottom: '3rem' }}>
                        <div className="uae-cert-card">
                            <div className="uae-cert-seal">📜</div>
                            <div className="uae-cert-body">
                                <div className="uae-cert-name">Certificate of Participation</div>
                                <div className="uae-cert-note">Issued by a globally recognized UAE institution</div>
                            </div>
                        </div>
                        <div className="uae-cert-card">
                            <div className="uae-cert-seal">🏅</div>
                            <div className="uae-cert-body">
                                <div className="uae-cert-issuer">GlobalXcelerate</div>
                                <div className="uae-cert-name">Certificate of Program Completion</div>
                                <div className="uae-cert-note">Verified proof of your immersive leadership journey</div>
                            </div>
                        </div>
                    </div>

                    {/* Additional achievement cards - under Certifications You'll Earn */}
                    <div className="uae-certs-row" style={{ marginBottom: '5rem' }}>
                        <div className="uae-cert-card">
                            <div className="uae-cert-seal">🖥️</div>
                            <div className="uae-cert-body">
                                <div className="uae-cert-issuer">IT Industry</div>
                                <div className="uae-cert-name">Recognition of Completion Certificate</div>
                            </div>
                        </div>
                        <div className="uae-cert-card">
                            <div className="uae-cert-seal">🏆</div>
                            <div className="uae-cert-body">
                                <div className="uae-cert-issuer">Hackathon by Organizing Industry Body</div>
                                <div className="uae-cert-name">Certificate of Participation / Winners</div>
                            </div>
                        </div>
                    </div>

                    <div className="uae-section-header">
                        <span className="uae-section-tag">Participants Conquered</span>
                        <h2 className="uae-section-title">Recognition our students earned in previous cohort</h2>
                        <p className="uae-section-sub">Every participant leaves with recognised credentials that speak globally.</p>
                    </div>

                    {/* Image / PDF certificates grid */}
                    <div className="uae-certs-photo-grid">
                        {/* Odoo Certificate */}
                        <div className="uae-cert-photo-card">
                            <img src="/odoo-certificate .jpeg" alt="Certificate from Odoo" className="uae-cert-photo-img" />
                            <div className="uae-cert-photo-footer">
                                <span className="uae-cert-photo-org">Odoo</span>
                                <span className="uae-cert-photo-name">Certificate from Odoo for your students</span>
                            </div>
                        </div>

                        {/* Zayed University */}
                        <div className="uae-cert-photo-card">
                            <img src="/Certificate from Zayed University.jpeg" alt="Certificate from Zayed University" className="uae-cert-photo-img" />
                            <div className="uae-cert-photo-footer">
                                <span className="uae-cert-photo-org">Zayed University</span>
                                <span className="uae-cert-photo-name">Certificate from Zayed University</span>
                            </div>
                        </div>

                        {/* Hackathon Winners */}
                        <div className="uae-cert-photo-card">
                            <img src="/Certificate for Hackathon winners.jpeg" alt="Certificate for Hackathon winners" className="uae-cert-photo-img" />
                            <div className="uae-cert-photo-footer">
                                <span className="uae-cert-photo-org">Hackathon</span>
                                <span className="uae-cert-photo-name">Certificate for Hackathon Winners</span>
                            </div>
                        </div>

                        {/* GlobalXcelerate */}
                        <div className="uae-cert-photo-card">
                            <img src="/Certificate from GlobalXcelerate.jpeg" alt="Certificate from GlobalXcelerate" className="uae-cert-photo-img" />
                            <div className="uae-cert-photo-footer">
                                <span className="uae-cert-photo-org">GlobalXcelerate</span>
                                <span className="uae-cert-photo-name">Certificate from GlobalXcelerate</span>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* ── Previous Cohort Report ── */}

            <section className="uae-report-section">
                <div className="container">
                    <div className="uae-report-card">
                        <div className="uae-report-icon">📄</div>
                        <div className="uae-report-text">
                            <p className="uae-report-label">Previous Cohort Report</p>
                            <h3 className="uae-report-title">Young Leaders Global Immersion Program — UAE Edition</h3>
                        </div>
                        <a
                            href="/GlobalXcelerate JAN UAE 2026 .pdf"
                            download
                            className="uae-report-btn"
                            style={{ textDecoration: 'none' }}
                        >
                            Download Report →
                        </a>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}

            <section className="uae-cta-section">
                <div className="container">
                    <div className="uae-section-header uae-section-header--light" style={{ marginBottom: '2.5rem' }}>
                        <span className="uae-section-tag uae-section-tag--dark">Limited Seats</span>
                        <h2 className="uae-section-title uae-section-title--light">Ready to Transform Your Leadership?</h2>
                        <p className="uae-section-sub uae-section-sub--light">
                            Seats are limited — only 25–30 participants per cohort.<br />
                            Scholarships available for the first 10 enrollees.
                        </p>
                    </div>
                    <div className="uae-cta-actions">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdPGYe0rowOsQo-mlmC0fvkTadGhSWM3-eYboYPEhCeuDlc-Q/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-hero"
                            style={{ textDecoration: 'none' }}
                        >
                            Register Now →
                        </a>
                        <a
                            href="/Global%20Immersion%20Program%20-%20UAE%20Edition.pdf"
                            download
                            className="uae-btn-outline uae-btn-outline--light"
                            style={{ textDecoration: 'none' }}
                        >
                            Download Brochure
                        </a>
                        <Link to="/" className="uae-back-link">← Back to Home</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UaeCohort;
