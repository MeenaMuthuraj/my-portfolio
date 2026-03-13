"use client";

import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Tuning of Quadrotor Using MATLAB",
      description: "Optimized PID controller gains in MATLAB and Simulink to enhance agility and stability of quadrotor systems.",
      tags: ["MATLAB", "Simulink", "PID Control"],
      image: "/quadrotor.png",
      size: 'large'
    },
    {
      title: "LLD Voting System",
      description: "A secure C++ voting system with a focus on auditability and data integrity.",
      tags: ["C++", "LLD", "Security"],
      image: "/voting.png",
      size: 'small'
    }
  ];

  return (
    <section id="projects" className="section-container animate-on-scroll">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>Featured <span className="text-gradient">Work</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>Bringing ideas to life through code and simulation.</p>
        </div>
        <div style={{ padding: '12px 24px', border: '1px solid var(--surface-border)', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          2 Selected Projects
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="glass-card" 
            style={{ 
              gridColumn: project.size === 'large' ? 'span 7' : 'span 5',
              padding: 0,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            
            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ color: 'var(--accent-light)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{tag}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
