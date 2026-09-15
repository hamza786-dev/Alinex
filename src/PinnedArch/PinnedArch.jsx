// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";
// import "../PinnedArch/PinnedArch.css";

// gsap.registerPlugin(ScrollTrigger);

// const PinnedArch = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//       gestureDirection: "vertical",
//       smoothTouch: true,
//       touchMultiplier: 2
//     });

//     function raf(time) {
//       lenis.raf(time);
//       ScrollTrigger.update();
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     const imgs = gsap.utils.toArray(".img-wrapper img");
//     const bgColors = ["#EDF9FF", "#FFECF2", "#FFE8DB"];

//     // Set z-index
//     document
//       .querySelectorAll(".arch__right .img-wrapper")
//       .forEach((element) => {
//         const order = element.getAttribute("data-index");
//         if (order !== null) element.style.zIndex = order;
//       });

//     ScrollTrigger.matchMedia({
//       "(min-width: 769px)": function () {
//         const mainTimeline = gsap.timeline({
//           scrollTrigger: {
//             trigger: ".arch",
//             start: "top top",
//             end: "bottom bottom",
//             pin: ".arch__right",
//             scrub: true
//           }
//         });

//         gsap.set(imgs, {
//           clipPath: "inset(0)",
//           objectPosition: "0px 0%"
//         });

//         imgs.forEach((_, index) => {
//           const currentImage = imgs[index];
//           const nextImage = imgs[index + 1] || null;

//           const sectionTimeline = gsap.timeline();

//           if (nextImage) {
//             sectionTimeline
//               .to(
//                 "body",
//                 {
//                   backgroundColor: bgColors[index],
//                   duration: 1.5,
//                   ease: "power2.inOut"
//                 },
//                 0
//               )
//               .to(
//                 currentImage,
//                 {
//                   clipPath: "inset(0px 0px 100%)",
//                   objectPosition: "0px 60%",
//                   duration: 1.5,
//                   ease: "none"
//                 },
//                 0
//               )
//               .to(
//                 nextImage,
//                 {
//                   objectPosition: "0px 40%",
//                   duration: 1.5,
//                   ease: "none"
//                 },
//                 0
//               );
//           }

//           mainTimeline.add(sectionTimeline);
//         });
//       },

//       "(max-width: 768px)": function () {
//         gsap.set(imgs, {
//           objectPosition: "0px 60%"
//         });

//         imgs.forEach((image, index) => {
//           gsap.timeline({
//             scrollTrigger: {
//               trigger: image,
//               start: "top-=70% top+=50%",
//               end: "bottom+=200% bottom",
//               scrub: true
//             }
//           })
//             .to(image, {
//               objectPosition: "0px 30%",
//               duration: 5,
//               ease: "none"
//             })
//             .to("body", {
//               backgroundColor: bgColors[index],
//               duration: 1.5,
//               ease: "power2.inOut"
//             });
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <div className="container" ref={containerRef}>
//       <div className="spacer"></div>

//       <div className="arch">
//         <div className="arch__left">
//           {/* Green */}
//           <div className="arch__info">
//             <div className="content">
//               <h2 className="header">Green Cityscape</h2>
//               <p className="desc">
//                 Vibrant streets with vertical gardens and solar buildings.
//               </p>
//               <a className="link green" href="#">
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Blue */}
//           <div className="arch__info">
//             <div className="content">
//               <h2 className="header">Blue Urban Oasis</h2>
//               <p className="desc">
//                 Avenues with azure facades and eco-structures.
//               </p>
//               <a className="link blue" href="#">
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Pink */}
//           <div className="arch__info">
//             <div className="content">
//               <h2 className="header">Fluid Architecture</h2>
//               <p className="desc">
//                 Desert refuge with fluid architecture and glowing interiors.
//               </p>
//               <a className="link pink" href="#">
//                 Learn More
//               </a>
//             </div>
//           </div>

//           {/* Orange */}
//           <div className="arch__info">
//             <div className="content">
//               <h2 className="header">Martian Arches</h2>
//               <p className="desc">
//                 Ethereal structures arc over tranquil waters.
//               </p>
//               <a className="link orange" href="#">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="arch__right">
//           <div className="img-wrapper" data-index="4">
//             <img src="https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp" alt="" />
//           </div>
//           <div className="img-wrapper" data-index="3">
//             <img src="https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp" alt="" />
//           </div>
//           <div className="img-wrapper" data-index="2">
//             <img src="https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp" alt="" />
//           </div>
//           <div className="img-wrapper" data-index="1">
//             <img src="https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp" alt="" />
//           </div>
//         </div>
//       </div>

//       <div className="spacer"></div>
//     </div>
//   );
// };

// export default PinnedArch;