// App.tsx
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar'; // Your navbar with useNavigate

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const LoadingScreen = lazy(() => import('./components/LoadingScreen'));

function App() {
  return (
    <>
      <Navbar />  {/* Now has Router context */}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
