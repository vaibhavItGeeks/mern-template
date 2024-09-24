// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    MyWebsite
                </div>
                <nav className="space-x-4">
                    <Link to={'/loginsignup'} className="bg-[#373737] text-white px-4 py-2 rounded hover:bg-black duration-500">
                        Login/Signup
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
