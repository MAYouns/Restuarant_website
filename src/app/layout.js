// app/layout.js
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Restaurant',
  description: 'Fine dining experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="text-2xl font-bold">Restaurant</Link>
              <div className="flex space-x-6">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/menu" className="hover:text-gray-300">Menu</Link>
                <Link href="/reservations" className="hover:text-gray-300">Reservations</Link>
                <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
                <Link href="/reviews" className="hover:text-gray-300">Reviews</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-center">&copy; 2024 Restaurant. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}