// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';  // ← Add this
import App from './App.tsx';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <BrowserRouter>  {/* ← Router INSIDE Suspense */}
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
