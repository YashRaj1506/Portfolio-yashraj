"use client";
import React, { useState, useEffect } from 'react';
import './navbar.css';

const NavLink = ({ onClick, children, href }) => {
  return (
    <a 
      href={href} 
      onClick={onClick} 
      className="nav-link"
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
    <nav className={`nav-container ${isScrolled ? 'nav-container-scrolled' : ''}`}>
      <div className="nav-left">
        <div className="logo-box">Y</div>
        <span className="logo-text">Yash</span>
      </div>

      <div className="nav-center">
        <NavLink href="#experience" onClick={scrollToExperience}>Experience</NavLink>
        <NavLink href="#projects" onClick={scrollToProjects}>Projects</NavLink>
        <NavLink href="#blogs" onClick={scrollToBlogs}>Blog</NavLink>
        <NavLink href="#communities" onClick={scrollToCommunities}>Communities</NavLink>
      </div>

      <div className="nav-right" />
    </nav>
  );
};

export default Navbar;
