'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

export default function BentoGrid() {
  const cards = [
    {
      title: 'Experience',
      description: 'Building scalable systems and APIs',
      icon: '💼',
      colors: [[139, 92, 246]], // Purple
    },
    {
      title: 'Projects',
      description: 'Cool things I\'ve built',
      icon: '🚀',
      colors: [[236, 72, 153], [232, 121, 249]], // Pink/Purple
    },
    {
      title: 'Blogs',
      description: 'Thoughts and learnings',
      icon: '✍️',
      colors: [[125, 211, 252]], // Sky blue
    },
    {
      title: 'Communities',
      description: 'Where I hang out',
      icon: '🌐',
      colors: [[34, 197, 94]], // Green
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      paddingTop: '6rem',
    }}>
      <h2 style={{
        fontSize: '2rem',
        marginBottom: '3rem',
        color: 'var(--foreground)',
        textAlign: 'left',
        maxWidth: '1200px',
        margin: '0 auto 3rem auto',
      }}>
        tl;dr about me:
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            description={card.description}
            colors={card.colors}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({ title, icon, description, colors }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '2px solid var(--accent)',
        borderRadius: '16px',
        padding: '2rem',
        minHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        background: 'var(--background)',
      }}
      className="group/canvas-card"
    >
      {/* Corner Icons */}
      <Icon style={{ position: 'absolute', height: '1.5rem', width: '1.5rem', top: '-0.75rem', left: '-0.75rem', color: 'var(--foreground)' }} />
      <Icon style={{ position: 'absolute', height: '1.5rem', width: '1.5rem', bottom: '-0.75rem', left: '-0.75rem', color: 'var(--foreground)' }} />
      <Icon style={{ position: 'absolute', height: '1.5rem', width: '1.5rem', top: '-0.75rem', right: '-0.75rem', color: 'var(--foreground)' }} />
      <Icon style={{ position: 'absolute', height: '1.5rem', width: '1.5rem', bottom: '-0.75rem', right: '-0.75rem', color: 'var(--foreground)' }} />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              inset: 0,
            }}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-transparent"
              colors={colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ position: 'relative', zIndex: 20, textAlign: 'center' }}>
        <div className="icon-container" style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          transition: 'all 0.2s',
        }}>
          {icon}
        </div>
        <h3 className="card-title" style={{
          fontSize: '1.5rem',
          color: 'var(--foreground)',
          margin: '0 0 0.5rem 0',
          transition: 'all 0.2s',
        }}>
          {title}
        </h3>
        <p className="card-description" style={{
          color: 'var(--accent)',
          margin: 0,
          fontSize: '1rem',
          transition: 'all 0.2s',
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const Icon = ({ style, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      style={style}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
