import React from 'react';

function About() {
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
          About Us
        </h2>
        <p className="text-muted mt-3">Learn more about PokeShop and our mission.</p>
      </div>

      <div className="row g-4">
        {/* Main Content */}
        <div className="col-lg-8">
          {/* Our Story */}
          <div className="card border-0 shadow-sm mb-4" style={{ borderTop: '4px solid #FF0000' }}>
            <div className="card-body p-4">
              <h4 className="mb-3" style={{ color: '#FF0000', fontWeight: '700' }}>
                <i className="fas fa-store me-2"></i>Our Story
              </h4>
              <p className="text-muted mb-0">
                Welcome to <strong style={{ color: '#FF0000' }}>PokeShop</strong>, your trusted online shopping destination since 2020. 
                We started with a simple mission: to provide high-quality Pokémon products at affordable prices. 
                What began as a small passion project has grown into a community of trainers, collectors, and fans 
                who share our love for all things Pokémon.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="card border-0 shadow-sm mb-4" style={{ borderTop: '4px solid #FF0000' }}>
            <div className="card-body p-4">
              <h4 className="mb-3" style={{ color: '#FF0000', fontWeight: '700' }}>
                <i className="fas fa-bullseye me-2"></i>Our Mission
              </h4>
              <p className="text-muted mb-0">
                At PokeShop, we believe that shopping should be convenient, enjoyable, and accessible to every trainer. 
                Our mission is to curate the best Pokémon products — from trading cards to plushies, games to apparel — 
                and deliver them right to your doorstep with care and speed.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="card border-0 shadow-sm" style={{ borderTop: '4px solid #FF0000' }}>
            <div className="card-body p-4">
              <h4 className="mb-4" style={{ color: '#FF0000', fontWeight: '700' }}>
                <i className="fas fa-gift me-2"></i>What We Offer
              </h4>
              <div className="row g-3">
                {[
                  { icon: 'fa-boxes', title: 'Wide Product Range', desc: 'From booster packs to hoodies, we have it all.' },
                  { icon: 'fa-tag', title: 'Competitive Prices', desc: 'Great deals and regular discounts for trainers.' },
                  { icon: 'fa-truck', title: 'Fast Shipping', desc: 'Secure delivery right to your doorstep.' },
                  { icon: 'fa-undo', title: 'Easy Returns', desc: '30-day money-back guarantee, no questions asked.' },
                  { icon: 'fa-headset', title: '24/7 Support', desc: 'Our team is always here to help you.' }
                ].map((item, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex align-items-start p-3" style={{ 
                      background: '#FFF0F0', 
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 0, 0, 0.1)'
                    }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        background: '#FF0000',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'white',
                        marginRight: '1rem',
                        flexShrink: 0
                      }}>
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-bold">{item.title}</h6>
                        <p className="mb-0 text-muted small">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Quick Stats */}
          <div className="card border-0 shadow-sm mb-4" style={{ borderTop: '4px solid #FF0000' }}>
            <div className="card-body p-4 text-center">
              <h5 className="mb-4" style={{ color: '#FF0000', fontWeight: '700' }}>Quick Stats</h5>
              <div className="row g-3">
                <div className="col-6">
                  <div className="p-3" style={{ background: '#FFF0F0', borderRadius: '8px' }}>
                    <h3 className="mb-0" style={{ color: '#FF0000', fontWeight: '700' }}>500+</h3>
                    <p className="mb-0 text-muted small">Products</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3" style={{ background: '#FFF0F0', borderRadius: '8px' }}>
                    <h3 className="mb-0" style={{ color: '#FF0000', fontWeight: '700' }}>10K+</h3>
                    <p className="mb-0 text-muted small">Happy Trainers</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3" style={{ background: '#FFF0F0', borderRadius: '8px' }}>
                    <h3 className="mb-0" style={{ color: '#FF0000', fontWeight: '700' }}>4.9★</h3>
                    <p className="mb-0 text-muted small">Customer Rating</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3" style={{ background: '#FFF0F0', borderRadius: '8px' }}>
                    <h3 className="mb-0" style={{ color: '#FF0000', fontWeight: '700' }}>24/7</h3>
                    <p className="mb-0 text-muted small">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="card border-0 shadow-sm" style={{ borderTop: '4px solid #FF0000', background: '#FFF0F0' }}>
            <div className="card-body p-4 text-center">
              <h5 className="mb-3" style={{ color: '#FF0000', fontWeight: '700' }}>Have Questions?</h5>
              <p className="text-muted mb-4">Our team is ready to help you find the perfect Pokémon products.</p>
              <a href="/contact" className="btn w-100" style={{
                background: 'white',
                color: '#FF0000',
                border: '2px solid #FF0000',
                borderRadius: '25px',
                padding: '0.75rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.target.style.background = '#FF0000'; e.target.style.color = 'white'; }}
              onMouseLeave={(e) => { e.target.style.background = 'white'; e.target.style.color = '#FF0000'; }}
              >
                <i className="fas fa-envelope me-2"></i>Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;