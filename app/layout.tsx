// app/layout.tsx
import './globals.css';
import Footer from './components/Footer';
import { display, heading, body } from '@/app/lib/fonts';

export const metadata = {
  title: 'Sana Khuram Art Portfolio',
  description: 'Miniature Artist & Illustrator Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={`${display.variable} ${heading.variable} ${body.variable}`}>

        {children}
        <Footer />
      </body>
    </html>
  );
}
