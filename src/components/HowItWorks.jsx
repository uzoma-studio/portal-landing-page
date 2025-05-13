import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Portal allows you to build immersive digital spaces without writing a single line of code. Perfect for artists, creative brands and their communities
        </p>
        
        <div className="how-it-works-steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3 className="step-title">Create Your <i>World</i></h3>
            <p>Design a customizable virtual environment that reflects your style.</p>
          </div>
          
          <div className="step">
            <div className="step-number">02</div>
            <h3 className="step-title">Add Your <i>Content</i></h3>
            <p>Place objects that visitors can click to explore posts, pages, products and other content.</p>
          </div>
          
          <div className="step">
            <div className="step-number">03</div>
            <h3 className="step-title">Invite Your <i>Community</i></h3>
            <p>Invite your audience to interact with you, with one another and with the world you have created.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 