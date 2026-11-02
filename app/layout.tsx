import Navbar from '../components/Navbar';
import './globals.css';
// (മറ്റു import-കൾ ഉണ്ടെങ്കിൽ അത് അവിടെ തന്നെ നിൽക്കട്ടെ)

export const metadata = {
  title: 'MEHFANN Festival',
  description: 'MEHFANN Cultural & Arts Festival',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />  {/* ഇത് ഇവിടെയാണ് ചേർക്കേണ്ടത് */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
