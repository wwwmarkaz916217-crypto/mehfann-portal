import Navbar from '../components/Navbar';
import './globals.css';
// (മറ്റു import-കൾ ഉണ്ടെങ്കിൽ അത് അവിടെ തന്നെ നിൽക്കട്ടെ)

export const metadata = {
  title: 'MEHFANN Festival',
  description: 'MEHFANN Cultural & Arts Festival',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="t">
         <Navbar /> 
         <main>
            {children}
         </main>
      </body>
    </html>
  );
}
