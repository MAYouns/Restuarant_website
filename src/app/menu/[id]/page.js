// app/menu/[id]/page.js
async function getProduct(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
        cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch')
    const products = await res.json()
    return products.find(p => p.id === parseInt(id))
}

export default async function ProductDetail({ params }) {
    const product = await getProduct(params.id)

    if (!product) {
        return <div className="max-w-4xl mx-auto px-4 py-16">Product not found</div>
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <img src={product.image} alt={product.name} className="w-full rounded-lg" />
                <div>
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-yellow-500 text-xl">★</span>
                        <span className="ml-2 text-lg">{product.rating}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                    <p className="text-gray-700 mb-6">{product.instructions}</p>
                    <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                    <ul className="list-disc pl-6 text-gray-700">
                        {product.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                <div className="space-y-6">
                    {product.reviews.map((review, i) => (
                        <div key={i} className="border-b pb-4">
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <p className="text-gray-700">{review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}