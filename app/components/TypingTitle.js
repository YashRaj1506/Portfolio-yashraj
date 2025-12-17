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
    <h1 className="typing-title">
      {displayText}
      <span style={{ fontWeight: '100', animation: 'blink 1s step-end infinite' }}>|</span>
      <style jsx>{`
        .typing-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          min-height: 3.6rem;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .typing-title {
            font-size: 2rem;
            min-height: 2.4rem;
          }
        }
        @media (max-width: 480px) {
          .typing-title {
            font-size: 1.8rem;
            min-height: 2.22rem;
          }
        }
      `}</style>
    </h1>
  );
};

export default TypingTitle;
