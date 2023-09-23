import './globals.css'
import { Hepta_Slab } from 'next/font/google'

const heptaSlab = Hepta_Slab({ subsets: ['latin'] })

export const metadata = {
  title: 'The Daily Crucial',
  description: 'The Daily Crucial - Ethglobal - New York 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heptaSlab.className}>{children}</body>
    </html>
  )
}
