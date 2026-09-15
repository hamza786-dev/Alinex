import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Capabilities = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const progressRef = useRef(null);

  const introRef = useRef(null);
  const webRef = useRef(null);
  const mobileRef = useRef(null);
  const securityRef = useRef(null);
  const creativeRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scenes = [
        introRef.current,
        webRef.current,
        mobileRef.current,
        securityRef.current,
        creativeRef.current,
        finalRef.current,
      ];

      /* Initial state */

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

      /* Main Scroll Timeline */

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
        WEB DEVELOPMENT
        ============================================================
        */

        .to(
          webRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(webRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(webRef.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        MOBILE DEVELOPMENT
        ============================================================
        */

        .to(
          mobileRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(mobileRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(mobileRef.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        CYBER SECURITY
        ============================================================
        */

        .to(
          securityRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(securityRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(securityRef.current, {
          opacity: 0,
          scale: 0.97,
          y: -40,
          duration: 0.7,
        })

        /*
        ============================================================
        CREATIVE TECHNOLOGY
        ============================================================
        */

        .to(
          creativeRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
          },
          "<"
        )

        .to(creativeRef.current, {
          opacity: 1,
          duration: 1,
        })

        .to(creativeRef.current, {
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
            04 / CAPABILITIES
          </span>

          <span className="text-[10px] tracking-[0.3em] text-white/30 md:text-xs">
            WHAT I DO
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
                WHAT I BUILD
              </span>
            </div>

            <h2 className="text-[15vw] font-black leading-[0.78] tracking-[-0.09em] md:text-[12vw]">
              CAPABILITIES
            </h2>

            <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-sm leading-7 text-white/50 md:text-lg md:leading-8">
                I combine development, security and creative technology to
                turn ideas into functional digital experiences.
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
            SCENE 2 — WEB DEVELOPMENT
        ======================================================== */}

        <div
          ref={webRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                01 / DEVELOPMENT
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                WEB
              </span>
            </div>

            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
              {/* Number */}

              <div>
                <div className="text-[30vw] font-black leading-[0.7] tracking-[-0.12em] text-white/[0.04] md:text-[22vw]">
                  01
                </div>

                <div className="mt-[-20px] text-xs tracking-[0.3em] text-white/30">
                  FULL STACK
                </div>
              </div>

              {/* Content */}

              <div>
                <div className="mb-5 h-[1px] w-16 bg-white/40" />

                <h3 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                  Web
                  <br />
                  Development
                </h3>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                  Building responsive, scalable and modern web applications
                  from frontend interfaces to backend systems.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-[1px] bg-white/10 sm:grid-cols-3">
                  {[
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST APIs",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="bg-[#050505] px-4 py-4 text-xs text-white/50"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SCENE 3 — MOBILE DEVELOPMENT
        ======================================================== */}

        <div
          ref={mobileRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                02 / DEVELOPMENT
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                MOBILE
              </span>
            </div>

            <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              {/* Content */}

              <div>
                <div className="mb-5 h-[1px] w-16 bg-white/40" />

                <h3 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                  Mobile
                  <br />
                  Experiences
                </h3>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                  Creating cross-platform mobile applications with a focus on
                  performance, usability and clean interfaces.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "React Native",
                    "JavaScript",
                    "API Integration",
                    "Responsive UI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 px-4 py-3 text-[10px] tracking-[0.2em] text-white/45"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Phone */}

              <div className="flex justify-center">
                <div className="relative h-[390px] w-[190px] rounded-[35px] border border-white/20 bg-white/[0.025] p-3 shadow-2xl">
                  <div className="h-full overflow-hidden rounded-[25px] border border-white/10">
                    <div className="flex h-full flex-col">
                      <div className="flex h-10 items-center justify-center border-b border-white/10">
                        <div className="h-1 w-12 rounded-full bg-white/20" />
                      </div>

                      <div className="flex flex-1 flex-col justify-center px-5">
                        <div className="h-10 w-10 border border-white/20" />

                        <div className="mt-6 h-3 w-24 bg-white/10" />

                        <div className="mt-3 h-2 w-32 bg-white/5" />

                        <div className="mt-8 h-28 border border-white/10" />

                        <div className="mt-5 h-10 border border-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SCENE 4 — CYBER SECURITY
        ======================================================== */}

        <div
          ref={securityRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                03 / SECURITY
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                DEFEND
              </span>
            </div>

            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              {/* Security Core */}

              <div className="flex justify-center">
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/10">
                  <div className="absolute inset-6 rounded-full border border-white/10" />

                  <div className="absolute inset-12 rounded-full border border-white/10" />

                  <div className="absolute h-20 w-20 rounded-full border border-white/20 bg-white/[0.04] shadow-[0_0_80px_rgba(255,255,255,0.08)]" />

                  <div className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_30px_rgba(255,255,255,0.5)]" />

                  <div className="absolute left-1/2 top-0 h-1/2 w-[1px] origin-bottom -translate-x-1/2 rotate-[35deg] bg-white/20" />

                  <div className="absolute bottom-0 left-1/2 h-1/2 w-[1px] origin-top -translate-x-1/2 rotate-[35deg] bg-white/20" />
                </div>
              </div>

              {/* Content */}

              <div>
                <div className="mb-5 h-[1px] w-16 bg-white/40" />

                <h3 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                  Cyber
                  <br />
                  Security
                </h3>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                  Exploring network security, cybersecurity fundamentals and
                  defensive approaches to protecting digital systems.
                </p>

                <div className="mt-8 grid gap-[1px] bg-white/10 sm:grid-cols-2">
                  {[
                    "Network Security",
                    "Penetration Testing",
                    "IP Configuration",
                    "Cisco Networking",
                    "Security Fundamentals",
                    "Malware Analysis",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-[#050505] p-4 text-xs text-white/50"
                    >
                      <span className="mr-3 text-white/20">/</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 text-[9px] tracking-[0.3em] text-white/25">
                  SYSTEM STATUS — LEARNING / BUILDING / SECURING
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            SCENE 5 — CREATIVE TECHNOLOGY
        ======================================================== */}

        <div
          ref={creativeRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="w-full max-w-6xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs tracking-[0.4em] text-white/30">
                04 / EXPERIENCE
              </span>

              <span className="text-xs tracking-[0.3em] text-white/30">
                CREATIVE TECH
              </span>
            </div>

            <div className="relative overflow-hidden border border-white/10 bg-white/[0.02] p-8 md:p-14">
              {/* Decorative circles */}

              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/[0.05]" />

              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/[0.05]" />

              <div className="relative z-10">
                <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
                  <div>
                    <div className="mb-5 h-[1px] w-16 bg-white/40" />

                    <h3 className="text-5xl font-bold tracking-[-0.05em] md:text-7xl">
                      Creative
                      <br />
                      Technology
                    </h3>

                    <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                      Combining code and visual design to create immersive,
                      interactive and memorable digital experiences.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {[
                      {
                        number: "01",
                        title: "Three.js",
                      },
                      {
                        number: "02",
                        title: "Interactive UI",
                      },
                      {
                        number: "03",
                        title: "Motion Design",
                      },
                      {
                        number: "04",
                        title: "Responsive Design",
                      },
                    ].map((item) => (
                      <div
                        key={item.number}
                        className="flex items-center justify-between border-b border-white/10 py-5"
                      >
                        <div className="flex items-center gap-5">
                          <span className="text-[10px] tracking-[0.2em] text-white/25">
                            {item.number}
                          </span>

                          <span className="text-lg font-medium">
                            {item.title}
                          </span>
                        </div>

                        <span className="text-white/20">↗</span>
                      </div>
                    ))}
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
                ONE STACK. MANY POSSIBILITIES.
              </span>

              <span className="h-[1px] w-12 bg-white/30" />
            </div>

            <h3 className="text-[12vw] font-black leading-[0.8] tracking-[-0.09em] md:text-[10vw]">
              BUILD.
              <br />
              <span className="text-white/25">
                SECURE.
              </span>
              <br />
              CREATE.
            </h3>

            <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              Development and security are not separate worlds. I&apos;m
              building the skills to work across both.
            </p>

            <div className="mt-12 flex justify-center">
              <a
                href="#experience"
                className="pointer-events-auto cursor-pointer border border-white/20 px-7 py-4 text-xs font-medium tracking-[0.3em] text-white transition-all duration-300 hover:border-white/50 hover:bg-white hover:text-black"
              >
                EXPLORE EXPERIENCE
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
              HAMZA / CAPABILITIES
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

export default Capabilities;