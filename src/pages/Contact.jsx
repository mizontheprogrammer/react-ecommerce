import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 style={{ 
          color: '#FF0000', 
          fontWeight: '700',
          display: 'inline-block',
          padding: '0.5rem 1.5rem',
          border: '2px solid #FF0000',
          borderRadius: '50px',
          background: 'white'
        }}>
          Contact Us
        </h2>
        <p className="text-muted mt-3">Have questions? We'd love to hear from you.</p>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm" style={{ borderTop: '4px solid #FF0000' }}>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small text-muted">Your Name</label>
                    <input
                      type="text" name="name" className="form-control"
                      style={{ 
                        border: '2px solid #E5E7EB', 
                        borderRadius: '8px', 
                        padding: '0.75rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      onFocus={(e) => e.target.style.borderColor = '#FF0000'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small text-muted">Email Address</label>
                    <input
                      type="email" name="email" className="form-control"
                      style={{ 
                        border: '2px solid #E5E7EB', 
                        borderRadius: '8px', 
                        padding: '0.75rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      onFocus={(e) => e.target.style.borderColor = '#FF0000'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small text-muted">Subject</label>
                    <select
                      name="subject" className="form-control"
                      style={{ 
                        border: '2px solid #E5E7EB', 
                        borderRadius: '8px', 
                        padding: '0.75rem',
                        transition: 'border-color 0.3s ease'
                      }}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      onFocus={(e) => e.target.style.borderColor = '#FF0000'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Related</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label small text-muted">Message</label>
                    <textarea
                      name="message" className="form-control" rows="5"
                      style={{ 
                        border: '2px solid #E5E7EB', 
                        borderRadius: '8px', 
                        padding: '0.75rem',
                        resize: 'vertical',
                        transition: 'border-color 0.3s ease'
                      }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      onFocus={(e) => e.target.style.borderColor = '#FF0000'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn w-100 mt-4"
                  style={{
                    background: 'white',
                    color: '#FF0000',
                    border: '2px solid #FF0000',
                    borderRadius: '25px',
                    padding: '0.85rem',
                    fontWeight: '600',
                    fontSize: '1.05rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.target.style.background = '#FF0000'; e.target.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.target.style.background = 'white'; e.target.style.color = '#FF0000'; }}
                >
                  <i className="fas fa-paper-plane me-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm" style={{ borderTop: '4px solid #FF0000' }}>
            <div className="card-body p-4">
              <h4 className="mb-4" style={{ color: '#FF0000', fontWeight: '700' }}>Get in Touch</h4>
              
              <div className="mb-4 pb-3 border-bottom">
                <div className="d-flex align-items-start">
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: '#FFF0F0',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#FF0000',
                    marginRight: '1rem'
                  }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">Address</h6>
                    <p className="mb-0 text-muted">123 Shopping Street, City, Country, 12345</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4 pb-3 border-bottom">
                <div className="d-flex align-items-start">
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: '#FFF0F0',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#FF0000',
                    marginRight: '1rem'
                  }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">Phone</h6>
                    <p className="mb-0 text-muted">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex align-items-start">
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: '#FFF0F0',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#FF0000',
                    marginRight: '1rem'
                  }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">Email</h6>
                    <p className="mb-0 text-muted">info@shopnest.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-4 pt-3 border-top">
                <p className="text-muted small mb-3">Follow us:</p>
                <div className="d-flex gap-3">
                  {['facebook-f', 'twitter', 'instagram', 'tiktok'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="text-decoration-none" 
                      style={{ 
                        width: '36px', 
                        height: '36px', 
                        borderRadius: '50%', 
                        background: '#FFF0F0',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#FF0000',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FF0000';
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#FFF0F0';
                        e.currentTarget.style.color = '#FF0000';
                      }}
                    >
                      <i className={`fab fa-${social}`} style={{ fontSize: '0.9rem' }}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;