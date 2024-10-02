import React, { useState } from "react";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main>
            <div className="flex justify-between items-center font-serif px-4 md:px-8 text-2xl">
                <h2 className="text-[#FFC624] my-8 text-[20px] italic">food house</h2>
                
                
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-16 my-8 text-[20px]">
                    <a className="text-[#FFC624]" href="#">HOME</a>
                    <a href="#">RESTAURANT</a>
                    <a href="#">SERVICES</a>
                    <a href="#">CART</a>
                </div>
                <p className="hidden md:block my-8 text-[20px]"><a href="#">Sign In</a></p>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center gap-4 py-4 bg-white shadow-lg">
                        <a className="text-[#FFC624]" href="#">HOME</a>
                        <a href="#">RESTAURANT</a>
                        <a href="#">SERVICES</a>
                        <a href="#">CART</a>
                        <p><a href="#">Sign In</a></p>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Navbar;
