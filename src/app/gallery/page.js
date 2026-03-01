// app/gallery/page.js
export default function Gallery() {
    const images = [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center">Gallery</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden rounded-lg">
                        <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition" />
                    </div>
                ))}
            </div>
        </div>
    )
}