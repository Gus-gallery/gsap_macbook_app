import React from 'react'
import { navLinks } from '../constants';

const NavBar = () => {
  return (
    <header>
        <nav className="container mx-auto flex-between px-5 2xl:px-0">
            <img src="/logo.svg" alt="Apple logo" />

            <ul className="flex-center gap-8">
                {navLinks.map(({ label }) => (
                    <li key={label}>
                        <a className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
                        href={label}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search"/>
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart"/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar