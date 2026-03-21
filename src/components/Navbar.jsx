import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <>
      {/* Desktop Navigation (Hidden on Mobile) */}
      <nav className="desktop-nav" style={{ 
        background: 'white',
        padding: '1rem 0',
        boxShadow: '0 2px 4px rgba(255, 0, 0, 0.1)',
        borderBottom: '2px solid #FF0000',
        display: 'block'
      }}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-5">
            {/* Navigation Links */}
            <div className="d-flex gap-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-decoration-none fw-medium ${isActive ? 'text-danger' : 'text-dark'}`
                }
              >
                <i className="fas fa-home me-1"></i>Home
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `text-decoration-none fw-medium ${isActive ? 'text-danger' : 'text-dark'}`
                }
              >
                <i className="fas fa-boxes me-1"></i>Products
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-decoration-none fw-medium ${isActive ? 'text-danger' : 'text-dark'}`
                }
              >
                <i className="fas fa-info-circle me-1"></i>About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-decoration-none fw-medium ${isActive ? 'text-danger' : 'text-dark'}`
                }
              >
                <i className="fas fa-envelope me-1"></i>Contact
              </NavLink>
              <NavLink 
                to="/policies" 
                className={({ isActive }) => 
                  `text-decoration-none fw-medium ${isActive ? 'text-danger' : 'text-dark'}`
                }
              >
                <i className="fas fa-file-contract me-1"></i>Policy
              </NavLink>
            </div>

            {/* Red Vertical Line Divider */}
            <div style={{ 
              width: '2px', 
              height: '30px', 
              background: '#FF0000',
              margin: '0 1rem'
            }}></div>

            {/* Cart Icon */}
            <NavLink to="/cart" className="text-decoration-none position-relative" style={{ color: '#374151' }}>
              <i className="fas fa-shopping-cart fa-lg"></i>
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ 
                  background: '#FF0000', 
                  color: 'white',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.5rem',
                  fontWeight: 'bold'
                }}>
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Hidden on Desktop) */}
      <nav className="mobile-nav" style={{ 
        background: 'white',
        borderTop: '2px solid #FF0000',
        boxShadow: '0 -2px 10px rgba(255, 0, 0, 0.1)',
        padding: '0.5rem 0',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'none'
      }}>
        <div className="container">
          <ul className="d-flex justify-content-around align-items-center mb-0" style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-decoration-none text-center d-flex flex-column align-items-center ${isActive ? 'active' : ''}`
                }
                style={{ 
                  color: '#374151',
                  fontSize: '0.7rem',
                  padding: '5px'
                }}
              >
                <i className="fas fa-home" style={{ fontSize: '1.2rem', marginBottom: '2px' }}></i>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `text-decoration-none text-center d-flex flex-column align-items-center ${isActive ? 'active' : ''}`
                }
                style={{ 
                  color: '#374151',
                  fontSize: '0.7rem',
                  padding: '5px'
                }}
              >
                <i className="fas fa-boxes" style={{ fontSize: '1.2rem', marginBottom: '2px' }}></i>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cart" 
                className={({ isActive }) => 
                  `text-decoration-none text-center d-flex flex-column align-items-center position-relative ${isActive ? 'active' : ''}`
                }
                style={{ 
                  color: '#374151',
                  fontSize: '0.7rem',
                  padding: '5px'
                }}
              >
                <i className="fas fa-shopping-cart" style={{ fontSize: '1.2rem', marginBottom: '2px' }}></i>
                Cart
                {cartCount > 0 && (
                  <span className="position-absolute" style={{ 
                    top: '0',
                    right: '0',
                    background: '#FF0000', 
                    color: 'white',
                    fontSize: '0.65rem',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '50%',
                    fontWeight: 'bold',
                    minWidth: '16px'
                  }}>
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-decoration-none text-center d-flex flex-column align-items-center ${isActive ? 'active' : ''}`
                }
                style={{ 
                  color: '#374151',
                  fontSize: '0.7rem',
                  padding: '5px'
                }}
              >
                <i className="fas fa-info-circle" style={{ fontSize: '1.2rem', marginBottom: '2px' }}></i>
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-decoration-none text-center d-flex flex-column align-items-center ${isActive ? 'active' : ''}`
                }
                style={{ 
                  color: '#374151',
                  fontSize: '0.7rem',
                  padding: '5px'
                }}
              >
                <i className="fas fa-envelope" style={{ fontSize: '1.2rem', marginBottom: '2px' }}></i>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;