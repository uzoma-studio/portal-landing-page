import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section" id="sign-up">
      <div className="container cta-container">
        <h2 className="cta-title">Ready to Explore?</h2>
        
        <input
          type="email"
          className="email-input"
          placeholder="ade@portal.space"
        />
        
        <button className="btn btn-primary">Get Updates</button>
      </div>
    </section>
  );
};

export default CallToAction; 