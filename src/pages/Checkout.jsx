import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const API_URL = 'http://localhost:5001';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    payment: 'cod'
  });

  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);
  const [orderNumber, setOrderNumber] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      alert('Please complete all fields');
      return;
    }

    const orderNum = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderNumber(orderNum);
    setFinalTotal(total);
    clearCart();
    setSubmitted(true);
  };

  if (cart.length === 0 && !submitted) {
    navigate('/cart');
    return null;
  }

  if (submitted) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-sm" style={{ border: '2px solid #FF0000' }}>
              <div className="card-body text-center py-5">
                <div className="mb-4">
                  <i className="fas fa-check-circle fa-5x" style={{ color: '#FF0000' }}></i>
                </div>

                <h2 className="mb-3" style={{ color: '#FF0000', fontWeight: '700' }}>Order Confirmed!</h2>
                <p className="text-muted mb-4">Thank you, {form.name}. Your order has been placed.</p>

                <div className="alert" style={{ backgroundColor: '#FFF0F0', border: '2px solid #FF0000' }}>
                  <p className="mb-1"><strong>Order Number:</strong></p>
                  <p className="mb-0" style={{ color: '#FF0000', fontSize: '1.2rem', fontWeight: '700' }}>{orderNumber}</p>
                </div>

                <div className="card mt-4" style={{ backgroundColor: '#F8F9FA', border: '2px solid #E5E7EB' }}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Tax (12%):</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <strong style={{ color: '#FF0000' }}>Total Paid:</strong>
                      <strong style={{ color: '#FF0000' }}>${finalTotal.toFixed(2)}</strong>
                    </div>
                  </div>
                </div>

                <div className="card mt-4 text-start" style={{ border: '2px solid #FF0000' }}>
                  <div className="card-header" style={{ backgroundColor: '#FF0000', color: 'white', borderBottom: '2px solid #000000' }}>
                    <h6 className="mb-0">Shipping Information</h6>
                  </div>
                  <div className="card-body">
                    <p className="mb-1"><strong>Name:</strong> {form.name}</p>
                    <p className="mb-1"><strong>Email:</strong> {form.email}</p>
                    <p className="mb-1"><strong>Address:</strong> {form.address}</p>
                    <p className="mb-1"><strong>Phone:</strong> {form.phone}</p>
                    <p className="mb-0"><strong>Payment:</strong> {form.payment === 'cod' ? 'Cash on Delivery' : form.payment === 'gcash' ? 'GCash' : 'Credit Card'}</p>
                  </div>
                </div>

                <div className="d-grid gap-2 mt-4">
                  <button
                    className="btn"
                    onClick={() => navigate('/products')}
                    style={{
                      background: 'white',
                      color: '#FF0000',
                      border: '2px solid #FF0000',
                      borderRadius: '25px',
                      padding: '0.75rem',
                      fontWeight: '600'
                    }}
                  >
                    <i className="fas fa-boxes me-2"></i>Continue Shopping
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => navigate('/')}
                  >
                    <i className="fas fa-home me-2"></i>Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4" style={{ color: '#FF0000', fontWeight: '700' }}>Checkout</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card shadow-sm" style={{ border: '2px solid #FF0000' }}>
            <div className="card-header" style={{ backgroundColor: '#FF0000', color: 'white', borderBottom: '2px solid #000000' }}>
              <h5 className="mb-0">Customer Information</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    style={{
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      padding: '0.75rem'
                    }}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    style={{
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      padding: '0.75rem'
                    }}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    rows="3"
                    style={{
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      padding: '0.75rem'
                    }}
                    value={form.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    style={{
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      padding: '0.75rem'
                    }}
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Payment Method</label>
                  <select
                    name="payment"
                    className="form-control"
                    style={{
                      border: '2px solid #E5E7EB',
                      borderRadius: '8px',
                      padding: '0.75rem'
                    }}
                    value={form.payment}
                    onChange={handleChange}
                  >
                    <option value="cod">Cash on Delivery</option>
                    <option value="gcash">GCash</option>
                    <option value="card">Credit Card</option>
                  </select>
                </div>

                <button
                  type="submit"
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
                  <i className="fas fa-check-circle me-2"></i>Place Order
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm" style={{ border: '2px solid #FF0000' }}>
            <div className="card-header" style={{ backgroundColor: '#FF0000', color: 'white', borderBottom: '2px solid #000000' }}>
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              {cart.map(item => {
                const imageUrl = item.image.startsWith('http')
                  ? item.image
                  : `${API_URL}${item.image}`;

                return (
                  <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <img
                      src={imageUrl}
                      alt={item.name}
                      className="rounded me-3"
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        objectFit: 'cover', 
                        border: '2px solid #FF0000' 
                      }}
                    />
                    <div className="flex-grow-1">
                      <p className="mb-0 fw-bold">{item.name}</p>
                      <small className="text-muted">Qty: {item.quantity}</small>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                );
              })}

              <hr />

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Tax (12%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <h5 style={{ color: '#FF0000', fontWeight: '700' }}>Total:</h5>
                <h5 style={{ color: '#FF0000', fontWeight: '700' }}>${total.toFixed(2)}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;