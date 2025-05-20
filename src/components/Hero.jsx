import React from 'react';

const Hero = () => {
  // Replace this with the file ID of your Google Drive video
  // Example: For a URL like https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view
  // The file ID would be: 1a2b3c4d5e6f7g8h9i0j
  const googleDriveFileId = '1de_T9rfh4gRn2J_WjXggYgKU2r-8ni6Q';
  
  // Navigation functions
  const scrollToDemo = () => {
    const demoSection = document.getElementById('portal-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToSignUp = () => {
    const signUpSection = document.getElementById('sign-up');
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="hero">
      <div className="container">
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='left-align'>Grow your <br />community<br />your way</h1>
            <p className='left-align'>Portal helps artists and creative brands turn their audience into a thriving, connected community</p>
            
            <div className="hero-bottom">
              {/* <h3 className='left-align'>Digital Playgrounds for Creative Communities</h3> */}
              <div className="hero-buttons">
                <button 
                  className="btn btn-outline"
                  onClick={scrollToDemo}
                >
                  Explore
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={scrollToSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          
          <div className='hero-video'>
            <div className='video-container'>
              <iframe 
                src={`https://drive.google.com/file/d/${googleDriveFileId}/preview`}
                title="Portal Demo Video" 
                width="640" 
                height="360"
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 