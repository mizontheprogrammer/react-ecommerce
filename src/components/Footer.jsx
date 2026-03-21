import React from 'react';

function Footer() {
  return (
    <footer className="footer-pokemon mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 style={{ fontWeight: '700', color: '#FF0000' }}>PokeShop</h5>
            <p>Your one-stop destination for Pokémon products at amazing prices.</p>
            <div className="mt-3">
              <a href="#" className="me-3" style={{ color: '#FF0000' }}>
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="me-3" style={{ color: '#FF0000' }}>
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="me-3" style={{ color: '#FF0000' }}>
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" style={{ color: '#FF0000' }}>
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          
          <div className="col-md-4">
            <h5 style={{ fontWeight: '700', color: '#FF0000' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" style={{ color: '#374151' }}>
                  <i className="fas fa-chevron-right me-2" style={{ color: '#FF0000' }}></i> Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" style={{ color: '#374151' }}>
                  <i className="fas fa-chevron-right me-2" style={{ color: '#FF0000' }}></i> Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" style={{ color: '#374151' }}>
                  <i className="fas fa-chevron-right me-2" style={{ color: '#FF0000' }}></i> About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" style={{ color: '#374151' }}>
                  <i className="fas fa-chevron-right me-2" style={{ color: '#FF0000' }}></i> Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" style={{ color: '#374151' }}>
                  <i className="fas fa-chevron-right me-2" style={{ color: '#FF0000' }}></i> Policies
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5 style={{ fontWeight: '700', color: '#FF0000' }}>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2" style={{ color: '#FF0000' }}></i>
                6767 Yearing Street, City, Country
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-2" style={{ color: '#FF0000' }}></i>
                +63 (555) 123-4567
              </li>
              <li className="mb-3">
                <i className="fas fa-envelope me-2" style={{ color: '#FF0000' }}></i>
                info@pokeshop.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-4" style={{ borderTop: '2px solid #E5E7EB', paddingTop: '1rem' }}>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} PokeShop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;