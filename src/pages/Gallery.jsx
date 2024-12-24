import React from 'react';
import './Gallery.css';
import backgroundVideo from '../assets/background.mp4'; // Ensure correct path

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative overflow-hidden mt-14">
      {/* Background Video */}
      <video className="video-background" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with Gallery Title */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
       
      </div>

      {/* Gallery Images */}
      <div className="gallery-container">
        <div className="scrolling-images">
          <img src={image1} alt="Gallery Image 1" className="gallery-image" />
          <img src={image2} alt="Gallery Image 2" className="gallery-image" />
          <img src={image3} alt="Gallery Image 3" className="gallery-image" />
          <img src={image4} alt="Gallery Image 4" className="gallery-image" />
          <img src={image5} alt="Gallery Image 5" className="gallery-image" />
          <img src={image1} alt="Gallery Image 1" className="gallery-image" />
          <img src={image2} alt="Gallery Image 2" className="gallery-image" />
          <img src={image3} alt="Gallery Image 3" className="gallery-image" />
          <img src={image4} alt="Gallery Image 4" className="gallery-image" />
          <img src={image5} alt="Gallery Image 5" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
