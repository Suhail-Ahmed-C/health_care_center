'use client';

import React, { useState, useEffect, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Banner {
  id: number;
  eyebrow: string;
  title: string;
  tagline: string;
  taglineColor: string;
  btnLabel: string;
  btnColor: string;
  phone?: string;
  overlay: string;
  image: string;
  alt: string;
}

interface ServiceCardData {
  id: string;
  eyebrow: string;
  title: string;
  desc: string | null;
  btnLabel: string;
  btnClass: string;
  cardClass: string;
  image: string | null;
  imageAlt?: string;
}

// ─── Slider Banners Data ──────────────────────────────────────────────────────
const BANNERS: Banner[] = [
  {
    id: 1,
    eyebrow: 'Online Consultation',
    title: 'Online Doctor\nConsultation',
    tagline: 'Doctor Just A Call Away!',
    taglineColor: 'text-amber-400',
    btnLabel: 'Book Now',
    btnColor: 'text-teal-700',
    phone: '0317-1719451',
    overlay: 'from-teal-950/85 via-teal-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=1200&q=80',
    alt: 'Doctor video consultation',
  },
  {
    id: 2,
    eyebrow: 'At Home',
    title: 'Home Healthcare\nServices',
    tagline: 'Nurse & Doctor At Your Door',
    taglineColor: 'text-violet-300',
    btnLabel: 'Book Now',
    btnColor: 'text-violet-700',
    overlay: 'from-violet-950/85 via-violet-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80',
    alt: 'Home healthcare service',
  },
  {
    id: 3,
    eyebrow: 'Lab At Home',
    title: 'Lab Tests &\nCheckups',
    tagline: 'Results In 24 Hours',
    taglineColor: 'text-rose-300',
    btnLabel: 'Book Now',
    btnColor: 'text-rose-700',
    overlay: 'from-rose-950/85 via-rose-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    alt: 'Lab test equipment',
  },
  {
    id: 4,
    eyebrow: 'Mental Wellness',
    title: 'Mental Health\nConsultations',
    tagline: 'Talk To A Psychologist Today',
    taglineColor: 'text-sky-300',
    btnLabel: 'Book Now',
    btnColor: 'text-sky-700',
    overlay: 'from-sky-950/85 via-sky-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80',
    alt: 'Mental health consultation',
  },
  {
    id: 5,
    eyebrow: 'Child Health',
    title: 'Pediatric\nSpecialists',
    tagline: 'Expert Care For Your Children',
    taglineColor: 'text-emerald-300',
    btnLabel: 'Book Now',
    btnColor: 'text-emerald-700',
    overlay: 'from-emerald-950/85 via-emerald-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80',
    alt: 'Pediatric care',
  },
  {
    id: 6,
    eyebrow: 'Dental',
    title: 'Dental Care\n& Treatment',
    tagline: 'Bright Smiles Start Here',
    taglineColor: 'text-orange-300',
    btnLabel: 'Book Now',
    btnColor: 'text-orange-700',
    overlay: 'from-orange-950/85 via-orange-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&q=80',
    alt: 'Dental care',
  },
  {
    id: 7,
    eyebrow: "Women's Health",
    title: "Gynecology &\nMaternity Care",
    tagline: 'Specialized Care For Women',
    taglineColor: 'text-pink-300',
    btnLabel: 'Book Now',
    btnColor: 'text-pink-700',
    overlay: 'from-pink-950/85 via-pink-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80',
    alt: "Women's health",
  },
  {
    id: 8,
    eyebrow: 'Heart Health',
    title: 'Cardiology\nSpecialists',
    tagline: 'Your Heart In Safe Hands',
    taglineColor: 'text-red-300',
    btnLabel: 'Book Now',
    btnColor: 'text-red-700',
    overlay: 'from-red-950/85 via-red-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1200&q=80',
    alt: 'Cardiology',
  },
  {
    id: 9,
    eyebrow: 'Fast Delivery',
    title: 'Medicine Delivery\nIn 2 Hours',
    tagline: 'Medicines At Your Doorstep',
    taglineColor: 'text-blue-300',
    btnLabel: 'Order Now',
    btnColor: 'text-blue-700',
    overlay: 'from-blue-950/85 via-blue-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1200&q=80',
    alt: 'Medicine delivery',
  },
  {
    id: 10,
    eyebrow: '500+ Specialists',
    title: 'Find The Right\nSpecialist',
    tagline: 'All Specialties, One Platform',
    taglineColor: 'text-teal-300',
    btnLabel: 'Explore Doctors',
    btnColor: 'text-teal-700',
    overlay: 'from-teal-950/85 via-teal-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80',
    alt: 'Specialist doctors',
  },
  {
    id: 11,
    eyebrow: 'Nursing Services',
    title: 'Professional\nNursing At Home',
    tagline: 'Certified Nurses, 24/7',
    taglineColor: 'text-lime-300',
    btnLabel: 'Book Now',
    btnColor: 'text-lime-700',
    overlay: 'from-lime-950/85 via-lime-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&q=80',
    alt: 'Nursing at home',
  },
  {
    id: 12,
    eyebrow: '24/7 Available',
    title: 'Emergency\nMedical Help',
    tagline: 'Instant Response, Anytime',
    taglineColor: 'text-amber-300',
    btnLabel: 'Call Now',
    btnColor: 'text-red-700',
    overlay: 'from-red-950/90 via-red-900/50 to-transparent',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    alt: 'Emergency medical help',
  },
];

// ─── Service Cards Data ───────────────────────────────────────────────────────
const SERVICE_CARDS: ServiceCardData[] = [
];

// ─── PhoneIcon ────────────────────────────────────────────────────────────────
function PhoneIcon(): React.ReactElement {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 11.91 19.79 19.79 0 0 1 1.03 3.24 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 21 16l.92.92Z" />
    </svg>
  );
}

// ─── ChevronIcon ──────────────────────────────────────────────────────────────
interface ChevronIconProps {
  direction: 'left' | 'right';
}

function ChevronIcon({ direction }: ChevronIconProps): React.ReactElement {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === 'left' ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

// ─── BannerSlider ─────────────────────────────────────────────────────────────
function BannerSlider(): React.ReactElement {
  const [current, setCurrent] = useState<number>(0);

  const goTo = useCallback((index: number): void => {
    setCurrent((index + BANNERS.length) % BANNERS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden h-[260px] md:h-[320px] bg-gray-900">
      {BANNERS.map((b: Banner, i: number) => (
        <div
          key={b.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={b.image}
            alt={b.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${b.overlay}`} />

          <div className="absolute inset-0 flex items-center px-8 md:px-10 z-10">
            <div className="max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70 mb-1">
                {b.eyebrow}
              </p>
              <h2 className="text-2xl md:text-[28px] font-bold text-white leading-tight mb-5 whitespace-pre-line">
                {b.title}
              </h2>
              <p className={`text-base font-bold uppercase tracking-wide mb-8 ${b.taglineColor}`}>
                {b.tagline}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <button
                  className={`bg-white ${b.btnColor} font-bold text-sm px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200`}
                >
                  {b.btnLabel}
                </button>
                {b.phone != null && (
                  <span className="flex items-center gap-3 text-white/90 text-sm">
                    <PhoneIcon />
                    {b.phone}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrow — Left */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/35 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronIcon direction="left" />
      </button>

      {/* Arrow — Right */}
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/35 transition-colors"
        aria-label="Next slide"
      >
        <ChevronIcon direction="right" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {BANNERS.map((_: Banner, i: number) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-5 bg-white' : 'w-2 bg-white/45 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── ServiceCard ──────────────────────────────────────────────────────────────
// interface ServiceCardProps {
//   card: ServiceCardData;
// }

// function ServiceCard({ card }: ServiceCardProps): React.ReactElement {
//   return (
//     <div
//       className={`relative rounded-2xl border border-gray-100 p-3 flex flex-col justify-between min-h-[150px] overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-lg ${card.cardClass}`}
//     >
//       <div className="z-10 relative">
//         <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
//           {card.eyebrow}
//         </p>
//         <h3 className="text-[15px] font-bold text-gray-800 leading-snug mb-2">
//           {card.title}
//         </h3>
//         {card.desc != null && (
//           <p className="text-[11px] text-gray-500 leading-relaxed">{card.desc}</p>
//         )}
//       </div>
//       <button
//         className={`z-10 relative self-start text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200 ${card.btnClass}`}
//       >
//         {card.btnLabel}
//       </button>

//       {card.image != null && (
//         <img
//           src={card.image}
//           alt={card.imageAlt ?? card.title}
//           className="absolute bottom-0 right-0 w-[78px] h-[78px] object-cover rounded-tl-xl rounded-br-2xl opacity-90"
//           loading="lazy"
//         />
//       )}
//     </div>
//   );
// }

// ─── HeroSection (main export) ────────────────────────────────────────────────
export default function HeroSection(): React.ReactElement {
  return (
    <section className="w-full bg-gray-100 p-3 md:p-4 space-y-3">

      {/* Top row: Pharmacy card + Slider */}
      <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] gap-3">

        {/* Pharmacy Card */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 flex flex-col justify-between min-h-[260px] overflow-hidden">
          <div>
            <h2 className="text-xl font-bold text-teal-900 mb-1">Pharmacy</h2>
            <p className="text-xs text-teal-700 leading-relaxed">
              Upload your prescription and we&apos;ll deliver medicines straight to your door.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80"
            alt="Medicines in a cart"
            className="w-full h-[120px] object-cover rounded-xl my-3"
          />
          <button className="self-start bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-5  py-2.5 rounded-full transition-colors duration-200 shadow-md">
            Order Now
          </button>
        </div>

        {/* Banner Slider */}
        <BannerSlider />
      </div>

      {/* Bottom row: 4 Service Cards */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {SERVICE_CARDS.map((card: ServiceCardData) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div> */}

    </section>
  );
}
