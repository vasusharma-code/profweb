// Gallery.jsx

import React, { useState } from 'react';
import './Gallery.css';
import backgroundVideo from '../assets/background.mp4';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const smallImages = [image2, image3, image4, image5, image1]; 
const smallImages2 = [image3, image4, image5, image1, image2]; // Second set of small images

const Gallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="gallery-page mt-14">
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="small-galleries-wrapper">
        <div className="small-gallery-container">
          {smallImages.map((image, index) => (
            <div key={index} className="small-image-wrapper">
              <img
                src={image}
                alt={`Small Image ${index + 1}`}
                className="small-gallery-image"
                onClick={() => openFullscreen(image)}
              />
            </div>
          ))}
        </div>

        <div className="small-gallery-container">
          {smallImages2.map((image, index) => (
            <div key={index} className="small-image-wrapper">
              <img
                src={image}
                alt={`Small Image Second Set ${index + 1}`}
                className="small-gallery-image"
                onClick={() => openFullscreen(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {fullscreenImage && (
        <div 
          className="fullscreen-modal" 
          onClick={closeFullscreen}
        >
          <button className="close-button" aria-label="Close image">
            <span className="close-icon">×</span>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
