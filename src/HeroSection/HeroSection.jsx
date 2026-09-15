import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import intro from "../Assets/intros.mp4";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    number: "01",
    name: "React.js",
    type: "FRONTEND",
    href: "#projects",
  },
  {
    number: "02",
    name: "Next.js",
    type: "FRAMEWORK",
    href: "#projects",
  },
  {
    number: "03",
    name: "Three.js",
    type: "3D / WEBGL",
    href: "#projects",
  },
  {
    number: "04",
    name: "React Native",
    type: "MOBILE",
    href: "#projects",
  },
  {
    number: "05",
    name: "Node.js",
    type: "BACKEND",
    href: "#projects",
  },
  {
    number: "06",
    name: "MongoDB",
    type: "DATABASE",
    href: "#projects",
  },
];

const HeroSection = () => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);

  const introRef = useRef(null);
  const introLineRef = useRef(null);

  const videoSceneRef = useRef(null);
  const videoBoxRef = useRef(null);
  const videoRef = useRef(null);

  const techSceneRef = useRef(null);
  const techHeadingRef = useRef(null);
  const techItemsRef = useRef([]);

  const devSceneRef = useRef(null);
  const devHeadingRef = useRef(null);
  const browserRef = useRef(null);
  const phoneRef = useRef(null);
  const arrowRef = useRef(null);

  const securitySceneRef = useRef(null);
  const securityHeadingRef = useRef(null);
  const securityCoreRef = useRef(null);
  const securityTextRef = useRef(null);

  const networkSceneRef = useRef(null);
  const networkHeadingRef = useRef(null);
  const networkNodesRef = useRef([]);
  const networkLinesRef = useRef([]);

  const finalSceneRef = useRef(null);
  const finalSmallRef = useRef(null);
  const finalWordsRef = useRef([]);
  const finalCtaRef = useRef(null);

  const progressRef = useRef(null);

  const [sound, setSound] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /*
      =====================================================
      INITIAL STATES
      =====================================================
      */

      gsap.set(introRef.current, {
        opacity: 0,
        y: 80,
        scale: 1.08,
      });

      gsap.set(introLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(videoSceneRef.current, {
        opacity: 0,
      });

      gsap.set(videoBoxRef.current, {
        opacity: 0,
        scale: 0.82,
        y: 80,
      });

      gsap.set(videoRef.current, {
        scale: 1.2,
      });

      gsap.set(techSceneRef.current, {
        opacity: 0,
      });

      gsap.set(techHeadingRef.current, {
        opacity: 0,
        x: -100,
      });

      gsap.set(techItemsRef.current, {
        opacity: 0,
        x: 80,
        y: 30,
      });

      gsap.set(devSceneRef.current, {
        opacity: 0,
      });

      gsap.set(devHeadingRef.current, {
        opacity: 0,
        y: 70,
      });

      gsap.set(browserRef.current, {
        opacity: 0,
        x: -180,
        rotateY: 25,
        scale: 0.8,
      });

      gsap.set(phoneRef.current, {
        opacity: 0,
        x: 180,
        rotateY: -25,
        scale: 0.7,
      });

      gsap.set(arrowRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(securitySceneRef.current, {
        opacity: 0,
      });

      gsap.set(securityHeadingRef.current, {
        opacity: 0,
        x: -80,
      });

      gsap.set(securityCoreRef.current, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(securityTextRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(networkSceneRef.current, {
        opacity: 0,
      });

      gsap.set(networkHeadingRef.current, {
        opacity: 0,
        y: 60,
      });

      gsap.set(networkNodesRef.current, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(networkLinesRef.current, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(finalSceneRef.current, {
        opacity: 0,
      });

      gsap.set(finalSmallRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(finalWordsRef.current, {
        opacity: 0,
        y: 100,
        rotateX: 60,
      });

      gsap.set(finalCtaRef.current, {
        opacity: 0,
        y: 40,
      });

      /*
      =====================================================
      MASTER SCROLL TIMELINE
      =====================================================
      */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.4,
          pin: stickyRef.current,
          anticipatePin: 1,

          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      /*
      =====================================================
      01 — IDENTITY
      =====================================================
      */

      timeline
        .to(introRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        })

        .to(
          introLineRef.current,
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
          },
          "-=1.1"
        )

        .to(introRef.current, {
          opacity: 0,
          y: -100,
          scale: 0.9,
          duration: 1.2,
          ease: "power3.in",
        })

        /*
        =====================================================
        02 — VIDEO
        =====================================================
        */

        .to(videoSceneRef.current, {
          opacity: 1,
          duration: 0.5,
        })

        .to(videoBoxRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
        })

        .to(
          videoRef.current,
          {
            scale: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<"
        )

        .to(videoBoxRef.current, {
          scale: 1.05,
          duration: 1.5,
          ease: "sine.inOut",
        })

        .to(videoBoxRef.current, {
          opacity: 0,
          y: -100,
          scale: 1.12,
          duration: 1.2,
          ease: "power3.in",
        })

        .to(videoSceneRef.current, {
          opacity: 0,
          duration: 0.4,
        })

        /*
        =====================================================
        03 — TECHNOLOGY
        =====================================================
        */

        .to(techSceneRef.current, {
          opacity: 1,
          duration: 0.5,
        })

        .to(techHeadingRef.current, {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "power3.out",
        })

        .to(
          techItemsRef.current,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.6"
        )

        .to(techItemsRef.current, {
          y: (index) => (index % 2 === 0 ? -15 : 15),
          duration: 1.5,
          stagger: 0.08,
          ease: "sine.inOut",
        })

        .to(techSceneRef.current, {
          opacity: 0,
          y: -80,
          duration: 1.1,
          ease: "power3.in",
        })

        /*
        =====================================================
        04 — DEVELOPMENT
        =====================================================
        */

        .to(devSceneRef.current, {
          opacity: 1,
          duration: 0.5,
        })

        .to(devHeadingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        })

        .to(browserRef.current, {
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        })

        .to(
          phoneRef.current,
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1.1"
        )

        .to(arrowRef.current, {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.inOut",
        })

        .to(browserRef.current, {
          y: -25,
          duration: 1.5,
          ease: "sine.inOut",
        })

        .to(
          phoneRef.current,
          {
            y: 25,
            duration: 1.5,
            ease: "sine.inOut",
          },
          "<"
        )

        .to(browserRef.current, {
          opacity: 0,
          x: -120,
          scale: 0.85,
          duration: 1,
        })

        .to(
          phoneRef.current,
          {
            opacity: 0,
            x: 120,
            scale: 0.85,
            duration: 1,
          },
          "<"
        )

        .to(devSceneRef.current, {
          opacity: 0,
          duration: 0.6,
        })

        /*
        =====================================================
        05 — SECURITY
        =====================================================
        */

        .to(securitySceneRef.current, {
          opacity: 1,
          duration: 0.5,
        })

        .to(securityHeadingRef.current, {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "power3.out",
        })

        .to(securityCoreRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.4)",
        })

        .to(securityTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        })

        .to(securityCoreRef.current, {
          scale: 1.15,
          duration: 1.8,
          ease: "sine.inOut",
        })

        .to(securitySceneRef.current, {
          opacity: 0,
          scale: 1.15,
          duration: 1.2,
          ease: "power3.in",
        })

        /*
        =====================================================
        06 — NETWORK
        =====================================================
        */

        .to(networkSceneRef.current, {
          opacity: 1,
          duration: 0.5,
        })

        .to(networkHeadingRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        })

        .to(networkNodesRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.12,
          ease: "back.out(1.5)",
        })

        .to(networkLinesRef.current, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.inOut",
        })

        .to(networkNodesRef.current, {
          scale: 1.25,
          duration: 1.7,
          stagger: 0.08,
          ease: "sine.inOut",
        })

        .to(networkSceneRef.current, {
          opacity: 0,
          scale: 1.4,
          duration: 1.4,
          ease: "power3.in",
        })

        /*
        =====================================================
        07 — FINAL
        =====================================================
        */

        .to(finalSceneRef.current, {
          opacity: 1,
          duration: 0.6,
        })

        .to(finalSmallRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        })

        .to(finalWordsRef.current, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.5,
          stagger: 0.18,
          ease: "power3.out",
        })

        .to(finalCtaRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        })

        .to(finalWordsRef.current, {
          scale: 1.04,
          duration: 1.5,
          ease: "sine.inOut",
        });

      /*
      =====================================================
      MOUSE PARALLAX
      =====================================================
      */

      const handleMouseMove = (event) => {
        const x =
          (event.clientX / window.innerWidth - 0.5) * 2;

        const y =
          (event.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(".hero-move", {
          x: x * 10,
          y: y * 10,
          duration: 1.2,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(".hero-move-slow", {
          x: x * 4,
          y: y * 4,
          duration: 1.5,
          ease: "power3.out",
          overwrite: true,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }

      return () => {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextSound = !sound;

    videoRef.current.muted = !nextSound;

    setSound(nextSound);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[1000vh] w-full bg-[#050505] text-white"
    >
      <div
        ref={stickyRef}
        className="relative h-screen w-full overflow-hidden bg-[#050505]"
      >
        {/* =================================================
            BACKGROUND GRID
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.055]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        {/* =================================================
            RADIAL LIGHT
        ================================================= */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />

        {/* =================================================
            TOP BAR
        ================================================= */}

        <div className="pointer-events-none absolute left-6 right-6 top-6 z-[100] flex items-center justify-between sm:left-10 sm:right-10 sm:top-8">
          <div className="text-[9px] font-medium tracking-[0.4em] text-white/40 uppercase">
            HAMZA ALI
          </div>

          <div className="hidden text-[9px] tracking-[0.35em] text-white/25 uppercase sm:block">
            Interactive Portfolio
          </div>

          <div className="text-[9px] tracking-[0.35em] text-white/30 uppercase">
            Scroll
          </div>
        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="pointer-events-none absolute bottom-0 left-0 z-[100] h-[2px] w-full bg-white/10">
          <div
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0 bg-white"
          />
        </div>

        {/* =================================================
            01 — IDENTITY
        ================================================= */}

        <div
          ref={introRef}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="hero-move-slow w-full max-w-[1250px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[9px] tracking-[0.4em] text-white/30">
                01
              </span>

              <span className="h-px w-12 bg-white/20" />

              <span className="text-[9px] tracking-[0.35em] text-white/30 uppercase">
                Digital Builder
              </span>
            </div>

            <div className="overflow-hidden">
              <h1 className="text-[19vw] font-black leading-[0.72] tracking-[-0.1em] sm:text-[16vw] lg:text-[13vw]">
                HAMZA
              </h1>
            </div>

            <div
              ref={introLineRef}
              className="mt-8 h-px w-full bg-white/30"
            />

            <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <p className="max-w-sm text-xs leading-6 tracking-wide text-white/40 sm:text-sm">
                Full Stack Developer
                <br />
                Cyber Security Enthusiast
              </p>

              <a
                href="#projects"
                className="pointer-events-auto group flex w-fit cursor-pointer items-center gap-4 text-[9px] tracking-[0.35em] text-white/50 uppercase transition hover:text-white"
              >
                Explore Work

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition duration-500 group-hover:translate-x-1 group-hover:border-white/50">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            02 — VIDEO
        ================================================= */}

        <div
          ref={videoSceneRef}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-5 sm:px-10"
        >
          <div
            ref={videoBoxRef}
            className="relative h-[64vh] w-full max-w-[1200px] overflow-hidden rounded-[28px] border border-white/10 bg-black"
          >
            <video
              ref={videoRef}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={intro} type="video/mp4" />
            </video>

            <div className="pointer-events-none absolute inset-0 bg-black/35" />

            <div className="pointer-events-none absolute left-6 top-6">
              <span className="text-[9px] tracking-[0.4em] text-white/40 uppercase">
                02 / Introduction
              </span>
            </div>

            <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-7 sm:bottom-10 sm:left-10 sm:right-10 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-[9px] tracking-[0.4em] text-white/40 uppercase">
                  The beginning
                </p>

                <h2 className="max-w-lg text-3xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  I build digital
                  <br />
                  experiences.
                </h2>
              </div>

              <button
                type="button"
                onClick={toggleSound}
                aria-label="Toggle video sound"
                className="pointer-events-auto cursor-pointer group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[8px] tracking-widest backdrop-blur-xl transition duration-500 hover:scale-110 hover:bg-white hover:text-black"
              >
                {sound ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            03 — TECHNOLOGY
        ================================================= */}

        <div
          ref={techSceneRef}
          className="pointer-events-none absolute inset-0 z-40"
        >
          <div
            ref={techHeadingRef}
            className="pointer-events-none absolute left-6 top-[16%] sm:left-12 lg:left-[10%]"
          >
            <p className="mb-5 text-[9px] tracking-[0.5em] text-white/30 uppercase">
              03 / Technology
            </p>

            <h2 className="max-w-[500px] text-4xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Tools
              <br />
              become
              <br />
              ideas.
            </h2>

            <p className="mt-7 max-w-[280px] text-xs leading-6 text-white/30">
              A stack built for modern web, mobile and interactive
              experiences.
            </p>
          </div>

          {/* Technology list */}

          <div className="pointer-events-none absolute bottom-[12%] right-6 w-[80%] max-w-[550px] sm:right-12">
            <div className="border-t border-white/10">
              {technologies.map((tech, index) => (
                <a
                  key={tech.name}
                  ref={(element) => {
                    techItemsRef.current[index] = element;
                  }}
                  href={tech.href}
                  className="pointer-events-auto cursor-pointer group flex items-center justify-between border-b border-white/10 py-4 transition duration-500 hover:px-3"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[8px] tracking-widest text-white/25">
                      {tech.number}
                    </span>

                    <span className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                      {tech.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    <span className="hidden text-[8px] tracking-[0.3em] text-white/20 uppercase sm:block">
                      {tech.type}
                    </span>

                    <span className="text-white/20 transition duration-500 group-hover:translate-x-1 group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            04 — DEVELOPMENT
        ================================================= */}

        <div
          ref={devSceneRef}
          className="pointer-events-none absolute inset-0 z-50 overflow-hidden"
        >
          <div
            ref={devHeadingRef}
            className="pointer-events-none absolute left-6 top-[12%] sm:left-12 lg:left-[10%]"
          >
            <p className="mb-5 text-[9px] tracking-[0.5em] text-white/30 uppercase">
              04 / Development
            </p>

            <h2 className="text-4xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Idea
              <br />
              into
              <br />
              product.
            </h2>
          </div>

          {/* Browser */}

          <a
            ref={browserRef}
            href="#projects"
            className="pointer-events-auto cursor-pointer absolute left-[5%] top-[44%] block w-[68%] max-w-[760px] perspective-[1200px]"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909] shadow-2xl transition duration-500 hover:border-white/30">
              <div className="flex h-8 items-center gap-2 border-b border-white/10 px-4">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute left-[8%] top-[12%] h-2 w-[32%] rounded-full bg-white/20" />

                <div className="absolute left-[8%] top-[21%] h-2 w-[22%] rounded-full bg-white/10" />

                <div className="absolute bottom-[10%] left-[8%] grid w-[84%] grid-cols-3 gap-3">
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.04]" />
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.04]" />
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.04]" />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[8px] tracking-[0.3em] text-white/25 uppercase">
                Web Experience
              </span>

              <span className="text-xs text-white/30">
                ↗
              </span>
            </div>
          </a>

          {/* Phone */}

          <a
            ref={phoneRef}
            href="#projects"
            className="pointer-events-auto cursor-pointer absolute right-[7%] top-[39%] block w-[145px] sm:w-[185px] lg:right-[12%] lg:w-[215px]"
          >
            <div className="rounded-[2rem] border-[5px] border-white/10 bg-[#080808] p-2 shadow-2xl transition duration-500 hover:border-white/25">
              <div className="relative aspect-[9/18] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025]">
                <div className="absolute left-1/2 top-3 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />

                <div className="absolute left-5 right-5 top-20 h-3 rounded-full bg-white/15" />

                <div className="absolute left-5 right-12 top-28 h-2 rounded-full bg-white/10" />

                <div className="absolute bottom-6 left-5 right-5 h-32 rounded-2xl border border-white/10 bg-white/[0.04]" />
              </div>
            </div>

            <p className="mt-3 text-center text-[8px] tracking-[0.3em] text-white/25 uppercase">
              Mobile
            </p>
          </a>

          {/* Connecting line */}

          <div
            ref={arrowRef}
            className="pointer-events-none absolute left-[50%] top-[62%] hidden h-px w-[12%] bg-white/20 lg:block"
          />
        </div>

        {/* =================================================
            05 — CYBER SECURITY
        ================================================= */}

        <div
          ref={securitySceneRef}
          className="pointer-events-none absolute inset-0 z-[55] overflow-hidden"
        >
          <div
            ref={securityHeadingRef}
            className="pointer-events-none absolute left-6 top-[15%] sm:left-12 lg:left-[10%]"
          >
            <p className="mb-5 text-[9px] tracking-[0.5em] text-white/30 uppercase">
              05 / Cyber Security
            </p>

            <h2 className="text-4xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Build.
              <br />
              Then
              <br />
              protect.
            </h2>
          </div>

          {/* Security Core */}

          <div
            ref={securityCoreRef}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 sm:h-[390px] sm:w-[390px]"
          >
            <div className="pointer-events-none absolute inset-[12%] rounded-full border border-white/10" />

            <div className="pointer-events-none absolute inset-[25%] rounded-full border border-white/10" />

            <div className="pointer-events-none absolute inset-[38%] rounded-full border border-white/20" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_60px_rgba(255,255,255,0.7)]" />

            <div className="pointer-events-none absolute left-1/2 top-[-12px] h-6 w-px -translate-x-1/2 bg-white/50" />

            <div className="pointer-events-none absolute bottom-[-12px] left-1/2 h-6 w-px -translate-x-1/2 bg-white/50" />

            <div className="pointer-events-none absolute left-[-12px] top-1/2 h-px w-6 -translate-y-1/2 bg-white/50" />

            <div className="pointer-events-none absolute right-[-12px] top-1/2 h-px w-6 -translate-y-1/2 bg-white/50" />
          </div>

          <div
            ref={securityTextRef}
            className="pointer-events-none absolute bottom-[12%] right-6 text-right sm:right-12"
          >
            <p className="mb-3 text-[9px] tracking-[0.4em] text-white/25 uppercase">
              System Status
            </p>

            <p className="text-sm tracking-wide text-white/50">
              NETWORK SECURE
            </p>

            <p className="mt-2 text-[8px] tracking-[0.3em] text-white/20">
              WEB / MOBILE / NETWORK
            </p>
          </div>
        </div>

        {/* =================================================
            06 — NETWORK
        ================================================= */}

        <div
          ref={networkSceneRef}
          className="pointer-events-none absolute inset-0 z-[60]"
        >
          <div
            ref={networkHeadingRef}
            className="pointer-events-none absolute left-6 top-[12%] sm:left-12"
          >
            <p className="mb-5 text-[9px] tracking-[0.5em] text-white/30 uppercase">
              06 / Digital Network
            </p>

            <h2 className="text-4xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Everything
              <br />
              connects.
            </h2>
          </div>

          {/* Main Node */}

          <div
            ref={(element) => {
              networkNodesRef.current[0] = element;
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xs font-bold text-black shadow-[0_0_80px_rgba(255,255,255,0.3)]"
          >
            H
          </div>

          {/* Nodes */}

          {[
            ["01", "17%", "27%"],
            ["02", "82%", "25%"],
            ["03", "14%", "73%"],
            ["04", "84%", "72%"],
            ["05", "50%", "17%"],
            ["06", "50%", "83%"],
          ].map(([number, left, top], index) => (
            <div
              key={number}
              ref={(element) => {
                networkNodesRef.current[index + 1] = element;
              }}
              className="pointer-events-none absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#080808] text-[8px] tracking-widest text-white/40"
              style={{
                left,
                top,
              }}
            >
              {number}
            </div>
          ))}

          {/* Lines */}

          <div
            ref={(element) => {
              networkLinesRef.current[0] = element;
            }}
            className="pointer-events-none absolute left-[17%] top-[27%] h-px w-[34%] rotate-[21deg] bg-white/20"
          />

          <div
            ref={(element) => {
              networkLinesRef.current[1] = element;
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[38%] origin-left rotate-[-25deg] bg-white/20"
          />

          <div
            ref={(element) => {
              networkLinesRef.current[2] = element;
            }}
            className="pointer-events-none absolute left-[14%] top-[73%] h-px w-[39%] rotate-[-24deg] bg-white/20"
          />

          <div
            ref={(element) => {
              networkLinesRef.current[3] = element;
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[39%] origin-left rotate-[25deg] bg-white/20"
          />

          <div
            ref={(element) => {
              networkLinesRef.current[4] = element;
            }}
            className="pointer-events-none absolute left-1/2 top-[17%] h-[33%] w-px bg-white/20"
          />

          <div
            ref={(element) => {
              networkLinesRef.current[5] = element;
            }}
            className="pointer-events-none absolute bottom-[17%] left-1/2 h-[33%] w-px bg-white/20"
          />

          <div className="pointer-events-none absolute bottom-8 right-6 text-right sm:right-12">
            <p className="text-[8px] leading-5 tracking-[0.35em] text-white/20 uppercase">
              Frontend
              <br />
              Backend
              <br />
              Mobile
              <br />
              Security
            </p>
          </div>
        </div>

        {/* =================================================
            07 — FINAL
        ================================================= */}

        <div
          ref={finalSceneRef}
          className="pointer-events-none absolute inset-0 z-[70] flex items-center justify-center px-6"
        >
          <div className="w-full max-w-[1200px]">
            <div
              ref={finalSmallRef}
              className="pointer-events-none mb-10"
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-white/30" />

                <span className="text-[9px] tracking-[0.45em] text-white/30 uppercase">
                  07 / Next
                </span>
              </div>
            </div>

            <div className="pointer-events-none perspective-[1000px]">
              {["BUILD.", "SECURE.", "INNOVATE."].map(
                (word, index) => (
                  <div
                    key={word}
                    ref={(element) => {
                      finalWordsRef.current[index] = element;
                    }}
                    className="overflow-hidden"
                  >
                    <span className="block text-[13vw] font-black leading-[0.78] tracking-[-0.09em] sm:text-[11vw] lg:text-[9vw]">
                      {word}
                    </span>
                  </div>
                )
              )}
            </div>

            <div
              ref={finalCtaRef}
              className="pointer-events-none mt-12 flex flex-col justify-between gap-7 sm:flex-row sm:items-center"
            >
              <p className="max-w-md text-xs leading-6 text-white/30 sm:text-sm">
                Turning ideas into digital products with modern
                development and security in mind.
              </p>

              <a
                href="#contact"
                className="pointer-events-auto cursor-pointer group flex w-fit items-center gap-5 rounded-full border border-white/15 px-6 py-3 text-[9px] tracking-[0.35em] uppercase transition duration-500 hover:bg-white hover:text-black"
              >
                Let's Talk

                <span className="transition duration-500 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM LABEL
        ================================================= */}

        <div className="pointer-events-none absolute bottom-6 left-6 z-[100] sm:bottom-8 sm:left-10">
          <span className="text-[8px] tracking-[0.35em] text-white/20 uppercase">
            Full Stack × Cyber Security
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;