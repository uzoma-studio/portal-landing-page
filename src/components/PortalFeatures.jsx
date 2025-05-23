import React from 'react';

const PortalFeatures = () => {
  const features = [
    {
      number: "1",
      title: "Design a Unique Digital Space",
      description: "Reflect your aesthetic and creative style and stand out from the sameness of today's internet"
    },
    {
      number: "2",
      title: "Build an Engaged Community Around Your Work",
      description: "Your fans can join your Portal space and interact directly with you, one another and the work you share"
    },
    {
      number: "3",
      title: "Share Content with your People",
      description: "Portal's built-in features help you post updates, share exclusive content and even send out email newsletters"
    },
    {
      number: "4",
      title: "Earn from your Art",
      description: "Offer all sorts of products - from merch to event tickets or even recurring subscriptions - and let your fans put their money where their heart is"
    }
  ];

  return (
    <section className="portal-features-section" id="portal-features">
      <div className="container">
        <h2 className="section-title portal-features-title">That's Why We Made Portal</h2>
        <p className="portal-features-subtitle">
          Portal helps creators turn their audiences into thriving digital communities defined by mutual support, shared goals and creative individuality
        </p>
        
        <div className="portal-steps-heading">
          <h3>Portal makes it easy to:</h3>
        </div>
        
        <div className="portal-features-grid">
          {features.map((feature, index) => (
            <div className="portal-feature-card" key={index}>
              <div className="feature-content">
                <div className="feature-number">{feature.number}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-image-container">
                <div className="feature-browser-mockup">
                  <div className="feature-browser-content">
                    <img src={feature.image} alt={feature.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortalFeatures; 