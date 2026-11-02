import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white p-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-500">
          MEHFANN
        </Link>

        {/* Main Links */}
        <div className="hidden md:flex space-x-6 text-xs font-semibold tracking-wider">
          <Link href="/" className="hover:text-red-400">HOME</Link>
          <Link href="/results" className="hover:text-red-400">RESULTS</Link>
          <Link href="/standings" className="hover:text-red-400">STANDINGS</Link>
          <Link href="/schedule" className="hover:text-red-400">SCHEDULE</Link>
          <Link href="/gallery" className="hover:text-red-400">GALLERY</Link>
          <Link href="/news" className="hover:text-red-400">NEWS</Link>
        </div>

        {/* Student Portal Button */}
        <Link href="/student" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
          STUDENT PORTAL
        </Link>
        
      </div>
    </nav>
  );
}