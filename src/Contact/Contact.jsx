import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  const scene1Ref = useRef(null);
  const scene2Ref = useRef(null);
  const scene3Ref = useRef(null);
  const scene4Ref = useRef(null);
  const scene5Ref = useRef(null);
  const scene6Ref = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

      // ==================================================
      // SCENE 01 — INTRO
      // ==================================================

      tl.to(scene1Ref.current, {
        autoAlpha: 0,
        y: -80,
        scale: 1.04,
        duration: 1,
      })

        // ==================================================
        // SCENE 02 — IDENTITY
        // ==================================================

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

        // ==================================================
        // SCENE 03 — CONTACT FORM
        // ==================================================

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

        // ==================================================
        // SCENE 04 — SOCIAL / NETWORK
        // ==================================================

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

        // ==================================================
        // SCENE 05 — AVAILABILITY
        // ==================================================

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

        // ==================================================
        // SCENE 06 — FINAL
        // ==================================================

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

      // ==================================================
      // MOUSE PARALLAX
      // ==================================================

      const moveX = gsap.quickTo(".contact-parallax", "x", {
        duration: 0.8,
        ease: "power3.out",
      });

      const moveY = gsap.quickTo(".contact-parallax", "y", {
        duration: 0.8,
        ease: "power3.out",
      });

      const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 18;

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

  // ==================================================
  // FORM HANDLING
  // ==================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative h-[1000vh] w-full overflow-hidden bg-[#050505] text-white"
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

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

        {/* ==================================================
            TOP LABEL
        ================================================== */}

        <div className="pointer-events-none absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
          <div className="text-[10px] font-medium tracking-[0.35em] text-white/40 md:text-xs">
            CONTACT / 07
          </div>

          <div className="text-[10px] tracking-[0.3em] text-white/30 md:text-xs">
            LET&apos;S BUILD SOMETHING
          </div>
        </div>

        {/* ==================================================
            SCENE 01 — INTRO
        ================================================== */}

        <div
          ref={scene1Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="contact-parallax text-center">
            <p className="mb-8 text-xs uppercase tracking-[0.5em] text-white/30 md:text-sm">
              Final Chapter
            </p>

            <h2 className="text-[16vw] font-black leading-[0.75] tracking-[-0.08em] md:text-[12vw]">
              LET&apos;S
            </h2>

            <h2 className="text-[16vw] font-black leading-[0.75] tracking-[-0.08em] text-white/20 md:text-[12vw]">
              CONNECT.
            </h2>

            <p className="mx-auto mt-12 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              Have an idea, a project, or an opportunity?
              <br />
              Let&apos;s turn it into something real.
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
          <div className="contact-parallax w-full max-w-6xl">
            <div className="grid items-center gap-14 md:grid-cols-[1fr_1fr]">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/30">
                  01 / Direct Contact
                </p>

                <h2 className="text-6xl font-black tracking-[-0.07em] md:text-8xl lg:text-[9rem]">
                  HAMZA
                </h2>

                <h3 className="mt-1 text-3xl font-light tracking-[0.15em] text-white/30 md:text-5xl">
                  ALI
                </h3>

                <p className="mt-10 max-w-lg text-base leading-8 text-white/45 md:text-lg">
                  Full Stack Developer &amp; Cyber Security enthusiast
                  focused on modern web, mobile applications and secure
                  digital systems.
                </p>
              </div>

              <div className="border border-white/10 bg-white/[0.025] p-8 md:p-12">
                <p className="text-xs uppercase tracking-[0.35em] text-white/25">
                  Email
                </p>

                <a
                  href="mailto:YOUR_EMAIL@example.com"
                  className="pointer-events-auto mt-5 block cursor-pointer break-all text-xl font-medium text-white transition-opacity duration-300 hover:opacity-50 md:text-3xl"
                >
                  hamzaali99d@gmail.com
                </a>

                <div className="mt-10 h-px w-full bg-white/10" />

                <p className="mt-8 text-xs uppercase tracking-[0.35em] text-white/25">
                  Based In
                </p>

                <p className="mt-4 text-lg text-white/55">
                  Faisalabad, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            SCENE 03 — CONTACT FORM
        ================================================== */}

        <div
          ref={scene3Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="contact-parallax w-full max-w-6xl">
            <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr]">
              {/* LEFT */}

              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/30">
                  02 / Start A Project
                </p>

                <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                  HAVE AN
                  <br />
                  <span className="text-white/20">IDEA?</span>
                </h2>

                <p className="mt-8 max-w-sm text-sm leading-7 text-white/40">
                  Tell me what you are building, what you need, or simply
                  where you want to go next.
                </p>
              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="pointer-events-auto border border-white/10 bg-white/[0.02] p-7 md:p-10"
              >
                <div className="grid gap-7 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[10px] uppercase tracking-[0.3em] text-white/30"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/60"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-[10px] uppercase tracking-[0.3em] text-white/30"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-4 w-full border-b border-white/15 bg-transparent pb-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/60"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="message"
                    className="text-[10px] uppercase tracking-[0.3em] text-white/30"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="mt-4 w-full resize-none border-b border-white/15 bg-transparent pb-4 text-sm leading-7 text-white outline-none transition-colors placeholder:text-white/20 focus:border-white/60"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-9 inline-flex cursor-pointer items-center gap-5 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Send Message
                  <span className="text-lg">↗</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ==================================================
            SCENE 04 — SOCIAL NETWORK
        ================================================== */}

        <div
          ref={scene4Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="contact-parallax w-full max-w-6xl">
            <div className="mb-12">
              <p className="mb-5 text-xs uppercase tracking-[0.45em] text-white/30">
                03 / Find Me Online
              </p>

              <h2 className="text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">
                THE NETWORK
              </h2>
            </div>

            <div className="grid border-l border-t border-white/10 md:grid-cols-2">
              {/* GITHUB */}

              <a
                href="https://github.com/hamza786-dev"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto group cursor-pointer border-b border-r border-white/10 p-8 transition-all duration-500 hover:bg-white hover:text-black md:p-12"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-white/25 group-hover:text-black/40">
                    01
                  </span>

                  <span className="text-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                    ↗
                  </span>
                </div>

                <h3 className="mt-20 text-3xl font-bold tracking-[-0.04em]">
                  GitHub
                </h3>

                <p className="mt-4 text-sm text-white/35 group-hover:text-black/50">
                  Code, projects and experiments.
                </p>
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto group cursor-pointer border-b border-r border-white/10 p-8 transition-all duration-500 hover:bg-white hover:text-black md:p-12"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-white/25 group-hover:text-black/40">
                    02
                  </span>

                  <span className="text-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                    ↗
                  </span>
                </div>

                <h3 className="mt-20 text-3xl font-bold tracking-[-0.04em]">
                  LinkedIn
                </h3>

                <p className="mt-4 text-sm text-white/35 group-hover:text-black/50">
                  Professional journey and connections.
                </p>
              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/YOUR_PHONE_NUMBER"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto group cursor-pointer border-b border-r border-white/10 p-8 transition-all duration-500 hover:bg-white hover:text-black md:p-12"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-white/25 group-hover:text-black/40">
                    03
                  </span>

                  <span className="text-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                    ↗
                  </span>
                </div>

                <h3 className="mt-20 text-3xl font-bold tracking-[-0.04em]">
                  WhatsApp
                </h3>

                <p className="mt-4 text-sm text-white/35 group-hover:text-black/50">
                  Quick conversations and project discussions.
                </p>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="pointer-events-auto group cursor-pointer border-b border-r border-white/10 p-8 transition-all duration-500 hover:bg-white hover:text-black md:p-12"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-white/25 group-hover:text-black/40">
                    04
                  </span>

                  <span className="text-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                    ↗
                  </span>
                </div>

                <h3 className="mt-20 text-3xl font-bold tracking-[-0.04em]">
                  Email
                </h3>

                <p className="mt-4 text-sm text-white/35 group-hover:text-black/50">
                  For serious project inquiries.
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* ==================================================
            SCENE 05 — AVAILABILITY
        ================================================== */}

        <div
          ref={scene5Ref}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="contact-parallax w-full max-w-5xl text-center">
            <div className="mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10">
              <div className="h-3 w-3 animate-pulse rounded-full bg-white" />
            </div>

            <p className="mb-6 text-xs uppercase tracking-[0.5em] text-white/30">
              04 / Availability
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              OPEN TO
              <br />
              <span className="text-white/20">OPPORTUNITIES.</span>
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
              Available for freelance projects, web applications,
              e-commerce platforms, mobile applications and opportunities
              where technology can solve meaningful problems.
            </p>

            <div className="mx-auto mt-12 grid max-w-3xl gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              <div className="bg-[#050505] px-6 py-7">
                <p className="text-2xl font-bold">WEB</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Development
                </p>
              </div>

              <div className="bg-[#050505] px-6 py-7">
                <p className="text-2xl font-bold">MOBILE</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Applications
                </p>
              </div>

              <div className="bg-[#050505] px-6 py-7">
                <p className="text-2xl font-bold">SECURITY</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/25">
                  Technology
                </p>
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
          <div className="contact-parallax text-center">
            <p className="mb-8 text-xs uppercase tracking-[0.5em] text-white/25">
              Thanks for visiting
            </p>

            <h2 className="text-[16vw] font-black leading-[0.72] tracking-[-0.09em] md:text-[12vw]">
              HAMZA
            </h2>

            <h2 className="text-[16vw] font-black leading-[0.72] tracking-[-0.09em] text-white/20 md:text-[12vw]">
              ALI.
            </h2>

            <p className="mx-auto mt-12 max-w-lg text-sm leading-7 text-white/35 md:text-base">
              Full Stack Developer.
              <br />
              Cyber Security Enthusiast.
              <br />
              Always Building.
            </p>

            <div className="pointer-events-auto mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#hero"
                className="cursor-pointer border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Back To Top
              </a>

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="cursor-pointer border border-white/10 px-7 py-4 text-xs uppercase tracking-[0.25em] text-white/45 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                Email Me
              </a>
            </div>

            <div className="mt-16 text-[9px] uppercase tracking-[0.35em] text-white/15">
              © {new Date().getFullYear()} Hamza Ali — All Rights Reserved
            </div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM INDICATOR
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
            PAGE NUMBER
        ================================================== */}

        <div className="pointer-events-none absolute bottom-8 right-6 z-40 md:right-12">
          <span className="text-[10px] tracking-[0.3em] text-white/20">
            07 — 07
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;