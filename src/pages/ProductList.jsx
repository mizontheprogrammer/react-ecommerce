import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';

const API_URL = 'https://react-ecommerce-backend-tb4w.onrender.com/api/categories';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('https://react-ecommerce-backend-tb4w.onrender.com/api/products').then(r => r.json()),
      fetch('https://react-ecommerce-backend-tb4w.onrender.com/api/categories').then(r => r.json())
    ])
    .then(([productsData, categoriesData]) => {
      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    })
    .catch(err => {
      console.error('Fetch error:', err);
      setError(err.message);
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
    return <div className="text-center mt-5"><h3>Loading...</h3></div>;
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <h3 style={{ color: '#dc3545' }}>Error: {error}</h3>
        <p>Make sure backend is running on port 5001</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 mb-4">
          <Sidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>
        <div className="col-lg-10 col-md-9">
          <h2 className="mb-3" style={{ color: '#111184' }}>
            {selectedCategory}
            <span className="text-muted fs-6 ms-2">({displayedProducts.length} items)</span>
          </h2>
          <div className="row">
            {displayedProducts.map(product => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;