import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section" id="sign-up">
      <div className="container">
        <h2 className="section-title cta-title">Sound Exciting?</h2>
        <p className="cta-description">
          Sign up and be ready to jump into the Portal when we launch
        </p>

        <div className="tally-form-container">
          <iframe 
            src="https://tally.so/embed/3Xyd6Y?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="579"
            frameBorder="0"
            marginHeight="0" 
            marginWidth="0"
            title="Portal Sign Up"
          ></iframe>
        </div>
        
        {/* <form name="portal-signup" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="portal-signup" />
          <div className="hidden" style={{ display: 'none' }}>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>
          
          <div className="cta-form">
            <input
              type="email"
              name="email"
              className="email-input"
              placeholder="youremail@example.com"
              required
            />
            
            <button type="submit" className="btn btn-signup">Sign Up</button>
          </div>
        </form> */}
      </div>
    </section>
  );
};

export default CallToAction; 