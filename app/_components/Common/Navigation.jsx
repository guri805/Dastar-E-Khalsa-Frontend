"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { verifySession, logout } from "../../lib/session";

const Navigation = () => {
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Check if the user is logged in
    useEffect(() => {
        const checkSession = async () => {
            const session = await verifySession();
            setUser(session?.userId || null);
        };
        checkSession();
    }, []);

    return (
        <section className="header-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-b border-black">
                <div className="header flex justify-between items-center h-[140px] py-2">
                    
                    {/* Logo */}
                    <div className="logo">
                        <Link href="/">
                            <div className="logo">
                                <img src="logo2.png" alt="logo" className="w-[165px] h-full" />
                            </div>
                        </Link>
                    </div>

                    {/* Center Image (Hidden on screens smaller than md) */}
                    <div className="centerpart w-[65%] h-full hidden md:block">
                        <img src="headerImage.png" alt="header image" className="w-full h-full rounded-xl" />
                    </div>

                    {/* Admin Login / User Dropdown */}
                    <div className="rightpart relative">
                        {user ? (
                            <div className="relative">
                                {/* User Button */}
                                <button 
                                    className="bg-gray-800 text-white px-4 py-2 rounded-xl"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    Hi, Admin ⬇️
                                </button>

                                {/* Dropdown Menu */}
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                                        <ul className="text-gray-800">
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link href="#">Hi</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link href="/participant-list">List</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                                <Link href="/members">Members</Link>
                                            </li>
                                            <li 
                                                className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                                                onClick={async () => {
                                                    await logout();
                                                    setUser(null);
                                                }}
                                            >
                                                Logout
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link href="/login">
                                <CustomButton btnName="Admin Login" className="custom-btn" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navigation;
