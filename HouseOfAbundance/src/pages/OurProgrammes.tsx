import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../App.css';

const OurProgrammes = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="programmes-hero">
        <div className="programmes-hero-content">
          <h1>Our Programs</h1>
          <p className="programmes-hero-subtitle">
            At The House of Abundance Foundation, our programs are thoughtfully designed to support
            education, mental well-being, community health and women empowerment. Each initiative is
            rooted in professional expertise, compassion, and a long-term commitment to social impact.
          </p>
          <p className="programmes-hero-text">
            We focus on creating meaningful interventions that empower individuals to grow, heal, and thrive.
          </p>
        </div>
      </section>

      {/* Education & Learning Section */}
      <section id="education" className="programmes-section">
        <div className="programmes-container">
          <h2>Education & Learning Initiatives</h2>
          <p className="programmes-tagline">Nurturing Minds. Building Futures.</p>
          <p className="section-intro">
            Led by decades of teaching experience, our education-focused programs aim to support
            students at critical stages of learning and personal development.
          </p>

          <div className="programmes-content-card">
            <h3>Key Focus Areas</h3>
            <ul className="programmes-list">
              <li>Academic mentoring and guidance for school and college students</li>
              <li>Learning support programs for underprivileged children</li>
              <li>Teacher support and value-based education workshops</li>
              <li>Career awareness and foundational skill development</li>
            </ul>
          </div>

          <div className="programmes-impact-box">
            <p className="impact-label">Impact Goal</p>
            <p className="impact-text">
              To create confident learners equipped with knowledge, values, and direction for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Mental Health Section */}
      <section id="mental-health" className="programmes-section">
        <div className="programmes-container">
          <h2>Mental Health & Well-Being Programs</h2>
          <p className="programmes-tagline">Care for the Mind. Strength for Life.</p>
          <p className="section-intro">
            Our mental health initiatives are guided by qualified medical professionals and focus
            on awareness, early intervention, and emotional resilience.
          </p>

          <div className="programmes-content-card">
            <h3>Key Focus Areas</h3>
            <ul className="programmes-list">
              <li>Mental health awareness sessions for students and parents</li>
              <li>Emotional well-being workshops in schools and communities</li>
              <li>Stress management and resilience-building programs</li>
              <li>Preventive mental health education and referrals</li>
            </ul>
          </div>

          <div className="programmes-led-by">
            <p className="led-by-label">Led by</p>
            <p className="led-by-text">
              Medical professionals specializing in psychiatry and community healthcare.
            </p>
          </div>

          <div className="programmes-impact-box">
            <p className="impact-label">Impact Goal</p>
            <p className="impact-text">
              To normalize conversations around mental health and improve access to compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* Women & Community Empowerment Section */}
      <section id="women-empowerment" className="programmes-section">
        <div className="programmes-container">
          <h2>Women & Community Empowerment</h2>
          <p className="programmes-tagline">Empowered Women. Stronger Communities.</p>
          <p className="section-intro">
            As a women-led foundation, we strongly believe in lifting communities by supporting
            women as changemakers.
          </p>

          <div className="programmes-content-card">
            <h3>Key Focus Areas</h3>
            <ul className="programmes-list">
              <li>Leadership and self-development programs for women</li>
              <li>Health and awareness sessions for mothers and caregivers</li>
              <li>Community education initiatives driven by women leaders</li>
              <li>Guidance and mentoring for women in education and service roles</li>
            </ul>
          </div>

          <div className="programmes-impact-box">
            <p className="impact-label">Impact Goal</p>
            <p className="impact-text">
              To enable women to lead with confidence, knowledge, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* School & Institutional Partnerships Section */}
      <section id="partnerships" className="programmes-section">
        <div className="programmes-container">
          <h2>School & Institutional Partnerships</h2>
          <p className="programmes-tagline">Collaborating for Sustainable Impact.</p>
          <p className="section-intro">
            We partner with schools, educational institutions, and community organizations to
            deliver structured, measurable programs.
          </p>

          <div className="programmes-content-card">
            <h3>Partnership Offerings</h3>
            <ul className="programmes-list">
              <li>Mental health and wellness modules for schools</li>
              <li>Student development and life-skills workshops</li>
              <li>Teacher training and awareness sessions</li>
              <li>Long-term engagement programs tailored to institutional needs</li>
            </ul>
          </div>

          <div className="programmes-impact-box">
            <p className="impact-label">Impact Goal</p>
            <p className="impact-text">
              To embed holistic development into educational ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="programmes-section programmes-approach">
        <div className="programmes-container">
          <h2>Our Approach</h2>
          <p className="section-intro">
            How we work to create meaningful and lasting impact.
          </p>

          <div className="approach-grid">
            <div className="approach-item">
              <span className="approach-number">1</span>
              <p>Identify real needs through dialogue with institutions and communities</p>
            </div>
            <div className="approach-item">
              <span className="approach-number">2</span>
              <p>Design programs led by educators and healthcare professionals</p>
            </div>
            <div className="approach-item">
              <span className="approach-number">3</span>
              <p>Implement with empathy, structure, and accountability</p>
            </div>
            <div className="approach-item">
              <span className="approach-number">4</span>
              <p>Measure outcomes and refine for long-term impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="programmes-cta-section">
        <div className="programmes-container">
          <h2>Get Involved</h2>
          <p className="cta-message">
            Whether you are a school, institution, volunteer, or supporter, there are many ways
            to contribute to our mission.
          </p>

          <div className="cta-options-grid">
            <div className="cta-option-item">
              <span className="cta-option-icon">🤝</span>
              <p>Partner with us</p>
            </div>
            <div className="cta-option-item">
              <span className="cta-option-icon">💚</span>
              <p>Support our initiatives</p>
            </div>
            <div className="cta-option-item">
              <span className="cta-option-icon">🙋</span>
              <p>Volunteer your time or expertise</p>
            </div>
          </div>

          <p className="cta-closing">
            👉 Together, we can build a House of Abundance—for learning, health, and hope.
          </p>

          <Link to="/contact-us" className="programmes-cta-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default OurProgrammes;