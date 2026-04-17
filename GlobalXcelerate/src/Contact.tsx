import './App.css';

const locations = [
    {
        city: 'Dubai',
        country: 'UAE',
        flag: '🇦🇪',
        address: 'Meydan Grandstand, 6th Floor,\nMeydan Road, Nad Al Sheba,\nDubai, U.A.E.',
        email: 'info@globalXcelerate.ae',
        phone: null,
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5682830736!2d55.2892!3d25.1556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d40f1be!2sMeydan%20Grandstand!5e0!3m2!1sen!2sae!4v1',
        mapTitle: 'Dubai Office Location',
    },
    {
        city: 'Bengaluru',
        country: 'India',
        flag: '🇮🇳',
        address: 'Wework Galaxy43, Residency Rd,\nShanthala Nagar, Ashok Nagar,\nBengaluru, Karnataka 560025',
        email: 'info@globalXcelerate.ae',
        phone: '+91 8660939587',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9849!2d77.6077!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168390e7e82b%3A0x4c4ef65e042eb0c9!2sWeWork%20Galaxy!5e0!3m2!1sen!2sin!4v1',
        mapTitle: 'India Office Location',
    },
];

function Contact() {
    return (
        <div className="ct-page">

            {/* ── Hero ── */}
            <section className="svc-hero">
                <div className="svc-hero-particles">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className={`svc-particle svc-particle-${i + 1}`} />
                    ))}
                </div>
                <div className="container svc-hero-inner">
                    <span className="svc-hero-label">Get in Touch</span>
                    <h1 className="svc-hero-title">Let's Connect</h1>
                    <p className="svc-hero-subtitle"><strong style={{ color: '#c9a84c', fontWeight: 700 }}>We'd love to hear from you. Reach out to start your global journey.</strong></p>
                    <div className="svc-hero-divider" />
                </div>
            </section>

            {/* ── Intro strip ── */}
            <section className="ct-intro-strip">
                <div className="container ct-intro-inner">
                    <div className="ct-stat">
                        <span className="ct-stat-icon">🌍</span>
                        <span className="ct-stat-label">3 Continents</span>
                    </div>
                    <div className="ct-stat-divider" />
                    <div className="ct-stat">
                        <span className="ct-stat-icon">🏢</span>
                        <span className="ct-stat-label">2 Offices</span>
                    </div>
                    <div className="ct-stat-divider" />
                    <div className="ct-stat">
                        <span className="ct-stat-icon">⚡</span>
                        <span className="ct-stat-label">Fast Response</span>
                    </div>
                    <div className="ct-stat-divider" />
                    <div className="ct-stat">
                        <span className="ct-stat-icon">🤝</span>
                        <span className="ct-stat-label">Always Available</span>
                    </div>
                </div>
            </section>

            {/* ── Locations ── */}
            <section className="ct-locations-section">
                <div className="container">
                    {locations.map((loc, idx) => (
                        <div className="ct-location-card" key={idx}>
                            {/* Info panel */}
                            <div className="ct-info-panel">
                                <div className="ct-city-header">
                                    <span className="ct-flag">{loc.flag}</span>
                                    <div>
                                        <h2 className="ct-city-name">{loc.city}</h2>
                                        <span className="ct-country-tag">{loc.country}</span>
                                    </div>
                                </div>

                                <div className="ct-details">
                                    {/* Address */}
                                    <div className="ct-detail-row">
                                        <div className="ct-detail-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div className="ct-detail-body">
                                            <span className="ct-detail-label">Address</span>
                                            <p className="ct-detail-value">{loc.address.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="ct-detail-row">
                                        <div className="ct-detail-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div className="ct-detail-body">
                                            <span className="ct-detail-label">Email</span>
                                            <a href={`mailto:${loc.email}`} className="ct-detail-link">{loc.email}</a>
                                        </div>
                                    </div>

                                    {/* Phone (if present) */}
                                    {loc.phone && (
                                        <div className="ct-detail-row">
                                            <div className="ct-detail-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12.6 19.79 19.79 0 0 1 1.06 3.88 2 2 0 0 1 3 1.84h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                            </div>
                                            <div className="ct-detail-body">
                                                <span className="ct-detail-label">Phone</span>
                                                <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="ct-detail-link">{loc.phone}</a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Map panel */}
                            <div className="ct-map-panel">
                                <iframe
                                    src={loc.mapSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={loc.mapTitle}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="ct-cta-section">
                <div className="container ct-cta-inner">
                    <h2 className="ct-cta-title">Ready to Begin?</h2>
                    <p className="ct-cta-sub">Take the first step toward your global future today.</p>
                    <a href="mailto:info@globalXcelerate.ae" className="ct-cta-btn">Email Us →</a>
                </div>
            </section>
        </div>
    );
}

export default Contact;
