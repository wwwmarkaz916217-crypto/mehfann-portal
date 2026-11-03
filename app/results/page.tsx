"use client";
import React, { useState, useEffect } from 'react';

// STUDENT DIRECTORY - Ashab Al-Maimana & Ashab Al-Yameen Students
const studentDirectory: Record<string, { name: string, team: string }> = {
  // أصحاب الميمنة (Ashab Al-Maimana)
  "MN301": { name: "Mueendheen", team: "أصحاب الميمنة" },
  "MN302": { name: "Sinan vmg", team: "أصحاب الميمنة" },
  "MN303": { name: "Swalih KT", team: "أصحاب الميمنة" },
  "MN304": { name: "Hashim", team: "أصحاب الميمنة" },
  "MN305": { name: "Swalih Pandikkad", team: "أصحاب الميمنة" },
  "MN306": { name: "Thanseeh", team: "أصحاب الميمنة" },
  "MN307": { name: "Mubashir", team: "أصحاب الميمنة" },
  "MN308": { name: "Bujair", team: "أصحاب الميمنة" },
  "MN309": { name: "Rabeeh", team: "أصحاب الميمنة" },
  "MN310": { name: "Sidan", team: "أصحاب الميمنة" },
  "MN311": { name: "Shakir", team: "أصحاب الميمنة" },
  "MN312": { name: "Rizwan", team: "أصحاب الميمنة" },
  "MN313": { name: "Islam", team: "أصحاب الميمنة" },
  "MN314": { name: "Adnan", team: "أصحاب الميمنة" },

  // أصحاب اليمين (Ashab Al-Yameen)
  "MN401": { name: "Minhaj", team: "أصحاب اليمين" },
  "MN402": { name: "Farhan", team: "أصحاب اليمين" },
  "MN403": { name: "Aslam", team: "أصحاب اليمين" },
  "MN404": { name: "Unais", team: "أصحاب اليمين" },
  "MN405": { name: "Sinan PC", team: "أصحاب اليمين" },
  "MN406": { name: "Sinan Amakkad", team: "أصحاب اليمين" },
  "MN407": { name: "Anas T", team: "أصحاب اليمين" },
  "MN408": { name: "Miqdad", team: "أصحاب اليمين" },
  "MN409": { name: "Razi", team: "أصحاب اليمين" },
  "MN410": { name: "Anas vmg", team: "أصحاب اليمين" },
  "MN411": { name: "Swabah", team: "أصحاب اليمين" },
  "MN412": { name: "Karijul Islam", team: "أصحاب اليمين" },
  "MN413": { name: "Shuhaim", team: "أصحاب اليمين" },
  "MN414": { name: "Ikram", team: "أصحاب اليمين" }
};

const resultsData = [
  // A ZONE - STAGE
  { id: 1, title: "Madh Ganam", zone: "A Zone", type: "STAGE", code: "M1", winners: [] },
  { id: 2, title: "Bhakthi Ganam", zone: "A Zone", type: "STAGE", code: "M2", winners: [] },
  { id: 3, title: "Poem recitation Arabic", zone: "A Zone", type: "STAGE", code: "M3", winners: [] },
  { id: 4, title: "Poem recitation English", zone: "A Zone", type: "STAGE", code: "M4", winners: [] },
  { id: 5, title: "Speech Malayalam", zone: "A Zone", type: "STAGE", code: "M5", winners: [] },
  { id: 6, title: "Speech Arabic", zone: "A Zone", type: "STAGE", code: "M6", winners: [] },
  { id: 7, title: "Speech English", zone: "A Zone", type: "STAGE", code: "M7", winners: [] },
  { id: 8, title: "Adarsha Prasangam", zone: "A Zone", type: "STAGE", code: "M8", winners: [] },
  { id: 9, title: "Genius Profile", zone: "A Zone", type: "STAGE", code: "M9", winners: [] },
  
  // A ZONE - OFF-STAGE
  { 
    id: 10, title: "Essay Arabic", zone: "A Zone", type: "OFF-STAGE", code: "M10", 
    poster: "/m10-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN302", grade: "C+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN404", grade: "D+", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 11, title: "Essay Malayalam", zone: "A Zone", type: "OFF-STAGE", code: "M11", winners: [] },
  { id: 12, title: "Essay English", zone: "A Zone", type: "OFF-STAGE", code: "M12", winners: [] },
  { id: 13, title: "Poem writing Malayalam", zone: "A Zone", type: "OFF-STAGE", code: "M13", winners: [] },
  { id: 14, title: "Poem writing English", zone: "A Zone", type: "OFF-STAGE", code: "M14", winners: [] },
  { id: 15, title: "Story writing English", zone: "A Zone", type: "OFF-STAGE", code: "M15", winners: [] },
  { id: 16, title: "Story writing Malayalam", zone: "A Zone", type: "OFF-STAGE", code: "M16", winners: [] },
  { id: 17, title: "Quiz", zone: "A Zone", type: "OFF-STAGE", code: "M17", winners: [] },
  { id: 18, title: "Book test", zone: "A Zone", type: "OFF-STAGE", code: "M18", winners: [] },
  { id: 19, title: "Feature writing", zone: "A Zone", type: "OFF-STAGE", code: "M19", winners: [] },
  { 
    id: 20, title: "Ibarath Reading", zone: "A Zone", type: "OFF-STAGE", code: "M20", 
    poster: "/m20-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN301", grade: "A+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN404", grade: "A+", badgeColor: "bg-gray-400" }
    ] 
  },
  { 
    id: 21, title: "Translation Arabic", zone: "A Zone", type: "OFF-STAGE", code: "M21", 
    poster: "/m21-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN405", grade: "A", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN305", grade: "B", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 22, title: "Translation English", zone: "A Zone", type: "OFF-STAGE", code: "M22", winners: [] },
  { 
    id: 23, title: "Modern Arabic", zone: "A Zone", type: "OFF-STAGE", code: "M23", 
    poster: "/m23-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN405", grade: "C", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN304", grade: "D", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 24, title: "Social tweet", zone: "A Zone", type: "OFF-STAGE", code: "M24", winners: [] },
  { id: 25, title: "Kithab Test", zone: "A Zone", type: "OFF-STAGE", code: "M25", winners: [] },
  { 
    id: 26, title: "Hifz", zone: "A Zone", type: "OFF-STAGE", code: "M26", 
    poster: "/m26-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN303", grade: "A+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN404", grade: "A+", badgeColor: "bg-gray-400" }
    ] 
  },

  // B ZONE - STAGE
  { id: 27, title: "Qira'ath", zone: "B Zone", type: "STAGE", code: "M27", winners: [] },
  { id: 28, title: "Speech Malayalam", zone: "B Zone", type: "STAGE", code: "M28", winners: [] },
  { id: 29, title: "Speech English", zone: "B Zone", type: "STAGE", code: "M29", winners: [] },
  { id: 30, title: "Speech Arabic", zone: "B Zone", type: "STAGE", code: "M30", winners: [] },
  { id: 31, title: "Poem recitation Arabic", zone: "B Zone", type: "STAGE", code: "M31", winners: [] },
  { id: 32, title: "Madh Ganam", zone: "B Zone", type: "STAGE", code: "M32", winners: [] },
  { id: 33, title: "Mappilapaat", zone: "B Zone", type: "STAGE", code: "M33", winners: [] },

  // B ZONE - OFF-STAGE
  { id: 34, title: "Essay Malayalam", zone: "B Zone", type: "OFF-STAGE", code: "M34", winners: [] },
  { id: 35, title: "Essay Arabic", zone: "B Zone", type: "OFF-STAGE", code: "M35", winners: [] },
  { 
    id: 36, title: "Ibarath Reading", zone: "B Zone", type: "OFF-STAGE", code: "M36", 
    poster: "/m36-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN307", grade: "A+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN408", grade: "A+", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 37, title: "Story writing", zone: "B Zone", type: "OFF-STAGE", code: "M37", winners: [] },
  { 
    id: 38, title: "Poem Making", zone: "B Zone", type: "OFF-STAGE", code: "M38", 
    poster: "/m38-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN307", grade: "A+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN406", grade: "B+", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 39, title: "Book Test", zone: "B Zone", type: "OFF-STAGE", code: "M39", winners: [] },
  { id: 40, title: "Quiz", zone: "B Zone", type: "OFF-STAGE", code: "M40", winners: [] },
  { 
    id: 41, title: "Pencil Drawing", zone: "B Zone", type: "OFF-STAGE", code: "M41", 
    poster: "/m41-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN406", grade: "B+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN306", grade: "B", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 42, title: "Spelling bee", zone: "B Zone", type: "OFF-STAGE", code: "M42", winners: [] },
  { id: 43, title: "Hifz", zone: "B Zone", type: "OFF-STAGE", code: "M43", winners: [] },
  { 
    id: 44, title: "Hindi reading", zone: "B Zone", type: "OFF-STAGE", code: "M44", 
    poster: "/m44-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN408", grade: "B+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN306", grade: "C", badgeColor: "bg-gray-400" }
    ] 
  },
  { 
    id: 45, title: "English grammar", zone: "B Zone", type: "OFF-STAGE", code: "M45", 
    poster: "/m45-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN407", grade: "C", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN306", grade: "C", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 46, title: "Kithab Test", zone: "B Zone", type: "OFF-STAGE", code: "M46", winners: [] },

  // C ZONE - STAGE
  { id: 47, title: "Qira'ath", zone: "C Zone", type: "STAGE", code: "M47", winners: [] },
  { id: 48, title: "Speech Malayalam", zone: "C Zone", type: "STAGE", code: "M48", winners: [] },
  { id: 49, title: "Speech English", zone: "C Zone", type: "STAGE", code: "M49", winners: [] },
  { id: 50, title: "Speech Urdu", zone: "C Zone", type: "STAGE", code: "M50", winners: [] },
  { id: 51, title: "Poem recitation Arabic", zone: "C Zone", type: "STAGE", code: "M51", winners: [] },
  { id: 52, title: "Poem recitation Urdu", zone: "C Zone", type: "STAGE", code: "M52", winners: [] },
  { id: 53, title: "Madh Ganam", zone: "C Zone", type: "STAGE", code: "M53", winners: [] },
  { id: 54, title: "Urdu Naath", zone: "C Zone", type: "STAGE", code: "M54", winners: [] },
  { id: 55, title: "Story telling", zone: "C Zone", type: "STAGE", code: "M55", winners: [] },
  { id: 56, title: "Conversation Arabic", zone: "C Zone", type: "STAGE", code: "M56", winners: [] },

  // C ZONE - OFF-STAGE
  { 
    id: 57, title: "Pencil drawing", zone: "C Zone", type: "OFF-STAGE", code: "M57", 
    poster: "/m57-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN412", grade: "A", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN413", grade: "B+", badgeColor: "bg-gray-400" },
      { place: "3RD PLACE", chest: "MN312", grade: "B", badgeColor: "bg-orange-500" }
    ] 
  },
  { 
    id: 58, title: "Watercolor", zone: "C Zone", type: "OFF-STAGE", code: "M58", 
    poster: "/m58-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN308", grade: "B+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN413", grade: "C+", badgeColor: "bg-gray-400" },
      { place: "3RD PLACE", chest: "MN414", grade: "C", badgeColor: "bg-orange-500" }
    ] 
  },
  { 
    id: 59, title: "Reading English", zone: "C Zone", type: "OFF-STAGE", code: "M59", 
    poster: "/m59-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN409", grade: "A+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN309", grade: "A+", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 60, title: "Reading Arabic", zone: "C Zone", type: "OFF-STAGE", code: "M60", winners: [] },
  { 
    id: 61, title: "Ganithakeli", zone: "C Zone", type: "OFF-STAGE", code: "M61", 
    poster: "/m61-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN409", grade: "B+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN310", grade: "D+", badgeColor: "bg-gray-400" }
    ] 
  },
  { id: 62, title: "Book test", zone: "C Zone", type: "OFF-STAGE", code: "M62", winners: [] },
  { id: 63, title: "Story writing", zone: "C Zone", type: "OFF-STAGE", code: "M63", winners: [] },
  { id: 64, title: "Spelling bee", zone: "C Zone", type: "OFF-STAGE", code: "M64", winners: [] },
  { id: 65, title: "Essay Malayalam", zone: "C Zone", type: "OFF-STAGE", code: "M65", winners: [] },
  { id: 66, title: "Quiz", zone: "C Zone", type: "OFF-STAGE", code: "M66", winners: [] },
  { id: 67, title: "Poem making", zone: "C Zone", type: "OFF-STAGE", code: "M67", winners: [] },
  { 
    id: 68, title: "Hifz", zone: "C Zone", type: "OFF-STAGE", code: "M68", 
    poster: "/m68-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN309", grade: "A+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN310", grade: "A", badgeColor: "bg-gray-400" },
      { place: "3RD PLACE", chest: "MN411", grade: "B+", badgeColor: "bg-orange-500" }
    ] 
  },
  { id: 69, title: "Kithab Test", zone: "C Zone", type: "OFF-STAGE", code: "M69", winners: [] },
  { id: 70, title: "English grammar", zone: "C Zone", type: "OFF-STAGE", code: "M70", winners: [] },

  // MIX ZONE - STAGE
  { id: 71, title: "Group song A", zone: "Mix Zone", type: "STAGE", code: "M71", winners: [] },
  { id: 72, title: "Group song B", zone: "Mix Zone", type: "STAGE", code: "M72", winners: [] },
  { id: 73, title: "Viplava Ganam", zone: "Mix Zone", type: "STAGE", code: "M73", winners: [] },
  { id: 74, title: "Maalappaat", zone: "Mix Zone", type: "STAGE", code: "M74", winners: [] },
  { id: 75, title: "Qawali", zone: "Mix Zone", type: "STAGE", code: "M75", winners: [] },
  { id: 76, title: "Qasweeda", zone: "Mix Zone", type: "STAGE", code: "M76", winners: [] },
  { id: 77, title: "Madhura Malayalam", zone: "Mix Zone", type: "STAGE", code: "M77", winners: [] },
  { id: 78, title: "Maulid", zone: "Mix Zone", type: "STAGE", code: "M78", winners: [] },
  { id: 79, title: "Musha'ara", zone: "Mix Zone", type: "STAGE", code: "M79", winners: [] },
  { id: 80, title: "Qur'anic lecture", zone: "Mix Zone", type: "STAGE", code: "M80", winners: [] },
  { id: 81, title: "Hamd Urdu", zone: "Mix Zone", type: "STAGE", code: "M81", winners: [] },
  { id: 82, title: "Thadrees", zone: "Mix Zone", type: "STAGE", code: "M82", winners: [] },
  { id: 83, title: "Debate", zone: "Mix Zone", type: "STAGE", code: "M83", winners: [] },
  { id: 84, title: "Press meet", zone: "Mix Zone", type: "STAGE", code: "M84", winners: [] },
  { id: 85, title: "Nasheeda", zone: "Mix Zone", type: "STAGE", code: "M85", winners: [] },

  // MIX ZONE - OFF-STAGE
  { id: 86, title: "Spot magazine", zone: "Mix Zone", type: "OFF-STAGE", code: "M86", winners: [] },
  { id: 87, title: "Mudhravakya Rajana", zone: "Mix Zone", type: "OFF-STAGE", code: "M87", winners: [] },
  { id: 88, title: "Haiku", zone: "Mix Zone", type: "OFF-STAGE", code: "M88", winners: [] },
  { id: 89, title: "Hadees Musabaqa", zone: "Mix Zone", type: "OFF-STAGE", code: "M89", winners: [] },
  { id: 90, title: "Collage", zone: "Mix Zone", type: "OFF-STAGE", code: "M90", winners: [] },
  { id: 91, title: "Adikkuripp", zone: "Mix Zone", type: "OFF-STAGE", code: "M91", winners: [] },
  { id: 92, title: "Calligraphy", zone: "Mix Zone", type: "OFF-STAGE", code: "M92", winners: [] },
  { id: 93, title: "Poster making", zone: "Mix Zone", type: "OFF-STAGE", code: "M93", winners: [] },
  { id: 94, title: "News writing", zone: "Mix Zone", type: "OFF-STAGE", code: "M94", winners: [] },
  { id: 95, title: "Typing English", zone: "Mix Zone", type: "OFF-STAGE", code: "M95", winners: [] },
  { id: 96, title: "Table talk", zone: "Mix Zone", type: "OFF-STAGE", code: "M96", winners: [] },
  { id: 97, title: "E-Poster", zone: "Mix Zone", type: "OFF-STAGE", code: "M97", winners: [] },
  { id: 98, title: "Risala quiz", zone: "Mix Zone", type: "OFF-STAGE", code: "M98", winners: [] },
  { id: 99, title: "AI prompting", zone: "Mix Zone", type: "OFF-STAGE", code: "M99", winners: [] },
  { id: 100, title: "AI poem", zone: "Mix Zone", type: "OFF-STAGE", code: "M100", winners: [] },
  { id: 101, title: "Reel making", zone: "Mix Zone", type: "OFF-STAGE", code: "M101", winners: [] },
  { id: 102, title: "Podcast", zone: "Mix Zone", type: "OFF-STAGE", code: "M102", winners: [] },
  { id: 103, title: "Maths in PC", zone: "Mix Zone", type: "OFF-STAGE", code: "M103", winners: [] },
  { 
    id: 104, title: "Ihrab writing", zone: "Mix Zone", type: "OFF-STAGE", code: "M104", 
    poster: "/m104-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN301", grade: "B+", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN402", grade: "B", badgeColor: "bg-gray-400" },
      { place: "3RD PLACE", chest: "MN303", grade: "B", badgeColor: "bg-orange-500" }
    ] 
  },
  { 
    id: 105, title: "Decoding the picture", zone: "Mix Zone", type: "OFF-STAGE", code: "M105", 
    poster: "/m105-poster.jpg",
    winners: [
      { place: "1ST PLACE", chest: "MN301", grade: "A", badgeColor: "bg-yellow-500" },
      { place: "2ND PLACE", chest: "MN302", grade: "A", badgeColor: "bg-gray-400" },
      { place: "3RD PLACE", chest: "MN402", grade: "B+", badgeColor: "bg-orange-500" }
    ] 
  }
];

export default function ResultsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedZone, setSelectedZone] = useState("All Zones");
  const [activeZoneTab, setActiveZoneTab] = useState("ALL Zones");
  const [selectedResult, setSelectedResult] = useState<any>(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredResults = resultsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZoneDrop = selectedZone === "All Zones" || item.zone === selectedZone;
    const matchesZoneTab = activeZoneTab === "ALL Zones" || item.zone === activeZoneTab;
    return matchesSearch && matchesZoneDrop && matchesZoneTab;
  });

  const totalItems = filteredResults.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredResults.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedZone, activeZoneTab]);

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-10 px-4 font-sans text-black relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Festival Results</h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-300 pb-2">
          {["ALL Zones", "A Zone", "B Zone", "C Zone", "Mix Zone"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveZoneTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition ${activeZoneTab === tab ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-end">
          <div className="w-full md:w-1/2">
             <label className="block text-xs font-bold text-gray-500 mb-1">SEARCH PROGRAM</label>
             <input 
               type="text" 
               placeholder="Search by program name or code..." 
               className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
          <div className="w-full md:w-1/4">
             <label className="block text-xs font-bold text-gray-500 mb-1">ZONE</label>
             <select 
               className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
               value={selectedZone}
               onChange={(e) => setSelectedZone(e.target.value)}
             >
               <option value="All Zones">All Zones</option>
               <option value="A Zone">A Zone</option>
               <option value="B Zone">B Zone</option>
               <option value="C Zone">C Zone</option>
               <option value="Mix Zone">Mix Zone</option>
             </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((result, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedResult(result)} 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:shadow-md transition hover:border-red-200"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-inner ${result.winners && result.winners.length > 0 ? 'bg-gradient-to-br from-green-400 to-green-600' : 'bg-gradient-to-br from-yellow-400 to-orange-500'}`}>
                  {result.code.replace('M', '')}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{result.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 uppercase font-semibold">
                    <span className="text-red-500">{result.zone}</span> • {result.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalItems > 0 ? (
          <div className="mt-8 flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-500 mb-4">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} results
            </p>
            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow-sm border border-gray-100 w-fit">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md font-bold text-sm transition ${
                      currentPage === page 
                        ? 'bg-red-600 text-white shadow-md' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500 font-medium">
            No programs found.
          </div>
        )}

        {/* Modal Pop-up */}
        {selectedResult && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
              
              <div className="bg-[#f8f5d6] p-6 flex justify-between items-start border-b border-yellow-200">
                 <div>
                   <div className="flex gap-2 items-center mb-2">
                     <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">Result Code: {selectedResult.code}</span>
                     <span className="text-xs text-gray-600 font-semibold">{selectedResult.zone} • {selectedResult.type}</span>
                   </div>
                   <h2 className="text-3xl font-extrabold text-gray-900">{selectedResult.title}</h2>
                 </div>
                 <button onClick={() => setSelectedResult(null)} className="text-gray-500 hover:text-black font-bold p-2 text-xl">
                   ✕
                 </button>
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                <p className="text-xs font-bold text-gray-400 mb-4 tracking-widest uppercase">Official Podium Verdicts</p>
                
                {selectedResult.winners && selectedResult.winners.length > 0 ? (
                  <div className="space-y-4">
                    {selectedResult.winners.map((winner: any, idx: number) => {
                      const studentInfo = studentDirectory[winner.chest] || { name: "Unknown Student", team: "Unknown Team" };
                      
                      return (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center gap-4 relative overflow-hidden">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${winner.badgeColor || 'bg-gray-400'}`}>
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-bold text-gray-500 mb-0.5">{winner.place}</p>
                            <h4 className="text-lg font-bold text-gray-900 leading-tight">{studentInfo.name}</h4>
                            <p className="text-sm text-gray-600">{studentInfo.team} <span className="text-gray-400 mx-1">|</span> Chest: {winner.chest}</p>
                          </div>
                          <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded border border-green-200">
                            {winner.grade}
                          </div>
                        </div>
                      );
                    })}

                    {selectedResult.poster && (
                      <div className="mt-8 pt-6 border-t border-gray-100">
                         <div className="rounded-xl overflow-hidden shadow-md relative group border-4 border-gray-50">
                           <img src={selectedResult.poster} alt="Official Result Poster" className="w-full h-auto object-cover" />
                           <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                              <span className="text-white font-bold bg-black/60 px-4 py-2 rounded-full flex items-center gap-2">
                                View Poster
                              </span>
                           </div>
                         </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500 font-medium bg-gray-50 rounded-lg">
                    Results are yet to be announced for this program.
                  </div>
                )}
              </div>
              
              <div className="bg-gray-50 p-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-xs text-gray-500 font-medium">
                  Official MEHFANN 2026 Verdict • Verified & Published
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button onClick={() => setSelectedResult(null)} className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-100 transition flex-1 md:flex-none text-sm">
                    Close
                  </button>
                  {selectedResult.winners && selectedResult.winners.length > 0 && selectedResult.poster && (
                    <a href={selectedResult.poster} download className="px-6 py-2.5 bg-[#dc2626] text-white font-bold rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2 flex-1 md:flex-none text-sm shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      DOWNLOAD OFFICIAL POSTER
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}