import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../Assets/news1.jpg"
import img2 from "../Assets/career2.jpg"

const tabs = [
  {
    id: 1,
    title: "ESG Strategy",
    heading: "Building Today to Transform Tomorrow",
    text: "We support a healthy and more equitable future for our people, our business, and our planet through our ESG strategy.",
    image: img,
  },
  {
    id: 2,
    title: "Community",
    heading: "Building Stronger Communities",
    text: "Turner partners with local organizations and stakeholders to foster community growth and opportunity.",
    image: img2,
  },
  {
    id: 3,
    title: "DE&I",
    heading: "Diversity, Equity & Inclusion",
    text: "We embrace diversity and create inclusive environments where everyone feels valued and respected.",
    image: img,
  },
  {
    id: 4,
    title: "Environmental",
    heading: "Sustainable Future",
    text: "We prioritize sustainable construction practices to minimize environmental impact.",
    image: img2,
  },
  {
    id: 5,
    title: "Innovation",
    heading: "Driving Innovation",
    text: "Turner leverages technology and innovation to deliver better outcomes for clients and communities.",
    image: img,
  },
  {
    id: 6,
    title: "Safety",
    heading: "Commitment to Safety",
    text: "The safety of our people and partners is our highest priority.",
    image: img2,
  },
];

export default function CultureSection() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
          Our Culture
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          Our vision is to be the highest-value provider of global construction
          services and technical expertise while we make a difference in the
          lives of people, customers, the community, and the environment.
        </p>
      </motion.div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Menu */}
        <div className="bg-blue-700 text-white rounded-lg p-6 space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`block w-full text-left py-2 px-3 rounded-md transition ${
                activeTab === tab.id
                  ? "bg-white text-blue-700 font-semibold"
                  : "hover:bg-blue-600"
              }`}
            >
              {tab.id < 10 ? `0${tab.id}` : tab.id} {tab.title}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            {tabs
              .filter((tab) => tab.id === activeTab)
              .map((tab) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* Text */}
                  <div>
                    <h3 className="uppercase text-sm font-bold text-blue-700 mb-3">
                      {tab.title}
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                      {tab.heading}
                    </h2>
                    <p className="text-gray-600 mb-6">{tab.text}</p>
                    <a
                      href="#"
                      className="text-blue-700 font-medium flex items-center gap-2 hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>

                  {/* Image */}
                  <div>
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="rounded-lg shadow-lg w-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
