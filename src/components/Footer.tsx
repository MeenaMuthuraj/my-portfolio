"use client";

import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'meenamuthuraj2004@gmail.com', href: 'mailto:meenamuthuraj2004@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '9361395936', href: 'tel:9361395936' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'meena-m-750996284', href: 'https://www.linkedin.com/in/meena-m-750996284/' },
  ];

  return (
    <footer id="contact" className="animate-on-scroll" style={{ background: 'var(--surface)', marginTop: '8rem', padding: '6rem 2rem' }}>
      <div className="section-container" style={{ padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>

          {/* Left Column: CTA and Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '500px' }}>
                Looking for an enthusiastic engineer to join your team? Feel free to reach out for collaborations or opportunities.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent)' }}>
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Address</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    59/60, Nandhavanapattistreet,<br />
                    Srivilliputtur, Viruthunagar-626125
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Links */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1rem',
                  borderRadius: '16px',
                  transition: 'background 0.3s ease'
                }}
                className="nav-link"
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'var(--background)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontSize: '1.4rem'
                }}>
                  {item.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* <div style={{ borderTop: '1px solid var(--surface-border)', marginTop: '4rem', paddingTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Meena M. Built with Next.js & TypeScript.
          </p>
        </div> */}
      </div>
    </footer>
  );
}
