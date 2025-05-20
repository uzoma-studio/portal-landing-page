import React from 'react';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
            Portal makes it easy for creators to build intentional online communities who support them and their work
        </p>
        
        <div className="how-it-works-steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3 className="step-title">Create Your <i>Space</i></h3>
            <p>Design a customisable virtual environment that reflects your voice, values, and creative energy.</p>
          </div>
          
          <div className="step">
            <div className="step-number">02</div>
            <h3 className="step-title">Add Your <i>Content</i></h3>
            <p>Insert your ideas, updates, events, or products - all in a format that feels engaging and true to you.</p>
          </div>
          
          <div className="step">
            <div className="step-number">03</div>
            <h3 className="step-title">Invite Your <i>Community</i></h3>
            <p>Build stronger relationships with your community by offering them exclusive content, chatting directly with them and earning from subscriptions and product sales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 