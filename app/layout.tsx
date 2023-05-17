import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Tillana, Ubuntu, Pacifico, Source_Code_Pro } from 'next/font/google';

// const inter = Ubuntu({ subsets: ['latin'] });

export const metadata = { title: 'Homes and Housing', description: 'Home and Housing ' };

const tillana = Tillana({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

const ubuntu = Ubuntu({ subsets: ['latin'], fallback: ['sans-serif'], weight: ['300', '400', '500', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={ubuntu.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
