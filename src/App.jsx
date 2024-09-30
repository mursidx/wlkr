import React, { useEffect, useState } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import Images from "./components/Images";
import Video from "./components/Video";
import Loader from "./components/Loader"; // Import the Loader component
import "./App.css";
import Lenis from 'lenis';

function App() {
  const [loading, setLoading] = useState(true);
  const totalImages = 900; // Total number of images
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Function to handle image load
    const handleImageLoad = () => {
      setLoadedImages((prev) => prev + 1);
    };

    // Create a list of image promises to load all images
    const loadImages = async () => {
      for (let i = 0; i < totalImages; i++) {
        const imagesURL = `./wlkrImg/${i.toString().padStart(3, "0")}.jpg`;
        const img = new Image();
        img.src = imagesURL;

        // Add load event listener
        img.onload = handleImageLoad;
        
        // Optional: Handle image loading error
        img.onerror = () => {
          console.error(`Failed to load image: ${imagesURL}`);
          handleImageLoad(); // Consider it loaded even if failed to avoid hanging
        };
      }
    };

    loadImages();

  }, [totalImages]); // Ensure this effect runs only once on mount

  // Check if all images are loaded
  useEffect(() => {
    if (loadedImages === totalImages) {
      setLoading(false);
    }
  }, [loadedImages, totalImages]);

  // Display loader while images are loading
  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ fontFamily: "'Roboto Flex', sans-serif" }} className="relative w-full min-h-screen font-[Roboto Flex Thin]">
      <Navbar />
      <Home />
      <Video />
      <Shoes />
      <Images />
    </div>
  );
}

export default App;
