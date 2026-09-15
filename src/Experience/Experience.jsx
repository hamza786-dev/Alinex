import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const progressRef = useRef(null);

  const introRef = useRef(null);
  const yteamsRef = useRef(null);
  const technoriftRef = useRef(null);
  const freelanceRef = useRef(null);
  const nexovianRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scenes = [
        introRef.current,
        yteamsRef.current,
        technoriftRef.current,
        freelanceRef.current,
        nexovianRef.current,
        finalRef.current,
      ];

      /*
      ============================================================
      INITIAL STATE
      ============================================================
      */

      gsap.set(scenes, {
        opacity: 0,
        scale: 1.05,
        y: 35,
      });

      gsap.set(introRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
      });

      /*
      ============================================================
      MAIN SCROLL TIMELINE
      ============================================================
      */

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
        YTEAMS
        ============================================================
        */

        .to(
          yteamsRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(yteamsRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(yteamsRef.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        TECHNORIFT
        ============================================================
        */

        .to(
          technoriftRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(technoriftRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(technoriftRef.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        FREELANCE
        ============================================================
        */

        .to(
          freelanceRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(freelanceRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(freelanceRef.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        NEXOVIAN
        ============================================================
        */

        .to(
          nexovianRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(nexovianRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(nexovianRef.current, {
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
      id="experience"
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
            TOP INFORMATION
        ======================================================== */}

        <div className="pointer-events-none absolute left-6 right-6 top-6 z-50 flex items-center justify-between md:left-10 md:right-10">
          <span className="text-[10px] tracking-[0.4em] text-white/40 md:text-xs">
            05 / EXPERIENCE
          </span>

          <span className="text-[10px] tracking-[0.3em] text-white/30 md:text-xs">
            FROM LEARNING TO BUILDING
          </span>
        </div>

        {/* ========================================================
            PROGRESS BAR
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
                PROFESSIONAL JOURNEY
              </span>
            </div>

            <h2 className="text-[15vw] font-black leading-[0.78] tracking-[-0.09em] md:text-[12vw]">
              EXPERIENCE
            </h2>

            <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-sm leading-7 text-white/50 md:text-lg md:leading-8">
                Moving from academic learning into real projects, internships
                and client work — one experience at a time.
              </p>

              <div className="text-right">
                <div className="text-xs tracking-[0.35em] text-white/30">
                  SCROLL TO EXPLORE
                </div>

                <div className="mt-3 text-2xl text-white/50">
                  ↓
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SCENE 2 — YTEAMS
        ======================================================== */}

        <div
          ref={yteamsRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                EXPERIENCE 01
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                INTERNSHIP
              </span>
            </div>

            <div className="grid gap-10 border border-white/10 bg-white/[0.025] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
              {/* Left */}

              <div>
                <div className="flex h-16 w-16 items-center justify-center border border-white/10">
                  <span className="text-xl font-black text-white/60">
                    Y
                  </span>
                </div>

                <div className="mt-8 text-[10px] tracking-[0.35em] text-white/30">
                  YTEAMS PVT LTD
                </div>

                <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                  MERN Stack
                  <br />
                  Developer
                </h3>
              </div>

              {/* Right */}

              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-3">
                  <span className="border border-white/10 px-4 py-2 text-[9px] tracking-[0.2em] text-white/40">
                    JUL 2025
                  </span>

                  <span className="border border-white/10 px-4 py-2 text-[9px] tracking-[0.2em] text-white/40">
                    LAHORE
                  </span>

                  <span className="border border-white/10 px-4 py-2 text-[9px] tracking-[0.2em] text-white/40">
                    ON-SITE
                  </span>
                </div>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                  Worked as a MERN Stack Web Development Intern, gaining
                  practical experience in modern web development and
                  professional software workflows.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-[1px] bg-white/10 sm:grid-cols-4">
                  {[
                    "React.js",
                    "Node.js",
                    "MongoDB",
                    "Express.js",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-[#050505] p-4 text-center text-[10px] text-white/40"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SCENE 3 — TECHNORIFT
        ======================================================== */}

        <div
          ref={technoriftRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                EXPERIENCE 02
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                INTERNSHIP
              </span>
            </div>

            <div className="relative overflow-hidden border border-white/10 p-8 md:p-14">
              {/* Large background number */}

              <div className="pointer-events-none absolute -right-10 -top-24 text-[30vw] font-black leading-none tracking-[-0.12em] text-white/[0.025]">
                02
              </div>

              <div className="relative z-10">
                <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center border border-white/10">
                      <span className="text-xl font-black text-white/60">
                        T
                      </span>
                    </div>

                    <div className="mt-8 text-[10px] tracking-[0.35em] text-white/30">
                      TECHNORIFT
                    </div>

                    <h3 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                      MERN Stack
                      <br />
                      Intern
                    </h3>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-3">
                      <span className="border border-white/10 px-4 py-2 text-[9px] tracking-[0.2em] text-white/40">
                        JUL 2025
                      </span>

                      <span className="border border-white/10 px-4 py-2 text-[9px] tracking-[0.2em] text-white/40">
                        FAISALABAD
                      </span>

                      <span className="border border-white/10 px-4 py-2 text-[9px] tracking-[0.2em] text-white/40">
                        ON-SITE
                      </span>
                    </div>

                    <p className="mt-7 text-sm leading-7 text-white/45 md:text-base">
                      Developed practical experience with MERN stack
                      technologies while working in a professional development
                      environment.
                    </p>

                    <div className="mt-8">
                      <div className="mb-3 text-[9px] tracking-[0.3em] text-white/25">
                        EXPERIENCE FOCUS
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "Frontend",
                          "Backend",
                          "APIs",
                          "Database",
                          "Web Development",
                        ].map((item) => (
                          <span
                            key={item}
                            className="border border-white/10 px-3 py-2 text-[9px] text-white/40"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SCENE 4 — FREELANCE
        ======================================================== */}

        <div
          ref={freelanceRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                EXPERIENCE 03
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                CLIENT WORK
              </span>
            </div>

            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              {/* Main */}

              <div>
                <div className="mb-5 h-[1px] w-16 bg-white/40" />

                <div className="text-[10px] tracking-[0.35em] text-white/30">
                  FREELANCE / REMOTE
                </div>

                <h3 className="mt-4 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                  Building for
                  <br />
                  real businesses.
                </h3>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                  Working directly with clients to create e-commerce
                  experiences, Shopify stores, digital assets and online
                  marketing solutions.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Shopify",
                    "E-Commerce",
                    "SEO",
                    "Payment Integration",
                    "Digital Marketing",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-4 py-3 text-[9px] tracking-[0.15em] text-white/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Statistics */}

              <div className="grid gap-[1px] bg-white/10">
                <div className="bg-[#050505] p-7">
                  <div className="text-5xl font-black tracking-[-0.06em]">
                    100+
                  </div>

                  <div className="mt-3 text-[9px] tracking-[0.3em] text-white/30">
                    PRODUCT BROCHURES
                  </div>
                </div>

                <div className="bg-[#050505] p-7">
                  <div className="text-5xl font-black tracking-[-0.06em]">
                    80+
                  </div>

                  <div className="mt-3 text-[9px] tracking-[0.3em] text-white/30">
                    SOCIAL CAMPAIGNS
                  </div>
                </div>

                <div className="bg-[#050505] p-7">
                  <div className="text-5xl font-black tracking-[-0.06em]">
                    2+
                  </div>

                  <div className="mt-3 text-[9px] tracking-[0.3em] text-white/30">
                    SHOPIFY STORES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SCENE 5 — NEXOVIAN
        ======================================================== */}

        <div
          ref={nexovianRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                EXPERIENCE 04
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                MY DIRECTION
              </span>
            </div>

            <div className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-8 md:p-14">
              {/* Decorative circles */}

              <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border border-white/[0.05]" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-white/[0.05]" />

              <div className="relative z-10">
                <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                  <div>
                    <div className="flex h-20 w-20 items-center justify-center border border-white/10">
                      <span className="text-2xl font-black text-white/60">
                        N
                      </span>
                    </div>

                    <div className="mt-8 text-[10px] tracking-[0.35em] text-white/30">
                      TECHNOLOGY STUDIO
                    </div>

                    <h3 className="mt-4 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                      Nexovian
                      <br />
                      Studio
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-xl text-base leading-8 text-white/50 md:text-lg">
                      A personal technology direction focused on building
                      modern web applications, mobile experiences,
                      cybersecurity solutions and innovative digital products.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-[1px] bg-white/10 sm:grid-cols-4">
                      <div className="bg-[#050505] p-5">
                        <div className="text-lg font-semibold">
                          WEB
                        </div>

                        <div className="mt-2 text-[9px] tracking-[0.2em] text-white/25">
                          DEVELOPMENT
                        </div>
                      </div>

                      <div className="bg-[#050505] p-5">
                        <div className="text-lg font-semibold">
                          MOBILE
                        </div>

                        <div className="mt-2 text-[9px] tracking-[0.2em] text-white/25">
                          APPLICATIONS
                        </div>
                      </div>

                      <div className="bg-[#050505] p-5">
                        <div className="text-lg font-semibold">
                          CYBER
                        </div>

                        <div className="mt-2 text-[9px] tracking-[0.2em] text-white/25">
                          SECURITY
                        </div>
                      </div>

                      <div className="bg-[#050505] p-5">
                        <div className="text-lg font-semibold">
                          AI
                        </div>

                        <div className="mt-2 text-[9px] tracking-[0.2em] text-white/25">
                          INNOVATION
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <span className="h-[1px] w-12 bg-white/30" />

                      <span className="text-[9px] tracking-[0.3em] text-white/30">
                        BUILDING THE FUTURE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SCENE 6 — FINAL
        ======================================================== */}

        <div
          ref={finalRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-[1px] w-12 bg-white/30" />

              <span className="text-xs tracking-[0.4em] text-white/30">
                THE JOURNEY
              </span>

              <span className="h-[1px] w-12 bg-white/30" />
            </div>

            <h3 className="text-[12vw] font-black leading-[0.8] tracking-[-0.09em] md:text-[10vw]">
              LEARN.
              <br />
              BUILD.
              <br />
              <span className="text-white/25">
                GROW.
              </span>
            </h3>

            <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              Every internship, client project and personal experiment adds
              another layer to the developer I&apos;m becoming.
            </p>

            <div className="mt-12 flex justify-center">
              <a
                href="#about"
                className="pointer-events-auto cursor-pointer border border-white/20 px-7 py-4 text-xs font-medium tracking-[0.3em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-black"
              >
                MEET HAMZA
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            SIDE LABEL
        ======================================================== */}

        <div className="pointer-events-none absolute bottom-16 left-6 z-40 hidden md:block">
          <div className="flex items-center gap-3">
            <div className="h-8 w-[1px] bg-white/20" />

            <span className="text-[9px] tracking-[0.3em] text-white/20 [writing-mode:vertical-rl]">
              HAMZA / EXPERIENCE
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

export default Experience;