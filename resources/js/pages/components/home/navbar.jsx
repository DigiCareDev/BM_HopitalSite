import React, { useState, useEffect, useRef } from "react";
import Logo from "@/assets/Logo.webp";
import { FaDonate } from 'react-icons/fa';

export default function Navbar({translations}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pagesDropdown, setPagesDropdown] = useState(false);
    const [usersDropdown, setUsersDropdown] = useState(false);
    const [mobilePagesDropdown, setMobilePagesDropdown] = useState(false);
    const [mobileUsersDropdown, setMobileUsersDropdown] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    // Close dropdowns on Escape key globally
    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") {
                setMenuOpen(false);
                setPagesDropdown(false);
                setUsersDropdown(false);
                setMobilePagesDropdown(false);
                setMobileUsersDropdown(false);
                setUserMenuOpen(false);
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    function useClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler();
            };
            document.addEventListener("mousedown", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
            };
        }, [ref, handler]);
    }

    // Refs for dropdown containers
    const pagesRef = useRef();
    const usersRef = useRef();
    const userMenuRef = useRef();

    useClickOutside(pagesRef, () => setPagesDropdown(false));
    useClickOutside(usersRef, () => setUsersDropdown(false));
    useClickOutside(userMenuRef, () => setUserMenuOpen(false));

    return (
        <nav className="bg-white">
            <div className="container px-6 mx-auto lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center justify-between flex-grow">
                        <div className="flex-shrink-0">
                            <a href="/" className="flex justify-between items-center py-3">
                                <img src={Logo} className="h-10 mr-1" alt="Logo" />
                                <span className=" text-xl font-semibold whitespace-nowrap text-blue-800"><span className="text-[#80CAC7]">BM</span> Hospital</span>
                            </a>
                        </div>
                        <div className="hidden lg:block">
                            <div className="flex items-center">

                                {/* Pages Dropdown */}
                                <div ref={pagesRef} className="relative">
                                    <button
                                        onClick={() => setPagesDropdown((prev) => !prev)}
                                        className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-blue-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                    >
                                        <span className="mx-2">Pages</span>
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>

                                    {pagesDropdown && (
                                        <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg bg-white">
                                            <div className="py-1 rounded-md shadow-xs">
                                                <a
                                                    href="#"
                                                    className="block flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                >
                                                    Pages-1
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                >
                                                    Pages-2
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                >
                                                    Pages-3
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Users Dropdown */}
                                <div ref={usersRef} className="relative">
                                    <button
                                        onClick={() => setUsersDropdown((prev) => !prev)}
                                        className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-blue-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                    >
                                        <span className="mx-2">Users</span>
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>

                                    {usersDropdown && (
                                        <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg bg-white">
                                            <div className="py-1 rounded-md shadow-xs">
                                                <a
                                                    href="#"
                                                    className="block flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                >
                                                    Users-1
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                >
                                                    Users-2
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block flex flex-row items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                >
                                                    Users-3
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <a
                                    href="/careers"
                                    className="flex flex-row items-center px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md focus:outline-none focus:text-white focus:bg-gray-700"
                                >
                                    <span className="ml-2">{translations?.Careers || 'करियर'}</span>
                                </a>
                                <a
                                    href="/about-us"
                                    className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-blue-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                >
                                    <span className="ml-2">{translations?.About || 'हमारे विषय में'}</span>
                                </a>

                                <a
                                    href="/contact-us"
                                    className="flex flex-row items-center px-3 py-2 ml-4 text-sm font-medium text-blue-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                >
                                    <span className="ml-2">{translations?.Contact || 'हमसे संपर्क करें'}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* User menu */}
                    <div className="hidden lg:block">
                        <div className="flex items-center ml-4 md:ml-6">
                            <div ref={userMenuRef} className="relative ml-3">
                                <button
                                    onClick={() => setUserMenuOpen((prev) => !prev)}
                                    className="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                                    id="user-menu"
                                    aria-label="User menu"
                                    aria-haspopup="true"
                                    aria-expanded={userMenuOpen}
                                >
                                    <a href='/donate'>
                                        <span class="bg-blue-200 hover:bg-white hover:border border-blue-700 text-blue-800 rounded-full py-3 px-5 shadow hover:shadow-2xl transition duration-500 flex"><FaDonate className='mt-1 mr-2' />Donation</span>
                                    </a>
                                </button>
                                {/* You can add dropdown here if needed */}
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex -mr-2 lg:hidden">
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
                            aria-label={menuOpen ? "Close main menu" : "Main menu"}
                            aria-expanded={menuOpen}
                        >
                            <svg
                                className="w-6 h-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                {!menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="lg:hidden">
                    <div className="container px-6 mx-auto">
                        <div className="pt-2 pb-3">
                            {/* Mobile Pages Dropdown */}
                            <div className="relative" ref={pagesRef}>
                                <button
                                    onClick={() =>
                                        setMobilePagesDropdown((prev) => !prev)
                                    }
                                    className="flex flex-row items-center w-full px-3 py-2 mt-1 text-base font-medium text-left text-blue-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                >
                                    <span className="mx-2">Pages</span>
                                    <svg
                                        className="w-4 h-4 ml-auto"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>

                                {mobilePagesDropdown && (
                                    <div className="px-2 py-2 mt-2 bg-white rounded-md shadow-xs">
                                        <a
                                            href="#"
                                            className="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                        >
                                            Pages-1
                                        </a>
                                        <a
                                            href="#"
                                            className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                        >
                                            Pages-2
                                        </a>
                                        <a
                                            href="#"
                                            className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                        >
                                            Pages-3
                                        </a>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Users Dropdown */}
                            <div className="relative" ref={usersRef}>
                                <button
                                    onClick={() =>
                                        setMobileUsersDropdown((prev) => !prev)
                                    }
                                    className="flex flex-row items-center w-full px-3 py-2 mt-1 text-base font-medium text-left text-blue-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                >
                                    <span className="mx-2">Users</span>
                                    <svg
                                        className="w-4 h-4 ml-auto"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>

                                {mobileUsersDropdown && (
                                    <div className="px-2 py-2 mt-2 bg-white rounded-md shadow-xs">
                                        <a
                                            href="#"
                                            className="flex flex-row items-center px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                        >
                                            Users-1
                                        </a>
                                        <a
                                            href="#"
                                            className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                        >
                                            Users-2
                                        </a>
                                        <a
                                            href="#"
                                            className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:text-gray-900 focus:bg-gray-200"
                                        >
                                            Users-3
                                        </a>
                                    </div>
                                )}
                            </div>
                            <a
                                href="/careers"
                                className="flex flex-row items-center px-3 py-2 text-base font-medium text-blue-800  rounded-md focus:outline-none"
                            >
                                <span className="ml-2">{translations?.Careers || 'करियर'}</span>
                            </a>
                            <a
                                href="/about-us"
                                className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-blue-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none"
                            >
                                <span className="ml-2">{translations?.About || 'हमारे विषय में'}</span>
                            </a>
                            <a
                                href="/contact-us"
                                className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-blue-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                                <span className="ml-2">{translations?.Contact || 'हमसे संपर्क करें'}</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile user profile */}
                    <div className="container px-6 mx-auto">
                        <div className="py-4 border-t border-gray-700">
                            <button
                                onClick={() => { }}
                                className="flex items-center w-full focus:outline-none"
                            >
                                <div className="flex items-center w-full text-left">
                                    <div className="flex-shrink-0">
                                        <a href='/donate'>
                                            <span class="bg-blue-200 hover:bg-white hover:border border-blue-700 text-blue-800 rounded-full py-3 px-5 shadow hover:shadow-2xl transition duration-500 flex"><FaDonate className='mt-1 mr-2' />Donation</span>
                                        </a>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
