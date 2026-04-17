import { Link } from 'react-router-dom';
import './App.css';

const advisory = [
    { icon: '📊', title: 'Strategic Profile Building', desc: 'Comprehensive analysis of your academic, extracurricular, and leadership profile to identify your strongest positioning.' },
    { icon: '🎯', title: 'University Mapping & Fit Analysis', desc: 'Rigorous research to find institutions that match your profile, goals, and financial reality.' },
    { icon: '✍️', title: 'Application Architecture', desc: 'SOPs, essays, resumes, portfolios and letters of recommendation crafted for maximum impact.' },
    { icon: '🎙️', title: 'Interview Preparation', desc: 'Targeted coaching for scholarship panels, faculty interviews and competitive selection rounds.' },
    { icon: '🔍', title: 'Ethical & Transparent Advisory', desc: 'No commission-driven bias. We recommend what is right for you — not what pays us most.' },
    { icon: '🌱', title: 'Post-Admission Readiness', desc: 'Cultural, academic and career preparation so you arrive abroad truly ready to succeed.' },
];

function ServiceStudyAbroad() {
    return (
        <div className="sdp-page">
            <section className="sdp-hero">
                <div className="sdp-hero-bg-particles">
                    {[...Array(8)].map((_, i) => <span key={i} className={`sdp-particle sdp-p-${i}`} />)}
                </div>
                <div className="container sdp-hero-content">
                    <div className="sdp-num">06</div>
                    <h1 className="sdp-title">Study Abroad</h1>
                    <p className="sdp-subtitle">Transparent & Strategic Pathways</p>
                    <Link to="/services" className="sdp-back">← Back to Services</Link>
                </div>
            </section>

            <section className="sdp-intro-section">
                <div className="container sdp-intro-inner">
                    <div className="sdp-intro-badge">Study Abroad</div>
                    <p className="sdp-intro-lead">
                        The education consulting space is often clouded by commission-driven advice. At GlobalXcelerate, our principle is simple:
                        <strong> Transparency. Integrity. Strategy.</strong>
                    </p>
                    <p className="sdp-intro-body">
                        We do not push universities. We position students. Our approach is built entirely around your long-term global success — not short-term institutional incentives.
                    </p>
                </div>
            </section>

            <section className="sdp-dark-section">
                <div className="container">
                    <div className="sdp-section-header">
                        <span className="sdp-tag">Our Advisory</span>
                        <h2 className="sdp-section-title">End-to-End Application Support</h2>
                        <p className="sdp-section-sub">From profile building to post-admission — we are with you every step of the way.</p>
                    </div>
                    <div className="sdp-highlights-grid sdp-highlights-grid--3">
                        {advisory.map((a, i) => (
                            <div className="sdp-highlight-card" key={i}>
                                <div className="sdp-hl-icon">{a.icon}</div>
                                <h3 className="sdp-hl-title">{a.title}</h3>
                                <p className="sdp-hl-desc">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sdp-light-section">
                <div className="container">
                    <div className="sdp-section-header sdp-section-header--light">
                        <span className="sdp-tag sdp-tag--dark">Our Commitment</span>
                        <h2 className="sdp-section-title sdp-section-title--dark">The GlobalXcelerate Difference</h2>
                    </div>
                    <div className="sdp-pillars-row">
                        <div className="sdp-pillar"><div className="sdp-pillar-word">Transparency</div><p>No hidden fees, commissions or conflicted advice.</p></div>
                        <div className="sdp-pillar-divider">✦</div>
                        <div className="sdp-pillar"><div className="sdp-pillar-word">Integrity</div><p>We only recommend what genuinely serves your future.</p></div>
                        <div className="sdp-pillar-divider">✦</div>
                        <div className="sdp-pillar"><div className="sdp-pillar-word">Strategy</div><p>Every decision is made with your long-term positioning in mind.</p></div>
                    </div>
                </div>
            </section>

            <section className="sdp-closing-band">
                <div className="container sdp-closing-inner">
                    <p className="sdp-closing-quote">"Beyond admission, we prepare students for <strong>long-term global positioning.</strong>"</p>
                </div>
            </section>

            <section className="sdp-cta-section">
                <div className="container sdp-cta-inner">
                    <h2 className="sdp-cta-title">Your Global University Journey Starts Here</h2>
                    <p className="sdp-cta-sub">We position students — not just process applications.</p>
                    <div className="sdp-cta-actions">
                        <Link to="/contact" className="sdp-cta-btn-primary">Begin Your Journey →</Link>
                        <Link to="/services" className="sdp-cta-btn-outline">All Services</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServiceStudyAbroad;
