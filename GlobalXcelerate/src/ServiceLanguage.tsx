import { Link } from 'react-router-dom';
import './App.css';

const capabilities = [
    { icon: '💬', title: 'Business Communication', desc: 'Master professional dialogue, negotiation and cross-cultural articulation.' },
    { icon: '🌏', title: 'Cultural Adaptability', desc: 'Develop the cultural fluency to thrive in any international environment.' },
    { icon: '🎙️', title: 'Professional Presence', desc: 'Build an international professional presence that commands respect globally.' },
];

const languages = ['Mandarin', 'Japanese', 'Spanish', 'French', 'Arabic', 'German'];

function ServiceLanguage() {
    return (
        <div className="sdp-page">
            <section className="sdp-hero">
                <div className="sdp-hero-bg-particles">
                    {[...Array(8)].map((_, i) => <span key={i} className={`sdp-particle sdp-p-${i}`} />)}
                </div>
                <div className="container sdp-hero-content">
                    <div className="sdp-num">03</div>
                    <h1 className="sdp-title">Foreign Language Capabilities</h1>
                    <p className="sdp-subtitle">The Language of Influence</p>
                    <Link to="/services" className="sdp-back">← Back to Services</Link>
                </div>
            </section>

            <section className="sdp-intro-section">
                <div className="container sdp-intro-inner">
                    <div className="sdp-intro-badge">Language & Culture</div>
                    <p className="sdp-intro-lead">
                        Global leadership demands <strong>cultural fluency</strong> — and language is its most powerful expression.
                    </p>
                    <p className="sdp-intro-body">
                        Our premium language programs develop business communication excellence and cross-cultural confidence, so you can lead, negotiate and inspire across borders.
                    </p>
                </div>
            </section>

            <section className="sdp-dark-section">
                <div className="container">
                    <div className="sdp-section-header">
                        <span className="sdp-tag">Core Capabilities</span>
                        <h2 className="sdp-section-title">Speak. Lead. Influence.</h2>
                        <p className="sdp-section-sub">Three pillars to build your global communication edge.</p>
                    </div>
                    <div className="sdp-highlights-grid sdp-highlights-grid--3">
                        {capabilities.map((c, i) => (
                            <div className="sdp-highlight-card" key={i}>
                                <div className="sdp-hl-icon">{c.icon}</div>
                                <h3 className="sdp-hl-title">{c.title}</h3>
                                <p className="sdp-hl-desc">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sdp-light-section">
                <div className="container">
                    <div className="sdp-section-header sdp-section-header--light">
                        <span className="sdp-tag sdp-tag--dark">Languages Offered</span>
                        <h2 className="sdp-section-title sdp-section-title--dark">Global Languages, Local Mastery</h2>
                    </div>
                    <div className="sdp-lang-chips">
                        {languages.map((lang, i) => (
                            <div className="sdp-lang-chip" key={i}>{lang}</div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sdp-closing-band">
                <div className="container sdp-closing-inner">
                    <p className="sdp-closing-quote">"Language signals <strong>global readiness.</strong>"</p>
                </div>
            </section>

            <section className="sdp-cta-section">
                <div className="container sdp-cta-inner">
                    <h2 className="sdp-cta-title">Start Speaking the World's Language</h2>
                    <p className="sdp-cta-sub">Open doors in boardrooms, campuses and cultures around the globe.</p>
                    <div className="sdp-cta-actions">
                        <Link to="/contact" className="sdp-cta-btn-primary">Enrol Now →</Link>
                        <Link to="/services" className="sdp-cta-btn-outline">All Services</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServiceLanguage;
