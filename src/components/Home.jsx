"use client";
import Button from "./Button";

const Home = () => {
    return (
        <div className="w-5/12 absolute left-6/12 top-6/12 -translate-x-[50%] -translate-y-[50%] text-center space-y-7 ">
            <h1 className="text-8xl">Best food for your taste</h1>
            <p className="w-8/12 mx-auto">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div className="flex justify-center space-x-4">
                <Button className="bg-red-700 text-white border-red-700 hover:bg-red-800">Book A Table</Button>
                <Button href="/product">Explore Menu</Button>
            </div>
        </div>
    );
}

export default Home;
