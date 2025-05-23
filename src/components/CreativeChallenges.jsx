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
      explanation: "53% of creators say it's harder to reach their followers today than five years ago*. Your best work can disappear from feeds within hours regardless of its merit.",
      image: challenge1,
      illustration: "algorithm-noise"
    },
    {
      title: "You have to do internet gymnastics to manage all your social media accounts",
      explanation: "Creators are forced to fragment their presence across multiple platforms, each with different formats, rules, and audiences. This constant context-switching drains creative energy and splits your community.",
      image: challenge2,
      illustration: "social-media-gymnastics"
    },
    {
      title: "You're worried that TikTok might get banned and take your audience with it",
      explanation: "Building on platforms you don't control means risking everything on decisions beyond your influence. When a platform changes policies or disappears entirely, years of community building can vanish overnight.",
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
                <p className="challenge-explanation">{challenge.explanation}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="challenges-summary" ref={summaryRef}>
            <p>Over half of the $290B that encompasses the potential of today's creator economy comes from direct-to-fan value...[these] are more stable revenue streams, contributing to a clearer path to long-term success.</p>
            <br />
            <p>"I've seen creators with huge audiences come and go. The ones who have longevity in the space are the ones who deeply connect with their fans."</p>
            <cite style={{marginLeft: '1rem'}}> - Amanda Rach Lee, Video creator and artist</cite>
          <br /><br />
          <small>* Source: <a href="https://stateofcreate.co" target="_blank" rel="noopener noreferrer">Patreon State of Create</a></small>
        </div>
      </div>
    </section>
  );
};

export default CreativeChallenges; 