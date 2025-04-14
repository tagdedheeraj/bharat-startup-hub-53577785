
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import OvalEffect from './OvalEffect';

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <OvalEffect />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
