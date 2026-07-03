import Image from "next/image";
import { Stethoscope, ArrowRight, Download } from "lucide-react";

export default function DoctorCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100">
        <div className="grid md:grid-cols-2 items-center gap-6 px-8 md:px-12 py-10">
          {/* Left - image */}
          <div className="relative h-56 md:h-72 flex items-end justify-center md:justify-start">
            {/* Decorative badge */}
            <div className="absolute top-2 left-2 md:left-0 bg-white shadow-md rounded-full px-3 py-1.5 flex items-center gap-1.5 z-10">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-xs font-medium text-gray-700">12,000+ doctors onboard</span>
            </div>

            <Image
              src="/images/doctor2.png"
              alt="Doctors team"
              width={420}
              height={320}
              className="object-contain object-bottom h-full w-auto"
              priority
            />
          </div>

          {/* Right - content */}
          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-teal-700 bg-teal-100 px-3 py-1 rounded-full mb-4">
              For healthcare providers
            </span>

            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 leading-snug mb-3">
              Are you a doctor?
            </h2>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#23c2c2] leading-snug mb-3">
              Download the App!
            </h2>

            <p className="text-blue-800/80 text-base mb-7 max-w-sm">
              Join thousands of verified doctors managing appointments, patients, and payments through the Connect app.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 transition-colors text-white text-sm font-medium px-6 py-3 rounded-xl shadow-sm">
                <Download className="w-4 h-4" />
                Download now
              </button>

              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-900 hover:gap-2.5 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-teal-100/60 pointer-events-none" />
      </div>
    </section>
  );
}