import { Link } from 'react-router-dom';
import './App.css';

const pathways = [
    { icon: '🌐', title: 'Global Employer Connect', desc: 'Access to curated international employer ecosystems across industries and geographies.' },
    { icon: '📋', title: 'Strategic Placement Guidance', desc: 'Step-by-step advisory to navigate international recruitment landscapes with confidence.' },
    { icon: '✈️', title: 'Cross-Border Career Advisory', desc: 'Guidance on visa pathways, work permits, and global employment readiness.' },
    { icon: '🛠️', title: 'Market-Entry Preparation', desc: 'Cultural onboarding, professional etiquette training, and market intelligence for your target country.' },
];

function ServicePlacement() {
    return (
        <div className="sdp-page">
            <section className="sdp-hero">
                <div className="sdp-hero-bg-particles">
                    {[...Array(8)].map((_, i) => <span key={i} className={`sdp-particle sdp-p-${i}`} />)}
                </div>
                <div className="container sdp-hero-content">
                    <div className="sdp-num">04</div>
                    <h1 className="sdp-title">Global Placement Assistance</h1>
                    <p className="sdp-subtitle">Expanding Horizons Beyond Geography</p>
                    <Link to="/services" className="sdp-back">← Back to Services</Link>
                </div>
            </section>

            <section className="sdp-intro-section">
                <div className="container sdp-intro-inner">
                    <div className="sdp-intro-badge">Global Placement</div>
                    <p className="sdp-intro-lead">
                        We create <strong>structured pathways</strong> toward international employment through curated global networks and advisory support.
                    </p>
                    <p className="sdp-intro-body">
                        Geography is no longer a barrier to opportunity — it is simply context. We help you expand your horizons and step confidently into international roles.
                    </p>
                </div>
            </section>

            <section className="sdp-dark-section">
                <div className="container">
                    <div className="sdp-section-header">
                        <span className="sdp-tag">Our Pathways</span>
                        <h2 className="sdp-section-title">Structured for International Success</h2>
                        <p className="sdp-section-sub">Every pathway is designed to open doors that others cannot see.</p>
                    </div>
                    <div className="sdp-highlights-grid">
                        {pathways.map((p, i) => (
                            <div className="sdp-highlight-card" key={i}>
                                <div className="sdp-hl-icon">{p.icon}</div>
                                <h3 className="sdp-hl-title">{p.title}</h3>
                                <p className="sdp-hl-desc">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sdp-closing-band">
                <div className="container sdp-closing-inner">
                    <p className="sdp-closing-quote">"We expand horizons <strong>beyond geography.</strong>"</p>
                </div>
            </section>

            <section className="sdp-cta-section">
                <div className="container sdp-cta-inner">
                    <h2 className="sdp-cta-title">Your International Career Awaits</h2>
                    <p className="sdp-cta-sub">Let us connect you with global employers and pave the path to your international future.</p>
                    <div className="sdp-cta-actions">
                        <Link to="/contact" className="sdp-cta-btn-primary">Connect Now →</Link>
                        <Link to="/services" className="sdp-cta-btn-outline">All Services</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicePlacement;
