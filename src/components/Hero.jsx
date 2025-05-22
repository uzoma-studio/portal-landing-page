import React, { useState, useEffect, useRef } from 'react';
import heroImage from '../assets/space.png';

const Hero = () => {
  // Words that will cycle
  const words = ["most authentic", "easiest", "most fun", "audacious", "most creative"];
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  // Typing effect
  useEffect(() => {
    const typeWord = () => {
      // Current word being processed
      const fullWord = words[wordIndex];
      
      // Set typing speed based on whether we're deleting or typing
      const speed = isDeleting ? typingSpeed / 2 : typingSpeed;
      
      // If deleting, remove a character, else add a character
      if (isDeleting) {
        setCurrentWord(prev => prev.substring(0, prev.length - 1));
      } else {
        setCurrentWord(prev => fullWord.substring(0, prev.length + 1));
      }
      
      // If word is complete, start deleting after a pause
      if (!isDeleting && currentWord === fullWord) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1200);
      } 
      // If finished deleting, move to next word
      else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };
    
    // Set the timer for typing effect
    const timer = setTimeout(typeWord, isDeleting ? typingSpeed / 2 : typingSpeed);
    
    // Cleanup timeout
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex, words, typingSpeed]);

  // Mouse move handler for ripple effect
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Scroll to signup section
  const scrollToSignUp = () => {
    const signUpSection = document.getElementById('sign-up');
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hero-section" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
    >
      <div className="container">
        <div className="hero-img">
          <img src={heroImage} alt="Portal creative community" style={{width: '20%'}}/>
        </div>
        <h1 className="hero-title">
          The <span className="cycling-word">{currentWord}<span className="cursor"></span></span> way for <br/>
          creatives to build community
        </h1>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-explore"
            onClick={() => document.getElementById('portal-features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore
          </button>
          <button 
            className="btn btn-signup"
            onClick={scrollToSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 