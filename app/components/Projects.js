'use client';

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "DeepSer",
      description: "Web search tool like Perplexity that scans the internet and generates analytical reports.",
      image: "/perp.png",
      githubUrl: "https://github.com/YashRaj1506/DeepSer",
      blogUrl: "https://medium.com/@yashraj504300/building-my-own-perplexity-web-search-f6ce5cfa5d7c",
      tags: ["Python", "FastAPI", "RabbitMQ", "Redis", "Docker", "Playwright"]
    },
    {
      title: "Indic-Pipeline",
      description: "Audio filtering pipeline for IndicVoices Dataset using industry-standard audio metrics to ensure high-quality, speech-rich data for downstream training.",
      image: "/op.png",
      githubUrl: "https://github.com/YashRaj1506/Indic-Pipeline",
      tags: ["Python", "Docker", "RabbitMQ", "Audio Processing", "ML Pipeline"]
    },
    {
      title: "U-News-ual",
      description: "News REST API builder that scrapes data from multiple news websites and updates the API on an active period.",
      image: "/img2.png",
      githubUrl: "https://github.com/YashRaj1506/u-news-ual",
      tags: ["Python", "Django", "Web Scraping", "REST API", "News Aggregation"]
    },
    {
      title: "DjangoCraft CLI",
      description: "A powerful and easy-to-use CLI tool to set up your Django project with best practices and configurations.",
      image: "/img4.png",
      githubUrl: "https://github.com/YashRaj1506/djangocraft_cli",
      tags: ["Python", "Django", "Typer", "Developer Tools"]
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
        Projects
      </h2>

      <div style={{
        maxWidth: '800px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              border: '2px solid var(--accent)',
              borderRadius: '16px',
              padding: '1.5rem',
              backgroundColor: 'var(--background)',
            }}
          >
            {/* Image - always on top */}
            <div style={{
              width: '100%',
              height: '250px',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#fff',
            }}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--background)',
                  fontSize: '1rem',
                }}>
                  Image Placeholder
                </div>
              )}
            </div>

            {/* Content - always on bottom */}
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--foreground)',
                marginBottom: '0.5rem',
              }}>
                {project.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}>
                {project.description}
              </p>
              
              {/* Links */}
              {(project.githubUrl || project.blogUrl) && (
                <div style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  gap: '1rem',
                }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--foreground)',
                        textDecoration: 'underline',
                      }}
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.blogUrl && (
                    <a
                      href={project.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--foreground)',
                        textDecoration: 'underline',
                      }}
                    >
                      Blog ↗
                    </a>
                  )}
                </div>
              )}

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.3rem 0.7rem',
                      backgroundColor: 'transparent',
                      border: '1px solid var(--accent)',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: 'var(--foreground)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
