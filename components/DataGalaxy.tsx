import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, ThreeElements } from '@react-three/fiber';
import { Instances, Instance } from '@react-three/drei';

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      primitive: any;
    }
  }
}

interface DataGalaxyProps {
  count: number;
}

// -- SHADER MATERIALS --

// 1. Line Shader: Smooth, continuous, subtle flow
const networkLineMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#e0f0ff') }, // Ice white/blue
    uOpacity: { value: 0.15 }, // Very transparent base
  },
  vertexShader: `
    attribute float aDistance; // Distance from center
    varying float vDistance;
    varying vec3 vPos;
    
    void main() {
      vDistance = aDistance;
      vPos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uOpacity;
    
    varying float vDistance;
    varying vec3 vPos;

    void main() {
      // Create a slow, outward "breathing" pulse
      // flow moves from 0 to infinity
      float flow = uTime * 3.0; 
      
      // Calculate distance from center (normalized roughly 0-40)
      float dist = length(vPos);
      
      // Create a wave that moves outward: sin(dist - time)
      float pulse = sin(dist * 0.2 - flow); // Wide wave
      pulse = smoothstep(0.8, 1.0, pulse); // Sharpen the peak slightly
      
      // Edge fade: Lines fade out as they get further from center
      float centerFade = 1.0 - smoothstep(0.0, 30.0, dist);
      
      // Combine opacity: Base low opacity + Pulse high opacity
      float alpha = (uOpacity * 0.3) + (uOpacity * pulse * centerFade);

      gl_FragColor = vec4(uColor, alpha);
    }
  `,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

export const DataGalaxy: React.FC<DataGalaxyProps> = ({ count }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Generate Data
  const { particles, linesGeometry } = useMemo(() => {
    const tempParticles = [];
    const points: THREE.Vector3[] = [];
    
    // Gaussian Distribution parameters
    const RADIUS_SPREAD = 12;
    
    // 1. Generate Points (Gaussian Cloud)
    for (let i = 0; i < count; i++) {
      // Box-Muller transform for normal distribution
      const u1 = Math.random();
      const u2 = Math.random();
      const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
      const u3 = Math.random();
      const z2 = Math.sqrt(-2.0 * Math.log(u3)) * Math.cos(2.0 * Math.PI * u3);

      const x = z0 * RADIUS_SPREAD * 0.6; // Spread out slightly
      const y = z1 * RADIUS_SPREAD * 0.5;
      const z = z2 * RADIUS_SPREAD * 0.6;
      
      const pos = new THREE.Vector3(x, y, z);
      
      // Store all points for line calculation
      points.push(pos);

      // Visuals for particles
      const dist = pos.length();
      
      // Scale: Center is denser but particles are smaller (dust). Mid-range are nodes.
      let scale = Math.random() * 0.08 + 0.02;
      if (dist < 5) scale *= 0.5; 

      // Color: Pure white in center, fading to grey-blue
      const color = new THREE.Color();
      // Normalized distance 0-1
      const nDist = Math.min(dist / 30.0, 1.0);
      
      // Mix White -> Deep Blue Grey -> Black
      const white = new THREE.Color('#ffffff');
      const deepBlue = new THREE.Color('#4a5568'); // Slate greyish blue
      
      color.lerpColors(white, deepBlue, nDist);
      
      tempParticles.push({ position: pos, scale, color });
    }

    // 2. Generate Topology (Lines)
    // Connecting all is impossible. We pick "Key Nodes" to connect.
    const linePosArray: number[] = [];
    
    // We select a subset of particles to act as "network nodes" that have lines
    const NETWORK_NODE_COUNT = 1500; 
    const indices = new Set<number>();
    while(indices.size < NETWORK_NODE_COUNT) {
        indices.add(Math.floor(Math.random() * count));
    }

    const nodeIndices = Array.from(indices);
    const maxConnDistSq = 8 * 8; // Max connection distance squared

    for (let i = 0; i < nodeIndices.length; i++) {
        const idxA = nodeIndices[i];
        const pA = points[idxA];
        
        // Connect to k nearest neighbors within the subset
        // Simple brute force on subset is fast enough: 1500^2 = 2.25M checks (fine for init)
        
        let connections = 0;
        for (let j = i + 1; j < nodeIndices.length; j++) {
            const idxB = nodeIndices[j];
            const pB = points[idxB];
            const distSq = pA.distanceToSquared(pB);

            if (distSq < maxConnDistSq) {
                linePosArray.push(pA.x, pA.y, pA.z);
                linePosArray.push(pB.x, pB.y, pB.z);
                connections++;
                // Limit connections per node to keep it clean
                if (connections >= 4) break; 
            }
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePosArray, 3));
    
    // Add attribute for shader (distance from center) to use in fade logic
    // Actually, we can calculate distance in vertex shader from position, 
    // but the position attribute is local. Since we are at 0,0,0 world, local pos = world pos roughly.
    
    return { particles: tempParticles, linesGeometry: geometry };
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
    }
    
    // Very slow, majestic rotation
    if (groupRef.current) {
        groupRef.current.rotation.y = t * 0.02; 
        groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.02; // Subtle tilt
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Particles (Stars/Nodes) */}
      <Instances range={count}>
        <sphereGeometry args={[1, 4, 4]} />
        <meshBasicMaterial toneMapped={false} />
        {particles.map((data, i) => (
          <Instance
            key={i}
            position={data.position}
            scale={data.scale}
            color={data.color}
          />
        ))}
      </Instances>

      {/* 2. Topology Lines */}
      <lineSegments geometry={linesGeometry}>
         <primitive object={networkLineMaterial} ref={materialRef} attach="material" />
      </lineSegments>
    </group>
  );
};