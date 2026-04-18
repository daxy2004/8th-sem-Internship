import Layout from '../components/Layout';
import '../App.css';

const WhoWeAre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="who-hero">
        <div className="who-hero-content">
          <h1>Who We Are</h1>
          <p className="who-hero-subtitle">
            A women-led foundation rooted in the belief that education, healthcare, and emotional well-being
            are the strongest pillars for building resilient communities.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="who-section who-vision-mission">
        <div className="who-container">
          <h2>Our Vision & Mission</h2>

          <div className="vision-mission-grid">
            <div className="vision-mission-card">
              <h3>Vision</h3>
              <p>
                To build a society where education, mental well-being, and compassionate care enable
                individuals—especially women and children—to live confident, healthy, and purposeful lives.
              </p>
            </div>

            <div className="vision-mission-card">
              <h3>Mission</h3>
              <p>To create sustainable social impact by:</p>
              <ul className="mission-list">
                <li>Advancing quality education and mentorship that nurtures both knowledge and values</li>
                <li>Promoting mental health awareness and accessible healthcare initiatives rooted in empathy and science</li>
                <li>Empowering communities through women-led leadership, guidance, and inclusive programs</li>
                <li>Fostering environments where individuals feel supported, understood, and encouraged to thrive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="who-section who-leadership">
        <div className="who-container">
          <h2>Our Leadership</h2>
          <p className="section-intro">
            The Foundation draws its strength from two visionary women whose life's work reflects purpose,
            discipline, and service.
          </p>

          <div className="founders-grid">
            {/* Founder 1 */}
            <div className="founder-card">
              <div className="founder-image-container">
                <img
                  src="/Prof Shylaja N.png"
                  alt="Prof. Shylaja N"
                  className="founder-image"
                />
              </div>
              <div className="founder-info">
                <h3>Prof. Shylaja N</h3>
                <p className="founder-title">Trustee - Education & Women Empowerment</p>
                <p className="founder-bio">
                  An educator by passion and practice, Prof. Shylaja N brings over 25 years of teaching
                  experience across academic environments. Her journey has been defined by a deep commitment
                  to nurturing young minds, guiding students with empathy, and instilling values that extend
                  beyond classrooms. At The House of Abundance Foundation, she anchors educational initiatives,
                  curriculum thinking, and mentorship programs aimed at empowering learners with confidence
                  and clarity.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="founder-card">
              <div className="founder-image-container">
                <img
                  src="/Dr Shruthi Vasishta.png"
                  alt="Dr. Shruthi Vasishta"
                  className="founder-image"
                />
              </div>
              <div className="founder-info">
                <h3>Dr. Shruthi Vasishta</h3>
                <p className="founder-title">Executive Trustee - Healthcare Initiatives</p>
                <p className="founder-bio">
                  Dr. Shruthi Vasishta is a resident doctor with an MBBS and MD in Psychiatry, combining
                  clinical expertise with a strong commitment to community health. She serves as the
                  Executive Trustee – Healthcare Initiatives at The House of Abundance Foundation, leading
                  programs focused on mental health awareness, preventive care, and holistic well-being.
                  She is also the Director at Evershine English School, Bangalore, where she actively
                  contributes to shaping a balanced approach to education and student wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="who-section who-cta">
        <div className="who-container">
          <h2>Building an Abundant Future</h2>
          <p className="cta-message">
            Together, the founders of The House of Abundance Foundation envision a society where access to
            quality education, mental well-being, and ethical guidance is not a privilege—but a shared
            responsibility. Through structured programs and purpose-driven initiatives, the Foundation works
            to create spaces where individuals and communities can truly thrive.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;