import React, { useState } from 'react';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For Netlify Forms to work properly, we actually don't need to prevent the default form submission
    // But we'll handle the UI state here to show a success message
    setSubmitted(true);
    console.log('Email submitted:', email);
  };

  return (
    <section className="cta-section" id="sign-up">
      <div className="container cta-container">
        <h2 className="cta-title">Ready to Explore?</h2>
        
        {submitted ? (
          <div className="success-message">
            <p>Thanks for signing up! We'll keep you updated about Portal.</p>
          </div>
        ) : (
          <form 
            name="portal-signup" 
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className='cta-container'
          >
            {/* Hidden inputs required for Netlify Forms */}
            <input type="hidden" name="form-name" value="portal-signup" />
            <p className="hidden" style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            
            <input
              type="email"
              name="email"
              className="email-input"
              placeholder="ade@portal.space"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <button type="submit" className="btn btn-primary">Get Updates</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default CallToAction; 