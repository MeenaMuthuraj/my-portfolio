"use client";

import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { IoPaperPlane } from 'react-icons/io5';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Restore Visibility Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        padding: '1rem max(2rem, calc((100% - 1200px)/2))',
        background: scrolled ? 'var(--background)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--surface-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
      }}>
        
        {/* Left: Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 900,
            color: '#fff',
            boxShadow: '0 0 20px var(--accent)'
          }}>
            M
          </div>
          <span style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '1px', color: 'var(--text-primary)' }}>MEENA</span>
        </div>

        <nav aria-label="Primary navigation" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              className="nav-link-premium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'flex-end' }}>
          <button 
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.2rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          
          <a 
            href="#contact" 
            style={{
              padding: '10px 20px',
              borderRadius: '14px',
              background: 'var(--surface)',
              border: '1px solid var(--surface-border)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--surface)';
              e.currentTarget.style.borderColor = 'var(--surface-border)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            Contact <IoPaperPlane size={12} />
          </a>
        </div>
      </div>
    </nav>
  );
}
