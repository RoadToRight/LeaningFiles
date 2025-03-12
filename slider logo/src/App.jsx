// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';

// // Replace these URLs with your actual logo images.
// const logos = [
//   'top1.png',
//   'top1.png',
//   'top1.png',
//   'top1.png',
//   'top1.png',
//   'top1.png', 
// ];



// function App() {
//   const Img = useRef();
//   const Animation = useRef();
//   useEffect(() => {
   
//     Animation.current =   gsap.fromTo(
//       Img.current,
//       {
//         x: 0, // Starting position (right side)
//       },
//       {
//         x: -1000, // Ending position (left side)
//         delay: 1,
//         duration: 4,
//         repeat: -1, // Repeat indefinitely
//         yoyo: true, // Reverse the animation after each cycle
//       }
    );
//   }, [])

//   const handleMouseEnter = () => {
//     if (Animation.current) {
//       Animation.current.timeScale(0.3); // Slow down to 30% of normal speed.
//     }
//   };

//   const handleMouseLeave = () => {
//     if (Animation.current) {
//       Animation.current.timeScale(4); // Restore normal speed.
//     }
//   };
 
//   return (
//    <>
//     <div className='' ref={Img} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />
//     <img src="top1.png" alt="" />

//     </div>
//    </>
//   );
// }

// export default App;

// import React, { useState, useRef, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const boxRef = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     let animationFrame;
//     const moveBox = () => {
//       const box = boxRef.current;
//       const currentPosition = parseFloat(
//         getComputedStyle(box).getPropertyValue('transform').split(',')[4] || 0
//       );
//       const nextPosition = hovered
//         ? currentPosition + 5 // Slow down when hovered
//         : currentPosition + 30; // Normal speed
//       box.style.transform = `translateX(${nextPosition}px)`;

//       // Repeat for continuous movement
//       animationFrame = requestAnimationFrame(moveBox);
//     };
//     moveBox();

//     return () => cancelAnimationFrame(animationFrame); // Cleanup
//   }, [hovered]);

//   return (
//     <div
//       className="container"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="moving-box" ref={boxRef}></div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useRef, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const boxRef = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     let animationFrame;
//     const moveBox = () => {
//       const box = boxRef.current;
//       const currentPosition = parseFloat(
//         getComputedStyle(box).getPropertyValue('transform').split(',')[4] || 0
//       );
//       const boxWidth = box.offsetWidth; // Width of the moving box
//       const viewportWidth = window.innerWidth; // Width of the viewport

//       let nextPosition;
//       if (currentPosition > viewportWidth) {
//         // Reset position when the box exceeds the viewport width
//         nextPosition = -boxWidth;
//       } else {
//         // Increment position based on hover state
//         nextPosition = hovered ? currentPosition + 0.5 : currentPosition + 2;
//       }

//       box.style.transform = `translateX(${nextPosition}px)`;

//       // Repeat for continuous movement
//       animationFrame = requestAnimationFrame(moveBox);
//     };

//     moveBox();

//     return () => cancelAnimationFrame(animationFrame); // Cleanup
//   }, [hovered]);

//   return (
//     <div
//       className="container"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="moving-box" ref={boxRef}></div>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useRef, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const marqueeRef = useRef(null);
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const marquee = marqueeRef.current;
//     let scrollPosition = 0;
//     const speed = { normal: 2, slow: 0.5 }; // Speed control
//     let currentSpeed = speed.normal;

//     const scroll = () => {
//       scrollPosition -= currentSpeed;

//       // Reset when scroll exceeds total width
//       if (Math.abs(scrollPosition) >= marquee.scrollWidth / 2) {
//         scrollPosition = 0;
//       }

//       marquee.style.transform = `translateX(${scrollPosition}px)`;
//       requestAnimationFrame(scroll);
//     };

//     const handleHover = (hovering) => {
//       currentSpeed = hovering ? speed.slow : speed.normal;
//     };

//     scroll();
//     marquee.addEventListener('mouseenter', () => handleHover(true));
//     marquee.addEventListener('mouseleave', () => handleHover(false));

//     return () => {
//       marquee.removeEventListener('mouseenter', () => handleHover(true));
//       marquee.removeEventListener('mouseleave', () => handleHover(false));
//     };
//   }, []);

//   return (
//     <div className="marquee-container">
//       <div className="marquee" ref={marqueeRef} style={{display:"flex",gap:"30px"}}>
//         {/* Replace with the provided Cloudinary image URL */}
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 1"   width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 2"  width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 3"  width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 4"  width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 5" width={"400px"} />
//         {/* Duplicate for seamless scrolling */}
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 6" width={"400px"} />
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 7"  width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 8"  width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 7"  width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 8"  width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 7"  width={"400px"}/>
//         <img src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp" alt="Burner 8"  width={"400px"}/>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useRef, useEffect } from "react";
import "./App.css";

const App = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scrollPosition = 0; // Track the scroll position
    const speed = { normal: 2, slow: 0.5 }; // Define scroll speeds
    let currentSpeed = speed.normal;

    const scroll = () => {
      scrollPosition += currentSpeed; // Increment position for left-to-right movement

      // Reset when the scroll position exceeds half the total width
      if (scrollPosition >= marquee.scrollWidth / 2) {
        scrollPosition = 0; // Reset position for seamless scrolling
      }

      marquee.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(scroll); // Smooth continuous scrolling
    };

    const handleHover = (hovering) => {
      currentSpeed = hovering ? speed.slow : speed.normal; // Adjust speed on hover
    };

    scroll(); // Start scrolling

    marquee.addEventListener("mouseenter", () => handleHover(true));
    marquee.addEventListener("mouseleave", () => handleHover(false));

    return () => {
      // Clean up event listeners
      marquee.removeEventListener("mouseenter", () => handleHover(true));
      marquee.removeEventListener("mouseleave", () => handleHover(false));
    };
  }, []);

  return (
    <div className="marquee-container" style={{display: "flex", gap: "30px",flexDirection:"row-reverse"}}>
      <div
        className="marquee"
        ref={marqueeRef}
        style={{ display: "flex", gap: "30px",flexDirection:"row-reverse" }}
      >
        {/* Ensure duplication of images for seamless effect */}
        {Array.from({ length: 2}).map((_, idx) => (
          <React.Fragment key={idx}>
            <img
              src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp"
              alt={`Burner ${idx + 1}`}
              width={"400px"}
            />
            <img
              src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp"
              alt={`Burner ${idx + 2}`}
              width={"400px"}
            />
            <img
              src="https://res.cloudinary.com/diyha1kd9/image/upload/v1741214492/burners_r4rvtm.webp"
              alt={`Burner ${idx + 3}`}
              width={"400px"}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;


