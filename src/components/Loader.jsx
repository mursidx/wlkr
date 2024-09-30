import React, { useEffect, useRef } from 'react';

const Loader = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure video is muted
      videoRef.current.play();       // Programmatically trigger play
    }
  }, []);

  return (
    <div className="loader">
      <video 
        ref={videoRef}
        src="https://gplclub.co/wp-content/uploads/2024/09/loading-.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline  // Important for mobile
        className="loader-video"
      />
      <style jsx>{`
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background-color: white;
        }
        .loader-video {
          height: 100vh;
          width: 100vw;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Loader;
