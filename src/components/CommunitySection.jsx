import React, { useState, useRef } from 'react';

const CommunitySection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Mouse move handler for spotlight effect
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      className="community-section"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
    >
      <div className="container">
        <h2 className="community-title">Your Community is 🔑 <br /> to your Creative Success</h2>
      </div>
    </section>
  );
};

export default CommunitySection; 