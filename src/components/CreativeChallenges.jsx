import React, { useEffect, useRef } from 'react';
import challenge1 from '../assets/challenges/challenge-1.png';
import challenge2 from '../assets/challenges/challenge-2.png';
import challenge3 from '../assets/challenges/challenge-3.png';

const CreativeChallenges = () => {
  // Calculate current year dynamically
  const currentYear = new Date().getFullYear();
  const challengesRef = useRef([]);
  const summaryRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: 0.25 // Trigger when 25% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once animation is triggered, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all challenge rows
    challengesRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
    
    // Observe summary section
    if (summaryRef.current) {
      observer.observe(summaryRef.current);
    }
    
    return () => {
      // Cleanup
      challengesRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
      if (summaryRef.current) {
        observer.unobserve(summaryRef.current);
      }
    };
  }, []);
  
  const challenges = [
    {
      title: "Your work gets drowned out by the noise of 'the Algorithm'",
      image: challenge1,
      illustration: "algorithm-noise"
    },
    {
      title: "You have to do internet gymnastics to manage all your social media accounts",
      image: challenge2,
      illustration: "social-media-gymnastics"
    },
    {
      title: "You're worried that TikTok might get banned and take your audience with it",
      image: challenge3,
      illustration: "tiktok-ban"
    }
  ];

  // Set up refs array for challenge rows
  challengesRef.current = challenges.map((_, i) => challengesRef.current[i] ?? null);

  return (
    <section className="challenges-section" id="challenges">
      <div className="container">
        <h2 className="section-title challenges-title">Being a creative in {currentYear} is hard</h2>
        
        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <div 
              className={`challenge-row ${index % 2 === 1 ? 'reverse' : ''}`} 
              key={index}
              ref={el => challengesRef.current[index] = el}
            >
              <div className="challenge-image">
                <div className={`challenge-illustration ${challenge.illustration}`}>
                  <img src={challenge.image} alt={challenge.title} className="challenge-img" />
                </div>
              </div>
              <div className="challenge-content">
                <p className="challenge-text">{challenge.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="challenges-summary" ref={summaryRef}>
          <p>In summary, it's now more difficult than ever for creators to connect with the audiences that want to support them online</p>
        </div>
      </div>
    </section>
  );
};

export default CreativeChallenges; 