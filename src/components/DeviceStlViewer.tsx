"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { Color } from "three";
import type { BufferGeometry } from "three";
import type { Group } from "three";
import type { MeshStandardMaterial } from "three";
import styles from "./DeviceStlViewer.module.css";

// Full cycle (up + down) in seconds
const CYCLE_DURATION = 5;

const WHITE = new Color("#ffffff");
const ORANGE = new Color("#ffcc99");
const EMISSIVE_ORANGE = new Color("#dd7722");
const BLACK = new Color("#000000");

function lerpColor(out: Color, a: Color, b: Color, t: number) {
  out.r = a.r + (b.r - a.r) * t;
  out.g = a.g + (b.g - a.g) * t;
  out.b = a.b + (b.b - a.b) * t;
  return out;
}

function DeviceModel({ glow, scale }: { glow: number; scale: number }) {
  const groupRef = useRef<Group>(null);
  const materialRef = useRef<MeshStandardMaterial>(null);
  const geometry = useLoader(STLLoader, "/device.stl") as BufferGeometry;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.05;
    }
    const mat = materialRef.current;
    if (mat) {
      lerpColor(mat.color, WHITE, ORANGE, glow);
      lerpColor(mat.emissive, BLACK, EMISSIVE_ORANGE, glow);
      mat.emissiveIntensity = glow * 0.7;
      mat.toneMapped = glow < 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <pointLight
        color="#ff9944"
        intensity={22 * glow}
        distance={4}
        decay={2}
      />
      <pointLight
        color="#dd6622"
        intensity={10 * glow}
        distance={3}
        decay={2}
      />
      <mesh
        geometry={geometry}
        scale={scale}
        rotation={[-65 * (Math.PI / 180), 0, 0]}
      >
        <meshStandardMaterial
          ref={materialRef}
          color="#ffffff"
          emissive="#000000"
          emissiveIntensity={0}
          toneMapped
          metalness={0.1}
          roughness={0.4}
        />
      </mesh>
    </group>
  );
}

function SceneWithCycle({ scale }: { scale: number }) {
  const [glow, setGlow] = useState(0);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cycle = (t / CYCLE_DURATION) * Math.PI * 2;
    const next = (Math.sin(cycle) + 1) * 0.5;
    setGlow(next);
  });

  return (
    <>
      <Suspense fallback={null}>
        <DeviceModel glow={glow} scale={scale} />
      </Suspense>
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.35}
          luminanceSmoothing={0.3}
          intensity={glow * 0.6}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}

const MOBILE_BREAKPOINT = 600;

export default function DeviceStlViewer() {
  const [scale, setScale] = useState(0.15);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setScale(mq.matches ? 0.1 : 0.15);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className={styles.container}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} />
        <directionalLight position={[-10, -10, 5]} intensity={1.2} />
        <SceneWithCycle scale={scale} />
      </Canvas>
    </div>
  );
}
