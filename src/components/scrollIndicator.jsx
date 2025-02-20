import React, { useEffect, useState } from "react";
//import "../index.css"; // Add styling here

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`scroll-indicator ${isVisible ? "visible" : "hidden"}`}>
      ↓ Scroll Down
    </div>
  );
};

export default ScrollIndicator;
