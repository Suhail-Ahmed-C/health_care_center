'use client';

import React, { useState, useEffect } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Testimonial {
  name: string;
  review: string;
  image?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const testimonials: Testimonial[] = [
  {
    name: 'Amit Sharma',
    review:
      'Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.',
  },
  {
    name: 'Fatima Noor',
    review:
      'This platform has completely changed how I manage my healthcare. Finding the right specialist is now just a matter of minutes. Absolutely love this service!',
  },
  {
    name: 'Usman Ali',
    review:
      'The best healthcare app I have used in Pakistan. The online consultation feature is a game changer. Doctors are responsive and the interface is very clean.',
  },
];

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function UserSay(): React.ReactElement {
  const [current, setCurrent] = useState<number>(0);

  // Auto-play every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = (): void =>
    setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = (): void =>
    setCurrent((i) => (i + 1) % testimonials.length);

  const active = testimonials[current];

  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2d3a4a] text-center mb-8">
          What our users have to say
        </h2>

        {/* Slider row */}
        <div className="relative flex items-center gap-4">

          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-gray-500 transition cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex-1 text-center px-2 sm:px-6">
            {/* Review text */}
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-7">
              {active.review}
            </p>

            {/* Avatar + Name */}
            <div className="flex items-center justify-center gap-2.5">
              {active.image != null ? (
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-9 h-9 rounded-full object-cover border border-gray-200"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
              )}
              <span className="text-gray-700 text-sm font-medium">{active.name}</span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-gray-500 transition cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_: Testimonial, i: number) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? 'w-2.5 h-2.5 bg-gray-500'
                  : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}