// app/reviews/page.js
export default function Reviews() {
    const reviews = [
        { name: 'John D.', rating: 5, text: 'Amazing food and excellent service! The atmosphere is perfect for a romantic dinner.' },
        { name: 'Sarah M.', rating: 5, text: 'Best restaurant in town. Every dish is crafted to perfection.' },
        { name: 'Mike R.', rating: 4, text: 'Great experience overall. The menu variety is impressive and the staff is very attentive.' },
        { name: 'Emily T.', rating: 5, text: 'Absolutely loved everything about this place. Will definitely come back!' },
        { name: 'David L.', rating: 5, text: 'Outstanding cuisine and wonderful ambiance. Highly recommend!' },
    ]

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center">Customer Reviews</h1>
            <div className="space-y-8">
                {reviews.map((review, i) => (
                    <div key={i} className="border rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                            <div>
                                <h3 className="font-semibold">{review.name}</h3>
                                <div className="text-yellow-500">{'★'.repeat(review.rating)}</div>
                            </div>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}