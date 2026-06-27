/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import Link from 'next/link';
import { ChevronDown, Phone, MapPin, Search, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface City {
  name: string;
  code: string;
}

interface SearchItem {
  name: string;
  nameUrdu?: string;
}

const cities: City[] = [
  { name: 'Karachi', code: 'KHI' },
  { name: 'Lahore', code: 'LHE' },
  { name: 'Islamabad', code: 'ISB' },
  { name: 'Rawalpindi', code: 'RWP' },
  { name: 'Faisalabad', code: 'FSD' },
  { name: 'Multan', code: 'MUL' },
  { name: 'Peshawar', code: 'PEW' },
  { name: 'Quetta', code: 'QTA' },
];

const diseases: SearchItem[] = [
  { name: 'Diabetes', nameUrdu: 'ذیابیطس' },
  { name: 'Heart Disease', nameUrdu: 'دل کی بیماری' },
  { name: 'Dengue', nameUrdu: 'ڈینگی' },
  { name: 'Asthma', nameUrdu: 'دمہ' },
  { name: 'Skin Allergy', nameUrdu: 'جلد کی الرجی' },
];

const doctors: SearchItem[] = [
  { name: 'Cardiologist', nameUrdu: 'ماہر امراض قلب' },
  { name: 'Dermatologist', nameUrdu: 'ماہر جلد' },
  { name: 'Neurologist', nameUrdu: 'ماہر اعصاب' },
  { name: 'Pediatrician', nameUrdu: 'بچوں کا ڈاکٹر' },
];

const symptoms: SearchItem[] = [
  { name: 'Fever', nameUrdu: 'بخار' },
  { name: 'Headache', nameUrdu: 'سر درد' },
  { name: 'Cough', nameUrdu: 'کھانسی' },
  { name: 'Chest Pain', nameUrdu: 'سینے میں درد' },
  { name: 'Back Pain', nameUrdu: 'کمر درد' },
];

const hospitals: SearchItem[] = [
  { name: 'Aga Khan Hospital', nameUrdu: 'آغا خان ہسپتال' },
  { name: 'Liaquat National Hospital', nameUrdu: 'لیاقت نیشنل ہسپتال' },
  { name: 'Shifa International', nameUrdu: 'شفا انٹرنیشنل' },
];

const labTestsItems: SearchItem[] = [
  { name: 'CBC Test', nameUrdu: 'سی بی سی ٹیسٹ' },
  { name: 'Blood Sugar Test', nameUrdu: 'بلڈ شوگر ٹیسٹ' },
  { name: 'Lipid Profile', nameUrdu: 'لپڈ پروفائل' },
];

const categories = ['Diseases', 'Doctors', 'Symptoms', 'Hospitals', 'Lab Tests'];

const doctorSpecialties = [
  { name: 'General Physician' },
  { name: 'Cardiologist' },
  { name: 'Dermatologist' },
  { name: 'Dentist' },
  { name: 'Orthopedic Surgeon' },
  { name: 'Neurologist' },
  { name: 'Pediatrician' },
  { name: 'Psychiatrist' },
  { name: 'Gynecologist' },
  { name: 'ENT Specialist' },
  { name: 'Urologist' },
  { name: 'Gastroenterologist' },
  { name: 'Pulmonologist' },
  { name: 'Endocrinologist' },
  { name: 'Nephrologist' },
  { name: 'Oncologist' },
  { name: 'Ophthalmologist' },
  { name: 'Rheumatologist' },
  { name: 'Diabetologist' },
  { name: 'Sexologist' },
  { name: 'Homeopathic Doctor' },
  { name: 'Physiotherapist' },
  { name: 'Nutritionist' },
];

const hospitalServices = ['Emergency', 'ICU', 'Surgery', 'Cardiology', 'Orthopedics'];

const medicineTypes = ['Prescription Medicines', 'OTC Medicines', 'Supplements', 'First Aid'];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();

  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState<SearchItem[]>([]);

  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const getCurrentCategoryItems = (): SearchItem[] => {
    switch (currentCategoryIndex) {
      case 0:
        return diseases;
      case 1:
        return doctors;
      case 2:
        return symptoms;
      case 3:
        return hospitals;
      case 4:
        return labTestsItems;
      default:
        return diseases;
    }
  };

  useEffect(() => {
    const items = getCurrentCategoryItems();

    if (searchQuery.trim() === '') {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.nameUrdu?.includes(searchQuery)
        )
      );
    }
  }, [searchQuery, currentCategoryIndex]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCityDropdown(false);
      }

      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!showSuggestions && searchQuery === '') {
      const timer = setInterval(() => {
        setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
      }, 4000);

      return () => clearInterval(timer);
    }
  }, [showSuggestions, searchQuery]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    router.push(
      `/results?q=${encodeURIComponent(searchQuery)}&city=${selectedCity.name}`
    );
  };

  return (
    <nav className="w-full border-b bg-gradient-to-r from-[#0e5a5a] to-[#0e5a5a] shadow-md cursor-default">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Logo and Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0e5a5a] font-bold text-2xl shadow-lg cursor-pointer">
              S
            </div>
            <h1 className="text-4xl font-bold text-white cursor-pointer">Sneha</h1>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center text-white">
            {/* Find Doctors */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('doctors')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-20 transition font-semibold cursor-pointer">
                Find Doctors
                <ChevronDown
                  size={18}
                  className={`transition-transform pointer-events-none ${
                    openDropdown === 'doctors' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
  className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-2xl p-6 w-96 z-50 transition-all duration-300 ${
    openDropdown === 'doctors'
      ? 'opacity-100 visible translate-y-0'
      : 'opacity-0 invisible -translate-y-2'
  }`}
>
  <h3 className="text-lg font-bold text-[#0A5C86] mb-4">
    Find doctor by Specialty
  </h3>
  <div className="grid grid-cols-3 gap-1 max-h-80 overflow-y-auto">
    {doctorSpecialties.map((specialty) => (
      <button
        key={specialty.name}
        className="text-left px-3 py-2 rounded-lg hover:bg-blue-50 transition border border-gray-200 hover:border-[#0A5C86] cursor-pointer"
      >
        <span className="text-sm font-medium">{specialty.name}</span>
      </button>
    ))}
  </div>
</div>
            </div>

            {/* Hospitals */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('hospitals')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-20 transition font-semibold cursor-pointer">
                Hospitals
                <ChevronDown
                  size={18}
                  className={`transition-transform pointer-events-none ${
                    openDropdown === 'hospitals' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-2xl p-4 w-48 z-50 transition-all duration-300 ${
                  openDropdown === 'hospitals'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <h3 className="text-lg font-bold text-[#0A5C86] mb-3">Services</h3>
                {hospitalServices.map((service) => (
                  <button
                    key={service}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium text-sm cursor-pointer"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-20 transition font-semibold cursor-pointer"
            >
              Surgeries
            </Link>

            {/* Medicines */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('medicines')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-20 transition font-semibold cursor-pointer">
                Medicines
                <ChevronDown
                  size={18}
                  className={`transition-transform pointer-events-none ${
                    openDropdown === 'medicines' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-2xl p-4 w-48 z-50 transition-all duration-300 ${
                  openDropdown === 'medicines'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <h3 className="text-lg font-bold text-[#0A5C86] mb-3">Medicine Types</h3>
                {medicineTypes.map((type) => (
                  <button
                    key={type}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium text-sm cursor-pointer"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Labs */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('labs')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-20 transition font-semibold cursor-pointer">
                Labs
                <ChevronDown
                  size={18}
                  className={`transition-transform pointer-events-none ${
                    openDropdown === 'labs' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-2xl p-4 w-48 z-50 transition-all duration-300 ${
                  openDropdown === 'labs'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <h3 className="text-lg font-bold text-[#0A5C86] mb-3">Lab Tests</h3>
                {labTestsItems.map((test) => (
                  <button
                    key={test.name}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium text-sm cursor-pointer"
                  >
                    {test.name}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-20 transition font-semibold cursor-pointer"
            >
              Forum
            </Link>

            <Link
              href="#"
              className="px-4 py-2 rounded-lg hover:bg-gray-500 hover:bg-opacity-20 transition font-semibold cursor-pointer"
            >
              Join as Doctor
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-white text-[#0e5a5a] p-3 rounded-lg hover:bg-gray-100 transition shadow-md cursor-pointer">
              <Phone size={22} />
            </button>
            <button className="bg-white text-[#0e5a5a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md cursor-pointer">
              Login
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="w-full py-1">
          <div className="max-w-3x2 mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-visible">
              <div className="flex items-stretch">
                {/* CITY */}
                <div className="relative border-r border-gray-200" ref={cityDropdownRef}>
                  <button
                    onClick={() => setShowCityDropdown(!showCityDropdown)}
                    className="h-full px-4 py-2.5 flex items-center gap-2 cursor-pointer"
                  >
                    <MapPin size={16} className="text-[#0A5C86]" />
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      {selectedCity.name}
                    </span>
                    <ChevronDown size={14} className="text-gray-400 pointer-events-none" />
                  </button>

                  {showCityDropdown && (
                    <div className="absolute z-50 bg-white shadow-xl w-40 rounded-b-lg overflow-hidden border border-gray-100">
                      {cities.map((city) => (
                        <button
                          key={city.code}
                          onClick={() => {
                            setSelectedCity(city);
                            setShowCityDropdown(false);
                          }}
                          className="w-full px-4 py-2 text-sm hover:bg-blue-50 text-left cursor-pointer"
                        >
                          {city.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* SEARCH */}
                <div className="relative flex-1" ref={suggestionsRef}>
                  <div className="flex items-center gap-2 px-4 py-2.5 h-full">
                    <Search size={16} className="text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onFocus={() => setShowSuggestions(true)}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder={`Search ${categories[currentCategoryIndex].toLowerCase()}...`}
                      className="flex-1 outline-none text-sm text-gray-700 cursor-text"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="cursor-pointer">
                        <X size={16} className="text-gray-400 hover:text-gray-600" />
                      </button>
                    )}
                  </div>

                  {showSuggestions && (
                    <div className="absolute z-50 bg-white shadow-xl w-full max-h-64 overflow-y-auto rounded-b-lg border border-gray-100">
                      {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSearchQuery(item.name);
                              setShowSuggestions(false);
                            }}
                            className="w-full px-4 py-2 border-b hover:bg-blue-50 text-left cursor-pointer"
                          >
                            <p className="text-sm font-medium">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.nameUrdu}</p>
                          </button>
                        ))
                      ) : (
                        <div className="p-4 text-center text-sm text-gray-500">No Results Found</div>
                      )}
                    </div>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  onClick={handleSearch}
                  className="bg-[#0A5C86] text-white px-6 text-sm font-semibold rounded-r-xl hover:bg-[#08465f] transition cursor-pointer"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}