// app/reservations/page.js
export default function Reservations() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Make a Reservation</h1>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input type="tel" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input type="date" className="w-full border rounded-lg px-4 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Time</label>
            <input type="time" className="w-full border rounded-lg px-4 py-2" required />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Number of Guests</label>
          <select className="w-full border rounded-lg px-4 py-2" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Special Requests</label>
          <textarea className="w-full border rounded-lg px-4 py-2" rows="4"></textarea>
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700">
          Book Table
        </button>
      </form>
    </div>
  )
}