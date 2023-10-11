"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { BsCart4, BsGlobe } from 'react-icons/bs';


function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className=" flex items-center justify-between py-2 md:py-6 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-black font-bold ">SHEYDONA</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                 <div>
                {navbar ? (
                  <FaTimes size={30} />
                  ) : (
                <FaBars size={30} />
                )}
                </div>
  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-8 ${
                navbar ? 'p-12 md:p-3 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-md sm:text-sm text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-md sm:text-sm  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Categories
                  </Link>
                </li>
                <li className="pb-6 text-md sm:text-sm text-black py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact Us
                  </Link>
                </li>
                <li className=" md:hidden pb-6 text-md text-black py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Cart
                  </Link>
                </li>
                <li className="md:hidden pb-6 text-md sm:text-sm text-black py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Language
                    <select>
                        <option value="English">En</option>
                        <option value="spanish">sp</option>
                    </select>
                  </Link>
                </li>
                < li className="hidden md:flex items-center pb-6 text-md text-black py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent"> <BsCart4   />
                </li> {/* Add the icon here */}
                < li className="hidden md:flex items-center pb-6 text-md text-black py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent"> <BsGlobe  />
                </li> {/* Add the icon here */}
               
                
                <li>   
                <select
                  className="hidden md:flex items-center pb-6 text-md text-black py-2 px-6 text-center  border-b-2 md:border-b-0 md:hover:bg-transparent"
                  name="language"
                  id="language"
                  >
                  <option value="English">En</option>
                  <option value="spanish">sp</option>
                </select>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;