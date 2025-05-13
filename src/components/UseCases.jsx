import React from 'react';

const UseCases = () => {
  // Define use cases as separate items for the marquee
  const useCases = [
    "a virtual gallery showcasing your latest exhibition",
    "your online home",
    "an interactive listening room for an album release",
    "a cozy virtual boutique",
    "a digital archive",
    "a virtual residency space", 
    "an event microsite",
    "somewhere to visualise your ideas", 
    "a community hub", 
    "your portfolio showcase",
    "anything you can imagine"
  ];

  return (
    <section className="use-cases">
      <div className="container">
        <h2 className="use-cases-title">Your Portal can be</h2>
        
        <div className="marquee-container">
          <div className="marquee">
            {useCases.map((useCase, index) => (
              <span key={index} className="marquee-item">{useCase}</span>
            ))}
            {/* Duplicate the items for seamless looping */}
            {useCases.map((useCase, index) => (
              <span key={`dup-${index}`} className="marquee-item">{useCase}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases; 