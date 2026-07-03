/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import Link from 'next/link';
import { ChevronDown, Phone, MapPin, Search, X, Menu } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
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
      case 0: return diseases;
      case 1: return doctors;
      case 2: return symptoms;
      case 3: return hospitals;
      case 4: return labTestsItems;
      default: return diseases;
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
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setShowCityDropdown(false);
      }
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
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
    router.push(`/results?q=${encodeURIComponent(searchQuery)}&city=${selectedCity.name}`);
  };

  return (
    <nav className="w-full border-b bg-gradient-to-r from-[#23c2c2] to-[#c0fcfc] shadow-md cursor-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">

        {/* Top Row - Logo and Buttons */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-[#0e5a5a] font-bold text-lg sm:text-xl md:text-2xl shadow-lg">
              S
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Sneha</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1 flex-1 justify-center min-w-0">

            {/* Find Doctors */}
            <div className="relative" onMouseEnter={() => setOpenDropdown('doctors')} onMouseLeave={() => setOpenDropdown(null)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm whitespace-nowrap cursor-pointer">
                Find Doctors
                <ChevronDown size={14} className={`transition-transform pointer-events-none ${openDropdown === 'doctors' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-2xl p-4 w-80 z-50 transition-all duration-300 ${openDropdown === 'doctors' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <h3 className="text-sm font-bold text-[#0A5C86] mb-3">Find by Specialty</h3>
                <div className="grid grid-cols-3 gap-2 max-h-72 overflow-y-auto">
                  {doctorSpecialties.map((specialty) => (
                    <button key={specialty.name} className="text-left p-2 rounded-lg hover:bg-blue-50 transition border border-gray-200 hover:border-[#0A5C86] text-xs cursor-pointer">
                      <span className="font-medium">{specialty.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hospitals */}
            <div className="relative" onMouseEnter={() => setOpenDropdown('hospitals')} onMouseLeave={() => setOpenDropdown(null)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm whitespace-nowrap cursor-pointer">
                Hospitals
                <ChevronDown size={14} className={`transition-transform pointer-events-none ${openDropdown === 'hospitals' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-2xl p-3 w-44 z-50 transition-all duration-300 ${openDropdown === 'hospitals' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <h3 className="text-sm font-bold text-[#0A5C86] mb-2">Services</h3>
                {hospitalServices.map((service) => (
                  <button key={service} className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-50 transition font-medium text-xs cursor-pointer">{service}</button>
                ))}
              </div>
            </div>

            <Link href="#" className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm whitespace-nowrap cursor-pointer">Surgeries</Link>

            {/* Medicines */}
            <div className="relative" onMouseEnter={() => setOpenDropdown('medicines')} onMouseLeave={() => setOpenDropdown(null)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm whitespace-nowrap cursor-pointer">
                Medicines
                <ChevronDown size={14} className={`transition-transform pointer-events-none ${openDropdown === 'medicines' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-2xl p-3 w-44 z-50 transition-all duration-300 ${openDropdown === 'medicines' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <h3 className="text-sm font-bold text-[#0A5C86] mb-2">Medicine Types</h3>
                {medicineTypes.map((type) => (
                  <button key={type} className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-50 transition font-medium text-xs cursor-pointer">{type}</button>
                ))}
              </div>
            </div>

            {/* Labs */}
            <div className="relative" onMouseEnter={() => setOpenDropdown('labs')} onMouseLeave={() => setOpenDropdown(null)}>
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm whitespace-nowrap cursor-pointer">
                Labs
                <ChevronDown size={14} className={`transition-transform pointer-events-none ${openDropdown === 'labs' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-2xl p-3 w-44 z-50 transition-all duration-300 ${openDropdown === 'labs' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <h3 className="text-sm font-bold text-[#0A5C86] mb-2">Lab Tests</h3>
                {labTestsItems.map((test) => (
                  <button key={test.name} className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-blue-50 transition font-medium text-xs cursor-pointer">{test.name}</button>
                ))}
              </div>
            </div>

            <Link href="#" className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm whitespace-nowrap cursor-pointer">Health Hub</Link>
            <Link href="#" className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm whitespace-nowrap cursor-pointer">Forum</Link>
            <Link href="#" className="px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm whitespace-nowrap cursor-pointer">Join as Doctor</Link>
          </div>

          {/* Right Side Buttons — fixed: no extra padding, consistent sizing */}
          <div className="flex items-center gap-2 shrink-0">
            <button className="hidden sm:flex items-center justify-center bg-white text-[#0A5C86] p-2 rounded-lg hover:bg-gray-100 transition shadow-md cursor-pointer">
              <Phone size={18} />
            </button>
            <button className="hidden md:block bg-white text-[#0A5C86] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md text-sm cursor-pointer whitespace-nowrap">
              Login
            </button>
            <button className="hidden md:block bg-white text-[#0A5C86] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md text-sm cursor-pointer whitespace-nowrap">
              Register
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden bg-white text-[#0A5C86] p-2 rounded-lg hover:bg-gray-100 transition shadow-md cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 sm:mt-4 bg-[#084563] rounded-lg p-3 space-y-1 max-h-96 overflow-y-auto">

            {/* Find Doctors Mobile */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === 'doctors' ? null : 'doctors')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm text-black cursor-pointer"
              >
                Find Doctors
                <ChevronDown size={16} className={`transition-transform pointer-events-none ${mobileDropdown === 'doctors' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'doctors' && (
                <div className="bg-white text-gray-800 rounded-lg mt-2 p-3 grid grid-cols-2 gap-2">
                  {doctorSpecialties.map((specialty) => (
                    <button key={specialty.name} className="text-left px-2 py-2 hover:bg-blue-50 rounded text-xs cursor-pointer">{specialty.name}</button>
                  ))}
                </div>
              )}
            </div>

            {/* Hospitals Mobile */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === 'hospitals' ? null : 'hospitals')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm text-black cursor-pointer"
              >
                Hospitals
                <ChevronDown size={16} className={`transition-transform pointer-events-none ${mobileDropdown === 'hospitals' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'hospitals' && (
                <div className="bg-white text-gray-800 rounded-lg mt-2 p-3 space-y-1">
                  {hospitalServices.map((service) => (
                    <button key={service} className="block w-full text-left px-2 py-1.5 hover:bg-blue-50 rounded text-xs cursor-pointer">{service}</button>
                  ))}
                </div>
              )}
            </div>

            {/* Medicines Mobile */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === 'medicines' ? null : 'medicines')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm text-black cursor-pointer"
              >
                Medicines
                <ChevronDown size={16} className={`transition-transform pointer-events-none ${mobileDropdown === 'medicines' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'medicines' && (
                <div className="bg-white text-gray-800 rounded-lg mt-2 p-3 space-y-1">
                  {medicineTypes.map((type) => (
                    <button key={type} className="block w-full text-left px-2 py-1.5 hover:bg-blue-50 rounded text-xs cursor-pointer">{type}</button>
                  ))}
                </div>
              )}
            </div>

            {/* Labs Mobile */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === 'labs' ? null : 'labs')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm text-black cursor-pointer"
              >
                Labs
                <ChevronDown size={16} className={`transition-transform pointer-events-none ${mobileDropdown === 'labs' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'labs' && (
                <div className="bg-white text-gray-800 rounded-lg mt-2 p-3 space-y-1">
                  {labTestsItems.map((test) => (
                    <button key={test.name} className="block w-full text-left px-2 py-1.5 hover:bg-blue-50 rounded text-xs cursor-pointer">{test.name}</button>
                  ))}
                </div>
              )}
            </div>

            {['Surgeries', 'Health Hub', 'Forum', 'Join as Doctor'].map((item) => (
              <Link key={item} href="#" className="block w-full px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition font-semibold text-sm text-black cursor-pointer">
                {item}
              </Link>
            ))}

            <div className="flex gap-2 pt-2 border-t border-white border-opacity-20">
              <button className="flex-1 bg-white text-[#0A5C86] p-2 rounded-lg font-semibold text-xs hover:bg-gray-100 transition flex items-center justify-center gap-1 cursor-pointer">
                <Phone size={16} /> Call
              </button>
              <button className="flex-1 bg-white text-[#0A5C86] p-2 rounded-lg font-semibold text-xs hover:bg-gray-100 transition cursor-pointer">
                Login
              </button>
              <button className="flex-1 bg-white text-[#0A5C86] p-2 rounded-lg font-semibold text-xs hover:bg-gray-100 transition cursor-pointer">
                Register
              </button>
            </div>
          </div>
        )}

        {/* Search Section */}
        <div className="w-full py-3">
          <div className="mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-visible">
              <div className="flex flex-col sm:flex-row items-stretch">

                {/* CITY */}
                <div className="relative sm:border-r border-b sm:border-b-0 border-gray-200 shrink-0" ref={cityDropdownRef}>
                  <button
                    onClick={() => setShowCityDropdown(!showCityDropdown)}
                    className="w-full sm:w-auto h-full px-4 py-2.5 flex items-center gap-2 cursor-pointer"
                  >
                    <MapPin size={16} className="text-[#0A5C86]" />
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{selectedCity.name}</span>
                    <ChevronDown size={14} className="text-gray-400 pointer-events-none" />
                  </button>
                  {showCityDropdown && (
                    <div className="absolute z-50 bg-white shadow-xl w-40 rounded-b-lg overflow-hidden border border-gray-100">
                      {cities.map((city) => (
                        <button
                          key={city.code}
                          onClick={() => { setSelectedCity(city); setShowCityDropdown(false); }}
                          className="w-full px-4 py-2 text-sm hover:bg-blue-50 text-left cursor-pointer"
                        >
                          {city.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* SEARCH */}
                <div className="relative flex-1 min-w-0" ref={suggestionsRef}>
                  <div className="flex items-center gap-2 px-4 py-2.5 h-full">
                    <Search size={16} className="text-gray-400 shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onFocus={() => setShowSuggestions(true)}
                      onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder={`Search ${categories[currentCategoryIndex].toLowerCase()}...`}
                      className="flex-1 outline-none text-sm text-gray-700 cursor-text min-w-0"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="cursor-pointer shrink-0">
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
                            onClick={() => { setSearchQuery(item.name); setShowSuggestions(false); }}
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

                {/* SEARCH BUTTON */}
                <button
                  onClick={handleSearch}
                  className="bg-[#0A5C86] text-white px-6 py-2.5 sm:py-0 text-sm font-semibold rounded-b-xl sm:rounded-b-none sm:rounded-r-xl hover:bg-[#08465f] transition cursor-pointer whitespace-nowrap shrink-0"
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