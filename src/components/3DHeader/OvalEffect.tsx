
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function OvalEffect() {
  const meshRef = useRef<Mesh>(null!);
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1;
    meshRef.current.position.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, -5]} rotation={[0, 0, 0]}>
      <torusGeometry args={[9, 3, 16, 100]} />
      <meshPhongMaterial 
        color="#3498f4" 
        opacity={0.6} 
        transparent={true} 
        shininess={100}
        wireframe={true}
      />
    </mesh>
  );
}
