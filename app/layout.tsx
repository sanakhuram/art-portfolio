import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { headingFont, bodyFont } from './lib/fonts';

export const metadata = {
  title: 'Sana Khuram Art Portfolio',
  description: 'Miniature Artist & Illustrator Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
