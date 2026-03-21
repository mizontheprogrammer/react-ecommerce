import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const API_URL = 'http://localhost:5001';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <i className="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
        <h3 style={{ color: '#FF0000' }}>Your cart is empty</h3>
        <p className="text-muted">Add some Pokémon products to get started!</p>
        <Link to="/products" className="btn" style={{ 
          background: 'white',
          color: '#FF0000',
          border: '2px solid #FF0000',
          borderRadius: '25px',
          padding: '0.75rem 2rem',
          fontWeight: '600',
          marginTop: '1rem'
        }}>
          <i className="fas fa-boxes me-2"></i>Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4" style={{ color: '#FF0000', fontWeight: '700' }}>Shopping Cart</h2>

      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow-sm" style={{ border: '2px solid #FF0000' }}>
            <div className="card-body">
              {cart.map(item => {
                const imageUrl = item.image.startsWith('http')
                  ? item.image
                  : `${API_URL}${item.image}`;

                return (
                  <div key={item.id} className="d-flex align-items-center border-bottom py-3">
                    <img
                      src={imageUrl}
                      alt={item.name}
                      className="rounded me-3"
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'cover', 
                        border: '2px solid #FF0000' 
                      }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1" style={{ fontWeight: '600' }}>{item.name}</h6>
                      <p className="text-muted small mb-0">${item.price}</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <button 
                        className="btn btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ 
                          backgroundColor: '#FF0000', 
                          color: 'white',
                          border: '2px solid #FF0000',
                          width: '30px',
                          height: '30px',
                          padding: '0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <i className="fas fa-minus" style={{ fontSize: '0.75rem' }}></i>
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button 
                        className="btn btn-sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ 
                          backgroundColor: '#FF0000', 
                          color: 'white',
                          border: '2px solid #FF0000',
                          width: '30px',
                          height: '30px',
                          padding: '0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <i className="fas fa-plus" style={{ fontSize: '0.75rem' }}></i>
                      </button>
                    </div>

                    <button 
                      className="btn btn-sm ms-3"
                      onClick={() => removeFromCart(item.id)}
                      style={{ 
                        backgroundColor: 'white',
                        color: '#FF0000',
                        border: '2px solid #FF0000'
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <button 
            className="btn mt-3"
            onClick={clearCart}
            style={{ 
              backgroundColor: 'white',
              color: '#FF0000',
              border: '2px solid #FF0000',
              borderRadius: '25px',
              padding: '0.5rem 1.5rem'
            }}
          >
            <i className="fas fa-trash-alt me-2"></i>Clear Cart
          </button>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm" style={{ border: '2px solid #FF0000' }}>
            <div className="card-header text-white" style={{ backgroundColor: '#FF0000', borderBottom: '2px solid #000000' }}>
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Items:</span>
                <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="fw-bold">Total:</span>
                <span className="fw-bold" style={{ color: '#FF0000' }}>${getCartTotal().toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                className="btn w-100 mt-3"
                style={{
                  background: 'white',
                  color: '#FF0000',
                  border: '2px solid #FF0000',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FF0000';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#FF0000';
                }}
              >
                <i className="fas fa-credit-card me-2"></i>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;