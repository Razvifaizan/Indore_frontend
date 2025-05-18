import React, { useEffect, useRef, useState } from 'react';
// import Hero1 from '../Images/hero1.png';
import v1 from '../Images/v1.mp4';
import v2 from '../Images/v2.mp4';
import v3 from '../Images/v3.mp4';
import v4 from '../Images/v4.mp4';
import TrainingInfo from './TrainingInfo';
import Footer from './Footer';
import PostSection from './PostSection';
import GetVideo from './GetVideo';
function Home() {
  const videos = [v1, v2, v3, v4];
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [videos.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  return (
    <>
    <div className="Homepage" id='Home'>
      <div className="content mt-5">
        
        <div className="row justify-content-between">
          
          <div className="col-md-4 hero-section">
           <h1 className='main-heading text-end'>Built for Athletes. Designed for Champions </h1>
        
          </div>
          <div className="col-md-6 ">
            <div className="into-box">
<h4>
              Welcome to <span className='color-red'>Indore Corp. Area Athletics Association</span> — the ultimate training ground for runners, marathoners, and athletes who dream big.
            </h4>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
    <TrainingInfo />
   
    <Footer/>

    </>
    
  );
}

export default Home;
