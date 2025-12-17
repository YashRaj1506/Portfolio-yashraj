'use client';

import Image from "next/image";

export default function Communities() {
  const items = [
    {
      title: "Speaker at PYCON ITALY 2025",
      image: "/yash_stage.png",
      description: "Honored to be selected as a speaker for PyCon Italy 2025. Sharing insights and experiences with the Python community in one of the world's most beautiful venues."
    },
    {
      title: "Organizer at Django India",
      image: "/4545.jpeg",
      description: "Contributing as an organizer for the Django India community, helping build a vibrant ecosystem for Django developers across the country."
    },
    {
      title: "Djangonaut Fellowship, Team Saturn",
      image: "/djnaut.png",
      description: "Proud member of Team Saturn in the Djangonaut Fellowship. Working on deep-diving into the Django ecosystem and contributing back to the core."
    },
    {
      title: "Speaker at Local Meetups",
      image: "/yash_talk1.jpeg",
      description: "Regular speaker at local meetups like PyDelhi and FOSS United, sharing knowledge about Python, web development, and open source."
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: 'var(--foreground)',
        textAlign: 'center',
      }}>
        Communities
      </h2>

      <div style={{
        maxWidth: '1000px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}>
        {items.map((item, index) => (
          <div
            key={index}
            className="community-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              border: '2px solid var(--accent)',
              borderRadius: '20px',
              padding: '2rem',
              backgroundColor: 'var(--background)',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}>
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={600}
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block'
                }}
                priority={index === 0}
              />
            </div>
            
            <div style={{ padding: '0 0.5rem' }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--foreground)',
                marginBottom: '1rem',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: 'var(--accent)',
                margin: 0,
              }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
