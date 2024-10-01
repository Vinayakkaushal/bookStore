import React, { useEffect } from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ThemeController from './ThemeController';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useAuth } from '../context/AuthProvider';
import Logot from '../Logot';
function NavBar() {
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser)



    const [sticky , setsticky]= useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setsticky(true);
            } else {
                setsticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    } , [])
    
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (itemName) => {
      setActiveItem(itemName);
    };
  
    const navItems = (
        <>
          <li
            onClick={() => handleItemClick('home')}
            className={`${
              activeItem === 'home'
                ? 'dark:bg-green-500 bg-blue-500 scale-105 dark:text-white text-black rounded-md'
                : ''
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => handleItemClick('course')}
            className={`${
              activeItem === 'course'
                ? 'dark:bg-green-500 bg-blue-500 scale-105 dark:text-white text-black rounded-md'
                : ''
            }`}
          >
            <Link to="/course">Course</Link>
          </li>
          <li
            onClick={() => handleItemClick('contact')}
            className={`${
              activeItem === 'contact'
                ? 'dark:bg-green-500 bg-blue-500 scale-105 dark:text-white text-black rounded-md'
                : ''
            }`}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            onClick={() => handleItemClick('about')}
            className={`${
              activeItem === 'about'
                ? 'dark:bg-green-500 bg-blue-500 scale-105 dark:text-white text-black rounded-md'
                : ''
            }`}
          >
            <Link to="/about">About</Link>
          </li>
        </>
      );
      

    return (
        <>
            {/* Keep only the navbar fixed, and add a height to avoid content overlap */}
            <div className={`fixed top-0 w-full bg-base-100 z-50 shadow-md dark:bg-slate-900 dark:text-white${sticky ? 'sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out ' : ''}`}> 
                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                    <div className="navbar ">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-slate-900 text-white">
                                    {navItems}
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl font-bold">My Book Store</a>
                        </div>
                        <div className="navbar-end space-x-3 flex items-center">
                            <div className="navbar-center hidden lg:flex">
                                <ul className="menu menu-horizontal px-1">
                                    {navItems}
                                </ul>
                            </div>
                            <SearchBar />
                            <ThemeController />

                            {
                              authUser ? <Logot /> :  <div>
                              <a className="bg-black text-white p-2 cursor-pointer px-3 py-2 rounded-md hover:bg-slate-800 duration-300"
                              onClick={() => document.getElementById('my_modal_3').showModal()}>
                              
                                  Login
                              </a>
                              
                              <Login />
                          </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Add padding to avoid content getting covered by the fixed navbar */}
            <div className='pt-20'>
                {/* Rest of the page content goes here */}
            </div>
        </>
    );
}

export default NavBar;
