"use client";

import React from 'react';
import { FaTrophy, FaLightbulb, FaUserTie } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      title: "NPTEL Certified",
      description: "Successfully completed certifications in Data Structures and Algorithms with Elite performance.",
      icon: <FaTrophy />,
      color: "#f59e0b"
    },
    {
      title: "Problem Solver",
      description: "Proven track record in solving complex algorithmic challenges and logical puzzles.",
      icon: <FaLightbulb />,
      color: "#3b82f6"
    },
    {
      title: "Professional Excellence",
      description: "Recognized for strong leadership and collaboration skills during academic team projects.",
      icon: <FaUserTie />,
      color: "#8b5cf6"
    }
  ];

  return (
    <section className="section-container animate-on-scroll">
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>Key <span className="text-gradient">Highlights</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>Recognitions and personal attributes that drive my work.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {achievements.map((item, index) => (
          <div key={index} className="glass-card" style={{ 
            textAlign: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '1.5rem',
            padding: '3rem 2rem'
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: `${item.color}15`, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: item.color,
              fontSize: '2rem',
              border: `1px solid ${item.color}30`
            }}>
              {item.icon}
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
