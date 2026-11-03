import React from 'react';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col items-center">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-3xl font-bold mb-2">Live Standings</h1>
        <p className="text-gray-500">MEHFANN Cultural & Arts Festival</p>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {/* Team 1 */}
        <div className="flex justify-between items-center bg-green-200 p-4 md:p-6 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-gray-700">#1</span>
            <span className="text-xl md:text-2xl font-bold">أصحاب اليمين</span>
          </div>
          <div className="text-3xl font-bold text-green-800">
            0 <span className="text-sm font-normal">PTS</span>
          </div>
        </div>

        {/* Team 2 */}
        <div className="flex justify-between items-center bg-blue-200 p-4 md:p-6 rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-gray-700">#2</span>
            <span className="text-xl md:text-2xl font-bold">أصحاب الميمنة</span>
          </div>
          <div className="text-3xl font-bold text-blue-800">
            0 <span className="text-sm font-normal">PTS</span>
          </div>
        </div>
      </div>
    </div>
  );
}