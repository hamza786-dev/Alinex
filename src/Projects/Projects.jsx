import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const progressRef = useRef(null);

  const introRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const reviewRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scenes = [
        introRef.current,
        project1Ref.current,
        project2Ref.current,
        project3Ref.current,
        reviewRef.current,
        finalRef.current,
      ];

      gsap.set(scenes, {
        opacity: 0,
        scale: 1.04,
        y: 35,
      });

      gsap.set(introRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
      });

      const tl = gsap.timeline({
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
      ============================================================
      INTRO
      ============================================================
      */

      tl.to(introRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
      })

        .to(introRef.current, {
          opacity: 0,
          scale: 0.96,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        PROJECT 01
        ============================================================
        */

        .to(
          project1Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(project1Ref.current, {
          opacity: 1,
          duration: 1,
        })

        .to(project1Ref.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        PROJECT 02
        ============================================================
        */

        .to(
          project2Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(project2Ref.current, {
          opacity: 1,
          duration: 1,
        })

        .to(project2Ref.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        PROJECT 03
        ============================================================
        */

        .to(
          project3Ref.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(project3Ref.current, {
          opacity: 1,
          duration: 1,
        })

        .to(project3Ref.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        REVIEW
        ============================================================
        */

        .to(
          reviewRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(reviewRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(reviewRef.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        FINAL
        ============================================================
        */

        .to(
          finalRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(finalRef.current, {
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
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden bg-[#050505]"
      >
        {/* ========================================================
            BACKGROUND GRID
        ======================================================== */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.13]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.08) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.08) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* ========================================================
            CENTER LIGHT
        ======================================================== */}

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 35%, transparent 70%)",
          }}
        />

        {/* ========================================================
            TOP LABEL
        ======================================================== */}

        <div className="pointer-events-none absolute left-6 right-6 top-6 z-50 flex items-center justify-between md:left-10 md:right-10">
          <span className="text-[10px] tracking-[0.4em] text-white/40 md:text-xs">
            03 / SELECTED WORK
          </span>

          <span className="text-[10px] tracking-[0.3em] text-white/30 md:text-xs">
            BUILT FOR THE REAL WORLD
          </span>
        </div>

        {/* ========================================================
            PROGRESS
        ======================================================== */}

        <div className="pointer-events-none absolute bottom-7 left-6 right-6 z-50 h-[1px] overflow-hidden bg-white/10 md:left-10 md:right-10">
          <div
            ref={progressRef}
            className="h-full w-full origin-left scale-x-0 bg-white/70"
          />
        </div>

        {/* ========================================================
            SCENE 1 — INTRO
        ======================================================== */}

        <div
          ref={introRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-7xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-white/40" />

              <span className="text-xs tracking-[0.4em] text-white/40">
                SELECTED PROJECTS
              </span>
            </div>

            <h2 className="text-[16vw] font-black leading-[0.78] tracking-[-0.09em] md:text-[13vw]">
              WORK
            </h2>

            <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-sm leading-7 text-white/50 md:text-lg md:leading-8">
                A collection of websites and digital experiences I&apos;ve
                designed, developed and delivered for real businesses.
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

        {/* ========================================================
            PROJECT 01
        ======================================================== */}

        <div
          ref={project1Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-5 md:px-10"
        >
          <div className="w-full max-w-7xl">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                PROJECT 01
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                E-COMMERCE
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              {/* Website Preview */}

              <div className="relative overflow-hidden border border-white/10 bg-white/[0.025]">
                <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />

                  <div className="ml-4 h-5 flex-1 border border-white/10 px-3">
                    <span className="text-[8px] tracking-[0.2em] text-white/20">
                      CLIENT WEBSITE
                    </span>
                  </div>
                </div>

                <div className="flex h-[270px] items-center justify-center md:h-[390px]">
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center border border-white/10">
                      <span className="text-2xl font-black text-white/50">
                        R
                      </span>
                    </div>

                    <div className="text-xs tracking-[0.3em] text-white/30">
                      WEBSITE PREVIEW
                    </div>

                    <div className="mt-3 text-sm text-white/20">
                      Replace with your website screenshot
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Information */}

              <div className="flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-white/10">
                    <span className="text-lg font-bold text-white/60">R</span>
                  </div>

                  <div>
                    <span className="text-[9px] tracking-[0.3em] text-white/30">
                      CLIENT
                    </span>

                    <h3 className="mt-1 text-xl font-semibold">
                      Rehmat Crockery House
                    </h3>
                  </div>
                </div>

                <h4 className="text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                  E-Commerce
                  <br />
                  Experience
                </h4>

                <p className="mt-6 text-sm leading-7 text-white/45">
                  A modern e-commerce platform designed to showcase products,
                  manage orders and provide a smooth shopping experience.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express",
                    "REST API",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 px-3 py-2 text-[9px] tracking-[0.15em] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROJECT 02
        ======================================================== */}

        <div
          ref={project2Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-5 md:px-10"
        >
          <div className="w-full max-w-7xl">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                PROJECT 02
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                BUSINESS WEBSITE
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              {/* Information */}

              <div className="flex flex-col justify-center">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-white/10">
                    <span className="text-lg font-bold text-white/60">
                      P
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] tracking-[0.3em] text-white/30">
                      CLIENT
                    </span>

                    <h3 className="mt-1 text-xl font-semibold">
                      Paragon Herbal Laboratories
                    </h3>
                  </div>
                </div>

                <h4 className="text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                  Digital
                  <br />
                  Presence
                </h4>

                <p className="mt-6 text-sm leading-7 text-white/45">
                  A professional digital presence focused on product
                  presentation, e-commerce functionality and online brand
                  visibility.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Shopify",
                    "E-Commerce",
                    "SEO",
                    "UI Design",
                    "Digital Marketing",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 px-3 py-2 text-[9px] tracking-[0.15em] text-white/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Website Preview */}

              <div className="relative overflow-hidden border border-white/10 bg-white/[0.025]">
                <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />

                  <div className="ml-4 h-5 flex-1 border border-white/10 px-3">
                    <span className="text-[8px] tracking-[0.2em] text-white/20">
                      CLIENT WEBSITE
                    </span>
                  </div>
                </div>

                <div className="flex h-[270px] items-center justify-center md:h-[390px]">
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center border border-white/10">
                      <span className="text-2xl font-black text-white/50">
                        P
                      </span>
                    </div>

                    <div className="text-xs tracking-[0.3em] text-white/30">
                      WEBSITE PREVIEW
                    </div>

                    <div className="mt-3 text-sm text-white/20">
                      Replace with your website screenshot
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROJECT 03
        ======================================================== */}

        <div
          ref={project3Ref}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-5 md:px-10"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                PROJECT 03
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                WEB APPLICATION
              </span>
            </div>

            <div className="border border-white/10 bg-white/[0.025] p-7 md:p-12">
              <div className="grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-center">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center border border-white/10">
                    <span className="text-xl font-bold text-white/60">
                      N
                    </span>
                  </div>

                  <div className="mt-7 text-xs tracking-[0.3em] text-white/30">
                    PERSONAL / BUSINESS
                  </div>

                  <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                    Nexovian
                    <br />
                    Studio
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-white/45">
                    A technology-focused digital platform combining modern
                    development, cyber security and innovative IT solutions.
                  </p>
                </div>

                <div className="grid gap-[1px] bg-white/10 sm:grid-cols-2">
                  <div className="bg-[#050505] p-7">
                    <span className="text-[9px] tracking-[0.3em] text-white/30">
                      DEVELOPMENT
                    </span>

                    <div className="mt-5 text-xl font-semibold">
                      Full Stack
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      Modern web applications and scalable digital products.
                    </p>
                  </div>

                  <div className="bg-[#050505] p-7">
                    <span className="text-[9px] tracking-[0.3em] text-white/30">
                      SECURITY
                    </span>

                    <div className="mt-5 text-xl font-semibold">
                      Cyber Security
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      Security-focused technology and networking solutions.
                    </p>
                  </div>

                  <div className="bg-[#050505] p-7">
                    <span className="text-[9px] tracking-[0.3em] text-white/30">
                      MOBILE
                    </span>

                    <div className="mt-5 text-xl font-semibold">
                      React Native
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      Cross-platform mobile application experiences.
                    </p>
                  </div>

                  <div className="bg-[#050505] p-7">
                    <span className="text-[9px] tracking-[0.3em] text-white/30">
                      TECHNOLOGY
                    </span>

                    <div className="mt-5 text-xl font-semibold">
                      Modern Stack
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/35">
                      React, Next.js, Node.js, MongoDB and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            REVIEW SCENE
        ======================================================== */}

        <div
          ref={reviewRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-5xl">
            <div className="mb-8 text-center">
              <span className="text-xs tracking-[0.4em] text-white/30">
                CLIENT FEEDBACK
              </span>
            </div>

            <div className="relative border border-white/10 bg-white/[0.025] p-8 text-center md:p-16">
              {/* Quote mark */}

              <div className="pointer-events-none absolute left-6 top-2 text-[120px] font-black leading-none text-white/[0.04] md:left-10">
                “
              </div>

              <div className="relative z-10">
                <div className="mb-7 flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-lg text-white/70"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="mx-auto max-w-3xl text-2xl font-medium leading-relaxed tracking-[-0.02em] text-white/80 md:text-4xl">
                  &quot;The website looks professional, works smoothly and
                  gives our business a much stronger online presence.&quot;
                </p>

                <div className="mt-10 flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10">
                    <span className="text-sm font-bold text-white/50">
                      C
                    </span>
                  </div>

                  <div className="mt-4 text-sm font-medium">
                    Client Review
                  </div>

                  <div className="mt-1 text-[9px] tracking-[0.3em] text-white/30">
                    PROJECT CLIENT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            FINAL SCENE
        ======================================================== */}

        <div
          ref={finalRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-[1px] w-12 bg-white/30" />

              <span className="text-xs tracking-[0.4em] text-white/30">
                REAL PROJECTS
              </span>

              <span className="h-[1px] w-12 bg-white/30" />
            </div>

            <h3 className="text-[12vw] font-black leading-[0.8] tracking-[-0.09em] md:text-[10vw]">
              BUILT.
              <br />
              <span className="text-white/25">DELIVERED.</span>
            </h3>

            <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              From ideas and designs to functional digital experiences —
              every project is an opportunity to build something meaningful.
            </p>

            <div className="mt-12 flex justify-center">
              <a
                href="#contact"
                className="pointer-events-auto cursor-pointer border border-white/20 px-7 py-4 text-xs font-medium tracking-[0.3em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-black"
              >
                START A PROJECT
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            SIDE LABELS
        ======================================================== */}

        <div className="pointer-events-none absolute bottom-16 left-6 z-40 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="h-8 w-[1px] bg-white/20" />

            <span className="text-[9px] tracking-[0.3em] text-white/20 [writing-mode:vertical-rl]">
              HAMZA / SELECTED WORK
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

export default Projects;