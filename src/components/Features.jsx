import React from 'react';

const Features = () => {
  const featuresList = [
    {
      icon: "📝",
      title: "Updates and Blogposts",
      description: "Share your creative process and updates directly in your virtual space, allowing visitors to engage with your content in a more immersive way."
    },
    {
      icon: "🎵",
      title: "Media Player",
      description: "Embed audio and video content within your space, perfect for musicians, podcasters, and filmmakers to showcase their work in context."
    },
    {
      icon: "💬",
      title: "Community Messaging",
      description: "Enable real-time conversations and feedback within your space, fostering deeper connections between you and your audience."
    },
    {
      icon: "📰",
      title: "Auto-generated Newsletter",
      description: "Automatically compile your updates into beautiful newsletters to keep your audience engaged, even when they're not in your space."
    },
    {
      icon: "🛒",
      title: "Shop",
      description: "Sell your products, digital assets, or services directly from your virtual space with seamless e-commerce integration."
    },
    {
      icon: "🔗",
      title: "Cross-platform Integration",
      description: "Connect your existing social media and content platforms to create a unified hub for all your creative output."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <p className="section-subtitle">
          Everything you need to build and manage your digital presence in one immersive space.
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
      </div>
    </section>
  );
};

export default Features; 