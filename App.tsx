import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Scene } from './components/Scene';
import { UIOverlay } from './components/UIOverlay';
import { NewsContent } from './components/NewsContent';
import { ArticlePage } from './components/ArticlePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`relative w-full min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white transition-opacity duration-1000 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* 
        LAYER 1: 3D Background 
        Always fixed. The scene persists across route changes.
      */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 55], fov: 40, near: 0.1, far: 200 }}
          gl={{ 
            antialias: true, 
            powerPreference: "high-performance",
            alpha: false,
            stencil: false,
            depth: true
          }}
          dpr={[1, 1.5]}
        >
          <Scene />
        </Canvas>
      </div>

      {/* 
        LAYER 2: UI & Content
      */}
      <div className="relative z-10 w-full pointer-events-none flex flex-col min-h-screen">
        
        {/* Global Header (Fixed) */}
        <Header />

        {/* Content Area - Router Switch */}
        <div className="flex-grow">
          <Routes>
            {/* Home Route: Hero Banner + News Body */}
            <Route path="/" element={
              <>
                <UIOverlay />
                <NewsContent />
              </>
            } />
            
            {/* Article Route: Detail Page */}
            <Route path="/article" element={<ArticlePage />} />
          </Routes>
        </div>

        {/* Global Footer (Visible on all pages at bottom) */}
        <Footer />
        
      </div>

    </div>
  );
}