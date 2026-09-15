import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene3Ref = useRef(null);
  const scene4Ref = useRef(null);
  const scene5Ref = useRef(null);
  const scene6Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scenes = [
        scene1Ref.current,
        scene2Ref.current,
        scene3Ref.current,
        scene4Ref.current,
        scene5Ref.current,
        scene6Ref.current,
      ];

      gsap.set(scenes, {
        autoAlpha: 0,
        y: 70,
        scale: 0.96,
      });

      gsap.set(scene1Ref.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=10000",
          scrub: 1.2,
          pin: stageRef.current,
          anticipatePin: 1,
        },
      });

      // --------------------------------------------------
      // SCENE 01 — INTRO
      // --------------------------------------------------

      tl.to(scene1Ref.current, {
        autoAlpha: 0,
        y: -80,
        scale: 1.04,
        duration: 1,
      })

        // --------------------------------------------------
        // SCENE 02 — IDENTITY
        // --------------------------------------------------

        .to(
          scene2Ref.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          "<"
        )

        .to(scene2Ref.current, {
          autoAlpha: 0,
          y: -80,
          scale: 1.04,
          duration: 1,
        })

        // --------------------------------------------------
        // SCENE 03 — MINDSET
        // --------------------------------------------------

        .to(
          scene3Ref.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          "<"
        )

        .to(scene3Ref.current, {
          autoAlpha: 0,
          y: -80,
          scale: 1.04,
          duration: 1,
        })

        // --------------------------------------------------
        // SCENE 04 — FOUR SIDES
        // --------------------------------------------------

        .to(
          scene4Ref.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          "<"
        )

        .to(scene4Ref.current, {
          autoAlpha: 0,
          y: -80,
          scale: 1.04,
          duration: 1,
        })

        // --------------------------------------------------
        // SCENE 05 — FUTURE
        // --------------------------------------------------

        .to(
          scene5Ref.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          "<"
        )

        .to(scene5Ref.current, {
          autoAlpha: 0,
          y: -80,
          scale: 1.04,
          duration: 1,
        })

        // --------------------------------------------------
        // SCENE 06 — FINAL
        // --------------------------------------------------

        .to(
          scene6Ref.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          "<"
        );

      // --------------------------------------------------
      // MOUSE PARALLAX
      // --------------------------------------------------

      const moveX = gsap.quickTo(".about-parallax", "x", {
        duration: 0.8,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(".about-parallax", "y", {
        duration: 0.8,
        ease: "power3.out",
      });

      const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 20;
        const y = (event.clientY / window.innerHeight - 0.5) * 20;

        moveX(x);
        moveY(y);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-[1000vh] w-full bg-[#050505] text-white overflow-hidden"
    >
      <div
        ref={stageRef}
        className="relative h-screen w-full overflow-hidden bg-[#050505]"
      >
        {/* ==================================================
            BACKGROUND GRID
        ================================================== */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.055]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* ==================================================
            CENTRAL LIGHT
        ================================================== */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

        {/* ==================================================
            TOP NAV
        ================================================== */}

        <div className="pointer-events-none absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <div className="text-[10px] font-medium tracking-[0.35em] text-white/40 md:text-xs">
            ABOUT / 06
          </div>

          <div className="text-[10px] tracking-[0.3em] text-white/30 md:text-xs">
            THE PERSON BEHIND THE CODE
          </div>
        </div>

        {/* ==================================================
            SCENE 01
        ================================================== */}

        <div
          ref={scene1Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="about-parallax text-center">
            <p className="mb-8 text-xs uppercase tracking-[0.5em] text-white/35 md:text-sm">
              Beyond The Interface
            </p>

            <h2 className="text-[13vw] font-black leading-[0.78] tracking-[-0.07em] md:text-[11vw]">
              THE PERSON
            </h2>

            <h2 className="mt-3 text-[13vw] font-black leading-[0.78] tracking-[-0.07em] text-white/20 md:text-[11vw]">
              BEHIND CODE
            </h2>

            <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/45 md:text-base">
              Every interface has a person behind it.
              <br />
              Every system has a reason behind it.
            </p>
          </div>
        </div>

        {/* ==================================================
            SCENE 02 — IDENTITY
        ================================================== */}

        <div
          ref={scene2Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="about-parallax w-full max-w-6xl">
            <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/30">
                  01 / Identity
                </p>

                <div className="relative">
                  <div className="absolute -left-6 top-3 h-24 w-[2px] bg-white/30" />

                  <h2 className="text-6xl font-black tracking-[-0.06em] md:text-8xl lg:text-[9rem]">
                    HAMZA
                  </h2>

                  <h3 className="mt-1 text-2xl font-light tracking-[0.12em] text-white/45 md:text-4xl">
                    ALI
                  </h3>
                </div>
              </div>

              <div className="max-w-xl">
                <p className="text-lg leading-8 text-white/65 md:text-2xl md:leading-10">
                  I am a{" "}
                  <span className="text-white">
                    BS Information Technology student
                  </span>{" "}
                  focused on building modern digital experiences while
                  developing deeper skills in cybersecurity and networking.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {[
                    "Full Stack",
                    "Cyber Security",
                    "React Native",
                    "Networking",
                    "Modern Web",
                    "Continuous Learning",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border border-white/10 bg-white/[0.025] px-4 py-4 text-xs uppercase tracking-[0.15em] text-white/45"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            SCENE 03 — MINDSET
        ================================================== */}

        <div
          ref={scene3Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="about-parallax w-full max-w-5xl text-center">
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/30">
              02 / Mindset
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              BUILD WITH
              <br />
              <span className="text-white/20">PURPOSE.</span>
            </h2>

            <div className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
              <div className="bg-[#050505] p-8 text-left">
                <span className="text-xs text-white/25">01</span>

                <h3 className="mt-8 text-lg font-semibold">
                  Think First
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Understand the problem before writing the solution.
                </p>
              </div>

              <div className="bg-[#050505] p-8 text-left">
                <span className="text-xs text-white/25">02</span>

                <h3 className="mt-8 text-lg font-semibold">
                  Build Better
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Create interfaces and systems that feel intentional.
                </p>
              </div>

              <div className="bg-[#050505] p-8 text-left">
                <span className="text-xs text-white/25">03</span>

                <h3 className="mt-8 text-lg font-semibold">
                  Stay Curious
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Technology changes. Learning should never stop.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            SCENE 04 — FOUR SIDES
        ================================================== */}

        <div
          ref={scene4Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="about-parallax w-full max-w-6xl">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/30">
                  03 / The Approach
                </p>

                <h2 className="text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                  FOUR SIDES.
                </h2>
              </div>

              <div className="hidden text-right md:block">
                <p className="text-xs uppercase tracking-[0.3em] text-white/25">
                  Developer × Security × Creative × Learner
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">
              <div className="group border-b border-r border-white/10 p-7 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center border border-white/15 text-xl font-light">
                  01
                </div>

                <h3 className="mt-16 text-xl font-semibold">
                  Developer
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  Building web and mobile applications with modern
                  technologies.
                </p>
              </div>

              <div className="group border-b border-r border-white/10 p-7 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center border border-white/15 text-xl font-light">
                  02
                </div>

                <h3 className="mt-16 text-xl font-semibold">
                  Security
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  Exploring networking, penetration testing and security
                  fundamentals.
                </p>
              </div>

              <div className="group border-b border-r border-white/10 p-7 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center border border-white/15 text-xl font-light">
                  03
                </div>

                <h3 className="mt-16 text-xl font-semibold">
                  Creative
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  Combining technology, motion and design to create
                  memorable experiences.
                </p>
              </div>

              <div className="group border-b border-r border-white/10 p-7 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center border border-white/15 text-xl font-light">
                  04
                </div>

                <h3 className="mt-16 text-xl font-semibold">
                  Learner
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  Constantly learning new tools, systems and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            SCENE 05 — FUTURE
        ================================================== */}

        <div
          ref={scene5Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="about-parallax w-full max-w-6xl">
            <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/30">
                  04 / Direction
                </p>

                <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-[7.5rem]">
                  THE NEXT
                  <br />
                  <span className="text-white/20">VERSION.</span>
                </h2>
              </div>

              <div>
                <div className="border-l border-white/15 pl-7 md:pl-10">
                  <p className="text-lg leading-8 text-white/55 md:text-xl md:leading-9">
                    The goal is simple:
                  </p>

                  <p className="mt-5 text-2xl font-semibold leading-9 md:text-3xl">
                    become a stronger engineer, build meaningful products,
                    and grow toward professional cybersecurity expertise.
                  </p>
                </div>

                <div className="mt-12 space-y-5">
                  {[
                    "Deepen Full Stack Engineering",
                    "Advance Cyber Security Knowledge",
                    "Build Better Mobile Experiences",
                    "Explore Advanced Technologies",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-5 border-b border-white/10 pb-5"
                    >
                      <span className="text-xs text-white/25">
                        0{index + 1}
                      </span>

                      <span className="text-sm uppercase tracking-[0.12em] text-white/55">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            SCENE 06 — FINAL
        ================================================== */}

        <div
          ref={scene6Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="about-parallax text-center">
            <p className="mb-8 text-xs uppercase tracking-[0.5em] text-white/30">
              That is only the beginning
            </p>

            <h2 className="text-[15vw] font-black leading-[0.75] tracking-[-0.08em] md:text-[11vw]">
              LEARN.
            </h2>

            <h2 className="text-[15vw] font-black leading-[0.75] tracking-[-0.08em] text-white/25 md:text-[11vw]">
              BUILD.
            </h2>

            <h2 className="text-[15vw] font-black leading-[0.75] tracking-[-0.08em] md:text-[11vw]">
              EVOLVE.
            </h2>

            <p className="mx-auto mt-12 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              The journey is still being written.
              <br />
              Let’s build what comes next.
            </p>

            <a
              href="#contact"
              className="pointer-events-auto mt-10 inline-flex cursor-pointer items-center gap-5 border border-white/20 px-7 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-black md:px-9 md:py-5"
            >
              Start A Conversation
              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>

        {/* ==================================================
            SIDE INDEX
        ================================================== */}

        <div className="pointer-events-none absolute bottom-8 left-6 z-40 hidden md:left-12 md:block">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white/20" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* ==================================================
            RIGHT SIDE NUMBER
        ================================================== */}

        <div className="pointer-events-none absolute bottom-8 right-6 z-40 md:right-12">
          <span className="text-[10px] tracking-[0.3em] text-white/20">
            06 — 06
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;