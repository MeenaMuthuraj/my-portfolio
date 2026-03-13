"use client";

import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Education() {
  const education = [
    {
      degree: "B.E Electronics and Communication Engineering",
      institution: "PSR Engineering College, Sivakasi",
      period: "2021 - 2025",
      details: "CGPA: 8.3",
      accent: "var(--accent)"
    },
    {
      degree: "HSC (XII)",
      institution: "S.H.G.Hr.Sec.School, Srivilliputtur",
      period: "2020 - 2021",
      details: "Percentage: 92.2%",
      accent: "var(--accent-light)"
    }
  ];

  return (
    <section id="education" className="section-container animate-on-scroll">
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>Educational <span className="text-gradient">Journey</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>My academic foundation and growth.</p>
      </div>

      <div className="timeline">
        {education.map((item, index) => (
          <div key={index} className="timeline-item animate-on-scroll">
            <div className="timeline-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.degree}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <FaCalendarAlt /> {item.period}
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                <FaMapMarkerAlt size={14} />
                <span style={{ fontSize: '1rem' }}>{item.institution}</span>
              </div>
              
              <div style={{ 
                display: 'inline-block', 
                padding: '6px 16px', 
                borderRadius: '8px', 
                background: 'rgba(139, 92, 246, 0.1)', 
                color: 'var(--accent-light)',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}>
                {item.details}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
