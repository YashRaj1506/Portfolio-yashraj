'use client';

export default function Blogs() {
  const blogs = [
    {
      title: "Building my own Perplexity Web Search",
      summary: "A deep dive into how I built a baseline version of a Perplexity-style web search tool in my free time, focusing on report generation and intelligent web scraping.",
      link: "https://medium.com/@yashraj504300/building-my-own-perplexity-web-search-f6ce5cfa5d7c",
      date: "Dec 2024"
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
        Blogs
      </h2>

      <div style={{
        maxWidth: '800px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}>
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              border: '2px solid var(--accent)',
              borderRadius: '16px',
              padding: '1.5rem',
              backgroundColor: 'var(--background)',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--foreground)',
                margin: 0,
              }}>
                {blog.title}
              </h3>
              <span style={{
                fontSize: '0.85rem',
                color: 'var(--accent)',
                opacity: 0.8,
              }}>
                {blog.date}
              </span>
            </div>
            
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: 'var(--accent)',
              margin: 0,
            }}>
              {blog.summary}
            </p>
            
            <span style={{
              fontSize: '0.9rem',
              color: 'var(--foreground)',
              fontWeight: '500',
              marginTop: '0.5rem',
            }}>
              Read on Medium ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
