import { useState } from "react";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | YourDMC" },
    { name: "description", content: "Get in touch with our destination management team. We're here to help plan your next unforgettable event." },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend/email service)
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container text-center">
          <h1>Contact Us</h1>
          <p className="lead">Let's start planning your next extraordinary experience</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Information */}
            <div>
              <h2>Get in Touch</h2>
              <p style={{ marginBottom: 'var(--spacing-xl)' }}>
                Whether you're planning a corporate event, incentive trip, or luxury travel experience,
                our team is here to help bring your vision to life.
              </p>

              <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                      📍 Address
                    </strong>
                    <p style={{ color: 'var(--color-gray-dark)', margin: 0 }}>
                      123 Main Street<br />
                      Suite 400<br />
                      City, Country 12345
                    </p>
                  </div>

                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                      📞 Phone
                    </strong>
                    <p style={{ color: 'var(--color-gray-dark)', margin: 0 }}>
                      <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </p>
                  </div>

                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                      ✉️ Email
                    </strong>
                    <p style={{ color: 'var(--color-gray-dark)', margin: 0 }}>
                      <a href="mailto:info@yourdmc.com">info@yourdmc.com</a>
                    </p>
                  </div>

                  <div>
                    <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: 'var(--spacing-xs)' }}>
                      🕐 Hours
                    </strong>
                    <p style={{ color: 'var(--color-gray-dark)', margin: 0 }}>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      24/7 support for active events
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Follow Us</h3>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                  <a href="#" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>Facebook</a>
                  <a href="#" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>Instagram</a>
                  <a href="#" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
              <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Send Us a Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-gray-light)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-gray-light)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-gray-light)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="company" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-gray-light)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="eventType" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-gray-light)',
                      fontSize: '1rem',
                    }}
                  >
                    <option value="">Select event type...</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="incentive">Incentive Travel</option>
                    <option value="wedding">Wedding</option>
                    <option value="conference">Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="destination" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                    Preferred Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-gray-light)',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: 'var(--spacing-xs)', fontWeight: 600 }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-gray-light)',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
