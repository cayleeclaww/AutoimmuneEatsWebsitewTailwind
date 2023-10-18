import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../../components/navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Autoimmune Eats',
  description: 'Radical nutrition for autoimmune',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}


