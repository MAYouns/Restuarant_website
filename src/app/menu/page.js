// app/menu/page.js
async function getProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`, {
        cache: 'no-store'
    })
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
}

export default async function Menu() {
    const products = await getProducts()

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center">Our Menu</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <a key={product.id} href={`/menu/${product.id}`} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.instructions}</p>
                            <div className="mt-2 flex items-center">
                                <span className="text-yellow-500">★</span>
                                <span className="ml-1 text-sm">{product.rating}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}