import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import LoadingScreen from './components/LoadingScreen';

const Root: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 3000;
    const intervalMs = 50;

    const steps = totalDuration / intervalMs;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setShowSplash(false);
          return 100;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  if (showSplash) {
    return <LoadingScreen progress={Math.round(progress)} />;
  }

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
