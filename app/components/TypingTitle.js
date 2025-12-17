"use client";
import React, { useState, useEffect } from 'react';

const TypingTitle = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = "Hi, this is Yash Raj";

  useEffect(() => {
    const handleTyping = () => {
      // Loop is meaningless for a single string but good for extensibility
      // const i = loopNum % 1; 

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <h1 style={{ 
      fontSize: '3rem', 
      marginBottom: '1rem',
      fontWeight: '700',
      letterSpacing: '-0.02em',
      minHeight: '3.6rem', // Prevent layout shift
    }}>
      {displayText}
      <span style={{ fontWeight: '100', animation: 'blink 1s step-end infinite' }}>|</span>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </h1>
  );
};

export default TypingTitle;
