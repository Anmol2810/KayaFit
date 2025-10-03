"use client"

import Link from "next/link"
import { useState } from "react"
import type React from "react"
import logo from "@/app/assets/kayafitLogo.png"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    
    <>
      {/* Sticky hamburger icon with backdrop blur and border */}
      <div className="fixed top-5 right-6 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-black/[0.38] backdrop-blur-md p-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 mb-1 transition-all bg-white ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-5 h-0.5 transition-all bg-white ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 mt-1 transition-all bg-white ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>
      </div>

      {/* Non-sticky "menu" text */}
      <div className="absolute top-6 right-15 z-40">
        <span className="text-lg font-light text-white px-3">menu</span>
      </div>

      {/* Logo (not sticky) */}
      <div className="absolute top-2 left-5 z-40">
        <Link href="/">
          <Image src={logo} alt="KayaFit" width={60} height={30}/>
        </Link>
      </div>

      {/* Fullscreen transparent blur menu */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-lg z-30 flex flex-col justify-center items-center transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="text-center">
          <ul className="space-y-6">
            <li>
              <Link 
                href="/" 
                className="text-4xl font-light text-white hover:text-[#00C05A] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/program" 
                className="text-4xl font-light text-white hover:text-[#00C05A] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Program
              </Link>
            </li>
            <li>
              <Link 
                href="/success-stories" 
                className="text-4xl font-light text-white hover:text-[#00C05A] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </Link>
            </li>
            <li>
              <Link 
                href="/resource" 
                className="text-4xl font-light text-white hover:text-[#00C05A] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Resource
              </Link>
            </li>
            <li className="pt-8">
              <Link 
                href="/join" 
                className="text-2xl font-medium px-8 py-3 bg-[#00C05A] text-white rounded-lg hover:bg-[#00A04A] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Join
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar