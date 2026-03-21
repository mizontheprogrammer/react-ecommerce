import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';

const API_URL = 'http://localhost:5001';

function HeroCarousel() {
  const slides = [
    { id: 1, image: `${API_URL}/assets/banner1.jpg` },
    { id: 2, image: `${API_URL}/assets/banner2.jpg` },
    { id: 3, image: `${API_URL}/assets/banner3.jpg` }
  ];

  return (
    <div id="heroCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-label={`Slide ${index + 1}`}
            style={{ 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%',
              backgroundColor: index === 0 ? '#FF0000' : '#ccc'
            }}
          />
        ))}
      </div>
      
      {/* Images Only - No Text */}
      <div className="carousel-inner rounded" style={{ border: '2px solid #FF0000', overflow: 'hidden' }}>
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img 
              src={slide.image} 
              className="d-block w-100" 
              alt={`Banner ${index + 1}`}
              style={{ height: '400px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://placehold.co/1536x400/FFFFFF/FF0000?text=PokeShop';
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#heroCarousel" 
        data-bs-slide="prev"
        style={{ width: '40px', opacity: 0.7 }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#heroCarousel" 
        data-bs-slide="next"
        style={{ width: '40px', opacity: 0.7 }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/api/products`).then(r => r.json()),
      fetch(`${API_URL}/api/categories`).then(r => r.json())
    ])
    .then(([productsData, categoriesData]) => {
      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    })
    .catch(err => {
      console.error('Fetch error:', err);
      setLoading(false);
    });
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const displayedProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <HeroCarousel />
        <div className="pokeball-loader mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* Carousel */}
      <HeroCarousel />

      {/* Main Content */}
      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-lg-3">
          <Sidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>

        {/* Products Grid */}
        <div className="col-lg-9">
          {/* Category Title */}
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 style={{ color: '#FF0000', fontWeight: '700', margin: 0 }}>
              {selectedCategory}
            </h4>
            <span style={{ color: '#666', fontSize: '0.9rem' }}>
              {displayedProducts.length} items
            </span>
          </div>
          
          {/* Product Grid */}
          {displayedProducts.length === 0 ? (
            <p className="text-muted text-center py-5">No products found.</p>
          ) : (
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
              {displayedProducts.map(product => (
                <div key={product.id} className="col">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;