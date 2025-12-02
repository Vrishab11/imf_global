// src/components/LoadingScreen.tsx
import React from 'react';
import IMFLogo from '/logo/IMF_logo_tab.png';

const LoadingScreen: React.FC = () => {
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
      }}
    >
      {/* Gold spinning ring */}
      <div
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '4px solid rgba(212, 175, 55, 0.25)',
          borderTopColor: '#D4AF37',
          animation: 'imf-spin 1.2s linear infinite',
        }}
      />

      {/* Logo + text */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
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
        {/* <span
          style={{
            color: '#FFFFFF',
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            animation: 'imf-pulse 2s ease-in-out infinite',
          }}
        >
          Loading...
        </span> */}
      </div>

      {/* Keyframes */}
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
