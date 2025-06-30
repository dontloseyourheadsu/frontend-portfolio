import React, { useState, useEffect } from 'react';
import './FashionProductSales.css';

const FashionProductSales = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');

  const productImages = [
    'Fashion Collection 1',
    'Fashion Collection 2', 
    'Fashion Collection 3',
    'Fashion Collection 4'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'black', value: '#1a1a1a' },
    { name: 'white', value: '#ffffff' },
    { name: 'gold', value: '#d4af37' },
    { name: 'rose', value: '#e91e63' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const collections = [
    {
      name: 'Autumn Elegance',
      description: 'Sophisticated pieces for the modern professional',
      price: '$299',
      image: 'Collection 1'
    },
    {
      name: 'Winter Luxe',
      description: 'Premium fabrics meet contemporary design',
      price: '$399',
      image: 'Collection 2'
    },
    {
      name: 'Spring Bloom',
      description: 'Fresh styles for the new season',
      price: '$249',
      image: 'Collection 3'
    }
  ];

  return (
    <div className="fashion-product-sales">
      {/* Hero Section */}
      <section className="fashion-hero">
        <div className="fashion-hero-content">
          <div className="fashion-hero-text">
            <span className="fashion-new-badge">New Collection</span>
            <h1 className="fashion-hero-title">
              Redefine Your
              <span className="fashion-luxury-text"> Luxury</span>
            </h1>
            <p className="fashion-hero-subtitle">
              Discover our latest collection of premium fashion pieces crafted for 
              the discerning individual who values both style and sophistication.
            </p>
            <div className="fashion-hero-actions">
              <button className="fashion-btn fashion-btn-primary">
                Shop Collection
              </button>
              <button className="fashion-btn fashion-btn-secondary">
                View Lookbook
              </button>
            </div>
          </div>
          
          <div className="fashion-hero-gallery">
            <div className="fashion-image-slider">
              {productImages.map((image, index) => (
                <div 
                  key={index}
                  className={`fashion-slide ${index === currentImage ? 'active' : ''}`}
                >
                  <div className="fashion-slide-content">
                    {image}
                  </div>
                </div>
              ))}
            </div>
            <div className="fashion-slider-dots">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  className={`fashion-dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="fashion-featured-product">
        <div className="fashion-container">
          <div className="fashion-product-layout">
            <div className="fashion-product-images">
              <div className="fashion-main-image">
                <div className="fashion-product-placeholder">
                  Featured Product Image
                </div>
              </div>
              <div className="fashion-thumbnail-grid">
                {[1, 2, 3, 4].map((thumb) => (
                  <div key={thumb} className="fashion-thumbnail">
                    <div className="fashion-thumb-content">
                      View {thumb}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fashion-product-details">
              <div className="fashion-product-meta">
                <span className="fashion-product-category">Premium Collection</span>
                <h2 className="fashion-product-title">Signature Velvet Blazer</h2>
                <div className="fashion-product-rating">
                  <div className="fashion-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="fashion-star">★</span>
                    ))}
                  </div>
                  <span className="fashion-rating-text">(127 reviews)</span>
                </div>
              </div>

              <div className="fashion-pricing">
                <span className="fashion-price">$449</span>
                <span className="fashion-original-price">$599</span>
                <span className="fashion-discount">25% OFF</span>
              </div>

              <div className="fashion-product-description">
                <p>
                  Crafted from luxurious Italian velvet, this blazer embodies sophistication 
                  and modern elegance. Perfect for both professional settings and evening events.
                </p>
              </div>

              <div className="fashion-product-options">
                <div className="fashion-size-selector">
                  <h4>Size</h4>
                  <div className="fashion-size-grid">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`fashion-size-option ${selectedSize === size ? 'selected' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="fashion-color-selector">
                  <h4>Color</h4>
                  <div className="fashion-color-grid">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        className={`fashion-color-option ${selectedColor === color.name ? 'selected' : ''}`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => setSelectedColor(color.name)}
                      >
                        <span className="fashion-color-name">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="fashion-product-actions">
                <button className="fashion-btn fashion-btn-add-cart">
                  Add to Cart - $449
                </button>
                <button className="fashion-btn fashion-btn-wishlist">
                  <span className="fashion-heart">♡</span>
                  Add to Wishlist
                </button>
              </div>

              <div className="fashion-product-features">
                <div className="fashion-feature-item">
                  <span className="fashion-feature-icon">🚚</span>
                  <span>Free shipping worldwide</span>
                </div>
                <div className="fashion-feature-item">
                  <span className="fashion-feature-icon">↩️</span>
                  <span>30-day returns</span>
                </div>
                <div className="fashion-feature-item">
                  <span className="fashion-feature-icon">✨</span>
                  <span>Authenticity guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="fashion-collections">
        <div className="fashion-container">
          <div className="fashion-collections-header">
            <h2 className="fashion-section-title">Curated Collections</h2>
            <p className="fashion-section-subtitle">
              Each piece tells a story of craftsmanship and timeless design
            </p>
          </div>

          <div className="fashion-collections-grid">
            {collections.map((collection, index) => (
              <div key={index} className="fashion-collection-card">
                <div className="fashion-collection-image">
                  <div className="fashion-collection-placeholder">
                    {collection.image}
                  </div>
                  <div className="fashion-collection-overlay">
                    <button className="fashion-btn fashion-btn-ghost">
                      Explore Collection
                    </button>
                  </div>
                </div>
                <div className="fashion-collection-info">
                  <h3 className="fashion-collection-name">{collection.name}</h3>
                  <p className="fashion-collection-description">{collection.description}</p>
                  <span className="fashion-collection-price">{collection.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="fashion-brand-story">
        <div className="fashion-container">
          <div className="fashion-story-layout">
            <div className="fashion-story-content">
              <h2 className="fashion-story-title">Our Heritage</h2>
              <p className="fashion-story-text">
                For over three decades, we have been at the forefront of luxury fashion, 
                creating pieces that transcend trends and define elegance. Our commitment 
                to exceptional craftsmanship and sustainable practices ensures that every 
                garment is not just beautiful, but responsibly made.
              </p>
              <p className="fashion-story-text">
                From our atelier in Milan to boutiques worldwide, we continue to push 
                the boundaries of what luxury fashion can be.
              </p>
              <button className="fashion-btn fashion-btn-outline">
                Discover Our Story
              </button>
            </div>
            <div className="fashion-story-visual">
              <div className="fashion-story-image">
                <div className="fashion-story-placeholder">
                  Brand Heritage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="fashion-testimonials">
        <div className="fashion-container">
          <h2 className="fashion-section-title">What Our Clients Say</h2>
          
          <div className="fashion-testimonials-grid">
            <div className="fashion-testimonial-card">
              <p className="fashion-testimonial-quote">
                "The attention to detail is extraordinary. Every piece I own from this 
                collection has become a cherished part of my wardrobe."
              </p>
              <div className="fashion-testimonial-author">
                <strong>Isabella Chen</strong>
                <span>Fashion Director</span>
              </div>
            </div>
            
            <div className="fashion-testimonial-card">
              <p className="fashion-testimonial-quote">
                "Unparalleled quality and timeless design. These pieces truly stand 
                the test of time both in style and craftsmanship."
              </p>
              <div className="fashion-testimonial-author">
                <strong>Marcus Rodriguez</strong>
                <span>Creative Executive</span>
              </div>
            </div>
            
            <div className="fashion-testimonial-card">
              <p className="fashion-testimonial-quote">
                "I've never felt more confident in my style choices. Each piece 
                elevates every occasion."
              </p>
              <div className="fashion-testimonial-author">
                <strong>Sophia Williams</strong>
                <span>Art Curator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="fashion-newsletter">
        <div className="fashion-container">
          <div className="fashion-newsletter-content">
            <h2 className="fashion-newsletter-title">Join Our Exclusive Circle</h2>
            <p className="fashion-newsletter-subtitle">
              Be the first to discover new collections, exclusive events, and styling tips 
              from our fashion experts.
            </p>
            <div className="fashion-newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="fashion-email-input"
              />
              <button className="fashion-btn fashion-btn-newsletter">
                Subscribe
              </button>
            </div>
            <p className="fashion-newsletter-note">
              Join 50,000+ fashion enthusiasts. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionProductSales;
