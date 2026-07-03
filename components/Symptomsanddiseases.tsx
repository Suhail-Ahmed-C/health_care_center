'use client';

import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Item {
  label: string;
  image: string;
  alt: string;
}

// ─── Data — all icons from icons8 CDN (guaranteed to load) ───────────────────
const symptoms: Item[] = [
  {
    label: 'Fever',
    image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/fever.png?v=1781784064197',
    alt: 'Fever',
  },
  {
    label: 'Heart attack',
    image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/heart-attack.png?v=1781784064197',
    alt: 'Heart attack',
  },
  {
    label: 'Pregnancy',
    image: 'https://img.icons8.com/color/96/pregnant.png',
    alt: 'Pregnancy',
  },
  {
    label: 'High blood pres...',
    image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/high-blood-pressure.png?v=1781784064197',
    alt: 'High blood pressure',
  },
  {
    label: 'Breathlessness',
    image: 'https://img.icons8.com/color/96/lungs.png',
    alt: 'Breathlessness',
  },
  {
    label: 'Diarrhea',
    image: 'https://d1t78adged64l7.cloudfront.net/dist/icons/conditions/v1/diarrhea.png?v=1781784064197',
    alt: 'Diarrhea',
  },
  {
    label: 'Hairfall',
    image: 'https://www.shutterstock.com/image-vector/concept-hair-loss-silhouette-icon-260nw-2251450791.jpg',
    alt: 'Hairfall',
  },
  {
    label: 'Anxiety/Depress...',
    image: 'https://img.icons8.com/color/96/mental-health.png',
    alt: 'Anxiety Depression',
  },
];

const diseases: Item[] = [
  {
    label: 'Dengue fever',
    image: 'https://img.icons8.com/color/96/mosquito.png',
    alt: 'Dengue fever',
  },
  {
    label: 'Typhoid Fever',
    image: 'https://img.icons8.com/color/96/sick.png',
    alt: 'Typhoid Fever',
  },
  {
    label: 'Piles',
    image: 'https://img.icons8.com/color/96/large-intestine.png',
    alt: 'Piles',
  },
  {
    label: 'Gastritis',
    image: 'https://d1t78adged64l7.cloudfront.net/specialty-icons3/gastroenterologist.png?v=1781784064197',
    alt: 'Gastritis',
  },
  {
    label: 'Hernia',
    image: 'https://img.icons8.com/color/96/intestines.png',
    alt: 'Hernia',
  },
  {
    label: 'Vaginal Infection',
    image: 'https://img.icons8.com/color/96/uterus.png',
    alt: 'Vaginal Infection',
  },
  {
    label: 'Migraine',
    image: 'https://img.icons8.com/color/96/headache.png',
    alt: 'Migraine',
  },
  {
    label: 'TB',
    image: 'https://img.icons8.com/color/96/lungs-care.png',
    alt: 'Tuberculosis',
  },
];

// ─── Reusable Row ─────────────────────────────────────────────────────────────
interface RowProps {
  title: string;
  items: Item[];
}

function ItemRow({ title, items }: RowProps): React.ReactElement {
  return (
    <div>
      {/* Row Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#0a4a6e] transition cursor-pointer font-medium">
          View all
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Icons Grid — 4 cols mobile, 8 cols desktop */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-4">
        {items.map((item: Item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center cursor-pointer group"
          >
            {/* Circle with icon */}
            <div className="w-16 h-16 sm:w-[88px] sm:h-[88px] rounded-full bg-gray-100 flex items-center justify-center mb-2.5 group-hover:bg-[#e8f5f5] transition-colors duration-200 overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-9 h-9 sm:w-12 sm:h-12 object-contain"
                loading="lazy"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  (e.target as HTMLImageElement).src =
                    'https://img.icons8.com/color/96/hospital.png';
                }}
              />
            </div>
            {/* Label */}
            <span className="text-[11px] sm:text-[13px] font-medium text-[#1a7a9a] group-hover:text-[#0a4a6e] transition-colors duration-200 leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function SymptomsAndDiseases(): React.ReactElement {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-10 py-6 max-w-7xl mx-auto">
      <div className="border-t border-gray-100 mb-8" />

      <div className="space-y-10">
        <ItemRow title="Symptoms" items={symptoms} />
        <div className="border-t border-gray-100" />
        <ItemRow title="Diseases" items={diseases} />
      </div>

      <div className="border-t border-gray-100 mt-8" />
    </div>
  );
}