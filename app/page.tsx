import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full font-sans bg-black text-white">
      
      {/* Dark Hero Section */}
      <section className="bg-[#0a0a0a] w-full pt-32 pb-20 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-2 tracking-widest text-[#f8f5d6]">
            MEHFANN
          </h1>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-red-600 uppercase tracking-wider">
            The Symphony of Funoon
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-2 text-xs md:text-sm font-mono mb-12 text-gray-400 tracking-widest uppercase">
            <span>07 - 08 NOV 2026</span>
            <span>Mihrani Da'wa College - Athani, Melattur</span>
            <span className="text-[10px] mt-2 text-gray-500">TTSA - Thamreenu Thwalaba Students' Association</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/schedule" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider transition">
              VIEW SCHEDULE
            </Link>
          </div>
        </div>
      </section>

      {/* Colorful Divider */}
      <div className="flex w-full h-3">
        <div className="flex-1 bg-red-600"></div>
        <div className="flex-1 bg-yellow-500"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-red-600"></div>
        <div className="flex-1 bg-yellow-500"></div>
        <div className="flex-1 bg-white"></div>
      </div>

      {/* Live Standings Section (Dark Mode) */}
      <section className="py-16 px-6 md:px-24 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-white">Live Standings</h2>
            <p className="text-gray-400">Current Points Table</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team 1 */}
            <div className="flex justify-between items-center bg-[#1a1a1a] border border-green-900/50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-gray-500">#1</span>
                <span className="text-xl md:text-2xl font-bold text-green-500">أصحاب اليمين</span>
              </div>
              <div className="text-3xl font-bold text-white">
                0 <span className="text-sm font-normal text-gray-500">PTS</span>
              </div>
            </div>
            {/* Team 2 */}
            <div className="flex justify-between items-center bg-[#1a1a1a] border border-blue-900/50 p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-gray-500">#2</span>
                <span className="text-xl md:text-2xl font-bold text-blue-500">أصحاب الميمنة</span>
              </div>
              <div className="text-3xl font-bold text-white">
                0 <span className="text-sm font-normal text-gray-500">PTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Theme & Posters Section */}
      <section className="bg-white text-black w-full py-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 text-center">
            <p className="text-red-600 text-sm font-bold tracking-widest mb-4 flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              FESTIVAL THEME
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 uppercase">
              Harmony of Heritage <br/> & Aesthetics
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium text-gray-600 uppercase tracking-widest">
              <span>Expression of Emotions</span>
              <span>•</span>
              <span>Network of Narratives</span>
              <span>•</span>
              <span>Mysticism & Morality</span>
            </div>
          </div>

          {/* Posters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 transition hover:scale-[1.02] duration-300">
              <img src="/poster1.jpg" alt="Mehfann Poster 1" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 transition hover:scale-[1.02] duration-300">
              <img src="/poster2.jpg" alt="Mehfann Poster 2" className="w-full h-auto object-cover" />
            </div>
          </div>
          
        </div>
      </section>
      
    </div>
  );
}