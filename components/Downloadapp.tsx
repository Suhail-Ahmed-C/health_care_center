"use client";

import {
  Search,
  Stethoscope,
  Pill,
  FlaskConical,
  CalendarCheck,
  Apple,
  Play,
} from "lucide-react";

/**
 * DownloadApp
 * Promo section encouraging users to download the Sneha mobile app.
 * Layout: copy + store badges on the left, stylized phone mockup
 * with a decorative orange blob on the right.
 */
export default function DownloadApp() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left: copy + badges */}
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Download the <span className="text-teal-600">Sneha</span> App
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-500 md:mx-0">
              Download the Sneha app today and avail exclusive health
              discounts on consultations, lab tests, and medicines.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {/* Google Play badge */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-white transition hover:bg-gray-800"
              >
                <Play className="h-6 w-6 fill-white" strokeWidth={0} />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-gray-300">
                    GET IT ON
                  </span>
                  <span className="block text-sm font-semibold">
                    Google Play
                  </span>
                </span>
              </a>

              {/* App Store badge */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-white transition hover:bg-gray-800"
              >
                <Apple className="h-6 w-6 fill-white" strokeWidth={0} />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-gray-300">
                    Download on the
                  </span>
                  <span className="block text-sm font-semibold">
                    App Store
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right: phone mockup + decorative shapes */}
          <div className="relative flex justify-center md:justify-end">
            {/* Decorative orange blob */}
            <div className="absolute right-6 top-1/2 -z-0 h-40 w-40 -translate-y-1/2 rounded-full bg-[#23c2c2] md:h-52 md:w-52" />
            {/* Decorative diagonal stripe */}
            <div className="absolute -right-10 bottom-0 -z-0 h-54 w-72 rotate-[25deg] bg-[#23c2c2] md:h-28 md:w-96" />

            {/* Phone frame */}
            <div className="relative z-10 w-[240px] rounded-[2rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl md:w-[260px]">
              <div className="overflow-hidden rounded-[1.5rem] bg-gray-50">
                {/* Status bar */}
                <div className="flex items-center justify-between bg-teal-600 px-4 pt-3 pb-2 text-white">
                  <span className="text-[10px] font-medium">9:41</span>
                  <span className="text-[10px]">●●●</span>
                </div>

                {/* App header */}
                <div className="bg-teal-600 px-4 pb-4">
                  <p className="text-[10px] text-teal-100">Current City</p>
                  <p className="text-xs font-semibold text-white">Karachi</p>
                </div>

                {/* Search bar */}
                <div className="-mt-3 px-4">
                  <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
                    <Search className="h-3.5 w-3.5 text-gray-400" />
                    <span className="text-[10px] text-gray-400">
                      Find doctors, specialties...
                    </span>
                  </div>
                </div>

                {/* Quick actions grid */}
                <div className="grid grid-cols-2 gap-2 px-4 py-4">
                  {[
                    { icon: Stethoscope, label: "Consult Online" },
                    { icon: CalendarCheck, label: "In-Clinic Visit" },
                    { icon: FlaskConical, label: "Lab Tests" },
                    { icon: Pill, label: "Medicines" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1.5 rounded-xl bg-white p-3 shadow-sm"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50">
                        <Icon className="h-4 w-4 text-teal-600" />
                      </div>
                      <span className="text-center text-[8px] font-medium text-gray-600">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom spacer to keep phone screen proportions */}
                <div className="h-10 bg-gray-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}