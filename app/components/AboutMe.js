'use client';

import Image from "next/image";
import profilePic from "../Gemini_Generated_Image_898wya898wya898w.png";

import './aboutme.css';

export default function AboutMe() {
  return (
    <div className="about-me-container">
      {/* Left side - Text */}
      <div className="about-me-text">
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          color: 'var(--foreground)',
        }}>
          About Me
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'var(--accent)',
          marginBottom: '1rem',
        }}>
          Hey Everyone! My name is <strong style={{ color: 'var(--foreground)' }}>Yash</strong>. I'm a very curious engineer who works with Python, Django, DevOps, AI, Web Scraping (bit too much), and Data. I'm a system design nerd who loves designing efficient and scalable systems.
        </p>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'var(--accent)',
          marginBottom: '1.5rem',
        }}>
          I love contributing to Open Source in my free time, and most of the time I contribute to Django and Python-based projects. I'm a <strong style={{ color: 'var(--foreground)' }}>Member at Django Software Foundation</strong> and a core member at DjangoIndia!
        </p>
        
        <h3 style={{
          fontSize: '1.3rem',
          marginBottom: '1rem',
          color: 'var(--foreground)',
        }}>
          Extra context on me :)
        </h3>
        <ul style={{
          fontSize: '1rem',
          lineHeight: '1.8',
          color: 'var(--accent)',
          listStyle: 'none',
          padding: 0,
        }}>
          <li style={{ marginBottom: '0.5rem' }}>→ Speaker at <strong style={{ color: 'var(--foreground)' }}>PYCON ITALIA 2025</strong> - talked about designing parallel and concurrent applications with Python tools</li>
          <li style={{ marginBottom: '0.5rem' }}>→ <strong style={{ color: 'var(--foreground)' }}>DjangoNaut</strong>, Part of Team Saturn</li>
          <li style={{ marginBottom: '0.5rem' }}>→ Contribute to Django's Open Source codebase</li>
          <li style={{ marginBottom: '0.5rem' }}>→ Help in running <strong style={{ color: 'var(--foreground)' }}>DjangoIndia</strong></li>
          <li style={{ marginBottom: '0.5rem' }}>→ Ask me about Python, Django, Web Scraping, and Docker</li>
        </ul>
      </div>

      {/* Right side - Image */}
      <div className="about-me-image-container">
        <Image 
          src={profilePic}
          alt="Profile Picture"
          width={400}
          height={400}
          className="about-me-image"
          priority
        />
      </div>
    </div>
  );
}
