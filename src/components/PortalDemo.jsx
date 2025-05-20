import React from 'react';
import demoSpaceImage from '../assets/demo-space.gif';

const PortalDemo = () => {
  // Replace with the URL provided by the user
  const portalDemoUrl = "https://portal-demo-self.vercel.app";
  
  return (
    <section className="demo-section" id="portal-demo">
      <div className="container demo-container">
        <h2 className="section-title">See Portal In Action</h2>
        
        <div className="demo-content">
          <div className="demo-visual">
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
              <img 
                src={demoSpaceImage} 
                alt="Portal Demo Space" 
                className="demo-image"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>

          <div className="demo-text">
            <p className="featured-tag right-align">Featured Space</p>
            <h3 className="demo-title right-align">Portal Demo</h3>
            <p className="right-align" style={{ margin: '1rem 0' }}>
              Explore a sample creator space - click on the pulsating hotspots to engage with the content.
            </p>
            <div className="right-align">
              <a 
                href={portalDemoUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '1.5rem', display: 'inline-block', textDecoration: 'none' }}
              >
                Explore the space
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortalDemo; 