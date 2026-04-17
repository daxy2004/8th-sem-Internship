import { Link } from 'react-router-dom';
import './App.css';

const modules = [
    { icon: '🧠', title: 'Advanced AI Literacy', desc: 'Understand how AI systems work — from large language models to computer vision and beyond.' },
    { icon: '⚙️', title: 'Automation Frameworks', desc: 'Build practical automation pipelines that save time and multiply your impact.' },
    { icon: '💬', title: 'Strategic Prompt Engineering', desc: 'Master the art and science of communicating with AI to generate high-quality outputs.' },
    { icon: '📈', title: 'AI-Driven Productivity', desc: 'Integrate AI tools into your daily workflows for measurable competitive advantage.' },
    { icon: '🔒', title: 'Responsible AI Governance', desc: 'Understand ethics, bias, safety and accountability in AI systems that shape the world.' },
    { icon: '🔭', title: 'Future of Work Intelligence', desc: 'Anticipate how industries are changing and position yourself to lead — not follow.' },
];

function ServiceAI() {
    return (
        <div className="sdp-page">
            <section className="sdp-hero">
                <div className="sdp-hero-bg-particles">
                    {[...Array(8)].map((_, i) => <span key={i} className={`sdp-particle sdp-p-${i}`} />)}
                </div>
                <div className="container sdp-hero-content">
                    <div className="sdp-num">05</div>
                    <h1 className="sdp-title">New Age AI School</h1>
                    <p className="sdp-subtitle">Intelligence for the Intelligent Era</p>
                    <Link to="/services" className="sdp-back">← Back to Services</Link>
                </div>
            </section>

            <section className="sdp-intro-section">
                <div className="container sdp-intro-inner">
                    <div className="sdp-intro-badge">AI & Future Tech</div>
                    <p className="sdp-intro-lead">
                        Artificial Intelligence is redefining leadership, productivity, and <strong>competitive advantage</strong> across every industry.
                    </p>
                    <p className="sdp-intro-body">
                        Our New Age AI School prepares students to operate ahead of the curve — not as passive observers of a technological shift, but as confident architects of the AI-powered future.
                    </p>
                </div>
            </section>

            <section className="sdp-dark-section">
                <div className="container">
                    <div className="sdp-section-header">
                        <span className="sdp-tag">Program Modules</span>
                        <h2 className="sdp-section-title">Six Pillars of AI Mastery</h2>
                        <p className="sdp-section-sub">Comprehensive curriculum designed for the leaders of tomorrow.</p>
                    </div>
                    <div className="sdp-highlights-grid sdp-highlights-grid--3">
                        {modules.map((m, i) => (
                            <div className="sdp-highlight-card" key={i}>
                                <div className="sdp-hl-icon">{m.icon}</div>
                                <h3 className="sdp-hl-title">{m.title}</h3>
                                <p className="sdp-hl-desc">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sdp-closing-band">
                <div className="container sdp-closing-inner">
                    <p className="sdp-closing-quote">"Preparing the next generation to <strong>lead with intelligence.</strong>"</p>
                </div>
            </section>

            <section className="sdp-cta-section">
                <div className="container sdp-cta-inner">
                    <h2 className="sdp-cta-title">Enter the Intelligent Era</h2>
                    <p className="sdp-cta-sub">Don't just adapt to AI — learn to lead with it.</p>
                    <div className="sdp-cta-actions">
                        <Link to="/contact" className="sdp-cta-btn-primary">Join the School →</Link>
                        <Link to="/services" className="sdp-cta-btn-outline">All Services</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServiceAI;
