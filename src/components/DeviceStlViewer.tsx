"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import type { BufferGeometry } from "three";
import type { Group } from "three";
import styles from "./DeviceStlViewer.module.css";

function DeviceModel() {
  const groupRef = useRef<Group>(null);
  const geometry = useLoader(STLLoader, "/device.stl") as BufferGeometry;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 4) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        geometry={geometry}
        scale={0.15}
        rotation={[-65 * (Math.PI / 180), 0, 0]}
      >
        <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.6} />
      </mesh>
    </group>
  );
}

export default function DeviceStlViewer() {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} />
        <directionalLight position={[-10, -10, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <DeviceModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
