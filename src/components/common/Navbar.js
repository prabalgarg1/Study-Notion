import React, { useEffect, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { NavbarLinks } from "../../data/navbar-links";
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import logo from "../../assets/Logo/Logo-Full-Light.png";



{/*import React, { useEffect } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { useState } from 'react'
import {IoIosArrowDown} from "react-icons/io"
import {RxHamburgerMenu} from "react-icons/rx"
import './loader.css'*/}
// Ḍemo temporary data
//const subLinks = [
   // {
  //      title: "Python",
 //      link:"/catalog/python"
 //   },
  // {         title: "Web Dev",
  //       link:"/catalog/web-development"
  //  },
// ];


const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      if (Array.isArray(result?.data?.data)) {
        setSubLinks(result.data.data);
      } else {
        console.error("subLinks data is not an array:", result?.data?.data);
        setSubLinks([]);
      }
    } catch (error) {
      console.log("Could not fetch the category list");
    }
  };

  useEffect(() => {
  setSubLinks([
    { name: "Python" },
    { name: "Web Development" },
    { name: "Data Science" },
    { name: "Machine Learning" },
    { name: "DevOps" },
    
    { name: "DSA" },
    { name: "Data Science" },
    { name: "App Development" },
  ]);
}, []);


  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between relative'>
        {/* Logo */}
        <Link to="/">
          <img src={logo} width={160} height={42} loading='lazy' />
        </Link>

        {/* Desktop Nav Links */}
        <nav className='hidden md:flex gap-x-6 text-richblack-25'>
          {NavbarLinks.map((link, index) => (
            <li key={index} className='list-none'>
              {link.title === "Catalog" ? (
                <div className='relative flex items-center gap-2 group'>
                  <p>{link.title}</p>
                  <IoIosArrowDown />
                  <div className={`invisible absolute left-[50%] 
                      translate-x-[-49%] ${subLinks.length ? "translate-y-[15%]" : "translate-y-[40%]"}
                      top-[50%] z-50 flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                      opacity-0 transition-all duration-200 group-hover:visible
                      group-hover:opacity-100 lg:w-[300px]`}>
                    <div className='absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5' />
                    {subLinks.length ? (
                      subLinks.map((subLink, idx) => (
                        <Link to={`catalog/${subLink.name}`} key={idx}
                          className='rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50'>
                          <p>{subLink.name}</p>
                        </Link>
                      ))
                    ) : (
                      <span className="loader"></span>
                    )}
                  </div>
                </div>
              ) : (
                <Link to={link?.path}>
                  <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                    {link.title}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </nav>

        {/* Right Side Buttons (Desktop) */}
        <div className='hidden md:flex gap-x-4 items-center'>
          {user && user?.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className='relative pr-2'>
              <AiOutlineShoppingCart className='text-2xl text-richblack-100' />
              {totalItems > 0 && (
                <span className='absolute -bottom-2 -right-0 grid h-5 w-5 place-items-center rounded-full bg-richblack-600 text-xs font-bold text-yellow-100'>
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {!token && (
            <>
              <Link to="/login">
                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                  Sign Up
                </button>
              </Link>
            </>
          )}
          {token && <ProfileDropDown />}
        </div>

        {/* Hamburger Icon */}
        <div className='md:hidden text-[#AFB2BF] scale-150 cursor-pointer' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='absolute top-14 left-0 w-full bg-richblack-800 text-white p-4 z-50 flex flex-col gap-4 md:hidden'>
            {NavbarLinks.map((link, index) => (
              <div key={index}>
                 {link.title === "Catalog" ? (
                  <div>
                    <p className='mb-2 text-richblack-25'>{link.title}</p>
                    <div className='flex flex-col pl-4'>
                      {subLinks.length ? subLinks.map((subLink, idx) => (
                        <Link to={`catalog/${subLink.name}`} key={idx}
                          className='py-2 hover:text-yellow-25' onClick={() => setMobileMenuOpen(false)}>
                          {subLink.name}
                        </Link>
                      )) : <span className="loader" />}
                    </div>
                  </div>
                ) :(
                  <Link to={link.path} onClick={() => setMobileMenuOpen(false)} className='py-2 block'>
                    <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                      {link.title}
                    </p>
                  </Link>
                )}
              </div>
            ))}

            <div className='mt-4 flex flex-col gap-2'>
              {user && user?.accountType !== "Instructor" && (
                <Link to="/dashboard/cart" onClick={() => setMobileMenuOpen(false)} className='flex items-center gap-2'>
                  <AiOutlineShoppingCart className='text-xl' /> Cart ({totalItems})
                </Link>
              )}
              {!token && (
                <>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <button className='w-full border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                      Log in
                    </button>
                  </Link>
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <button className='w-full border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
              {token && <ProfileDropDown />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


