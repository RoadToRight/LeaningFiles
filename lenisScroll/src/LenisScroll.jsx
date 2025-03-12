import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollComponent = () => {
  const scrollRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Increase the duration for a smoother effect
      easing: (t) => 1 - Math.pow(1 - t, 4), // Custom easing function for smoother scroll
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={scrollRef} style={{ height: '300vh', position: 'relative' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'rgba(0, 0, 0, 0.1)',
        }}
      >
        <div
          style={{
            height: '4px',
            background: 'blue',
            width: `${(scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
          }}
        />
      </div>
      <div style={{ padding: '20px' }}>
        <h1>Smooth Scrolling with Lenis</h1>
        <p>Scroll down to see the ultra-smooth scrolling effect and the scroll indicator in action.</p>
        {/* Your content here */}
      </div>
    </div>
  );
};

export default SmoothScrollComponent;
