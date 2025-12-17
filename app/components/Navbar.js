"use client";
import React, { useState, useEffect } from 'react';

const NavLink = ({ onClick, children, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a 
      href={href} 
      onClick={onClick} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...styles.link,
        ...(isHovered ? styles.linkHover : {}),
      }}
    >
      {children}
    </a>
  );
};

const Navbar = ({ experienceRef, projectsRef, blogsRef, communitiesRef, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToExperience = (e) => {
    e.preventDefault();
    onNavigate?.();
    experienceRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    onNavigate?.();
    projectsRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBlogs = (e) => {
    e.preventDefault();
    onNavigate?.();
    blogsRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCommunities = (e) => {
    e.preventDefault();
    onNavigate?.();
    communitiesRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      ...styles.navContainer,
      ...(isScrolled ? styles.navContainerScrolled : {}),
    }}>
      <div style={styles.leftSection}>
        <div style={styles.logoBox}>Y</div>
        <span style={styles.logoText}>Yash</span>
      </div>

      <div style={styles.centerSection}>
        <NavLink href="#experience" onClick={scrollToExperience}>Experience</NavLink>
        <NavLink href="#projects" onClick={scrollToProjects}>Projects</NavLink>
        <NavLink href="#blogs" onClick={scrollToBlogs}>Blog</NavLink>
        <NavLink href="#communities" onClick={scrollToCommunities}>Communities</NavLink>
      </div>

      <div style={styles.rightSection} />
    </nav>
  );
};

const styles = {
  navContainer: {
    position: 'fixed',
    top: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 100,
    width: '90%',
    maxWidth: '800px',
    backgroundColor: '#fdfcf0', // Creamy match
    color: '#1a1a1a', // Black text
    borderRadius: '50px',
    padding: '0.75rem 0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(0,0,0,0.05)',
  },
  navContainerScrolled: {
    padding: '0.5rem 0.5rem',
    maxWidth: '750px',
    top: '1.5rem',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginLeft: '0.5rem',
    width: '100px', // Balance the right section
  },
  logoBox: {
    width: '32px',
    height: '32px',
    backgroundColor: '#1a1a1a', // Black Logo bg
    color: '#fdfcf0', // Creamy Logo text
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  logoText: {
    fontWeight: '600',
    fontSize: '1.1rem',
    letterSpacing: '-0.02em',
  },
  centerSection: {
    display: 'flex',
    gap: '0.5rem',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    alignItems: 'center',
  },
  link: {
    color: '#1a1a1a',
    fontSize: '0.9rem',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    opacity: 0.6,
    padding: '0.4rem 0.8rem',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
  },
  linkHover: {
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  rightSection: {
    width: '100px', // Balance the left section
    marginRight: '0.5rem',
  },
};

export default Navbar;
