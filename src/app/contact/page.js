// app/contact/page.js
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-gray-600">123 Main Street, City, State 12345</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600">info@restaurant.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Hours</h3>
              <p className="text-gray-600">Mon-Fri: 11am - 10pm</p>
              <p className="text-gray-600">Sat-Sun: 10am - 11pm</p>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full border rounded-lg px-4 py-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea className="w-full border rounded-lg px-4 py-2" rows="5" required></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}