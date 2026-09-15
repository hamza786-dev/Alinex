import React from "react";
import img from "../Assets/career2.jpg"
import img2 from "../Assets/news1.jpg"

export default function NewsInsights() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* LEFT SIDE - Heading + Featured */}
      <div className="md:col-span-1 md:sticky md:top-24 self-start">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-6 md:mb-12 text-center md:text-left"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          News & Insights
        </h2>

        {/* Featured Card */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={img2}
            alt="Featured News"
            className="w-full h-56 md:h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Turner Advances Programs to Support Mental Health and Suicide
              Prevention
            </h3>
            <a
              href="/news/mental-health"
              className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm md:text-base"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Cards */}
      <div className="md:col-span-2 space-y-12">
        {/* 2-column grid per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={img}
              alt="News 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                Turner Celebrates NFL Kickoff with Legacy of Excellence
              </h4>
              <a
                href="/news/nfl"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={img}
              alt="News 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                Austin Convention Center Redevelopment Project Kicks Off
              </h4>
              <a
                href="/news/austin"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>

        {/* Next Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/news3.jpg"
              alt="News 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                Turner to Remodel and Expand Emergency Department
              </h4>
              <a
                href="/news/remodel"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/news4.jpg"
              alt="News 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                University of Kentucky Hosts Ceremonial Topping Out
              </h4>
              <a
                href="/news/kentucky"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/news4.jpg"
              alt="News 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                University of Kentucky Hosts Ceremonial Topping Out
              </h4>
              <a
                href="/news/kentucky"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/news4.jpg"
              alt="News 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                University of Kentucky Hosts Ceremonial Topping Out
              </h4>
              <a
                href="/news/kentucky"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/news4.jpg"
              alt="News 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                University of Kentucky Hosts Ceremonial Topping Out
              </h4>
              <a
                href="/news/kentucky"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/news4.jpg"
              alt="News 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                University of Kentucky Hosts Ceremonial Topping Out
              </h4>
              <a
                href="/news/kentucky"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/news4.jpg"
              alt="News 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                University of Kentucky Hosts Ceremonial Topping Out
              </h4>
              <a
                href="/news/kentucky"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/news4.jpg"
              alt="News 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">
                University of Kentucky Hosts Ceremonial Topping Out
              </h4>
              <a
                href="/news/kentucky"
                className="text-[rgb(195,155,70)] font-medium flex items-center gap-2 hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
