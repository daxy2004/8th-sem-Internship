import { Link } from 'react-router-dom';
import './App.css';

const services = [
    {
        number: '01',
        title: 'Global Academic Alliances',
        description: 'Strategic global partnerships through formal MoUs with leading international universities. We enable student and faculty exchange programs, visiting professorships, twinning degree pathways, semester-abroad opportunities, and collaborative research & innovation clusters alongside executive education and cross-border consultancy networks.',
        link: '/services/alliances',
        emoji: '🤝',
        tag: 'Alliances',
    },
    {
        number: '02',
        title: 'Curated Global Immersion Programs',
        description: 'Structured academic and industry-led experiences across international ecosystems. Students engage with prestigious campuses, innovation labs, and executive networks.',
        link: '/services/immersion',
        emoji: '🌍',
        tag: 'Flagship',
    },
    {
        number: '03',
        title: 'Global Career Services',
        description: 'A strategic bridge between academic promise and global opportunity. We architect career pathways with executive-grade positioning and international mentorship.',
        link: '/services/career',
        emoji: '🚀',
        tag: 'Career',
    },
    {
        number: '04',
        title: 'Foreign Language Capabilities',
        description: 'Premium language programs developing business communication excellence and cross-cultural confidence for global leadership.',
        link: '/services/language',
        emoji: '🗣️',
        tag: 'Language',
    },
    {
        number: '05',
        title: 'Global Placement Assistance',
        description: 'Structured pathways toward international employment through curated global networks and strategic advisory support.',
        link: '/services/placement',
        emoji: '🎯',
        tag: 'Placement',
    },
    {
        number: '06',
        title: 'New Age AI School',
        description: 'Preparing students to operate ahead of the curve with advanced AI literacy, automation frameworks, and strategic prompt engineering.',
        link: '/services/ai',
        emoji: '🤖',
        tag: 'AI',
    },
    {
        number: '07',
        title: 'Study Abroad — Strategic Pathways',
        description: 'Transparent, integrity-driven university advisory. We position students for long-term global success.',
        link: '/services/study-abroad',
        emoji: '🎓',
        tag: 'Study Abroad',
    },
];

function Services() {
    return (
        <div className="svc-page">
            {/* ── Hero ── */}
            <section className="svc-hero">
                <div className="svc-hero-particles">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className={`svc-particle svc-particle-${i + 1}`} />
                    ))}
                </div>
                <div className="container svc-hero-inner">
                    <span className="svc-hero-label">What We Offer</span>
                    <h1 className="svc-hero-title">Our Services</h1>
                    <p className="svc-hero-subtitle">
                        <strong style={{ color: '#c9a84c', fontWeight: 700 }}>Redefining Global Readiness through Structured, Strategic and Experiential Education.</strong>
                    </p>
                    <div className="svc-hero-divider" />
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section className="svc-grid-section">
                <div className="container">
                    <div className="svc-grid">
                        {services.map((svc) =>
                            svc.link ? (
                                <Link to={svc.link} key={svc.number} className="svc-card">
                                    <div className="svc-card-top">
                                        <span className="svc-card-num">{svc.number}</span>
                                        <span className="svc-card-tag">{svc.tag}</span>
                                    </div>
                                    <div className="svc-card-emoji">{svc.emoji}</div>
                                    <h3 className="svc-card-title">{svc.title}</h3>
                                    <p className="svc-card-desc">{svc.description}</p>
                                    <div className="svc-card-footer">
                                        <span className="svc-card-cta">
                                            Explore
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ) : (
                                <div key={svc.number} className="svc-card">
                                    <div className="svc-card-top">
                                        <span className="svc-card-num">{svc.number}</span>
                                        <span className="svc-card-tag">{svc.tag}</span>
                                    </div>
                                    <div className="svc-card-emoji">{svc.emoji}</div>
                                    <h3 className="svc-card-title">{svc.title}</h3>
                                    <p className="svc-card-desc">{svc.description}</p>
                                    <div className="svc-card-footer">
                                        <span className="svc-card-cta" style={{ opacity: 0.5, cursor: 'default' }}>
                                            Coming Soon
                                        </span>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="svc-cta-band">
                <div className="container svc-cta-inner">
                    <h2 className="svc-cta-title">Ready to Begin Your Global Journey?</h2>
                    <p className="svc-cta-sub">Join thousands of students transforming their futures with GlobalXcelerate.</p>
                    <Link to="/contact" className="svc-cta-btn">Get in Touch →</Link>
                </div>
            </section>
        </div>
    );
}

export default Services;
