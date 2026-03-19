import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Rajaiah Nanaboina Farmer | Cooperative Society',
  description: 'A showcase of modern agricultural products and heavy tracking equipment available for rent.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
