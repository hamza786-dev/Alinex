import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene3Ref = useRef(null);
  const scene4Ref = useRef(null);
  const scene5Ref = useRef(null);
  const scene6Ref = useRef(null);

  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scenes = [
        scene1Ref.current,
        scene2Ref.current,
        scene3Ref.current,
        scene4Ref.current,
        scene5Ref.current,
        scene6Ref.current,
      ];

      // Initial state
      gsap.set(scenes, {
        opacity: 0,
        scale: 1.05,
        y: 30,
      });

      gsap.set(scene1Ref.current, {
        opacity: 1,
        scale: 1,
        y: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          pin: stageRef.current,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      /*
        SCENE 1
        INTRO
      */

      timeline
        .to(scene1Ref.current, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
        })

        .to(scene1Ref.current, {
          opacity: 0,
          scale: 0.96,
          y: -40,
          duration: 0.7,
        })

        /*
          SCENE 2
          UNIVERSITY
        */

        .to(
          scene2Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(scene2Ref.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
        })

        .to(scene2Ref.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
          SCENE 3
          INTERMEDIATE
        */

        .to(
          scene3Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(scene3Ref.current, {
          opacity: 1,
          duration: 1,
        })

        .to(scene3Ref.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
          SCENE 4
          MATRIC
        */

        .to(
          scene4Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(scene4Ref.current, {
          opacity: 1,
          duration: 1,
        })

        .to(scene4Ref.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
          SCENE 5
          LEARNING AREAS
        */

        .to(
          scene5Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(scene5Ref.current, {
          opacity: 1,
          duration: 1,
        })

        .to(scene5Ref.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
          SCENE 6
          FINAL
        */

        .to(
          scene6Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(scene6Ref.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[1000vh] w-full bg-[#050505] text-white"
    >
      {/* =========================================================
          FIXED / PINNED STAGE
      ========================================================= */}

      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden bg-[#050505]"
      >
        {/* =====================================================
            BACKGROUND GRID
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.13]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* =====================================================
            RADIAL LIGHT
        ===================================================== */}

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 35%, transparent 70%)",
          }}
        />

        {/* =====================================================
            TOP NAV LABEL
        ===================================================== */}

        <div className="pointer-events-none absolute left-6 right-6 top-6 z-50 flex items-center justify-between md:left-10 md:right-10">
          <span className="text-[10px] font-medium tracking-[0.4em] text-white/40 md:text-xs">
            02 / EDUCATION
          </span>

          <span className="text-[10px] tracking-[0.3em] text-white/30 md:text-xs">
            ACADEMIC JOURNEY
          </span>
        </div>

        {/* =====================================================
            PROGRESS BAR
        ===================================================== */}

        <div className="pointer-events-none absolute bottom-7 left-6 right-6 z-50 h-[1px] overflow-hidden bg-white/10 md:left-10 md:right-10">
          <div
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0 bg-white/70"
          />
        </div>

        {/* =====================================================
            SCENE 1 — INTRO
        ===================================================== */}

        <div
          ref={scene1Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-7xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-white/40" />

              <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                The foundation
              </span>
            </div>

            <h2 className="text-[16vw] font-black leading-[0.78] tracking-[-0.08em] md:text-[13vw]">
              EDUCATION
            </h2>

            <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-sm leading-7 text-white/50 md:text-lg md:leading-8">
                A journey of learning, experimentation and building the
                technical foundation behind my work in software development
                and cyber security.
              </p>

              <div className="text-right">
                <div className="text-xs tracking-[0.35em] text-white/30">
                  SCROLL TO EXPLORE
                </div>

                <div className="mt-3 text-2xl text-white/50">↓</div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SCENE 2 — UAF
        ===================================================== */}

        <div
          ref={scene2Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs tracking-[0.35em] text-white/30">
                01
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                CURRENT
              </span>
            </div>

            <div className="border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm md:p-12">
              <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                {/* Year */}

                <div>
                  <div className="text-[18vw] font-black leading-none tracking-[-0.09em] text-white/[0.08] md:text-[10vw]">
                    23
                  </div>

                  <div className="mt-[-20px] text-xs tracking-[0.35em] text-white/30">
                    2023 — 2027
                  </div>
                </div>

                {/* Content */}

                <div>
                  <div className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40">
                    Bachelor&apos;s Degree
                  </div>

                  <h3 className="text-4xl font-bold tracking-tight md:text-6xl">
                    BS Information
                    <br />
                    Technology
                  </h3>

                  <div className="mt-6 h-[1px] w-20 bg-white/30" />

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                    University of Agriculture Faisalabad — building a strong
                    foundation in information technology, software development,
                    networking and modern computing.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="border border-white/10 px-4 py-2 text-[10px] tracking-[0.2em] text-white/50">
                      BSIT
                    </span>

                    <span className="border border-white/10 px-4 py-2 text-[10px] tracking-[0.2em] text-white/50">
                      UAF
                    </span>

                    <span className="border border-white/10 px-4 py-2 text-[10px] tracking-[0.2em] text-white/50">
                      2023 — 2027
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SCENE 3 — INTERMEDIATE
        ===================================================== */}

        <div
          ref={scene3Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-5xl">
            <div className="mb-8">
              <span className="text-xs tracking-[0.4em] text-white/30">
                02 / PRE-UNIVERSITY
              </span>
            </div>

            <div className="relative overflow-hidden border border-white/10 p-8 md:p-14">
              {/* Background number */}

              <div className="pointer-events-none absolute -right-8 -top-16 text-[25vw] font-black leading-none tracking-[-0.1em] text-white/[0.025]">
                12
              </div>

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-white/60" />

                  <span className="text-xs tracking-[0.3em] text-white/40">
                    INTERMEDIATE
                  </span>
                </div>

                <h3 className="text-5xl font-bold tracking-[-0.04em] md:text-8xl">
                  ICS
                </h3>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                  Laboratory College — Intermediate in Computer Science,
                  developing an early interest in computing, programming and
                  technology.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="border border-white/10 p-5">
                    <div className="text-xs tracking-[0.25em] text-white/30">
                      FIELD
                    </div>

                    <div className="mt-3 text-lg font-medium">
                      Computer Science
                    </div>
                  </div>

                  <div className="border border-white/10 p-5">
                    <div className="text-xs tracking-[0.25em] text-white/30">
                      FOCUS
                    </div>

                    <div className="mt-3 text-lg font-medium">
                      Computing
                    </div>
                  </div>

                  <div className="border border-white/10 p-5">
                    <div className="text-xs tracking-[0.25em] text-white/30">
                      STAGE
                    </div>

                    <div className="mt-3 text-lg font-medium">
                      Foundation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SCENE 4 — MATRIC
        ===================================================== */}

        <div
          ref={scene4Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-5xl">
            <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              {/* Big number */}

              <div className="relative">
                <div className="text-[45vw] font-black leading-[0.7] tracking-[-0.12em] text-white/[0.05] md:text-[25vw]">
                  10
                </div>

                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <span className="text-xs tracking-[0.4em] text-white/30">
                    03 / FOUNDATION
                  </span>
                </div>
              </div>

              {/* Content */}

              <div>
                <span className="text-xs tracking-[0.35em] text-white/30">
                  MATRICULATION
                </span>

                <h3 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-8xl">
                  SCIENCE
                </h3>

                <div className="mt-8 h-[1px] w-full bg-white/10" />

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                  Govt. MC High School — Science background that provided the
                  foundation for further studies in computing and information
                  technology.
                </p>

                <div className="mt-8 flex items-center gap-5">
                  <span className="h-[1px] w-16 bg-white/30" />

                  <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                    Starting point
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SCENE 5 — LEARNING AREAS
        ===================================================== */}

        <div
          ref={scene5Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-10">
              <span className="text-xs tracking-[0.4em] text-white/30">
                04 / WHAT I&apos;M BUILDING
              </span>

              <h3 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                Learning through
                <br />
                <span className="text-white/30">building.</span>
              </h3>
            </div>

            <div className="grid gap-[1px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Full Stack",
                  text: "Modern web applications and scalable digital products.",
                },
                {
                  number: "02",
                  title: "Cyber Security",
                  text: "Security fundamentals, networks and defensive thinking.",
                },
                {
                  number: "03",
                  title: "Networking",
                  text: "Network configuration, infrastructure and communication.",
                },
                {
                  number: "04",
                  title: "Mobile Development",
                  text: "Cross-platform applications with React Native.",
                },
                {
                  number: "05",
                  title: "Modern Web",
                  text: "React, Next.js, Three.js and interactive experiences.",
                },
                {
                  number: "06",
                  title: "Software Engineering",
                  text: "Turning ideas into structured, maintainable software.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="bg-[#050505] p-7 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.25em] text-white/30">
                      {item.number}
                    </span>

                    <span className="text-white/20">↗</span>
                  </div>

                  <h4 className="mt-10 text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            SCENE 6 — FINAL
        ===================================================== */}

        <div
          ref={scene6Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-[1px] w-12 bg-white/30" />

              <span className="text-xs tracking-[0.4em] text-white/30">
                THE JOURNEY CONTINUES
              </span>

              <span className="h-[1px] w-12 bg-white/30" />
            </div>

            <h3 className="text-[13vw] font-black leading-[0.8] tracking-[-0.09em] md:text-[11vw]">
              LEARN.
              <br />
              BUILD.
              <br />
              <span className="text-white/25">INNOVATE.</span>
            </h3>

            <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              Education gave me the foundation. Building real projects turns
              that knowledge into experience.
            </p>

            <div className="mt-12 flex justify-center">
              <a
                href="#projects"
                className="pointer-events-auto cursor-pointer border border-white/20 px-7 py-4 text-xs font-medium tracking-[0.3em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-black"
              >
                EXPLORE MY WORK
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            SIDE DECORATION
        ===================================================== */}

        <div className="pointer-events-none absolute bottom-16 left-6 z-40 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="h-8 w-[1px] bg-white/20" />

            <span className="text-[9px] tracking-[0.3em] text-white/20 [writing-mode:vertical-rl]">
              HAMZA / PORTFOLIO
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-16 right-6 z-40 hidden md:block">
          <span className="text-[9px] tracking-[0.3em] text-white/20">
            SCROLL EXPERIENCE
          </span>
        </div>
      </div>
    </section>
  );
};

export default Education;