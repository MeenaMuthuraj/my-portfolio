"use client";

import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="about" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '40px 0 0 0' }}>
      <div className="hero-grid"></div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1, paddingBottom: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center' }}>

          {/* Left Side: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h1 style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--hero-text)', lineHeight: 1.1, letterSpacing: '-2px' }}>
                Hi, I'm <span style={{ color: 'var(--brand-blue)' }}>Meena M</span>
              </h1>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--hero-subtext)' }}>
                QA Engineer
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <FaMapMarkerAlt style={{ color: 'var(--brand-blue)' }} />
                <span>Viruthunagar, Tamil Nadu, India</span>
              </div>
            </div>

            <p style={{ fontSize: '1.25rem', color: 'var(--hero-subtext)', maxWidth: '650px', lineHeight: 1.6 }}>
              I ensure software excellence through rigorous testing and automated validation processes. Focused on simulation-driven design and high-performance applications with 1 Year of dedicated experience.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <a href="#projects" className="btn-hero-primary">
                View My Work &rarr;
              </a>
              <a href="#contact" className="btn-hero-secondary">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side: Floating Card */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div className="profile-card-floating">
              <div className="initials-avatar">
                MM
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>Meena M</h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>QA Engineer</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  <FaMapMarkerAlt size={12} />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>

              <div style={{ width: '100%', borderTop: '1px solid var(--surface-border)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Experience</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>1 Year</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Company</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Skillmine Tech</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Focus</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>System Quality</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '1rem' }}>
                {[
                  { Icon: FaGithub, label: 'GitHub Profile' },
                  { Icon: FaLinkedinIn, label: 'LinkedIn Profile' },
                  { Icon: FaEnvelope, label: 'Send Email' },
                  { Icon: FaBriefcase, label: 'Portfolio' },
                ].map(({ Icon, label }) => (
                  <button key={label} aria-label={label} style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '12px',
                    background: 'var(--brand-blue-soft)',
                    color: 'var(--brand-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: 'none',
                  }}>
                    <Icon />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar-horizontal">
          <div className="stat-group">
            <span className="val">1+</span>
            <span className="label">Year Experience</span>
          </div>
          <div className="stat-group">
            <span className="val">03+</span>
            <span className="label">Projects Built</span>
          </div>
          <div className="stat-group">
            <span className="val">100%</span>
            <span className="label">Commitment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
