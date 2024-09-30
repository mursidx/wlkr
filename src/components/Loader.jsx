// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
  <video 
    src="https://gplclub.co/wp-content/uploads/2024/09/loading-.mp4" 
    autoPlay 
    loop 
    muted
    className="loader-video"
  />
  <style jsx>{`
    .loader {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* Full viewport height */
      width: 100vw; /* Full viewport width */
      background-color: white; /* Loader background */
    }
    .loader-video {
      height: 100vh; /* Full viewport height */
      width: 100vw; /* Full viewport width */
      object-fit: cover; /* Ensure video covers the full area */
    }
  `}</style>
</div>

  );
};

export default Loader;
