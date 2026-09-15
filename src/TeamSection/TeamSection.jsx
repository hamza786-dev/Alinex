// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";

// /**
//  * TeamSection
//  * - Fullscreen Three.js slides (textured planes)
//  * - Titles overlayed and centered above each slide
//  * - Drag / wheel / touch interactions with momentum
//  * - Distortion (vertex displacement) reacting to movement
//  *
//  * Usage: <TeamSection />
//  */

// export default function TeamSection() {
//   const canvasRef = useRef(null);
//   const titlesContainerRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const titlesContainer = titlesContainerRef.current;
//     if (!canvas || !titlesContainer) return;

//     // ---------- Settings ----------
//     const slideWidth = 3.2;
//     const slideHeight = 1.8;
//     const gap = 0.25;
//     const slideCount = 10;
//     const images = [
//       "https://cdn.cosmos.so/2f49a117-05e7-4ae9-9e95-b9917f970adb?format=jpeg",
//       "https://cdn.cosmos.so/7b5340f5-b4dc-4c08-8495-c507fa81480b?format=jpeg",
//       "https://cdn.cosmos.so/f733585a-081e-48e7-a30e-e636446f2168?format=jpeg",
//       "https://cdn.cosmos.so/47caf8a0-f456-41c5-98ea-6d0476315731?format=jpeg",
//       "https://cdn.cosmos.so/f99f8445-6a19-4a9a-9de3-ac382acc1a3f?format=jpeg",
//     ];
//     const imageTitles = [
//       { title: "Hamza Ali", offset: { x: 0, y: -25 } },
//       { title: "ASTRAL NEBULA", offset: { x: 0, y: 30 } },
//       { title: "STELLAR DRIFT", offset: { x: 0, y: 20 } },
//       { title: "ORBITAL PATH", offset: { x: 0, y: -20 } },
//       { title: "CELESTIAL FLOW", offset: { x: 0, y: -15 } },
//     ];
//     const imagesCount = images.length;
//     const totalWidth = slideCount * (slideWidth + gap);
//     const slideUnit = slideWidth + gap;

//     // Interaction & distortion settings
//     const settings = {
//       wheelSensitivity: 0.01,
//       touchSensitivity: 0.01,
//       momentumMultiplier: 2.5,
//       smoothing: 0.1,
//       slideLerp: 0.075,
//       distortionDecay: 0.93,
//       maxDistortion: 4.0,
//       distortionSensitivity: 0.25,
//       distortionSmoothing: 0.075,
//       rotationFactor: 0.2,
//       animationSpeed: 0.5,
//       textFadeStart: slideWidth / 2,
//       textFadeEnd: slideWidth / 2 + 0.5,
//       textMaxBlur: 5,
//       distortionIntensity: 0.3,
//       horizontalDistortionDamping: 0.3,
//       momentumDistortionBoost: 0.3,
//       directionInfluence: 0.4,
//       waveAmplitudeBoost: 0.2,
//       directionChangeThreshold: 0.02,
//       directionSmoothing: 0.03,
//     };

//     // ---------- Three setup ----------
//     const renderer = new THREE.WebGLRenderer({
//       canvas,
//       antialias: true,
//       alpha: true,
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x000000);

//     const camera = new THREE.PerspectiveCamera(
//       50,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       100
//     );
//     camera.position.z = 5;

//     const ambientLight = new THREE.AmbientLight(0x404040, 1.0);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
//     directionalLight.position.set(0, 1, 1);
//     scene.add(directionalLight);

//     const pointLight = new THREE.PointLight(0xffffff, 1.5, 10);
//     pointLight.position.set(0, 0, 2);
//     scene.add(pointLight);

//     // move pointLight with mouse (light highlight)
//     const onMouseMoveLight = (e) => {
//       const mx = (e.clientX / window.innerWidth) * 2 - 1;
//       const my = -(e.clientY / window.innerHeight) * 2 + 1;
//       pointLight.position.x = mx * 3;
//       pointLight.position.y = my * 2;
//     };
//     window.addEventListener("mousemove", onMouseMoveLight);

//     // ---------- Slides creation (textured planes) ----------
//     const slides = [];
//     const titleElements = [];
//     const loader = new THREE.TextureLoader();

//     const correctImageColor = (tex) => {
//       if (tex && tex.colorSpace !== undefined) {
//         // modern three: set correct color space if available
//         tex.colorSpace = THREE.SRGBColorSpace;
//       }
//       return tex;
//     };

//     const createSlide = (index) => {
//       const geometry = new THREE.PlaneGeometry(slideWidth, slideHeight, 64, 32);
//       const material = new THREE.MeshPhysicalMaterial({
//         color: 0xffffff,
//         side: THREE.DoubleSide,
//         metalness: 0.2,
//         roughness: 0.8,
//         clearcoat: 0.4,
//         clearcoatRoughness: 0.3,
//       });
//       const mesh = new THREE.Mesh(geometry, material);
//       mesh.userData = {
//         originalVertices: [...geometry.attributes.position.array],
//         index,
//         time: Math.random() * 1000,
//         waveSpeed: 0.5 + Math.random() * 0.5,
//         waveAmplitude: 1.0,
//         wavePhase: Math.random() * Math.PI * 2,
//         currentX: 0,
//         targetX: 0,
//       };
//       // assign position.x based on index
//       mesh.position.x = index * (slideWidth + gap);
//       const imageIndex = index % imagesCount;
//       const imagePath = images[imageIndex];
//       loader.load(
//         imagePath,
//         (tex) => {
//           correctImageColor(tex);
//           material.map = tex;
//           material.needsUpdate = true;
//           // aspect cover handling (basic)
//           const imgAspect = tex.image.width / tex.image.height;
//           const slideAspect = slideWidth / slideHeight;
//           if (imgAspect > slideAspect) {
//             mesh.scale.y = slideAspect / imgAspect;
//           } else {
//             mesh.scale.x = imgAspect / slideAspect;
//           }
//         },
//         undefined,
//         (err) => console.warn("Texture load failed", err)
//       );
//       scene.add(mesh);
//       slides.push(mesh);

//       // create DOM title
//       const tInfo = imageTitles[imageIndex % imageTitles.length];
//       const titleEl = document.createElement("div");
//       titleEl.className = "slide-title";
//       titleEl.style.position = "absolute";
//       titleEl.style.pointerEvents = "none";
//       titleEl.style.opacity = "0";
//       titleEl.style.transition = "opacity .3s ease, filter .3s ease";
//       const h = document.createElement("h2");
//       h.className = "title-text";
//       h.textContent = tInfo.title;
//       const p = document.createElement("p");
//       p.className = "title-number";
//       p.textContent = `0${index + 1}`;
//       titleEl.appendChild(h);
//       titleEl.appendChild(p);
//       titlesContainer.appendChild(titleEl);
//       titleElements.push({ element: titleEl, offset: tInfo.offset, index });
//     };

//     for (let i = 0; i < slideCount; i++) createSlide(i);

//     // center slides
//     slides.forEach((s) => {
//       s.position.x -= totalWidth / 2;
//       s.userData.targetX = s.position.x;
//       s.userData.currentX = s.position.x;
//       s.rotation.x = (Math.random() - 0.5) * 0.06;
//       s.rotation.y = (Math.random() - 0.5) * 0.06;
//     });

//     // ---------- Title positioning ----------
//     const updateTitlePositions = () => {
//       titleElements.forEach((tObj) => {
//         const slide = slides[tObj.index];
//         const { element, offset } = tObj;
//         // Project slide center to screen
//         const v = new THREE.Vector3(slide.position.x, slide.position.y, slide.position.z);
//         v.project(camera);
//         const screenX = (v.x * 0.5 + 0.5) * window.innerWidth;
//         const screenY = (-v.y * 0.5 + 0.5) * window.innerHeight;
//         element.style.left = `${screenX}px`;
//         element.style.top = `${screenY + offset.y}px`;
//         const rect = element.getBoundingClientRect();
//         element.style.left = `${screenX - rect.width / 2}px`;

//         const distanceFromCenter = Math.abs(slide.position.x);
//         let opacity;
//         if (distanceFromCenter < settings.textFadeStart) opacity = 1;
//         else if (distanceFromCenter > settings.textFadeEnd) opacity = 0;
//         else opacity =
//           1 - (distanceFromCenter - settings.textFadeStart) / (settings.textFadeEnd - settings.textFadeStart);
//         element.style.opacity = opacity.toFixed(2);
//         const blurValue = (1 - opacity) * settings.textMaxBlur;
//         element.style.filter = `blur(${blurValue}px)`;
//       });
//     };

//     // ---------- Distortion (vertex displacement) ----------
//     let peakVelocity = 0;
//     let velocityHistory = [0, 0, 0, 0, 0];
//     let movementDirection = new THREE.Vector2(0, 0);

//     const updateDistortion = (mesh, distortionFactor, deltaTime) => {
//       mesh.userData.time += deltaTime * settings.animationSpeed * mesh.userData.waveSpeed;
//       const time = mesh.userData.time;
//       const positionAttribute = mesh.geometry.attributes.position;
//       const originalVertices = mesh.userData.originalVertices;
//       const momentumBoost = Math.min(1.0, peakVelocity * settings.momentumDistortionBoost);
//       const targetWaveAmplitude = 1.0 + momentumBoost * settings.waveAmplitudeBoost * 3.0;
//       mesh.userData.waveAmplitude = mesh.userData.waveAmplitude || 1.0;
//       mesh.userData.waveAmplitude += (targetWaveAmplitude - mesh.userData.waveAmplitude) * 0.05;

//       const effectiveDistortion = distortionFactor * settings.distortionIntensity;
//       const gravityCenterX = Math.sin(time * 0.1) * 0.5;
//       const gravityCenterY = Math.cos(time * 0.15) * 0.3;
//       const gravityStrength = Math.min(2.0, Math.max(0, effectiveDistortion)) * 2.0;

//       const dx = mesh.userData.targetX - mesh.userData.currentX;
//       const dxAbs = Math.abs(dx);
//       if (dxAbs > settings.directionChangeThreshold) {
//         const newDirection = dx > 0 ? -1 : 1;
//         const directionBlend = Math.min(1.0, settings.directionSmoothing * (1 + dxAbs * 5));
//         movementDirection.x += (newDirection - movementDirection.x) * directionBlend;
//       }
//       const velocityScale = Math.min(1.0, peakVelocity * 2);
//       const effectiveDirectionInfluence = settings.directionInfluence * velocityScale;

//       for (let i = 0; i < positionAttribute.count; i++) {
//         const x = originalVertices[i * 3];
//         const y = originalVertices[i * 3 + 1];
//         const z = originalVertices[i * 3 + 2];

//         const distX = x - gravityCenterX;
//         const distY = y - gravityCenterY;
//         const dist = Math.sqrt(distX * distX + distY * distY + 0.0001);
//         const gravityFactor = Math.min(1, 1 / (1 + dist * 8));

//         const dirWaveX = movementDirection.x * Math.sin(dist * 5 + time) * effectiveDirectionInfluence;
//         const dirWaveY = movementDirection.y * Math.cos(dist * 5 + time) * (effectiveDirectionInfluence * 0.3);

//         const pullX = distX * gravityFactor * gravityStrength * 0.5;
//         const pullY = distY * gravityFactor * gravityStrength * 0.5;

//         const stretchFactor = effectiveDistortion * 0.3 * velocityScale;
//         const stretchX = movementDirection.x * stretchFactor * (1 - Math.min(1, Math.abs(y)));
//         const stretchY = movementDirection.y * stretchFactor * (1 - Math.min(1, Math.abs(x)));

//         const waveScale = mesh.userData.waveAmplitude;
//         const phase = mesh.userData.wavePhase;
//         const pulse = Math.sin(time + dist * 3 + phase) * 0.05 * effectiveDistortion * waveScale;

//         const twistAmount = effectiveDistortion * 0.1 * gravityFactor * velocityScale;
//         const twistX = -y * twistAmount;
//         const twistY = x * twistAmount;

//         const horizontalDamping = settings.horizontalDistortionDamping * (1 - velocityScale * 0.3);

//         const newX =
//           x + Math.min(1, Math.max(-1, (pullX + stretchX + twistX + dirWaveX) * horizontalDamping));
//         const newY = y + Math.min(1, Math.max(-1, pullY + stretchY + twistY + dirWaveY));
//         const newZ = Math.min(2, Math.max(-2, (gravityFactor * gravityStrength + pulse) * (1 + Math.min(5, dist))));

//         positionAttribute.setXYZ(i, newX, newY, newZ);
//       }

//       positionAttribute.needsUpdate = true;
//       mesh.geometry.computeVertexNormals();

//       const targetRotFactor = Math.min(0.2, effectiveDistortion) * settings.rotationFactor * (1 + momentumBoost * 0.5);
//       mesh.userData.currentRotFactor = mesh.userData.currentRotFactor || 0;
//       mesh.userData.currentRotFactor += (targetRotFactor - mesh.userData.currentRotFactor) * 0.1;
//       const rotFactor = mesh.userData.currentRotFactor;
//       mesh.rotation.x = Math.sin(time * 0.2) * 0.1 * rotFactor;
//       mesh.rotation.y = Math.sin(time * 0.3 + 0.5) * 0.1 * rotFactor;
//       mesh.rotation.z = rotFactor * 0.05 * Math.sin(time * 0.1);
//     };

//     // ---------- Interaction state & listeners ----------
//     let currentPosition = 0;
//     let targetPosition = 0;
//     let isDragging = false;
//     let dragStartX = 0;
//     let dragLastX = 0;
//     let lastTime = 0;
//     let autoScrollSpeed = 0;
//     let isScrolling = false;
//     let lastDeltaX = 0;
//     let accumulatedMovement = 0;
//     let lastMovementInput = 0;

//     const onMouseDown = (e) => {
//       isDragging = true;
//       dragStartX = e.clientX;
//       dragLastX = dragStartX;
//       canvas.style.cursor = "grabbing";
//     };
//     const onMouseMove = (e) => {
//       if (!isDragging) return;
//       const mouseX = e.clientX;
//       const deltaX = mouseX - dragLastX;
//       lastDeltaX = deltaX;
//       accumulatedMovement += deltaX;
//       const now = performance.now();
//       const timeDelta = now - lastMovementInput;
//       if (Math.abs(accumulatedMovement) > 1 || timeDelta > 50) {
//         dragLastX = mouseX;
//         const dragStrength = Math.abs(accumulatedMovement) * 0.02;
//         targetPosition -= accumulatedMovement * settings.touchSensitivity;
//         accumulatedMovement = 0;
//         lastMovementInput = now;
//       }
//     };
//     const onMouseUp = () => {
//       if (!isDragging) return;
//       isDragging = false;
//       canvas.style.cursor = "grab";
//       const velocity = (dragLastX - dragStartX) * 0.005;
//       if (Math.abs(velocity) > 0.5) {
//         autoScrollSpeed = -velocity * settings.momentumMultiplier * 0.05;
//         isScrolling = true;
//         setTimeout(() => (isScrolling = false), 800);
//       }
//     };

//     const onWheel = (e) => {
//       e.preventDefault();
//       const wheelStrength = Math.abs(e.deltaY) * 0.001;
//       targetPosition -= e.deltaY * settings.wheelSensitivity;
//       isScrolling = true;
//       autoScrollSpeed = Math.min(Math.abs(e.deltaY) * 0.0005, 0.05) * Math.sign(e.deltaY);
//       clearTimeout(window.__team_scroll_timeout);
//       window.__team_scroll_timeout = setTimeout(() => (isScrolling = false), 150);
//     };

//     const onTouchStart = (e) => {
//       touchStartX = e.touches[0].clientX;
//       touchLastX = touchStartX;
//     };
//     // reusing drag vars for touch
//     let touchStartX = 0;
//     let touchLastX = 0;
//     const onTouchMove = (e) => {
//       e.preventDefault();
//       const touchX = e.touches[0].clientX;
//       const deltaX = touchX - touchLastX;
//       lastDeltaX = deltaX;
//       accumulatedMovement += deltaX;
//       const now = performance.now();
//       const timeDelta = now - lastMovementInput;
//       if (Math.abs(accumulatedMovement) > 1 || timeDelta > 50) {
//         touchLastX = touchX;
//         targetPosition -= accumulatedMovement * settings.touchSensitivity;
//         accumulatedMovement = 0;
//         lastMovementInput = now;
//         isScrolling = true;
//       }
//     };
//     const onTouchEnd = () => {
//       const velocity = (touchLastX - touchStartX) * 0.005;
//       if (Math.abs(velocity) > 0.5) {
//         autoScrollSpeed = -velocity * settings.momentumMultiplier * 0.05;
//         isScrolling = true;
//         setTimeout(() => (isScrolling = false), 800);
//       }
//     };

//     canvas.addEventListener("mousedown", onMouseDown);
//     window.addEventListener("mousemove", onMouseMove);
//     window.addEventListener("mouseup", onMouseUp);
//     window.addEventListener("mouseleave", onMouseUp);
//     window.addEventListener("wheel", onWheel, { passive: false });
//     window.addEventListener("touchstart", onTouchStart, { passive: false });
//     window.addEventListener("touchmove", onTouchMove, { passive: false });
//     window.addEventListener("touchend", onTouchEnd, { passive: false });

//     // keyboard navigation
//     const onKeyDown = (e) => {
//       if (e.key === "ArrowLeft") {
//         targetPosition += slideUnit;
//         movementDirection.x = 1;
//       } else if (e.key === "ArrowRight") {
//         targetPosition -= slideUnit;
//         movementDirection.x = -1;
//       }
//     };
//     window.addEventListener("keydown", onKeyDown);

//     // resize
//     const onResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       updateTitlePositions();
//     };
//     window.addEventListener("resize", onResize);

//     // ---------- Animation ----------
//     let lastTick = performance.now();
//     const animate = (time) => {
//       requestAnimationFrame(animate);
//       const deltaTime = (time - lastTick) / 1000 || 0.016;
//       lastTick = time;

//       // scrolling momentum
//       if (isScrolling) {
//         targetPosition += autoScrollSpeed;
//         const speedBasedDecay = 0.97 - Math.abs(autoScrollSpeed) * 0.5;
//         autoScrollSpeed *= Math.max(0.92, speedBasedDecay);
//         if (Math.abs(autoScrollSpeed) < 0.001) autoScrollSpeed = 0;
//       }

//       // position smoothing
//       const positionDelta = Math.abs(targetPosition - currentPosition);
//       const adaptiveSmoothing = settings.smoothing * (positionDelta < 0.1 ? 0.5 : 1.0);
//       currentPosition += (targetPosition - currentPosition) * adaptiveSmoothing;

//       // velocity tracking
//       const prevPos = currentPosition;
//       // (we track velocity based on change this frame)
//       const currentVelocity = Math.abs(currentPosition - prevPos) / (deltaTime || 0.016);
//       const significantVelocity = currentVelocity > 0.01 ? currentVelocity : 0;
//       velocityHistory.push(significantVelocity);
//       velocityHistory.shift();

//       // weighted average
//       const weights = [0.1, 0.15, 0.2, 0.25, 0.3];
//       let weightSum = 0, weightedVelocity = 0;
//       for (let i = 0; i < velocityHistory.length; i++) {
//         weightedVelocity += velocityHistory[i] * weights[i];
//         weightSum += weights[i];
//       }
//       const avgVelocity = weightSum > 0 ? weightedVelocity / weightSum : 0;
//       if (avgVelocity > peakVelocity) {
//         peakVelocity += (avgVelocity - peakVelocity) * 0.3;
//         const accelerationBoost = Math.min(0.1, avgVelocity * 0.03);
//         targetPosition += 0; // only used for distortion boost below if needed
//       }
//       peakVelocity *= 0.98;

//       // distortion smoothing variable
//       // We'll use a single distortion factor scaled by peakVelocity
//       const movementDistortion = Math.min(1.0, currentVelocity * currentVelocity * 2);
//       // update each slide
//       slides.forEach((slide, i) => {
//         let baseX = i * slideUnit - currentPosition;
//         baseX = ((baseX % totalWidth) + totalWidth) % totalWidth;
//         if (baseX > totalWidth / 2) baseX -= totalWidth;
//         if (Math.abs(baseX - slide.userData.targetX) > slideWidth * 2) slide.userData.currentX = baseX;
//         slide.userData.targetX = baseX;
//         slide.userData.currentX += (slide.userData.targetX - slide.userData.currentX) * settings.slideLerp;

//         // update position & small z offset
//         slide.position.x = slide.userData.currentX;
//         const distanceFromCenter = Math.abs(slide.position.x);
//         slide.position.z = distanceFromCenter * -0.05;

//         // compute distortion factor influenced by movement and peakVelocity
//         const distortionFactor = Math.min(settings.maxDistortion, movementDistortion * settings.momentumDistortionBoost + peakVelocity * settings.distortionSensitivity * 0.5);
//         updateDistortion(slide, distortionFactor, deltaTime);
//       });

//       updateTitlePositions();
//       renderer.render(scene, camera);
//     };
//     requestAnimationFrame(animate);

//     // ---------- Cleanup ----------
//     return () => {
//       // stop listeners
//       window.removeEventListener("mousemove", onMouseMoveLight);
//       canvas.removeEventListener("mousedown", onMouseDown);
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("mouseup", onMouseUp);
//       window.removeEventListener("mouseleave", onMouseUp);
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchmove", onTouchMove);
//       window.removeEventListener("touchend", onTouchEnd);
//       window.removeEventListener("keydown", onKeyDown);
//       window.removeEventListener("resize", onResize);

//       // dispose three objects
//       slides.forEach((s) => {
//         try {
//           s.geometry.dispose();
//           if (s.material.map) s.material.map.dispose();
//           s.material.dispose();
//           scene.remove(s);
//         } catch (err) { }
//       });
//       try {
//         renderer.dispose();
//       } catch (err) { }
//       // clear titles
//       try {
//         titlesContainer.innerHTML = "";
//       } catch (err) { }
//     };
//   }, []);

//   // Minimal CSS for titles — you can replace this with your stylesheet
//   return (
//     <>
//       <style>{`
//         .slide-title { font-family: "PP Neue Montreal", sans-serif; color: #fff; pointer-events:none; }
//         .title-text { font-size: clamp(24px, 6vw, 72px); line-height: 0.9; margin: 0; text-transform: uppercase; letter-spacing: -0.02em; }
//         .title-number { font-family: monospace; font-size: 12px; margin-top: 10px; display:flex; align-items:center; gap:10px; }
//         .title-number::before { content: ''; width:40px; height:3px; background:#ffe600; display:inline-block; }
//       `}</style>

//       <section style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden", background: "#000" }}>
//         <canvas ref={canvasRef} id="team-canvas" style={{ width: "100%", height: "100%", display: "block", cursor: "grab" }} />
//         <div ref={titlesContainerRef} id="titles-container" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2 }} />
//         <footer style={{ position: "fixed", bottom: 0, right: 0, padding: "2rem", color: "#fff", zIndex: 3, opacity: 1 }}>
//           <p style={{ margin: 0, textTransform: "uppercase", fontSize: 12 }}>Drag to explore</p>
//         </footer>
//       </section>
//     </>
//   );
// }






import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const TeamSection = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const titleContainerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const titleContainer = titleContainerRef.current;

    if (!container || !canvas || !titleContainer) return;

    // =========================
    // SETTINGS
    // =========================
    const slideWidth = 3.2;
    const slideHeight = 1.8;
    const gap = 0.25;
    const slideCount = 10;

    const images = [
      "https://cdn.cosmos.so/2f49a117-05e7-4ae9-9e95-b9917f970adb?format=jpeg",
      "https://cdn.cosmos.so/7b5340f5-b4dc-4c08-8495-c507fa81480b?format=jpeg",
      "https://cdn.cosmos.so/f733585a-081e-48e7-a30e-e636446f2168?format=jpeg",
      "https://cdn.cosmos.so/47caf8a0-f456-41c5-98ea-6d0476315731?format=jpeg",
      "https://cdn.cosmos.so/f99f8445-6a19-4a9a-9de3-ac382acc1a3f?format=jpeg",
    ];

    const imageTitles = [
      {
        title: "Hamza Ali",
        offset: { x: 0, y: -25 },
      },
      {
        title: "ASTRAL NEBULA",
        offset: { x: 0, y: 30 },
      },
      {
        title: "STELLAR DRIFT",
        offset: { x: 0, y: 20 },
      },
      {
        title: "ORBITAL PATH",
        offset: { x: 0, y: -20 },
      },
      {
        title: "CELESTIAL FLOW",
        offset: { x: 0, y: -15 },
      },
    ];

    const settings = {
      mouseSensitivity: 0.0015,
      touchSensitivity: 0.003,
      wheelSensitivity: 0.0015,
      smoothing: 0.08,
      maxVelocity: 0.15,
      distortionStrength: 0.35,
      distortionFrequency: 2.5,
      distortionSpeed: 0.002,
    };

    // =========================
    // SCENE
    // =========================
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // =========================
    // LIGHTING
    // =========================
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(2, 3, 5);
    scene.add(directionalLight);

    // =========================
    // GROUP
    // =========================
    const group = new THREE.Group();
    scene.add(group);

    // =========================
    // TEXTURE LOADER
    // =========================
    const textureLoader = new THREE.TextureLoader();

    const correctImageColor = (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
      return texture;
    };

    // =========================
    // SLIDES
    // =========================
    const slides = [];

    const createSlide = (index) => {
      const imageIndex = index % images.length;

      const texture = correctImageColor(
        textureLoader.load(images[imageIndex])
      );

      const geometry = new THREE.PlaneGeometry(
        slideWidth,
        slideHeight,
        32,
        32
      );

      const material = new THREE.MeshPhysicalMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        roughness: 0.7,
        metalness: 0.05,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x =
        index * (slideWidth + gap) -
        ((slideCount - 1) * (slideWidth + gap)) / 2;

      mesh.position.y = 0;
      mesh.position.z = 0;

      group.add(mesh);

      const titleElement = document.createElement("div");

      titleElement.className = "slide-title";
      titleElement.textContent =
        imageTitles[imageIndex % imageTitles.length].title;

      const offset =
        imageTitles[imageIndex % imageTitles.length].offset;

      titleElement.style.transform = `translate(
        ${offset.x}px,
        ${offset.y}px
      )`;

      titleContainer.appendChild(titleElement);

      slides.push({
        mesh,
        titleElement,
        originalVertices: Float32Array.from(
          geometry.attributes.position.array
        ),
        index,
      });
    };

    for (let i = 0; i < slideCount; i += 1) {
      createSlide(i);
    }

    // =========================
    // DISTORTION
    // =========================
    let peakVelocity = 0;
    let velocityHistory = [0, 0, 0, 0, 0];
    let movementDirection = new THREE.Vector2(0, 0);

    const updateDistortion = (slide, velocity, time) => {
      const positionAttribute =
        slide.mesh.geometry.attributes.position;

      const originalVertices = slide.originalVertices;

      const strength =
        Math.min(Math.abs(velocity) * 5, 1) *
        settings.distortionStrength;

      const direction = velocity >= 0 ? 1 : -1;

      for (let i = 0; i < positionAttribute.count; i += 1) {
        const x = originalVertices[i * 3];
        const y = originalVertices[i * 3 + 1];

        const wave =
          Math.sin(
            x * settings.distortionFrequency +
              time * settings.distortionSpeed * 1000
          ) *
          strength;

        const verticalWave =
          Math.cos(
            y * settings.distortionFrequency +
              time * settings.distortionSpeed * 700
          ) *
          strength *
          0.35;

        positionAttribute.setZ(
          i,
          wave * direction + verticalWave
        );
      }

      positionAttribute.needsUpdate = true;
    };

    // =========================
    // POSITION / INTERACTION
    // =========================
    let currentPosition = 0;
    let targetPosition = 0;

    let isDragging = false;
    let dragStartX = 0;
    let dragLastX = 0;

    let autoScrollSpeed = 0;
    let isScrolling = false;

    let accumulatedMovement = 0;
    let lastMovementInput = 0;

    // =========================
    // MOUSE DOWN
    // =========================
    const handleMouseDown = (event) => {
      isDragging = true;

      dragStartX = event.clientX;
      dragLastX = event.clientX;

      accumulatedMovement = 0;

      container.style.cursor = "grabbing";
    };

    // =========================
    // MOUSE MOVE
    // =========================
    const handleMouseMove = (event) => {
      if (!isDragging) return;

      const mouseX = event.clientX;
      const deltaX = mouseX - dragLastX;

      accumulatedMovement += deltaX;

      targetPosition -=
        accumulatedMovement * settings.touchSensitivity;

      dragLastX = mouseX;
      accumulatedMovement = 0;

      lastMovementInput = performance.now();
    };

    // =========================
    // MOUSE UP
    // =========================
    const handleMouseUp = () => {
      isDragging = false;

      container.style.cursor = "grab";
    };

    // =========================
    // WHEEL
    // =========================
    const handleWheel = (event) => {
      targetPosition -=
        event.deltaY * settings.wheelSensitivity;

      isScrolling = true;

      lastMovementInput = performance.now();

      clearTimeout(window.__team_scroll_timeout);

      window.__team_scroll_timeout = setTimeout(() => {
        isScrolling = false;
      }, 120);
    };

    // =========================
    // TOUCH START
    // =========================
    const handleTouchStart = (event) => {
      if (!event.touches.length) return;

      isDragging = true;

      dragStartX = event.touches[0].clientX;
      dragLastX = event.touches[0].clientX;

      accumulatedMovement = 0;
    };

    // =========================
    // TOUCH MOVE
    // =========================
    const handleTouchMove = (event) => {
      if (!isDragging || !event.touches.length) return;

      const touchX = event.touches[0].clientX;
      const deltaX = touchX - dragLastX;

      targetPosition -=
        deltaX * settings.touchSensitivity;

      dragLastX = touchX;

      lastMovementInput = performance.now();
    };

    // =========================
    // TOUCH END
    // =========================
    const handleTouchEnd = () => {
      isDragging = false;
    };

    // =========================
    // RESIZE
    // =========================
    const handleResize = () => {
      camera.aspect =
        window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
      );
    };

    // =========================
    // EVENTS
    // =========================
    container.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    container.addEventListener(
      "wheel",
      handleWheel,
      { passive: true }
    );

    container.addEventListener(
      "touchstart",
      handleTouchStart,
      { passive: true }
    );

    container.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true }
    );

    container.addEventListener(
      "touchend",
      handleTouchEnd
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    // =========================
    // ANIMATION
    // =========================
    let animationFrame;
    let previousTime = performance.now();
    let previousPosition = currentPosition;

    const animate = (time) => {
      animationFrame = requestAnimationFrame(animate);

      const deltaTime =
        (time - previousTime) / 1000;

      previousTime = time;

      // Smooth movement
      currentPosition +=
        (targetPosition - currentPosition) *
        settings.smoothing;

      // Calculate actual velocity
      const currentVelocity =
        Math.abs(
          currentPosition - previousPosition
        ) / (deltaTime || 0.016);

      previousPosition = currentPosition;

      const limitedVelocity = Math.min(
        currentVelocity,
        settings.maxVelocity
      );

      velocityHistory.push(limitedVelocity);

      if (velocityHistory.length > 5) {
        velocityHistory.shift();
      }

      const avgVelocity =
        velocityHistory.reduce(
          (sum, value) => sum + value,
          0
        ) / velocityHistory.length;

      if (avgVelocity > peakVelocity) {
        peakVelocity +=
          (avgVelocity - peakVelocity) * 0.3;
      } else {
        peakVelocity *= 0.92;
      }

      // Direction
      const movementDelta =
        currentPosition - previousPosition;

      if (Math.abs(movementDelta) > 0.0001) {
        movementDirection.set(
          movementDelta > 0 ? 1 : -1,
          0
        );
      }

      // =========================
      // UPDATE SLIDES
      // =========================
      slides.forEach((slide) => {
        const baseX =
          slide.index *
            (slideWidth + gap) -
          ((slideCount - 1) *
            (slideWidth + gap)) /
            2;

        let x =
          baseX + currentPosition;

        const totalWidth =
          slideCount * (slideWidth + gap);

        // Infinite horizontal loop
        x =
          ((x + totalWidth / 2) %
            totalWidth +
            totalWidth) %
            totalWidth -
          totalWidth / 2;

        slide.mesh.position.x = x;

        // Slight depth movement
        const distanceFromCenter =
          Math.abs(
            x / (slideWidth + gap)
          );

        slide.mesh.position.z =
          -distanceFromCenter * 0.05;

        // Distortion
        updateDistortion(
          slide,
          currentPosition - previousPosition,
          time
        );

        // =========================
        // TITLE POSITION
        // =========================
        const screenX =
          (x / (slideWidth + gap)) *
          (window.innerWidth /
            (slideCount * 2));

        slide.titleElement.style.left = `${
          50 + screenX
        }%`;

        slide.titleElement.style.opacity =
          Math.max(
            0,
            1 -
              Math.abs(
                x / (slideWidth * 2)
              )
          );

        slide.titleElement.style.transform =
          `translateX(-50%)`;
      });

      // =========================
      // AUTO SCROLL
      // =========================
      if (
        !isDragging &&
        !isScrolling &&
        performance.now() - lastMovementInput >
          2500
      ) {
        autoScrollSpeed = 0.0004;

        targetPosition -= autoScrollSpeed;
      }

      renderer.render(scene, camera);
    };

    animate(performance.now());

    // =========================
    // CLEANUP
    // =========================
    return () => {
      cancelAnimationFrame(animationFrame);

      container.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      container.removeEventListener(
        "wheel",
        handleWheel
      );

      container.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      container.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      container.removeEventListener(
        "touchend",
        handleTouchEnd
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      clearTimeout(window.__team_scroll_timeout);

      slides.forEach((slide) => {
        slide.mesh.geometry.dispose();

        if (slide.mesh.material.map) {
          slide.mesh.material.map.dispose();
        }

        slide.mesh.material.dispose();

        if (slide.titleElement) {
          slide.titleElement.remove();
        }
      });

      group.clear();

      renderer.dispose();
    };
  }, []);

  return (
    <>
      <style>{`
        .slide-title {
          position: absolute;
          top: 50%;
          left: 50%;
          font-family: "PP Neue Montreal", sans-serif;
          color: #fff;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          z-index: 10;
          transition: opacity 0.2s ease;
        }

        .team-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
          cursor: grab;
          touch-action: pan-y;
        }

        .team-section:active {
          cursor: grabbing;
        }

        .team-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .team-title-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .team-footer {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255, 255, 255, 0.55);
          font-family: "PP Neue Montreal", sans-serif;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          pointer-events: none;
          white-space: nowrap;
        }
      `}</style>

      <section
        ref={containerRef}
        className="team-section"
      >
        <canvas
          ref={canvasRef}
          className="team-canvas"
        />

        <div
          ref={titleContainerRef}
          className="team-title-container"
        />

        <div className="team-footer">
          Drag to explore
        </div>
      </section>
    </>
  );
};

export default TeamSection;