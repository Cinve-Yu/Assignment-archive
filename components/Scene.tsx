import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { DataGalaxy } from './DataGalaxy';
import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export const Scene: React.FC = () => {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 40, 90]} /> {/* Fade out distant particles */}
      
      {/* Controls configuration for News Page UX */}
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} /* DISABLE ZOOM: Allows user to scroll the page naturally */
        minDistance={20} 
        maxDistance={120}
        autoRotate={true}
        autoRotateSpeed={0.5}
        rotateSpeed={0.5}
        dampingFactor={0.05}
        maxPolarAngle={Math.PI / 1.5} /* Limit vertical rotation so user can't look from underneath */
      />

      {/* Lighting: No external lights. We rely on the shader's emissive nature. */}

      {/* The Core Network */}
      <DataGalaxy count={35000} />

      {/* Post Processing: Subtle, classy glow */}
      <EffectComposer enableNormalPass={false} multisampling={0}>
        <Bloom 
          luminanceThreshold={0.2} // Higher threshold: only the very bright centers glow
          mipmapBlur 
          intensity={0.8} // Subtle intensity, not neon
          radius={0.6} // Wide, soft glow
        />
        <Vignette eskil={false} offset={0.2} darkness={0.6} />
      </EffectComposer>
    </>
  );
};