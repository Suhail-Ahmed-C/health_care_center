import { Stethoscope, Headset, ShieldCheck, Star, ChevronLeft, Phone, Calendar } from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "PMDC verified doctors",
    desc: "12,000+ specialists ready to consult",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Headset,
    title: "Support around the clock",
    desc: "A trained team, day or night",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure payments",
    desc: "SSL-encrypted, every transaction",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left column */}
      <div>
        <p className="text-sm font-medium text-blue-600 tracking-wide mb-1">
          Trusted by patients across Pakistan
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-7">
          Why choose Sneha
        </h2>

        <div className="flex flex-col gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex gap-3.5">
              <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center`}>
                <f.icon className={`w-5 h-5 ${f.iconColor}`} />
              </div>
              <div>
                <p className="font-medium text-[15px] text-gray-900">{f.title}</p>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-8 pt-5 border-t border-gray-200">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-sm font-medium text-gray-900">4.5</span>
          <span className="text-sm text-gray-400">rated by 8,000+ patients on Google</span>
        </div>
      </div>

      {/* Right column - phone mockup */}
      <div className="bg-gray-50 rounded-2xl p-6 flex justify-center">
        <div className="w-[230px] rounded-[28px] border border-gray-200 bg-white p-3 shadow-lg">
          {/* Top bar */}
          <div className="flex items-center justify-between px-1 pb-2">
            <ChevronLeft className="w-4 h-4 text-gray-700" />
            <span className="text-xs font-medium text-gray-900">Book appointment</span>
            <Phone className="w-3.5 h-3.5 text-red-500" />
          </div>

          {/* Doctor info */}
          <div className="flex items-center gap-2 px-1 py-2 border-b border-gray-100 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[11px] font-medium text-blue-600">
              AI
            </div>
            <div>
              <p className="text-[11px] font-medium text-gray-900">Dr. Asifa Iqbal</p>
              <p className="text-[10px] text-gray-400">Fees Rs. 1,350</p>
            </div>
          </div>

          {/* Date selector */}
          <div className="flex gap-1.5 mb-3">
            <div className="flex-1 text-center py-1.5 rounded-lg bg-blue-600 text-white text-[10px] font-medium">
              Today<br />Apr 14
            </div>
            <div className="flex-1 text-center py-1.5 rounded-lg border border-gray-200 text-[10px] text-gray-700">
              Tomorrow<br />Apr 15
            </div>
            <div className="flex-1 text-center py-1.5 rounded-lg border border-gray-200 text-[10px] text-gray-700">
              Mon<br />Apr 17
            </div>
          </div>

          {/* Time slots */}
          <p className="text-[10px] font-medium text-gray-500 mb-1.5">Select time</p>
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            {["07:30 PM", "07:45 PM", "08:00 PM", "08:30 PM", "08:45 PM", "09:00 PM"].map((t, i) => (
              <div
                key={t}
                className={`text-center py-1.5 rounded-lg text-[9px] ${
                  i === 0
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200 text-gray-700"
                }`}
              >
                {t}
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-red-600 text-white text-[11px] font-medium">
            <Calendar className="w-3 h-3" />
            Book appointment
          </button>
        </div>
      </div>
    </section>
  );
}