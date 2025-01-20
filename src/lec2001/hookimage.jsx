import React, { useState, useEffect } from 'react';

const ImageChanger = () => {
  const images = [
        "../../public/img1 (1).jpg",
        "../../public/img2 (2).jpg",
        "../../public/img3 (3).jpg",
        "../../public/img7 (7).jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '300px', height: '200px', borderRadius: '10px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <p>Image {currentIndex + 1} of {images.length}</p>
      </div>
    </div>
  );
};

export default ImageChanger;
