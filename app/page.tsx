"use client";
import { useState } from 'react';

export default function LiveLeaderboard() {
  const [teams, setTeams] = useState([
    { id: 'team_yameen', name: 'أصحاب اليمين', points: 120, theme: 'bg-green-100 text-green-900 border-green-300' },
    { id: 'team_maimana', name: 'أصحاب الميمنة', points: 105, theme: 'bg-blue-100 text-blue-900 border-blue-300' }
  ]);

  const sortedTeams = [...teams].sort((a, b) => b.points - a.points);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-10">
      <div className="w-full max-w-4xl p-6 font-sans">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Live Standings</h2>
          <p className="text-gray-500 mt-2">MEHFANN Cultural & Arts Festival</p>
        </div>

        <div className="flex flex-col gap-4">
          {sortedTeams.map((team, index) => (
            <div 
              key={team.id} 
              className={`flex items-center justify-between p-6 rounded-2xl border-2 shadow-sm transition-transform hover:scale-[1.01] ${team.theme}`}
            >
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 font-bold text-xl shadow-inner">
                  #{index + 1}
                </div>
                <h3 className="text-3xl font-bold">
                  {team.name}
                </h3>
              </div>
              
              <div className="text-right">
                <span className="text-4xl font-extrabold">{team.points}</span>
                <span className="text-sm uppercase tracking-wider font-semibold ml-2 opacity-80">PTS</span>
              </div>
            </div>
          ))}c
        </div>
      </div>
    </div>
  );
}