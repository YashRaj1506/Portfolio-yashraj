'use client';

import { useState, useEffect, useRef } from 'react';
import FloatingDock from "./components/FloatingDock";
import Navbar from "./components/Navbar";
import TypingTitle from "./components/TypingTitle";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Communities from "./components/Communities";
import './components/experience.css';
import './components/projects.css';
import './components/blogs.css';
import './components/communities.css';

export default function Home() {
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const communitiesRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      // Don't auto-scroll if user is navigating via navbar
      if (isScrolling || isNavigating) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // If user scrolls down past 20% of viewport on first section
      if (scrollPosition > windowHeight * 0.2 && scrollPosition < windowHeight * 0.8) {
        setIsScrolling(true);
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
      // If user scrolls up past 80% of first section
      else if (scrollPosition < windowHeight * 0.8 && scrollPosition > windowHeight * 0.2) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (window.scrollY < windowHeight * 0.5) {
            setIsScrolling(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              setIsScrolling(false);
            }, 1000);
          }
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling, isNavigating]);

  const handleNavigation = () => {
    setIsNavigating(true);
    setTimeout(() => {
      setIsNavigating(false);
    }, 1500);
  };

  return (
    <>
      <Navbar experienceRef={experienceRef} projectsRef={projectsRef} blogsRef={blogsRef} communitiesRef={communitiesRef} onNavigate={handleNavigation} />
      
      {/* Hero Section */}
      <main className="scroll-section" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <TypingTitle />
          <p className="hero-description" style={{ 
            fontSize: '1.25rem', 
            lineHeight: '1.6',
            color: 'var(--accent)',
            padding: '0 1rem',
          }}>
            A Backend engineer and a curious engineer building things for the world.
          </p>
          
          <div className="animate-blink" style={{ marginTop: '4rem', color: 'var(--accent)', fontSize: '0.9rem' }}>
            Scroll down for more<br/>
            ↓
          </div>
          <style jsx>{`
            @media (max-width: 768px) {
              .hero-description {
                font-size: 1rem !important;
              }
            }
          `}</style>
        </div>
        
        <FloatingDock />
      </main>

      {/* About Me Section */}
      <section ref={aboutMeRef} className="scroll-section">
        <AboutMe />
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="scroll-section">
        <Experience />
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="scroll-section">
        <Projects />
      </section>

      {/* Blogs Section */}
      <section ref={blogsRef} className="scroll-section">
        <Blogs />
      </section>

      {/* Communities Section */}
      <section ref={communitiesRef} className="scroll-section">
        <Communities />
      </section>
    </>
  );
}
