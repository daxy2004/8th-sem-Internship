import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../App.css';

const Donate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-hero-content">
          <h1>Make a Difference Today</h1>
          <p className="donate-hero-subtitle">
            Your contribution directly supports programs that empower education, mental well-being,
            women's leadership, and community development.
          </p>
        </div>
      </section>

      {/* Why Your Donation Matters */}
      <section className="donate-section donate-why">
        <div className="donate-container">
          <h2>Why Your Donation Matters</h2>
          <p className="section-intro">
            At The House of Abundance Foundation, every contribution directly fuels our impact-driven programs.
            Your support ensures that lack of resources never limits someone's potential to learn, heal, lead, or thrive.
          </p>
        </div>
      </section>

      {/* Where Your Contribution Goes */}
      <section className="donate-section donate-programmes">
        <div className="donate-container">
          <h2>Where Your Contribution Goes</h2>
          <p className="section-subtitle">Our Four Pillars of Impact</p>

          <div className="programme-grid">
            <div className="programme-card">
              <div className="programme-icon">📚</div>
              <h3>Education & Learning</h3>
              <p className="programme-tagline">Nurturing Minds. Building Futures.</p>
              <p>Academic mentoring, career guidance, teacher training, and skill development for students.</p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">🧠</div>
              <h3>Mental Health</h3>
              <p className="programme-tagline">Care for the Mind. Strength for Life.</p>
              <p>Mental health awareness, emotional well-being workshops, and stress management programs.</p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">👩</div>
              <h3>Women Empowerment</h3>
              <p className="programme-tagline">Empowered Women. Stronger Communities.</p>
              <p>Leadership programs, health awareness, and mentoring for community changemakers.</p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">🏫</div>
              <h3>School Partnerships</h3>
              <p className="programme-tagline">Collaborating for Sustainable Impact.</p>
              <p>Wellness modules, student workshops, and teacher training in institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="donate-section donate-tax">
        <div className="donate-container">
          <h2>Tax Benefits (India)</h2>
          <div className="tax-content">
            <div className="tax-info-box">
              <h3>80G Tax Exemption</h3>
              <p>The House of Abundance Foundation qualifies for 80G tax exemptions.</p>
            </div>
            <div className="tax-benefits">
              <h3>Benefits for Donors:</h3>
              <ul>
                <li><strong>50% tax deduction</strong> under Section 80G</li>
                <li>Official receipt and <strong>80G certificate</strong></li>
                <li><strong>Reduce your taxable income</strong> while creating impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Now */}
      <section className="donate-section donate-now">
        <div className="donate-container">
          <h2>Why Donate Now</h2>
          <p className="urgent-text">
            The challenges we address — educational gaps, mental health stigma, and gender inequality — require immediate action.
          </p>

          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-emoji">📖</div>
              <p>Help a student access quality mentoring</p>
            </div>
            <div className="impact-item">
              <div className="impact-emoji">🧠</div>
              <p>Support mental health awareness</p>
            </div>
            <div className="impact-item">
              <div className="impact-emoji">👩‍🏫</div>
              <p>Enable women to become leaders</p>
            </div>
            <div className="impact-item">
              <div className="impact-emoji">🏫</div>
              <p>Transform school environments</p>
            </div>
          </div>

          <p className="ripple-text">Every donation creates lasting ripple effects.</p>
        </div>
      </section>

      {/* Current Campaign */}
      <section className="donate-section donate-campaign">
        <div className="donate-container">
          <h2>Current Focus Areas</h2>
          <div className="campaign-content">
            <p className="campaign-intro">
              We are expanding our <strong>Mental Health Programs</strong> and
              <strong> Women Empowerment Initiatives</strong> in underserved communities.
            </p>

            <div className="campaign-goals">
              <h3>Your contribution will help us:</h3>
              <div className="goals-grid">
                <div className="goal-item">
                  <span className="goal-icon">🧠</span>
                  <p>Mental health sessions in 50+ schools</p>
                </div>
                <div className="goal-item">
                  <span className="goal-icon">👩‍🏫</span>
                  <p>Train 100+ women health educators</p>
                </div>
                <div className="goal-item">
                  <span className="goal-icon">📚</span>
                  <p>Academic mentoring for 500+ students</p>
                </div>
                <div className="goal-item">
                  <span className="goal-icon">🎓</span>
                  <p>Support 200+ teachers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="donate-section donate-cta">
        <div className="donate-container">
          <h2>Make a Contribution</h2>
          <p className="cta-text">
            Support a specific program or explore corporate/CSR partnerships with us.
          </p>
          <p className="cta-emphasis">
            Every contribution brings someone closer to education, healing, and opportunity.
          </p>

          <div className="donate-buttons">
            <button className="primary-donate-button">Donate Today</button>
            <Link to="/contact-us" className="secondary-donate-button">Partner With Us</Link>
          </div>

          <p className="final-message">
            Join us in building an abundant future for all.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;