
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import OvalEffect from './OvalEffect';

export default function Scene() {
  const [isClient, setIsClient] = useState(false);

  // Make sure we only render the Canvas on the client side
  useEffect(() => {
    setIsClient(true);
    
    // Thorough cleanup for the Three.js context when unmounting
    return () => {
      // Force cleanup of any WebGL contexts that might be lingering
      try {
        const canvases = document.querySelectorAll('canvas');
        canvases.forEach(canvas => {
          // Get the WebGL context and lose it
          const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
          if (gl && 'getExtension' in gl) {
            try {
              // @ts-ignore - we know this is a WebGL context
              const ext = gl.getExtension('WEBGL_lose_context');
              if (ext) ext.loseContext();
            } catch (e) {
              console.debug("WebGL context cleanup error:", e);
            }
          }
          
          // Try to remove the canvas element itself
          try {
            if (canvas.parentNode) {
              canvas.parentNode.removeChild(canvas);
            }
          } catch (e) {
            console.debug("Canvas removal error:", e);
          }
        });
        
        // Clean up any Three.js event listeners that might be attached to the window
        window.removeEventListener('resize', () => {});
      } catch (e) {
        console.debug("3D scene cleanup error:", e);
      }
    };
  }, []);

  // Don't render on server or during hydration
  if (!isClient) {
    return <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden"></div>;
  }

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
