// app/api/products/route.js
export async function GET() {
    try {
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json()

        const products = data.recipes.map(recipe => ({
            id: recipe.id,
            name: recipe.name,
            instructions: recipe.instructions.join(' '),
            ingredients: recipe.ingredients,
            image: recipe.image,
            rating: recipe.rating,
            reviews: generateReviews()
        }))

        return Response.json(products)
    } catch (error) {
        return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
    }
}

function generateReviews() {
    const reviewPool = [
        "Absolutely delicious! One of the best dishes I've ever had.",
        "Great flavors and perfectly cooked. Highly recommend!",
        "Amazing presentation and taste. Worth every penny.",
        "A must-try! The ingredients are so fresh.",
        "Incredible dish! Will definitely order again.",
        "Exceeded my expectations. The chef really knows what they're doing.",
        "Perfect balance of flavors. Loved every bite!",
        "Outstanding! This has become my favorite dish here.",
    ]

    const count = Math.floor(Math.random() * 2) + 2
    const shuffled = reviewPool.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}