import React, { useState } from 'react';
import './Gallery.css';
import backgroundVideo from '../assets/background.mp4';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const gallerySections = [
  {
    image: image1,
    title: "Implementation for vechile navigation and testing",
    description: "",
    reverse: false, // Image on the left
  },
  {
    image: image2,
    title: "Laser Micro Machining",
    description: "",
    reverse: true, // Image on the right
  },
  {
    image: image3,
    title: "Dry Micro Electrical Discharge Machine",
    description: "",
    reverse: false, // Image on the left
  },
  {
    image: image4,
    title: "Micro Grinding and Micro Milling using High Speed Spindle",
    description: "",
    reverse: true, // Image on the right
  },
  {
    image: image5,
    title: "Machine learning-based Tool Wear Prediction model for CNC Micromilling",
    description: "",
    reverse: false, // Image on the left
  },
];

const Gallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="gallery-page">
      {/* Background video */}
      <video className="video-background" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page Title */}
      <div className="gallery-title">
        <h1>Gallery</h1>
      </div>

      {/* Gallery Sections */}
      {gallerySections.map((section, index) => (
        <div
          key={index}
          className={`gallery-section ${
            section.reverse ? 'reverse-layout' : ''
          }`}
        >
          <div className="gallery-image">
            <img
              src={section.image}
              alt={`Section ${index + 1}`}
              onClick={() => openFullscreen(section.image)} // OnClick to open fullscreen
            />
          </div>
          <div className="gallery-text">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        </div>
      ))}

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <button className="close-button" aria-label="Close image">
            <span className="close-icon">×</span>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on image click
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
