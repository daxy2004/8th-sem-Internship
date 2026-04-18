import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../App.css';

const WorkWithUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-content">
          <h1>Work With Us</h1>
          <p className="work-hero-subtitle">
            Building opportunities, agency and long-term change for women, youth and children from underserved communities.
          </p>
          <p className="work-hero-text">
            Whether you're a professional, a graduate, or an organisation — this is where your journey with us begins.
          </p>
        </div>
      </section>

      {/* Careers Section */}
      <section className="work-section work-careers">
        <div className="work-container">
          <h2>Careers</h2>
          <p className="section-intro">
            We look for people who are driven by purpose, not titles. People who can think critically, work independently,
            adapt fast and take ownership.
          </p>

          <div className="work-content-grid">
            <div className="work-content-card">
              <h3>What We Offer</h3>
              <ul className="work-offerings">
                <li>Work that has clear, measurable impact</li>
                <li>A collaborative and mission-focused environment</li>
                <li>Opportunities to lead projects, innovate and grow</li>
                <li>Field exposure and real community engagement</li>
                <li>A culture built on integrity, empathy and accountability</li>
              </ul>
            </div>

            <div className="work-content-card">
              <h3>Who We Hire</h3>
              <ul className="work-positions">
                <li>Programme managers and coordinators</li>
                <li>Trainers and facilitators (digital skills, soft skills, entrepreneurship, etc.)</li>
                <li>Researchers and monitoring & evaluation professionals</li>
                <li>Communications, design and outreach specialists</li>
                <li>Fundraising and partnerships professionals</li>
              </ul>
            </div>
          </div>

          <p className="work-cta-text">
            If you want to contribute your skills to meaningful social impact, we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* Internships Section */}
      <section className="work-section work-internships">
        <div className="work-container">
          <h2>Internships</h2>
          <p className="section-intro">
            We offer internships for students and young professionals who want hands-on experience in the development sector.
            Interns work directly on research, programme execution, content creation, field operations, fundraising, digital
            training, and more.
          </p>

          <div className="work-highlight-box">
            <p className="highlight-text">
              This isn't a "coffee-fetching" internship — you'll be doing real work with real responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="work-section work-volunteer">
        <div className="work-container">
          <h2>Volunteer With Us</h2>
          <p className="section-intro">
            If you want to contribute time, knowledge or expertise, you can support:
          </p>

          <div className="volunteer-grid">
            <div className="volunteer-item">
              <span className="volunteer-icon">👨‍🏫</span>
              <p>Mentoring students and youth</p>
            </div>
            <div className="volunteer-item">
              <span className="volunteer-icon">📚</span>
              <p>Training workshops</p>
            </div>
            <div className="volunteer-item">
              <span className="volunteer-icon">📝</span>
              <p>Curriculum development</p>
            </div>
            <div className="volunteer-item">
              <span className="volunteer-icon">🎉</span>
              <p>Community events</p>
            </div>
            <div className="volunteer-item">
              <span className="volunteer-icon">💻</span>
              <p>Digital skills sessions</p>
            </div>
            <div className="volunteer-item">
              <span className="volunteer-icon">🚀</span>
              <p>Entrepreneurship guidance</p>
            </div>
          </div>

          <p className="work-cta-text">
            Even a few hours a month can create real impact.
          </p>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="work-section work-partnerships">
        <div className="work-container">
          <h2>Partner With Us</h2>
          <p className="section-intro">
            We collaborate with schools, colleges, NGOs, CSR teams, government departments and private organisations
            that believe in building equitable futures.
          </p>

          <h3 className="subsection-title">Partnership Opportunities</h3>
          <div className="partnership-grid">
            <div className="partnership-item">
              <div className="partnership-icon">🤝</div>
              <h4>CSR Project Implementation</h4>
            </div>
            <div className="partnership-item">
              <div className="partnership-icon">🎯</div>
              <h4>Co-designed Programmes</h4>
              <p>Education, skills and women empowerment</p>
            </div>
            <div className="partnership-item">
              <div className="partnership-icon">🔬</div>
              <h4>Research Collaborations</h4>
            </div>
            <div className="partnership-item">
              <div className="partnership-icon">💡</div>
              <h4>Innovation Pilots</h4>
            </div>
            <div className="partnership-item">
              <div className="partnership-icon">🌍</div>
              <h4>Community Outreach</h4>
            </div>
          </div>

          <p className="work-cta-text">
            We value partners who bring clarity, commitment and a shared mission to uplift underserved communities.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="work-cta-section">
        <div className="work-container">
          <h2>Let's Build Impact Together</h2>
          <p className="cta-message">
            If you're interested in working with us — as a team member, intern, volunteer, or organisational partner — reach out.
            We're always open to people and institutions who want to create real, lasting change.
          </p>
          <Link to="/contact-us" className="work-cta-button">
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WorkWithUs;