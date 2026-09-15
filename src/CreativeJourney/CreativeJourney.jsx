import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Onboarding",
    description:
      "We start by getting on an onboarding call to learn about you, your business, niche, target audience, goals and more.",
  },
  {
    id: 2,
    title: "Research & Strategy",
    description:
      "We research your competitors, understand your target market and create a strategy tailored to your brand.",
  },
  {
    id: 3,
    title: "Content Creation",
    description:
      "Our creative team designs engaging posts, reels, and stories that align with your brand voice.",
  },
  {
    id: 4,
    title: "Execution & Growth",
    description:
      "We schedule and post your content, monitor performance and optimize for growth.",
  },
];

export default function CreativeJourneyTimeline() {
  const stepRefs = useRef([]);
  stepRefs.current = [];

  const addToRefs = (el) => {
    if (el && !stepRefs.current.includes(el)) {
      stepRefs.current.push(el);
    }
  };

  const [active, setActive] = useState(0);
  const [circleTop, setCircleTop] = useState(40);

  useEffect(() => {
    const handleScroll = () => {
      if (!stepRefs.current.length) return;

      const refY = window.innerHeight / 2;

      let closestIdx = 0;
      let minDist = Infinity;

      stepRefs.current.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        const elMid = rect.top + rect.height / 2;
        const dist = Math.abs(elMid - refY);

        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });

      setActive(closestIdx);

      const target = stepRefs.current[closestIdx];
      if (target) {
        const rect = target.getBoundingClientRect();
        const elMid = rect.top + rect.height / 2;

        // Clamp circle position
        const min = 20;
        const max = window.innerHeight - 20;
        setCircleTop(Math.min(Math.max(elMid, min), max));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#0b0b0b] text-white px-6 lg:px-20 py-24 relative overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT – Sticky Content */}
        <div className="lg:w-1/2 lg:sticky lg:top-24 self-start">
          <div className="flex items-center gap-2 mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s-7-4.35-9-6.9C-0.5 9.5 4 4 8 6.3 10 7.8 12 9 12 9s2-1.2 4-2.7c4-2.3 8.5 3.2 5 7.1C19 16.65 12 21 12 21z"
                fill="#fb923c"
              />
            </svg>
            <span className="text-gray-400">Our</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            <span className="block">Creative</span>
            <span className="relative inline-block">
              Journey
              <svg
                className="absolute -bottom-2 left-0 w-[160px] lg:w-[220px]"
                viewBox="0 0 200 20"
                fill="none"
              >
                <path
                  d="M4 10 C40 18, 80 0, 120 10 C160 20, 200 6, 240 12"
                  stroke="#fb923c"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-gray-400 max-w-md mb-8">
            The process we follow to help you GROW and SELL on social media that
            takes just 4hrs/month of your time.
          </p>

          <button className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </div>

        {/* RIGHT – Timeline */}
        <div className="lg:w-1/2 relative">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-[6px] bg-gray-800 rounded-full"></div>

          {/* Moving Indicator */}
          <div
            className="absolute left-10 w-5 h-5 -translate-x-1/2 transition-all duration-300"
            style={{ top: `${circleTop}px` }}
          >
            <div className="w-5 h-5 rounded-full bg-orange-400 shadow-[0_8px_30px_rgba(251,146,60,0.4)]" />
          </div>

          {/* Steps */}
          <div className="ml-20 space-y-32 py-20">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={addToRefs}
                className="relative min-h-[220px]"
              >
                <span className="absolute -top-12 left-0 text-[120px] font-extrabold text-gray-700 opacity-10 select-none">
                  {index + 1}
                </span>

                <div
                  className={`p-8 rounded-3xl bg-[#0e0e0e] border border-gray-800 transition-all duration-300 ${
                    active === index
                      ? "scale-105 ring-1 ring-orange-400/30 shadow-[0_20px_40px_rgba(251,146,60,0.25)]"
                      : "hover:-translate-y-1"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-orange-400 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


