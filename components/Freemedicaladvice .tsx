'use client';

import React from 'react';

export default function FreeMedicalAdvice(): React.ReactElement {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-4 max-w-7xl mx-auto">
      <div className="relative bg-[#e8f5f5] rounded-2xl overflow-hidden" style={{ minHeight: '140px' }}>

        {/* Left — Text + Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 px-6 sm:px-10 py-7 pr-36 sm:pr-56 z-10 relative">
          {/* Text block */}
          <div className="shrink-0">
            <h2 className="text-base sm:text-lg font-bold text-[#0a4a6e] mb-3">
              Get free medical advice by asking a doctor
            </h2>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-[#1a6a8a] text-sm">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Ask a question anonymously
              </li>
              <li className="flex items-center gap-2 text-[#1a6a8a] text-sm">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Get a reply from PMC verified doctors
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            
            <button className="bg-[#0a4a6e] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#083d5c] transition cursor-pointer whitespace-nowrap">
              Ask a Question
            </button>
          </div>
        </div>

        {/* Right — Doctor image: absolutely pinned to right & bottom, full card height */}
        <div className="absolute top-0 right-0 h-full w-44 sm:w-56 pointer-events-none select-none">
          <img
            src='https://oladoc.com/dist/images/banner-doc-2_highly-compressed.webp?v=1781784064197'
            alt="Female doctor"
            className="absolute bottom-0 right-4 h-[95%] w-auto object-cover object-top"
            style={{ maxHeight: '160px' }}
          />
        </div>

      </div>
    </div>
  );
}