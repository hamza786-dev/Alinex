import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./styles.css";

// ✅ Import all images from src/Assets
import news2 from "../Assets/news2.jpg";
import img6 from "../Assets/news2.jpg";
import trip2 from "../Assets/news2.jpg";
import img8 from "../Assets/news2.jpg";
import trip4 from "../Assets/news2.jpg";
import img3 from "../Assets/news2.jpg";
import img7 from "../Assets/news2.jpg";

import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
} from "@react-three/drei";

function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);

  useFrame(() => {
    if (ref.current) {
      ref.current.material.color.lerp(
        c.set(hovered ? "white" : "#ccc"),
        hovered ? 0.4 : 0.05
      );
    }
  });

  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    />
  );
}

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();

  useFrame(() => {
    if (!group.current) return;

    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1;
    group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url={news2} />
      <Image position={[2, 0, 1]} scale={3} url={img6} />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url={trip2} />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url={img8} />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url={trip4} />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url={img3} />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url={img7}
      />
    </group>
  );
}

export default function ScrollGallery() {
  return (
    <div className="w-full h-screen relative">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <Images />
            </Scroll>
            <Scroll html>
              <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
                to
              </h1>
              <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
                be
              </h1>
              <h1
                style={{
                  position: "absolute",
                  top: "198.5vh",
                  left: "0.5vw",
                  fontSize: "40vw",
                }}
              >
                home
              </h1>
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
    </div>
  );
}
