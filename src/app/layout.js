import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../../components/navbar";
import Footer from '../../components/Footer';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Autoimmune Eats',
    template: '%s | Autoimmune Eats',
  },
  description: 'Learn about nutrition & natural remedies for autoimmune disease supported by research. No diets or fat shaming! Discover how to live with more peace & less pain.' //161 characters
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}


