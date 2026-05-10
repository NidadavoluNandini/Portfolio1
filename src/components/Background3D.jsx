import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

function MovingStars() {
  const starsRef = useRef();

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta * 0.02;
      starsRef.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#050505']} />
        <ambientLight intensity={0.5} />
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <MovingStars />
        </Float>
      </Canvas>
    </div>
  );
}
