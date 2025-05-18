// src/components/VideoSection.js
import React from 'react';

function VideoSection() {
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-8">
          <h2 className="mb-4">Live Training</h2>
          <video
            className="img-fluid rounded shadow"
            controls
            autoPlay
            muted
            src="https://www.w3schools.com/html/mov_bbb.mp4"
          />
        </div>
         <div className="col-4">
          <h2 className="mb-4">Recorded Session</h2>
          <video
            className="img-fluid rounded shadow"
            controls
            src="https://www.w3schools.com/html/movie.mp4"
          />
        </div>
      </div>

      <div className="row">
       
      </div>
    </div>
  );
}

export default VideoSection;
