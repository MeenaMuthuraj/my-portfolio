"use client";

import React from 'react';

export default function Skills() {
  const technicalSkills = ["C", "C++", "Java", "PHP", "SQL", "MATLAB", "HTML/CSS", "JavaScript"];
  const areas = ["Data Structures", "Electronics & Comm", "PID Tuning", "Web Development"];

  return (
    <section id="skills" className="section-container animate-on-scroll">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        
        <div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem' }}>
            Technical <span className="text-gradient">Stack</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>
            A versatile toolkit focused on efficient programming and electronic systems engineering. Always learning and adapting to new technologies.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Core Languages</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {technicalSkills.map(skill => (
                  <div key={skill} className="glass" style={{ padding: '12px 24px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 500 }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Specializations</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {areas.map(area => (
                  <div key={area} className="glass" style={{ padding: '12px 24px', borderRadius: '100px', fontSize: '0.95rem', border: '1px solid var(--accent)', color: 'var(--accent-light)' }}>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Decoration for Skills */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '350px', 
            height: '350px', 
            borderRadius: '50%', 
            border: '2px dashed var(--accent)', 
            position: 'relative',
            animation: 'rotate 20s linear infinite'
          }}>
            <style>{`@keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            
            {/* Pulsating circles */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: 'var(--accent)', opacity: 0.1, borderRadius: '50%', filter: 'blur(30px)' }}></div>
          </div>
          
          <div className="glass-card" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '2rem', textAlign: 'center' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800 }} className="text-gradient">80%+</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Proficiency Average</p>
          </div>
        </div>

      </div>
    </section>
  );
}
