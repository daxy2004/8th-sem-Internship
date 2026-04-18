import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WhoWeAre from './pages/WhoWeAre';
import OurProgrammes from './pages/OurProgrammes';
import WorkWithUs from './pages/WorkWithUs';
import Donate from './pages/Donate';
import ContactUs from './pages/ContactUs';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            {/* Hero Section */}
            <section className="hero">
              <div className="hero-image-placeholder">
                <video
                  className="hero-video"
                  src="/hero_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="House of Abundance hero video"
                />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                  <h1>Empowering Women. Elevating Communities.</h1>
                  <p>
                    Building dignified futures through education, skilling, innovation, and equal opportunity.
                  </p>
                  <div className="hero-actions">
                    <Link to="/our-programmes" className="hero-secondary-button">Explore Programmes</Link>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="about">
              <p className="section-label">Who We Are</p>
              <p className="description">
                The House of Abundance Foundation is a non-profit organisation built on four pillars <span style={{fontWeight: 'bold', color: '#2d6a4f'}}>Education, Equality, Environment and Empowerment</span>. We work with children, youth and women from underserved communities to ensure that lack of money, exposure or opportunity never limits their potential.

                Through our Scholarship Programme, we support deserving students to complete their education with dignity. Our Skill Development Programmes equip young people and women with practical, market-ready skills  from digital and technical training to communication and workplace readiness  so they can secure meaningful livelihoods, not just jobs.

                We partner with schools through our School Transformation Programme to create safe, inclusive and future-ready learning spaces.
              </p>
            </section>

            {/* Stats Section */}
            <section className="stats">
              <div className="stat"><h3>3,000+</h3><p>Women Empowered</p></div>
              <div className="stat"><h3>200,000+</h3><p>College Students</p></div>
              <div className="stat"><h3>2,500+</h3><p>Entrepreneurs</p></div>
              <div className="stat"><h3>85%</h3><p>Placement Rate</p></div>
              <div className="stat"><h3>500,000+</h3><p>School Students</p></div>
              <div className="stat"><h3>8+</h3><p>Languages</p></div>
              <div className="stat"><h3>40,000+</h3><p>Teachers Trained</p></div>
            </section>

            {/* Partners Section */}
            <section className="partners">
              <p className="section-label">Collaborators</p>
              <h2>Our Partners</h2>
              <div className="partner-scroller" aria-label="Partner logos">
                <div className="partner-track">
                  <div className="partner-set">
                    <div className="partner-card">
                      <img src="/SuprMentr.jpeg" alt="SuprMentr" className="partner-image" />
                      <p className="partner-name">SuprMentr</p>
                    </div>
                    <div className="partner-card">
                      <img src="/Codezye Cyber.jpeg" alt="Codezye Cyber" className="partner-image" />
                      <p className="partner-name">Codezye Cyber</p>
                    </div>
                    <div className="partner-card">
                      <img src="/Tequed labs 1.png" alt="Tequed Labs" className="partner-image" />
                      <p className="partner-name">Tequed Labs</p>
                    </div>
                    <div className="partner-card">
                      <img src="/Globalxcelerate.jpeg" alt="GlobalXcelerate" className="partner-image" />
                      <p className="partner-name">GlobalXcelerate</p>
                    </div>
                    <div className="partner-card">
                      <img
                        src="/Talent Blitzkrieg consulting services.jpeg"
                        alt="Talent Blitzkrieg"
                        className="partner-image"
                      />
                      <p className="partner-name">Talent Blitzkrieg</p>
                    </div>
                  </div>
                  <div className="partner-set" aria-hidden="true">
                    <div className="partner-card">
                      <img src="/SuprMentr.jpeg" alt="" className="partner-image" />
                      <p className="partner-name">SuprMentr</p>
                    </div>
                    <div className="partner-card">
                      <img src="/Codezye Cyber.jpeg" alt="" className="partner-image" />
                      <p className="partner-name">Codezye Cyber</p>
                    </div>
                    <div className="partner-card">
                      <img src="/Tequed labs 1.png" alt="" className="partner-image" />
                      <p className="partner-name">Tequed Labs</p>
                    </div>
                    <div className="partner-card">
                      <img src="/Globalxcelerate.jpeg" alt="" className="partner-image" />
                      <p className="partner-name">GlobalXcelerate</p>
                    </div>
                    <div className="partner-card">
                      <img
                        src="/Talent Blitzkrieg consulting services.jpeg"
                        alt=""
                        className="partner-image"
                      />
                      <p className="partner-name">Talent Blitzkrieg</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
              <p className="section-label">Stories of Change</p>
              <h2>Testimonials</h2>
              <div className="testimonial-grid">
                <div className="testimonial-card">
                  <span className="testimonial-quote">❝</span>
                  <div className="testimonial-content">
                    <p>
                      The House of Abundance scholarship support gave me confidence when I almost had to pause my education.
                      Beyond financial help, the mentoring sessions helped me plan my career and stay focused.
                    </p>
                    <h4>Priya S.</h4>
                    <p className="testimonial-role">Scholarship Beneficiary</p>
                  </div>
                </div>
                <div className="testimonial-card">
                  <span className="testimonial-quote">❝</span>
                  <div className="testimonial-content">
                    <p>
                      Our students became more engaged and future-ready after the foundation's school transformation
                      and life-skills sessions. The team works with empathy, consistency, and strong follow-through.
                    </p>
                    <h4>Shalini R.</h4>
                    <p className="testimonial-role">School Partner Educator</p>
                  </div>
                </div>
                <div className="testimonial-card">
                  <span className="testimonial-quote">❝</span>
                  <div className="testimonial-content">
                    <p>
                      Through the women empowerment programme, I learned digital and communication skills that helped
                      me restart my livelihood. Today, I earn independently and support my family with dignity.
                    </p>
                    <h4>Reshma B.</h4>
                    <p className="testimonial-role">Women Empowerment Programme Participant</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Get Involved */}
            <section className="get-involved">
              <p className="section-label" style={{color:'var(--clr-emerald-light)'}}>Take Action</p>
              <h2>Get Involved</h2>
              <p className="get-involved-subtitle">Here's how you can get involved and make a change.</p>
              <div className="involvement-grid">
                <div className="involvement-card">
                  <div className="involvement-icon"><i className="fas fa-heart"></i></div>
                  <h3>Support Us</h3>
                  <p>Change starts with a single step. Support us in creating a change in People's Lives.</p>
                  <Link to="/donate" className="involvement-button">Donate</Link>
                </div>
                <div className="involvement-card">
                  <div className="involvement-icon"><i className="fas fa-handshake"></i></div>
                  <h3>Partner With Us</h3>
                  <p>Join hands with us to make a real difference.</p>
                  <Link to="/contact-us" className="involvement-button">Connect</Link>
                </div>
                <div className="involvement-card">
                  <div className="involvement-icon"><i className="fas fa-briefcase"></i></div>
                  <h3>Work With Us</h3>
                  <p>Be a part of the action. Join our team to make a difference from the ground up.</p>
                  <Link to="/work-with-us" className="involvement-button">Apply</Link>
                </div>
              </div>
            </section>

            {/* Connect with Us */}
            <section className="connect">
              <p className="section-label">Stay Connected</p>
              <h2>Connect with Us</h2>
              <p>Follow our journey and stay updated on our programmes.</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/the-house-of-abundance" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/the_houseofabundance/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCuSVclqbvOHV9VY4qijmygw" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </section>
          </Layout>
        } />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-programmes" element={<OurProgrammes />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App