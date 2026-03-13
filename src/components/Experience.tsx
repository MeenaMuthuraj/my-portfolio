"use client";

import React from 'react';
import { FaLaptopCode, FaRocket, FaTools } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      title: "QA Engineer",
      company: "Skillmine Technologies",
      period: "1 Year",
      description: "Ensuring software quality through rigorous testing, bug tracking, and automated validation processes.",
      icon: <FaLaptopCode />,
      tags: ["Quality Assurance", "Manual Testing", "Automation"]
    },
    {
      title: "MATLAB & SIMULINK Workshop",
      company: "Pantech Solutions",
      period: "15 Days",
      description: "Hands-on experience in control system design and simulation using MATLAB and Simulink.",
      icon: <FaLaptopCode />,
      tags: ["Automation", "Simulation"]
    },
    {
      title: "C++ Development Intern",
      company: "Codsoft",
      period: "1 Month",
      description: "Developed several CLI applications emphasizing logic optimization and data structures.",
      icon: <FaRocket />,
      tags: ["Logic", "Architecture"]
    },
    {
      title: "Embedded Systems Training",
      company: "Technical Training Center",
      period: "Weekly Workshop",
      description: "Integrated various sensors and microcontrollers for real-time data processing.",
      icon: <FaTools />,
      tags: ["Hardware", "Integration"]
    }
  ];

  return (
    <section id="experience" className="section-container animate-on-scroll">
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>Professional <span className="text-gradient">Growth</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>My professional career journey and specialized training.</p>
      </div>
      
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card animate-on-scroll">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '16px', 
                background: 'var(--accent-gradient)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#fff',
                fontSize: '1.8rem',
                boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)'
              }}>
                {exp.icon}
              </div>
              <span style={{ 
                fontSize: '0.85rem', 
                color: 'var(--accent-light)', 
                fontWeight: 700, 
                padding: '8px 16px', 
                borderRadius: '100px', 
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}>
                {exp.period}
              </span>
            </div>

            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{exp.title}</h3>
              <p style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '0.5px' }}>{exp.company}</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.05rem' }}>{exp.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px', 
                    color: 'var(--text-primary)',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
