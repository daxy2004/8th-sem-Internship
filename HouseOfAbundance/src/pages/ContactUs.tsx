import { useEffect } from 'react';
import Layout from '../components/Layout';
import '../App.css';

const ContactUs = () => {
    useEffect(() => {
        // Dynamically load HubSpot form script
        const script = document.createElement('script');
        script.src = 'https://js-na2.hsforms.net/forms/embed/244529498.js';
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup: remove script when component unmounts
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <Layout>
            {/* Get in Touch Section with Background */}
            <section className="contact-hero-section">
                <div className="contact-hero-content">
                    <div className="contact-hero-header">
                        <h2>Get in Touch</h2>
                        <p className="contact-hero-subtitle">
                            We'd love to hear from you. Whether you have questions, feedback, or want to get involved,
                            reach out to us and we'll respond promptly!
                        </p>
                    </div>

                    <div className="contact-form-card">
                        <h3>Contact Us</h3>

                        {/* HubSpot Embedded Form */}
                        <div
                            className="hs-form-frame hubspot-form-container"
                            data-region="na2"
                            data-form-id="a080b99d-b71b-46ae-92d3-218d1ddbe002"
                            data-portal-id="244529498"
                        ></div>
                    </div>
                </div>
            </section>

            {/* Details Section - White Background */}
            <section className="contact-details-section">
                <div className="contact-details-container">

                    {/* Our Location */}
                    <div className="location-section">
                        <h2 className="section-title">Our Location</h2>
                        <div className="location-content">
                            <div className="location-card">
                                <h3>India</h3>
                                <p>WeWork, 43, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</p>
                            </div>
                            <div className="map-wrapper">
                                <iframe
                                    src="https://maps.google.com/maps?q=WeWork,43,Residency+Rd,Shanthala+Nagar,Ashok+Nagar,Bengaluru,Karnataka+560025&output=embed"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Our Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Grid */}
                    <div className="contact-info-grid">
                        {/* Main Branch */}
                        <div className="info-detail-card">
                            <div className="info-icon-wrapper">
                                <span className="info-icon">📍</span>
                            </div>
                            <h3>Our Main Branch</h3>
                            <div className="info-text">
                                <p><strong>Address:</strong></p>
                                <p>WeWork, 43, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025</p>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="info-detail-card">
                            <div className="info-icon-wrapper">
                                <span className="info-icon">📞</span>
                            </div>
                            <h3>Contact Information</h3>
                            <div className="info-text">
                                <p><strong>Phone:</strong> +91 – 8660939587</p>
                                <p><strong>Email:</strong> info@thehouseofabundance.org</p>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="info-detail-card">
                            <div className="info-icon-wrapper">
                                <span className="info-icon">🕒</span>
                            </div>
                            <h3>Office Hours</h3>
                            <div className="info-text">
                                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                                <p><strong>Sunday:</strong> Closed</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default ContactUs;
