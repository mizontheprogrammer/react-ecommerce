import React from 'react';
import { useCart } from '../context/CartContext';

const API_URL = 'http://localhost:5001';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  const imageUrl = product.image.startsWith('http') 
    ? product.image 
    : `${API_URL}${product.image}`;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="product-card fade-up">
      
      <button className="quick-view-btn" title="Quick View">
        <i className="fas fa-eye"></i>
      </button>
      
      <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '75%' }}>
        <img 
          src={imageUrl} 
          alt={product.name}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onError={(e) => {
            e.target.src = 'https://placehold.co/300x200/FFFFFF/FF0000?text=PokeShop';
          }}
        />
      </div>
      
      <div className="card-body d-flex flex-column p-3" style={{ flex: 1 }}>
        <span className="category-badge align-self-start">
          {product.category}
        </span>
        
        <h6 className="card-title mt-2 mb-2" style={{ 
          fontWeight: '600', 
          fontSize: '1rem',
          minHeight: '48px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {product.name}
        </h6>
        
        <div className="mt-auto">
          <div className="price-display">
            ${product.price}
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice}</span>
            )}
          </div>
          
          <button 
            className="add-to-cart-btn mt-3"
            onClick={handleAddToCart}
          >
            <i className="fas fa-cart-plus me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;