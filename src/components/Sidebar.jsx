import React from 'react';

function Sidebar({ categories = [], selectedCategory = 'All', onCategorySelect }) {
  const allCategories = ['All', ...categories];

  return (
    <div className="category-sidebar">
      <h4>
        <i className="fas fa-filter me-2"></i>Filter By
      </h4>
      <h6 style={{ fontWeight: '600', marginBottom: '1rem', color: '#374151' }}>
        CATEGORY
      </h6>
      <div className="list-group">
        {allCategories.map((cat, index) => (
          <button
            key={index}
            type="button"
            className={`category-item ${
              selectedCategory === cat ? 'active' : ''
            }`}
            onClick={() => onCategorySelect?.(cat)}
          >
            <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
            {cat}
            {selectedCategory === cat && (
              <i className="fas fa-check ms-2" style={{ float: 'right' }}></i>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;