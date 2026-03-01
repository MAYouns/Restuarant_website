// app/about/page.js
export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <div className="prose max-w-none">
                <p className="text-lg mb-4">
                    Founded in 2010, our restaurant has been serving exceptional cuisine to our community for over a decade. We believe in using only the finest ingredients and traditional cooking methods to create unforgettable dining experiences.
                </p>
                <p className="text-lg mb-4">
                    Our team of expert chefs brings years of experience from around the world, combining classic techniques with innovative flavors to create dishes that delight and surprise.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
                <p className="text-lg mb-4">
                    To provide our guests with exceptional food, outstanding service, and a warm, welcoming atmosphere that makes every visit memorable.
                </p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
                <ul className="list-disc pl-6 text-lg">
                    <li className="mb-2">Quality ingredients from local suppliers</li>
                    <li className="mb-2">Sustainable and ethical sourcing</li>
                    <li className="mb-2">Innovation in traditional cuisine</li>
                    <li className="mb-2">Exceptional customer service</li>
                </ul>
            </div>
        </div>
    )
}