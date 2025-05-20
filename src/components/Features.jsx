import React from 'react';

const Features = () => {
  const featuresList = [
    {
      icon: "🖼️",
      title: "Custom Design",
      description: "Create a digital space that reflects your voice, values, and creative energy."
    },
    {
      icon: "📝",
      title: "Updates and Blogposts",
      description: "Keep your people in the loop with behind-the-scenes updates, new drops, and thoughts from your creative journey"
    },
    {
      icon: "🎵",
      title: "Media Player",
      description: "Add audio and video to bring your creative practice to life - great for musicians, filmmakers, or curators."
    },
    {
      icon: "💬",
      title: "Community Messaging",
      description: "Foster real-time conversations and feedback creating a hub for connection and interaction."
    },
    {
      icon: "📰",
      title: "Auto-generated Newsletter",
      description: "Turn your updates into beautiful newsletters automatically, so your community stays engaged even when they’re not online."
    },
    {
      icon: "🛒",
      title: "Shop",
      description: "Sell subscriptions and products and let your community support you without friction."
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <p className="section-subtitle">
          Everything you need to build and manage an engaged community around your creative practice.
        </p>
        
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <br /><br />
        <p className="section-subtitle">
          And more to come...
        </p>
      </div>
    </section>
  );
};

export default Features; 