import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export interface CohortSection {
    title: string;
    items: string[];
}

export interface CohortStat {
    icon: string;
    value: string;
    label: string;
    pill?: string;
    isGold?: boolean;
}

export interface CohortPageProps {
    country: string;
    flag: string;
    heroImage: string;
    tagline: string;
    lead: string;
    body: string;
    sections: CohortSection[];
    closing?: string;
    stats?: CohortStat[];
    certUniversity?: string; // Name of the local partner university for certificate
}

const commonExperiences = [
    { icon: '🎓', title: 'University Sessions', desc: 'Academic sessions at globally ranked partner universities with faculty interactions and campus immersion' },
    { icon: '💡', title: 'Innovation Tracks', desc: 'Emerging technologies and startup innovation tracks exposing students to real-world cutting-edge ecosystems' },
    { icon: '🧠', title: 'Global Ideathon', desc: 'Multi-day Global Innovation Ideathon with mentoring, pitching, and cash prizes for top-performing teams' },
    { icon: '🏢', title: 'Industry Immersion', desc: 'Tech hub visits, CXO roundtables and founder interactions at leading companies in the country' },
    { icon: '🌏', title: 'Cultural Experiences', desc: 'Curated cultural visits, iconic landmarks, and local experiences to build cross-cultural intelligence' },
    { icon: '🎉', title: 'Grand Finale', desc: 'A memorable celebration event to mark the end of an extraordinary leadership journey' },
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

function CohortPage({ country, flag, heroImage, tagline, lead, body, sections, closing, stats, certUniversity }: CohortPageProps) {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="App">
            {/* ── Hero ── */}
            <section className="uae-hero">
                <img src={heroImage} alt={`${country} skyline`} className="uae-hero-bg" />
                <div className="uae-hero-overlay" />
                <div className="container uae-hero-content">
                    <div className="uae-badge">{flag} Upcoming Cohort</div>
                    <h1 className="uae-hero-title">{country} Global Immersion</h1>
                    <p className="uae-hero-subtitle">Future Leaders Global Immersion Program — {country} Edition</p>
                    <p className="uae-hero-desc">{tagline}</p>
                    <div className="uae-hero-cta">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdPGYe0rowOsQo-mlmC0fvkTadGhSWM3-eYboYPEhCeuDlc-Q/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-hero"
                            style={{ textDecoration: 'none' }}
                        >
                            Register Interest →
                        </a>
                        <Link to="/" className="uae-btn-outline" style={{ textDecoration: 'none' }}>← Back to Home</Link>
                    </div>
                </div>
            </section>

            {/* ── Stats / Key Details ── */}
            {stats && stats.length > 0 && (
                <section className="uae-stats-section">
                    <div className="uae-stats-grid" style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}>
                        {stats.map((stat, i) => (
                            <div className={`uae-stat-card ${stat.isGold ? 'uae-stat-card--gold' : ''}`} key={i}>
                                <span className="uae-stat-icon">{stat.icon}</span>
                                <div className="uae-stat-value">{stat.value}</div>
                                <div className="uae-stat-label">{stat.label}</div>
                                {stat.pill && <span className="uae-scholarship-pill">{stat.pill}</span>}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ── Why This Country ── */}
            <section className="uae-why-section cohort-why-section">
                <div className="container">
                    <div className="cohort-info-inner">
                        <div className="cohort-info-left">
                            <span className="uae-section-tag uae-section-tag--dark">Why {country}?</span>
                            <h2 className="uae-section-title uae-section-title--light" style={{ textAlign: 'left', marginTop: '1rem' }}>
                                {country} — A World-Class Destination
                            </h2>
                            <p className="uae-why-lead">{lead}</p>
                            {body && <p className="uae-why-body">{body}</p>}
                            {closing && (
                                <div className="uae-why-callout">
                                    <p>{closing}</p>
                                </div>
                            )}
                        </div>
                        <div className="cohort-info-right">
                            {sections.map((sec, i) => (
                                <div className="cohort-info-block cohort-info-block--dark" key={i}>
                                    <h3 className="cohort-info-block-title cohort-info-block-title--dark">{sec.title}</h3>
                                    <ul className="cohort-info-list">
                                        {sec.items.map((item, j) => (
                                            <li key={j} className="cohort-info-item cohort-info-item--dark">
                                                <span className="cohort-info-dot" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── What You'll Experience (Common) ── */}
            <section className="uae-experience-section">
                <div className="container">
                    <div className="uae-section-header">
                        <span className="uae-section-tag">The Experience</span>
                        <h2 className="uae-section-title">What You'll Live Through</h2>
                        <p className="uae-section-sub">Every day is designed to push boundaries, build connections and ignite ideas.</p>
                    </div>
                    <div className="uae-experience-grid">
                        {commonExperiences.map((exp, i) => (
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

            {/* ── All Inclusive (Common) ── */}
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

            {/* ── Certifications (Common) ── */}
            <section className="uae-certs-section">
                <div className="container">
                    <div className="uae-section-header">
                        <span className="uae-section-tag">Recognition</span>
                        <h2 className="uae-section-title">Certifications You'll Earn</h2>
                    </div>
                    <div className="uae-certs-row">
                        {certUniversity && (
                            <>
                                <div className="uae-cert-card">
                                    <div className="uae-cert-seal">📜</div>
                                    <div className="uae-cert-body">
                                        <div className="uae-cert-issuer">Partner University</div>
                                        <div className="uae-cert-name">Certificate of Participation</div>
                                        <div className="uae-cert-note">Issued by a globally recognised partner institution</div>
                                    </div>
                                </div>
                                <div className="uae-cert-divider">+</div>
                            </>
                        )}
                        <div className="uae-cert-card">
                            <div className="uae-cert-seal">🏅</div>
                            <div className="uae-cert-body">
                                <div className="uae-cert-issuer">GlobalXcelerate</div>
                                <div className="uae-cert-name">Certificate of Program Completion</div>
                                <div className="uae-cert-note">Verified proof of your immersive global leadership journey</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="uae-cta-section">
                <div className="container">
                    <div className="uae-section-header uae-section-header--light" style={{ marginBottom: '2.5rem' }}>
                        <span className="uae-section-tag uae-section-tag--dark">Coming Soon</span>
                        <h2 className="uae-section-title uae-section-title--light">Be First in Line for {country}</h2>
                        <p className="uae-section-sub uae-section-sub--light">
                            Register your interest now and be the first to know when the {country} cohort opens.
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
                            Register Interest →
                        </a>
                        <Link to="/" className="uae-back-link">← Back to Home</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CohortPage;
