import React, { useState } from 'react';

const CloudinaryImageWithQuality = ({ alt = "Image", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  // URLs for the low-quality placeholder and the full-resolution image
  const placeholderUrl = `https://res.cloudinary.com/diyha1kd9/image/upload/w_29,q_auto:low/v1741214492/health_vxkd5x.webp`;
  const fullImageUrl = `https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/health_vxkd5x.webp`;

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      {/* Low-quality placeholder image */}
      <img
        src={placeholderUrl}
        alt={alt}
        style={{
          width: '100%',
          transition: 'opacity 0.5s ease-out',
          opacity: loaded ? 0 : 1,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      {/* Full-resolution image */}
      <img
        src={fullImageUrl}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in',
        }}
        {...props}
      />
    </div>
  );
};

export default CloudinaryImageWithQuality;
