import { Link } from 'react-router-dom';
import './App.css';

const offerings = [
    { icon: '🗺️', title: 'Global Career Mapping', desc: 'Personalised pathway analysis aligned with your strengths and international ambitions.' },
    { icon: '💼', title: 'Executive Profile Positioning', desc: 'Craft a LinkedIn, resume and personal brand that signals world-class readiness.' },
    { icon: '🎤', title: 'International Interview Mastery', desc: 'Rigorous preparation for cross-cultural interviews with global employers.' },
    { icon: '🧭', title: 'Global Market Intelligence', desc: 'Mentorship access and live intelligence on emerging international job markets.' },
];

function ServiceCareer() {
    return (
        <div className="sdp-page">
            <section className="sdp-hero">
                <div className="sdp-hero-bg-particles">
                    {[...Array(8)].map((_, i) => <span key={i} className={`sdp-particle sdp-p-${i}`} />)}
                </div>
                <div className="container sdp-hero-content">
                    <div className="sdp-num">02</div>
                    <h1 className="sdp-title">Global Career Services</h1>
                    <p className="sdp-subtitle">Centre of Excellence</p>
                    <Link to="/services" className="sdp-back">← Back to Services</Link>
                </div>
            </section>

            <section className="sdp-intro-section">
                <div className="container sdp-intro-inner">
                    <div className="sdp-intro-badge">Career Excellence</div>
                    <p className="sdp-intro-lead">
                        Our Centre of Excellence functions as a <strong>strategic bridge</strong> between academic promise and global opportunity.
                    </p>
                    <p className="sdp-intro-body">
                        We architect career pathways instead of merely facilitating job searches. Every engagement is executive-grade, outcome-oriented and globally informed.
                    </p>
                </div>
            </section>

            <section className="sdp-dark-section">
                <div className="container">
                    <div className="sdp-section-header">
                        <span className="sdp-tag">What We Offer</span>
                        <h2 className="sdp-section-title">Career Architecture at Its Finest</h2>
                        <p className="sdp-section-sub">Every element is designed to position you for international career success.</p>
                    </div>
                    <div className="sdp-highlights-grid">
                        {offerings.map((o, i) => (
                            <div className="sdp-highlight-card" key={i}>
                                <div className="sdp-hl-icon">{o.icon}</div>
                                <h3 className="sdp-hl-title">{o.title}</h3>
                                <p className="sdp-hl-desc">{o.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sdp-closing-band">
                <div className="container sdp-closing-inner">
                    <p className="sdp-closing-quote">"Careers are not found. <strong>They are architected.</strong>"</p>
                </div>
            </section>

            <section className="sdp-cta-section">
                <div className="container sdp-cta-inner">
                    <h2 className="sdp-cta-title">Architect Your Global Career</h2>
                    <p className="sdp-cta-sub">Take the first step toward a career that transcends geography and convention.</p>
                    <div className="sdp-cta-actions">
                        <Link to="/contact" className="sdp-cta-btn-primary">Get Started →</Link>
                        <Link to="/services" className="sdp-cta-btn-outline">All Services</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServiceCareer;
