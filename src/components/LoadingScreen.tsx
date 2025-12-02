// LoadingScreen.tsx
import React from 'react';
import IMFLogo from '/logo/IMF_logo_tab.png';

type Props = {
  progress: number;
};

const LoadingScreen: React.FC<Props> = ({ progress }) => {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      {/* existing gold ring + logo */}
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '4px solid rgba(212, 175, 55, 0.25)',
            borderTopColor: '#D4AF37',
            animation: 'imf-spin 1s linear infinite',
          }}
        />
        <img
          src={IMFLogo}
          alt="IMF Logo"
          style={{
            width: '140px',
            height: '140px',
            objectFit: 'contain',
            animation: 'imf-pulse 2s ease-in-out infinite',
            filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 0.5))',
          }}
        />
      </div>

      {/* progress text */}
      <span
        style={{
          color: '#FFFFFF',
          fontSize: '20px',
          fontWeight: 700,
          letterSpacing: '0.12em',
        }}
      >
        Loading {clamped}%
      </span>

      {/* progress bar */}
      <div
        style={{
          width: '260px',
          height: '10px',
          borderRadius: '999px',
          backgroundColor: '#222',
          overflow: 'hidden',
          boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
        }}
      >
        <div
          style={{
            width: `${clamped}%`,
            height: '100%',
            background:
              'linear-gradient(90deg, #8a6b1f, #D4AF37, #f1e3a0)',
            transition: 'width 10ms linear',
          }}
        />
      </div>

      <style>
        {`
          @keyframes imf-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes imf-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.85; }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
