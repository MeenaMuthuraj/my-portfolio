import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="bg-artifacts">
      <div className="blob" style={{
        width: '600px',
        height: '600px',
        background: 'var(--blob-1)',
        top: '-10%',
        left: '-10%',
      }}></div>
      <div className="blob" style={{
        width: '500px',
        height: '500px',
        background: 'var(--blob-2)',
        bottom: '10%',
        right: '5%',
        animationDelay: '-5s'
      }}></div>
      <div className="blob" style={{
        width: '300px',
        height: '300px',
        background: 'var(--accent-1)',
        opacity: 0.05,
        top: '40%',
        left: '20%',
        animationDelay: '-10s'
      }}></div>
    </div>
  );
}
