import { Link } from 'react-router-dom';
import './App.css';

const highlights = [
    { icon: '🏛️', title: 'World-Class Campuses', desc: 'Sessions within prestigious international universities and innovation hubs.' },
    { icon: '🤝', title: 'Industry Interactions', desc: 'Private meetings with founders, CXOs and global innovation leaders.' },
    { icon: '⚡', title: 'Entrepreneurial Deep-Dives', desc: 'Live startup ecosystem tours, incubator visits and problem-solving challenges.' },
    { icon: '🏆', title: 'Leadership Simulations', desc: 'Executive networking events, innovation challenges and leadership assessments.' },
];

const whoFor = [
    { emoji: '🎓', label: 'Undergrad & Postgrad Students', desc: 'Students across disciplines who want to add global experience to their academic journey.' },
    { emoji: '🚀', label: 'Aspiring Founders & Innovators', desc: 'Those who want to experience startup ecosystems, innovation labs and real-world problem solving.' },
    { emoji: '🌐', label: 'Students Seeking Global Exposure', desc: 'Participants who want international projects, networks and experiences that stand out.' },
    { emoji: '💡', label: 'Seekers of Confidence & Edge', desc: 'Learners who want to grow personally and professionally beyond routine college life.' },
];

function ServiceImmersion() {
    return (
        <div className="sdp-page">
            {/* Hero */}
            <section className="sdp-hero">
                <div className="sdp-hero-bg-particles">
                    {[...Array(8)].map((_, i) => <span key={i} className={`sdp-particle sdp-p-${i}`} />)}
                </div>
                <div className="container sdp-hero-content">
                    <div className="sdp-num">01</div>
                    <h1 className="sdp-title">Curated Global Immersion Programs</h1>
                    <p className="sdp-subtitle">Experiential education — elevated.</p>
                    <Link to="/services" className="sdp-back">← Back to Services</Link>
                </div>
            </section>

            {/* Intro */}
            <section className="sdp-intro-section">
                <div className="container sdp-intro-inner">
                    <div className="sdp-intro-badge">Flagship Program</div>
                    <p className="sdp-intro-lead">
                        Our flagship global immersion programs are crafted for students seeking
                        <strong> rare exposure</strong> and refined learning environments.
                    </p>
                    <p className="sdp-intro-body">
                        Participants engage in structured academic and industry-led experiences
                        across international ecosystems — returning with confidence strengthened
                        and perspective permanently expanded.
                    </p>
                </div>
            </section>

            {/* Highlights */}
            <section className="sdp-dark-section">
                <div className="container">
                    <div className="sdp-section-header">
                        <span className="sdp-tag">What's Included</span>
                        <h2 className="sdp-section-title">The Program Experience</h2>
                        <p className="sdp-section-sub">Every element is intentionally designed to push you further.</p>
                    </div>
                    <div className="sdp-highlights-grid">
                        {highlights.map((h, i) => (
                            <div className="sdp-highlight-card" key={i}>
                                <div className="sdp-hl-icon">{h.icon}</div>
                                <h3 className="sdp-hl-title">{h.title}</h3>
                                <p className="sdp-hl-desc">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Is This For */}
            <section className="sdp-light-section">
                <div className="container">
                    <div className="sdp-section-header sdp-section-header--light">
                        <span className="sdp-tag sdp-tag--dark">Who Is This For?</span>
                        <h2 className="sdp-section-title sdp-section-title--dark">Built For Ambitious Students</h2>
                        <p className="sdp-section-sub sdp-section-sub--dark">This program is designed for students who think bigger and want more from their education.</p>
                    </div>
                    <div className="sdp-who-grid">
                        {whoFor.map((w, i) => (
                            <div className="sdp-who-card" key={i}>
                                <div className="sdp-who-emoji">{w.emoji}</div>
                                <h3 className="sdp-who-label">{w.label}</h3>
                                <p className="sdp-who-desc">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="sdp-cta-section">
                <div className="container sdp-cta-inner">
                    <h2 className="sdp-cta-title">Ready to Go Global?</h2>
                    <p className="sdp-cta-sub">If you want more than marks, lectures and routine college life — this program is built for you.</p>
                    <div className="sdp-cta-actions">
                        <Link to="/contact" className="sdp-cta-btn-primary">Apply Now →</Link>
                        <Link to="/services" className="sdp-cta-btn-outline">All Services</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServiceImmersion;
