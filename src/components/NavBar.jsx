'use client';
import Link from "next/link";
import { playFair } from "@/app/layout";
import { v4 as uuidv4 } from 'uuid';
import Button from "./Button";

const linkStyle = "active:bg-[var(--light-graylish-color)] cursor-pointer active:text-black hover:bg-[var(--light-graylish-color)]";
const links = [
    { id: uuidv4(), name: "Home", href: "/" },
    { id: uuidv4(), name: "About", href: "/about" },
    { id: uuidv4(), name: "Menu", href: "/product" },
    { id: uuidv4(), name: "Pages", href: "/articles" },
    { id: uuidv4(), name: "Contact", href: "/contact" },
];

const NavBar = () => {
    return (
        <div className=" w-full">
            <div className="bg-gray-color text-white">
                <div className="container flex m-auto  justify-between">
                    <div className="flex space-x-3">
                        <p>(414) 857 - 0107</p>
                        <p>yummy@bistrobliss</p>
                    </div>
                    <div>
                        <div>icons</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f9f9f7] pt-4">
                <div className="navbar container mx-auto p-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links.map(item => <li key={item.id}><Link href={item.href}>{item.name}</Link></li>)}
                            </ul>
                        </div>
                        <Link href="/" className={` flex items-center text-3xl font-bold  ${playFair.className} italic text-[var(--text-color)]`} ><img src="images/japanese-food.png" alt="japanese food" width="40px" className="mr-3" />Bistro Bliss</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links.map((item) => <li key={item.id}><Link className={linkStyle} href={item.href}>{item.name}</Link></li>)}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Button href='/table'>Book A Table</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
