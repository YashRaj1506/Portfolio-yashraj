'use client';

import Image from "next/image";
import profilePic from "../Gemini_Generated_Image_898wya898wya898w.png";

export default function AboutMe() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4rem',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {/* Left side - Text */}
      <div style={{
        flex: 1,
        maxWidth: '600px',
      }}>
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
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image 
          src={profilePic}
          alt="Profile Picture"
          width={400}
          height={400}
          style={{ 
            borderRadius: '16px',
            border: '3px solid var(--accent)',
            objectFit: 'cover',
          }}
          priority
        />
      </div>
    </div>
  );
}
