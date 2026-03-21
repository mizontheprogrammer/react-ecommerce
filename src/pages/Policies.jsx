import React from 'react';

function Policies() {
  const terms = [
    {
      id: 1,
      icon: 'fa-handshake',
      title: 'Acceptance of Terms',
      content: 'By accessing and using PokeShop (the "Website"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this website.'
    },
    {
      id: 2,
      icon: 'fa-user-shield',
      title: 'User Account',
      content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.'
    },
    {
      id: 3,
      icon: 'fa-tag',
      title: 'Product Information',
      content: 'We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, or error-free.'
    },
    {
      id: 4,
      icon: 'fa-credit-card',
      title: 'Pricing and Payment',
      items: [
        'All prices are in USD and subject to change without notice.',
        'We reserve the right to refuse or cancel any order for any reason.',
        'Payment must be made in full before shipment.'
      ]
    },
    {
      id: 5,
      icon: 'fa-truck',
      title: 'Shipping and Delivery',
      items: [
        'Shipping times are estimates and not guaranteed.',
        'We are not responsible for delays caused by shipping carriers.',
        'Risk of loss passes to you upon delivery to the carrier.'
      ]
    },
    {
      id: 6,
      icon: 'fa-undo',
      title: 'Returns and Refunds',
      items: [
        'Returns are accepted within 30 days of purchase.',
        'Items must be in original condition with all packaging.',
        'Refunds will be processed within 7-10 business days.',
        'Shipping costs for returns are the customer\'s responsibility unless the return is due to our error.'
      ]
    },
    {
      id: 7,
      icon: 'fa-copyright',
      title: 'Intellectual Property',
      content: 'All content on this website, including text, graphics, logos, and images, is the property of PokeShop and is protected by copyright laws.'
    },
    {
      id: 8,
      icon: 'fa-shield-alt',
      title: 'Limitation of Liability',
      content: 'PokeShop shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or products.'
    },
    {
      id: 9,
      icon: 'fa-lock',
      title: 'Privacy Policy',
      content: 'Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.'
    },
    {
      id: 10,
      icon: 'fa-edit',
      title: 'Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.'
    },
    {
      id: 11,
      icon: 'fa-envelope',
      title: 'Contact Information',
      content: 'If you have any questions about these Terms & Conditions, please contact us:',
      contact: [
        { label: 'Email', value: 'info@pokeshop.com' },
        { label: 'Phone', value: '+63 (555) 123-4567' },
        { label: 'Address', value: '6767 Yearing Street, City, Country' }
      ]
    }
  ];

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
          <i className="fas fa-file-contract me-2"></i>Terms & Conditions
        </h2>
        <p className="text-muted mt-3">Please read these terms carefully before using PokeShop.</p>
      </div>

      {/* Terms List */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {terms.map((term) => (
            <div 
              key={term.id} 
              className="card border-0 shadow-sm mb-4" 
              style={{ borderTop: '4px solid #FF0000' }}
            >
              <div className="card-body p-4">
                <div className="d-flex align-items-start mb-3">
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    background: '#FFF0F0',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#FF0000',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    <i className={`fas ${term.icon}`}></i>
                  </div>
                  <h4 className="mb-0" style={{ color: '#FF0000', fontWeight: '700' }}>
                    {term.id}. {term.title}
                  </h4>
                </div>
                
                {term.content && (
                  <p className="text-muted mb-0">{term.content}</p>
                )}
                
                {term.items && (
                  <ul className="mb-0 ps-4">
                    {term.items.map((item, index) => (
                      <li key={index} className="text-muted mb-2">{item}</li>
                    ))}
                  </ul>
                )}
                
                {term.contact && (
                  <ul className="mb-0 ps-4 mt-2">
                    {term.contact.map((item, index) => (
                      <li key={index} className="text-muted mb-1">
                        <strong>{item.label}:</strong> {item.value}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Last Updated Badge */}
          <div className="text-center mt-5">
            <span className="badge" style={{ 
              background: '#FFF0F0', 
              color: '#FF0000',
              border: '2px solid #FF0000',
              padding: '0.5rem 1.5rem',
              borderRadius: '25px',
              fontSize: '0.9rem'
            }}>
              <i className="fas fa-clock me-2"></i>
              Last Updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policies;