import React from 'react';

function Header() {
  return (
    <header className="header-bg py-3" style={{ 
      background: 'white', 
      borderBottom: '2px solid #FF0000'
    }}>
      <div className="container">
        <div className="text-center">
          <div style={{ 
            display: 'inline-block',
            padding: '0.5rem 2rem',
            border: '2px solid #FF0000',
            borderRadius: '50px',
            background: 'white'
          }}>
            <h1 style={{ 
              color: '#FF0000', 
              fontWeight: '700', 
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              <i className="fas fa-shopping-bag"></i>
              PokeShop
            </h1>
          </div>
          <p style={{ 
            color: '#666', 
            margin: '0.5rem 0 0 0',
            fontSize: '0.85rem'
          }}>
            Pokémon Store
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;