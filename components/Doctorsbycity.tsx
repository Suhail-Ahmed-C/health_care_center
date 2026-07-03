import { ChevronRight } from "lucide-react";

interface CityLinks {
  city: string;
  links: string[];
}

const cityData: CityLinks[] = [
  {
    city: "Doctors in Lahore",
    links: [
      "Best Dermatologist in Lahore",
      "Best Gynecologist in Lahore",
      "Best Urologist in Lahore",
      "Best Sexologist in Lahore",
      "Best Internal Medicine Specialist in Lahore",
      "Best Child Specialist in Lahore",
      "Best Orthopedic Surgeon in Lahore",
      "Best Eye Specialist in Lahore",
      "Best ENT Specialist in Lahore",
      "Best Cardiologist in Lahore",
      "Best Neurologist in Lahore",
      "Best Nephrologist in Lahore",
      "Best Psychiatrist in Lahore",
      "Best Psychologist in Lahore",
      "Best Dentist in Lahore",
      "Best Pulmonologist in Lahore",
      "Best Gastroenterologist in Lahore",
    ],
  },
  {
    city: "Doctors in Karachi",
    links: [
      "Best Dermatologist in Karachi",
      "Best Gynecologist in Karachi",
      "Best Urologist in Karachi",
      "Best Sexologist in Karachi",
      "Best Internal Medicine Specialist in Karachi",
      "Best Child Specialist in Karachi",
      "Best Orthopedic Surgeon in Karachi",
      "Best Eye Specialist in Karachi",
      "Best ENT Specialist in Karachi",
      "Best Cardiologist in Karachi",
      "Best Neurologist in Karachi",
      "Best Nephrologist in Karachi",
      "Best Psychiatrist in Karachi",
      "Best Psychologist in Karachi",
      "Best Dentist in Karachi",
      "Best Pulmonologist in Karachi",
      "Best Gastroenterologist in Karachi",
    ],
  },
  {
    city: "Doctors in Islamabad",
    links: [
      "Best Dermatologist in Islamabad",
      "Best Gynecologist in Islamabad",
      "Best Urologist in Islamabad",
      "Best Sexologist in Islamabad",
      "Best Internal Medicine Specialist in Islamabad",
      "Best Child Specialist in Islamabad",
      "Best Orthopedic Surgeon in Islamabad",
      "Best Eye Specialist in Islamabad",
      "Best ENT Specialist in Islamabad",
      "Best Cardiologist in Islamabad",
      "Best Neurologist in Islamabad",
      "Best Nephrologist in Islamabad",
      "Best Psychiatrist in Islamabad",
      "Best Psychologist in Islamabad",
      "Best Dentist in Islamabad",
      "Best Pulmonologist in Islamabad",
      "Best Gastroenterologist in Islamabad",
    ],
  },
  {
    city: "Doctors in Other Cities",
    links: [
      "Best Nephrologist in Multan",
      "Best Pulmonologist in Multan",
      "Best Cardiologist in Multan",
      "Best Neuro Physician in Multan",
      "Best Gynecologist in Peshawar",
      "Best Urologist in Faisalabad",
      "Best Dentist in Faisalabad",
      "Best Dermatologist in Faisalabad",
      "Best Gynecologist in Gujranwala",
      "Best Neurologist in Multan",
      "Best Psychiatrist in Faisalabad",
      "Best Dermatologist in Gujranwala",
      "Best Cardiologist in Faisalabad",
      "Best Nutritionist in Faisalabad",
      "Best Urologist in Peshawar",
      "Best Physiotherapist in Gujranwala",
      "Best Gynecologist in Quetta",
    ],
  },
];

export default function DoctorsByCity() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {cityData.map((column) => (
            <div key={column.city}>
              <h3 className="mb-4 text-base font-bold text-gray-900">
                {column.city}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-start gap-1.5 text-sm text-gray-600 transition-colors hover:text-teal-600"
                    >
                      <ChevronRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-teal-600" />
                      <span className="group-hover:underline">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}