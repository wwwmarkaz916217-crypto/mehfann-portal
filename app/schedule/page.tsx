"use client";
import React, { useState } from 'react';

export default function SchedulePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedZone, setSelectedZone] = useState("All Zones");

  const events = [
    { day: 1, date: "November 7, 2026", time: "06:00 AM - 06:15 AM", title: "Flag Hosting", zone: "-", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "06:15 AM - 07:00 AM", title: "Inauguration Session", zone: "-", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "07:00 AM - 07:20 AM", title: "Qira'ath", zone: "B Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "07:20 AM - 07:50 AM", title: "Qira'ath", zone: "C Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "07:50 AM - 08:15 AM", title: "Speech Urdu", zone: "C Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "08:15 AM - 08:40 AM", title: "Group Song A", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "08:40 AM - 09:00 AM", title: "Bhakthi Ganam", zone: "A Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "09:30 AM - 09:50 AM", title: "Speech Malayalam", zone: "B Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "09:50 AM - 10:15 AM", title: "Speech Malayalam", zone: "C Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "10:15 AM - 10:35 AM", title: "Madhura Malayalam", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "10:35 AM - 10:55 AM", title: "Poem Recitation Arabic", zone: "A Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "10:55 AM - 11:15 AM", title: "Poem Recitation English", zone: "A Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "11:15 AM - 11:35 AM", title: "Poem Recitation Arabic", zone: "C Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "11:35 AM - 12:10 PM", title: "Madh Ganam", zone: "A Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "01:00 PM - 02:05 PM", title: "Musha'ara", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "02:05 PM - 03:20 PM", title: "Debate", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "03:20 PM - 03:45 PM", title: "Speech Arabic", zone: "B Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "04:15 PM - 04:45 PM", title: "Speech Malayalam", zone: "A Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "04:45 PM - 05:05 PM", title: "Urdu Na'th", zone: "C Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "05:05 PM - 05:25 PM", title: "Poem Recitation Urdu", zone: "C Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "05:25 PM - 05:50 PM", title: "Maalapaatt", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "05:50 PM - 06:10 PM", title: "Maapilapaatt", zone: "B Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "06:25 PM - 06:45 PM", title: "Viplava Ganam", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "06:45 PM - 07:15 PM", title: "Madh Ganam", zone: "C Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "07:15 PM - 07:30 PM", title: "Qasweeda", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "08:10 PM - 08:45 PM", title: "Qawali", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "08:45 PM - 09:15 PM", title: "Nasheeda", zone: "Mix Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "09:15 PM - 09:40 PM", title: "Speech English", zone: "A Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "09:40 PM - 10:00 PM", title: "Speech Arabic", zone: "A Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "10:00 PM - 10:25 PM", title: "Poem Recitation Arabic", zone: "B Zone", status: "Upcoming" },
    { day: 1, date: "November 7, 2026", time: "10:25 PM - 10:55 PM", title: "Madh Ganam", zone: "B Zone", status: "Upcoming" },
    
    // Day 2 Events
    { day: 2, date: "November 8, 2026", time: "06:00 AM - 06:25 AM", title: "Aadarsh Prasangam", zone: "A Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "06:25 AM - 07:00 AM", title: "Qur'anic Lecture", zone: "Mix Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "07:00 AM - 07:30 AM", title: "Genius Profile", zone: "A Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "07:30 AM - 08:00 AM", title: "Conversation Arabic", zone: "C Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "08:00 AM - 08:45 AM", title: "Thadrees", zone: "Mix Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "08:45 AM - 09:15 AM", title: "Story Telling", zone: "C Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "09:45 AM - 10:15 AM", title: "Speech English", zone: "C Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "10:15 AM - 10:50 AM", title: "Speech English", zone: "B Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "10:50 AM - 11:30 AM", title: "Maulid", zone: "Mix Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "11:30 AM - 12:00 PM", title: "Hamd Urdu", zone: "Mix Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "12:00 PM - 12:30 PM", title: "Group Song B", zone: "Mix Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "01:15 PM - 02:30 PM", title: "Press Meet", zone: "Mix Zone", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "02:30 PM - 03:30 PM", title: "Award Distribution", zone: "-", status: "Upcoming" },
    { day: 2, date: "November 8, 2026", time: "04:15 PM - 06:10 PM", title: "Results Announcement", zone: "-", status: "Upcoming" }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesZone = selectedZone === "All Zones" || event.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <p className="text-red-600 font-bold text-sm tracking-widest mb-2 uppercase">Festival Lineup & Timings</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">OFFICIAL SCHEDULE</h1>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input 
            type="text" 
            placeholder="Search program name..." 
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
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

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-md transition">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-gray-800">{event.time}</span>
                    {event.zone !== "-" && (
                      <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded">{event.zone}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Day {event.day} • {event.date}</p>
                </div>
                <div className="flex items-center">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    event.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {event.status}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-gray-500">
              No programs found matching your search criteria.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}