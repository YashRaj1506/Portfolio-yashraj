'use client';

export default function Experience() {
  const experiences = [
    {
      company: "Clikkin",
      role: "Backend Engineer",
      period: "Apr 2025 – Oct 2025",
      location: "Remote",
      highlights: [
        "Led development of 3 products, designing multiple backend architectures including a full Django GraphQL API from scratch",
        "Built an in-house Perplexity-style web search tool with AI pipelines using DSPy, Selenium, and BeautifulSoup",
        "Developed optimized Dockerfiles reducing image size from 1.5 GB to 720 MB while maintaining production stability",
        "Managed DevOps operations with Terraform, AWS services and Azure AI Foundry"
      ]
    },
    {
      company: "Django Software Foundation",
      role: "Individual Member",
      period: "Dec 2025 – Present",
      location: "Remote",
      highlights: [
        "Recognized and nominated as an individual member by the Django Software Foundation"
      ],
      links: [
        { text: "Individual Member Profile", url: "https://www.djangoproject.com/foundation/individual-members/#:~:text=Yann%20Malet-,Yash%20Raj,-Yigit%20Guler" }
      ]
    },
    {
      company: "Django Software Foundation",
      role: "Open Source Developer",
      period: "Oct 2024 – Present",
      location: "Remote",
      highlights: [
        "Contributed to Django framework source code used by Instagram, Spotify, Dropbox, and Pinterest",
        "Contributed to Django's async testing framework, file storage, docstrings, and documentation"
      ],
      links: [
        { text: "GitHub Contributions", url: "https://github.com/django/django/commits?author=YashRaj1506" }
      ]
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
        Experience
      </h2>

      <div style={{
        maxWidth: '900px',
        width: '100%',
        position: 'relative',
      }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '40px',
          bottom: '40px',
          width: '2px',
          background: 'var(--accent)',
        }} />

        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              marginBottom: index < experiences.length - 1 ? '4rem' : '0',
              paddingLeft: '60px',
            }}
          >
            {/* Dot */}
            <div style={{
              position: 'absolute',
              left: '11px',
              top: '8px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'var(--background)',
              border: '3px solid var(--foreground)',
              zIndex: 2,
            }} />

            {/* Content without box */}
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '0.5rem',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: 'var(--foreground)',
                    margin: 0,
                  }}>
                    {exp.company}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--accent)',
                    margin: '0.25rem 0 0 0',
                    fontWeight: '500',
                  }}>
                    {exp.role}
                  </p>
                </div>
                <div style={{
                  textAlign: 'right',
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--accent)',
                    margin: 0,
                  }}>
                    {exp.period}
                  </p>
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent)',
                    margin: '0.25rem 0 0 0',
                  }}>
                    {exp.location}
                  </p>
                </div>
              </div>

              <ul style={{
                marginTop: '1rem',
                paddingLeft: '1.2rem',
                listStyle: 'none',
              }}>
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: 'var(--accent)',
                    marginBottom: '0.5rem',
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '-1.2rem',
                      color: 'var(--foreground)',
                    }}>→</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Links if available */}
              {exp.links && (
                <div style={{
                  marginTop: '1rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                }}>
                  {exp.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--foreground)',
                        textDecoration: 'underline',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      {link.text} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
