'use client';

import React from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Article {
  category: string;
  title: string;
  image: string;
  alt: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const articles: Article[] = [
  {
    category: 'Drugs & Medications',
    title: 'Breeky Tablet – Uses, Possible Side Effects, and Current Price in Pakistan',
    image: 'https://healthwire.pk/wp-content/uploads/2022/09/breeky-tablet-uses.jpg',
    alt: 'Woman with stomach pain',
  },
  {
    category: 'Health Alerts',
    title: 'What Does Eye Twitching Mean? Superstitions and Interpretations',
    image: 'https://healthwire.pk/wp-content/uploads/2022/05/eye-twitching-superstition.jpg',
    alt: 'Woman touching eye',
  },
  {
    category: 'Skin Care',
    title: 'Effective Acne Creams in Pakistan Recommended by Dermatologists',
    image: 'https://healthwire.pk/wp-content/uploads/2023/01/best-acne-creams-in-pakistan.jpg',
    alt: 'Acne skin care',
  },
];

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function TopArticles(): React.ReactElement {
  return (
    <section className="w-full bg-[#e8f8f8] py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Read Top Articles Of The Day
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Health articles that keep you informed about good health practices and
            <br className="hidden sm:block" /> achieve your goals.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {articles.map((article: Article) => (
            <div
              key={article.title}
              className="bg-white rounded-xl overflow-hidden cursor-pointer group hover:shadow-md transition-shadow duration-200"
            >
              {/* Image */}
              <div className="h-44 sm:h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="p-4">
                <p className="text-[#23c2c2] text-xs font-medium mb-1.5">
                  {article.category}
                </p>
                <h3 className="text-gray-900 text-sm font-bold leading-snug group-hover:text-[#0a4a6e] transition-colors duration-200">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 border border-gray-400 text-gray-700 text-sm font-semibold px-7 py-2.5 rounded-full hover:border-[#0a4a6e] hover:text-[#0a4a6e] transition-colors duration-200 cursor-pointer bg-white">
            View All Blogs
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

      </div>
    </section>
  );
}