// app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <p className="text-xl mb-8">Experience culinary excellence</p>
          <Link href="/menu" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-block">
            View Menu
          </Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">Locally sourced, premium quality ingredients</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
            <p className="text-gray-600">Award-winning culinary team</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Great Atmosphere</h3>
            <p className="text-gray-600">Perfect ambiance for any occasion</p>
          </div>
        </div>
      </section>
    </div>
  )
}