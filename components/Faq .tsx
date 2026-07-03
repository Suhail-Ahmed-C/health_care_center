"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can I book a doctor appointment on Sneha?",
    answer:
      "Search for a doctor or specialty, pick a convenient time slot from their availability, and confirm your booking — you'll get an instant confirmation with all the details.",
  },
  {
    question: "Is booking appointments on Sneha free?",
    answer:
      "Yes, booking an appointment through Sneha is completely free. You only pay the doctor's consultation fee, which is shown upfront before you confirm.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Absolutely. You can reschedule or cancel your appointment anytime from the 'My Appointments' section, subject to the doctor's cancellation policy.",
  },
  {
    question: "Does Sneha offer video consultations?",
    answer:
      "Yes, many doctors on Sneha offer secure video consultations so you can talk to a doctor from home without visiting a clinic.",
  },
  {
    question: "How does Sneha ensure doctor verification?",
    answer:
      "Every doctor on Sneha is manually verified using their PMDC registration, qualifications, and clinic details before they're allowed to accept appointments.",
  },
  {
    question: "What services does Sneha provide besides doctor appointments?",
    answer:
      "Beyond appointments, Sneha offers lab test bookings, medicine delivery, and health record storage, all in one place.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3x2 px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Everything you need to know about booking healthcare with Sneha
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl bg-gray-50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-teal-700 md:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-teal-600">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}