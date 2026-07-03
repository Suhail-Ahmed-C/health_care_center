'use client';

import React, { useState, useRef } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface QuickService {
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  alt: string;
  bgColor: string;
}

interface HealthConcern {
  label: string;
  image: string;
  alt: string;
}

interface InClinicDoctor {
  specialty: string;
  desc: string;
  image: string;
  alt: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const quickServices: QuickService[] = [
  {
    title: 'Instant Video Consultation',
    subtitle: '',
    desc: 'Connect within 60 secs',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png',
    alt: 'Video consultation doctor',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Find Doctors Near You',
    subtitle: '',
    desc: 'Confirmed appointments',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png',
    alt: 'Doctor near you',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Lab Tests',
    subtitle: '',
    desc: 'Safe and trusted lab tests',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png',
    alt: 'Lab tests',
    bgColor: 'bg-cyan-100',
  },
  {
    title: 'Surgeries',
    subtitle: '',
    desc: 'Safe and trusted surgery centers',
    image: 'https://www.practostatic.com/home/surgeries-2b.png',
    alt: 'Surgery specialist',
    bgColor: 'bg-teal-100',
  },
];

const healthConcerns: HealthConcern[] = [
  {
    label: 'Period doubts or\nPregnancy',
    image: 'https://img.icons8.com/color/96/uterus.png',
    alt: 'Period doubts or Pregnancy',
  },
  {
    label: 'Acne, pimple or\nskin issues',
    image: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png',
    alt: 'Acne pimple skin issues',
  },
  {
    label: 'Performance\nissues in bed',
    image: 'https://img.icons8.com/color/96/gender.png',
    alt: 'Performance issues',
  },
  {
    label: 'Cold, cough or\nfever',
    image: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png',
    alt: 'Cold cough fever',
  },
  {
    label: 'Child not feeling\nwell',
    image: 'https://img.icons8.com/color/96/baby.png',
    alt: 'Child health',
  },
  {
    label: 'Depression or\nanxiety',
    image: 'https://img.icons8.com/color/96/mental-health.png',
    alt: 'Depression anxiety',
  },
];

const inClinicDoctors: InClinicDoctor[] = [
    {
    specialty: 'General Surgeon',
    desc: 'Need to get operated? Find the right surgeon',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    alt: 'General Surgeon',
  },
  {
    specialty: 'Orthopedist',
    desc: 'For Bone and Joints issues, spinal injuries and more',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UR9d2HKez3Bd1Sg8lGwVzMB50GgUr7nLXeFFM6y8GngPFhWx4cTQrPo&s=10',
    alt: 'Orthopedist',
  },
  {
    specialty: 'General Physician',
    desc: 'Find the right family doctor in your neighborhood',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-YNJeaYHAUnNtGlAWNHRV7WpIycgxCVS67t2iUu7jP_tOtyv5Wt3OJYKe&s=10',
    alt: 'General Physician',
  },
  {
    specialty: 'Pediatrician',
    desc: 'Child Specialists and Doctors for Infant',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg',
    alt: 'Pediatrician',
  },
  {
    specialty: 'Gastroenterologist',
    desc: 'Explore for issues related to digestive system, liver and pancreas',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg',
    alt: 'Gastroenterologist',
  },
  {
    specialty: 'Cardiologist',
    desc: 'Expert heart specialists for cardiac care and treatment',
    image: 'https://7orangehospitals.com/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-18-at-16.43.56.jpeg',
    alt: 'Cardiologist',
  },
  {
    specialty: 'Dermatologist',
    desc: 'Skin, hair and nail specialists for all conditions',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIjKb6ESifuti2AEcbrAREROT2Au1fo-nDJJduL5amwAmgoPEUF4Us-kr&s=10',
    alt: 'Dermatologist',
  },
  {
    specialty: 'Dentist',
    desc: 'Teething troubles? Schedule a dental checkup',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg',
    alt: 'Dentist',
  },
  {
    specialty: 'Gynecologist/Obstetrician',
    desc: "Explore for women's health, pregnancy and infertility treatments",
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg',
    alt: 'Gynecologist',
  },
  {
    specialty: 'Dietitian/Nutrition',
    desc: 'Get guidance on eating right, weight management and sports nutrition',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg',
    alt: 'Dietitian',
  },
  {
    specialty: 'Physiotherapist',
    desc: 'Pulled a muscle? Get it treated by a trained physiotherapist',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg',
    alt: 'Physiotherapist',
  },
  
  {
    specialty: 'Neurologist',
    desc: 'Expert neurologists for brain and nervous system concerns',
    image: 'https://www.hudsonmdgroup.com/wp-content/uploads/sites/438/2024/09/Neurologist.jpg',
    alt: 'Neurologist',
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HomeServices(): React.ReactElement {
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const visibleCount = 4; // cards visible at once on desktop
  const maxIndex = Math.max(0, inClinicDoctors.length - visibleCount);

  const slideNext = () => setSliderIndex((prev) => Math.min(prev + 1, maxIndex));
  const slidePrev = () => setSliderIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-10 py-6 space-y-10 max-w-7xl mx-auto">

      {/* ══════════════════════════════════════════════
          SECTION 1 — Quick Service Cards (4 cards)
      ══════════════════════════════════════════════ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {quickServices.map((svc) => (
          <div
            key={svc.title}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
          >
            {/* Image area */}
            <div className={`${svc.bgColor} flex items-end justify-center h-36 sm:h-40 overflow-hidden`}>
              <img
                src={svc.image}
                alt={svc.alt}
                className="w-32 h-32 object-contain mx-auto"
              />
            </div>
            {/* Text */}
            <div className="p-3 sm:p-4">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
                {svc.title}
                {svc.subtitle && (
                  <span className="block">{svc.subtitle}</span>
                )}
              </h3>
              <p className="text-[#23c2c2] text-xs mt-1">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2 — Consult top doctors online
      ══════════════════════════════════════════════ */}
      <div>
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Consult top doctors online for any health concern
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Private online consultations with verified doctors in all specialists
            </p>
          </div>
          <button className="shrink-0 ml-4 mt-1 border border-[#c0fcfc] text-[#23c2c2] text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-blue-50 transition cursor-pointer whitespace-nowrap">
            View All Specialties
          </button>
        </div>

        {/* Concern cards */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {healthConcerns.map((concern) => (
            <div
              key={concern.label}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              {/* Icon circle */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-50 flex items-center justify-center mb-2 group-hover:bg-blue-100 transition overflow-hidden">
                <img
                  src={concern.image}
                  alt={concern.alt}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://img.icons8.com/color/96/hospital.png';
                  }}
                />
              </div>
              {/* Label */}
              <p className="text-gray-800 text-xs sm:text-sm font-medium leading-snug whitespace-pre-line mb-1.5">
                {concern.label}
              </p>
              {/* Consult Now */}
              <span className="text-[#23c2c2] text-[11px] sm:text-xs font-bold uppercase tracking-wide group-hover:underline">
                CONSULT NOW
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — Book in-clinic appointment
      ══════════════════════════════════════════════ */}
      <div>
        {/* Header */}
        <div className="mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Book an appointment for an in-clinic consultation
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Find experienced doctors across all specialties
          </p>
        </div>

        {/* Slider wrapper */}
        <div className="relative">
          {/* Cards container */}
          <div className="overflow-hidden" ref={sliderRef}>
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${sliderIndex * (100 / visibleCount)}% - ${sliderIndex * 16 / visibleCount}px))` }}
            >
              {inClinicDoctors.map((doc) => (
                <div
                  key={doc.specialty}
                  className="shrink-0 cursor-pointer group"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 16 / visibleCount}px)` }}
                >
                  {/* Image */}
                  <div className="rounded-xl overflow-hidden h-44 sm:h-52 bg-gray-100">
                    <img
                      src={doc.image}
                      alt={doc.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Text */}
                  <div className="mt-2.5">
                    <h4 className="font-bold text-gray-900 group-hover:text-[#13a7a7] transition-colors duration-200 text-sm sm:text-base">{doc.specialty}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5 leading-snug">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          {sliderIndex < maxIndex && (
            <button
              onClick={slideNext}
              className="absolute -right-4 top-[40%] -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition cursor-pointer z-10"
              aria-label="Next"
            >
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {/* Left arrow */}
          {sliderIndex > 0 && (
            <button
              onClick={slidePrev}
              className="absolute -left-4 top-[40%] -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition cursor-pointer z-10"
              aria-label="Previous"
            >
              <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
