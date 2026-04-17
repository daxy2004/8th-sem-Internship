import { Link } from 'react-router-dom';
import './App.css';

const highlights = [
    { icon: '📜', title: 'Formal MoU Partnerships', desc: 'Strategic agreements with leading international universities establishing long-term academic collaboration frameworks.' },
    { icon: '🔄', title: 'Student & Faculty Exchange', desc: 'Structured exchange programs enabling cross-border academic experiences for both students and faculty members.' },
    { icon: '🎓', title: 'Twinning Degree Pathways', desc: 'Co-designed degree programs and semester-abroad opportunities that count toward students\' home institution credentials.' },
    { icon: '🔬', title: 'Research & Innovation Clusters', desc: 'Collaborative research initiatives and joint innovation labs connecting institutions across global ecosystems.' },
    { icon: '💼', title: 'Executive Education', desc: 'Cross-institutional executive development programs designed for faculty, administrators, and senior academic leaders.' },
    { icon: '🌐', title: 'Cross-Border Consultancy', desc: 'International consultancy networks enabling institutions to share expertise, resources, and best practices globally.' },
];

const whoFor = [
    { emoji: '🏛️', label: 'Universities & Institutions', desc: 'Academic institutions seeking to build formal global partnerships and expand their international presence.' },
    { emoji: '👨‍🏫', label: 'Faculty & Researchers', desc: 'Academics looking for international collaboration opportunities, visiting professorships, and joint research programs.' },
    { emoji: '🎓', label: 'Students Seeking Global Pathways', desc: 'Students who want access to twinning degrees, semester-abroad programs, and internationally recognised credentials.' },
    { emoji: '🤝', label: 'Institutional Leaders', desc: 'Vice-Chancellors, Deans and academic administrators who want to position their institutions on the global stage.' },
];

function ServiceAlliances() {
    return (
        <div className="sdp-page">
            {/* Hero */}
            <section className="sdp-hero">
                <div className="sdp-hero-bg-particles">
                    {[...Array(8)].map((_, i) => <span key={i} className={`sdp-particle sdp-p-${i}`} />)}
                </div>
                <div className="container sdp-hero-content">
                    <div className="sdp-num">01</div>
                    <h1 className="sdp-title">Global Academic Alliances</h1>
                    <p className="sdp-subtitle">Strategic partnerships. Global reach. Lasting academic transformation.</p>
                    <Link to="/services" className="sdp-back">← Back to Services</Link>
                </div>
            </section>

            {/* Intro */}
            <section className="sdp-intro-section">
                <div className="container sdp-intro-inner">
                    <div className="sdp-intro-badge">Alliances Program</div>
                    <p className="sdp-intro-lead">
                        Strategic global partnerships through <strong>formal MoUs with leading international universities</strong> — building bridges that transform institutions and open doors for students and faculty alike.
                    </p>
                    <p className="sdp-intro-body">
                        We enable student and faculty exchange programs, visiting professorships, twinning degree pathways, semester-abroad opportunities, and collaborative research & innovation clusters alongside executive education and cross-border consultancy networks.
                    </p>
                </div>
            </section>

            {/* Highlights */}
            <section className="sdp-dark-section">
                <div className="container">
                    <div className="sdp-section-header">
                        <span className="sdp-tag">What We Enable</span>
                        <h2 className="sdp-section-title">Alliance Program Pillars</h2>
                        <p className="sdp-section-sub">Every partnership is strategically designed for long-term institutional and student impact.</p>
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
                        <h2 className="sdp-section-title sdp-section-title--dark">Built For Institutions & Individuals With Global Ambition</h2>
                        <p className="sdp-section-sub sdp-section-sub--dark">Our alliance programs serve everyone — from students seeking international pathways to institutions building their global reputation.</p>
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
                    <h2 className="sdp-cta-title">Ready to Build a Global Alliance?</h2>
                    <p className="sdp-cta-sub">Whether you're an institution seeking MoU partnerships or a student looking for international pathways — we're here to open doors.</p>
                    <div className="sdp-cta-actions">
                        <Link to="/contact" className="sdp-cta-btn-primary">Get in Touch →</Link>
                        <Link to="/services" className="sdp-cta-btn-outline">All Services</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServiceAlliances;
