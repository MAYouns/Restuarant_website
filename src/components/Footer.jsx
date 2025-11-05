'use client';
const Footer = () => {
    return (
        <div className="bg-gray-color px-20 pt-15 pb-10 text-[#ADB29E] space-y-2">
            <div className="flex">
                <div className="w-3/12 mr-9  space-y-4">
                    <p className="flex items-center space-x-3 text-white"><img src="/images/Vector.png" alt="Logo img" /><span>Bistro Bliss</span></p>
                    <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                </div>
                <div className="w-2/12 space-y-4">
                    <p className="text-white">Pages</p>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Delivery</li>
                    </ul>
                </div>
                <div className="w-2/12  space-y-4">
                    <p className="text-white">Utility Pages</p>
                    <ul className="">
                        <li>Start Here</li>
                        <li>Styleguide</li>
                        <li>Password Protected</li>
                        <li>404 Not Found</li>
                        <li>Licenses</li>
                        <li>Changelog</li>
                        <li>View More</li>
                    </ul>
                </div>
                <div className="w-4/12 space-y-4">
                    <p className="text-white">Follow Us On Instagram</p>
                    <div className="flex flex-wrap space-x-1 space-y-1">
                        <img src="images/1.png" alt="" className="rounded-2xl" />
                        <img src="images/2.png" alt="" className="rounded-2xl" />
                        <img src="images/3.png" alt="" className="rounded-2xl" />
                        <img src="images/4.png" alt="" className="rounded-2xl" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-15">Copyright © 2023 Hashtag Developer. All Rights Reserved</div>
        </div>
    );
}

export default Footer;
